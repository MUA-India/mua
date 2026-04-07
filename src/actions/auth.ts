"use server";

import { hash } from "bcrypt";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { resend } from "@/lib/resend";

const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(2),
  role: z.enum(["USER", "ARTIST"]).default("USER"),
});

export async function signup(data: z.infer<typeof signupSchema>) {
  const validatedData = signupSchema.parse(data);

  const existingUser = await prisma.user.findUnique({
    where: { email: validatedData.email },
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await hash(validatedData.password, 12);

  // Use a transaction to ensure user and role are created together
  await prisma.$transaction(async (tx) => {
    const newUser = await tx.user.create({
      data: {
        email: validatedData.email,
        password: hashedPassword,
        name: validatedData.name,
      },
    });

    const role = await tx.role.findUnique({
      where: { name: validatedData.role },
    });

    if (role) {
      await tx.userRole.create({
        data: {
          userId: newUser.id,
          roleId: role.id,
        },
      });
    }
  });

  // Generate OTP for email verification
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

  await prisma.otpVerification.create({
    data: {
      phone: validatedData.email, // Using phone field to store email for OTP verification
      otp,
      expiresAt,
    },
  });

  // Send verification email
  try {
    await resend.emails.send({
      from: "MUA Platform <team@mua.co.in>",
      to: validatedData.email,
      subject: "Verify your email - MUA Platform",
      html: `<p>Welcome to MUA Platform, ${validatedData.name}!</p>
             <p>Your verification code is: <strong>${otp}</strong></p>
             <p>This code will expire in 10 minutes.</p>`,
    });
  } catch (error) {
    console.error("Failed to send verification email:", error);
  }

  return { success: true, email: validatedData.email };
}

const sendOtpSchema = z.object({
  phone: z.string().min(10),
});

export async function sendOtp(data: z.infer<typeof sendOtpSchema>) {
  const { phone } = sendOtpSchema.parse(data);

  // Generate a 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes

  await prisma.otpVerification.create({
    data: {
      phone,
      otp,
      expiresAt,
    },
  });

  // TODO: Send OTP via SMS service (e.g., Twilio, AWS SNS)
  console.log(`Sending OTP ${otp} to phone ${phone}`);

  return { success: true };
}

const verifyEmailOtpSchema = z.object({
  email: z.string().email(),
  otp: z.string().length(6),
});

export async function verifyEmailOtp(data: z.infer<typeof verifyEmailOtpSchema>) {
  const { email, otp } = verifyEmailOtpSchema.parse(data);

  const verification = await prisma.otpVerification.findFirst({
    where: {
      phone: email,
      otp,
      expiresAt: { gt: new Date() },
    },
  });

  if (!verification) {
    throw new Error("Invalid or expired verification code");
  }

  // Update user email verification status
  await prisma.user.update({
    where: { email },
    data: { emailVerified: new Date() },
  });

  // Delete the verification record
  await prisma.otpVerification.delete({
    where: { id: verification.id },
  });

  return { success: true };
}
