import { PrismaAdapter } from "@auth/prisma-adapter";
import { compare } from "bcrypt";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import { env } from "@/env";

import { prisma } from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/login",
    error: "/auth/error"
  },
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET
    }),
    CredentialsProvider({
      id: "email-password",
      name: "Email and Password",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        });

        if (!user || !user.password) {
          throw new Error("Invalid credentials");
        }

        const isPasswordValid = await compare(credentials.password, user.password);

        if (!isPasswordValid) {
          throw new Error("Invalid credentials");
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image
        };
      }
    }),
    CredentialsProvider({
      id: "phone-otp",
      name: "Phone OTP",
      credentials: {
        phone: { label: "Phone", type: "text" },
        otp: { label: "OTP", type: "text" }
      },
      async authorize(credentials) {
        if (!credentials?.phone || !credentials?.otp) {
          throw new Error("Invalid credentials");
        }

        const otpVerification = await prisma.otpVerification.findFirst({
          where: {
            phone: credentials.phone,
            otp: credentials.otp,
            expiresAt: { gt: new Date() }
          }
        });

        if (!otpVerification) {
          throw new Error("Invalid or expired OTP");
        }

        // Delete the OTP after use
        await prisma.otpVerification.delete({
          where: { id: otpVerification.id }
        });

        let user = await prisma.user.findUnique({
          where: { phone: credentials.phone }
        });

        if (!user) {
          // Create new user if not exists (Auto-signup for OTP)
          user = await prisma.user.create({
            data: {
              phone: credentials.phone,
              phoneVerified: new Date()
            }
          });
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image
        };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        // Fetch roles for the user to ensure token has latest data
        try {
          const userRoles = await prisma.userRole.findMany({
            where: { userId: user.id },
            include: {
              role: {
                include: {
                  permissions: {
                    include: {
                      permission: true
                    }
                  }
                }
              }
            }
          });

          token.roles = userRoles.map((ur) => ur.role.name);
          token.permissions = userRoles.flatMap((ur) =>
            ur.role.permissions.map((rp) => rp.permission.name)
          );
        } catch (error) {
          console.error("Error fetching user roles in JWT callback:", error);
          token.roles = [];
          token.permissions = [];
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.roles = (token.roles as string[]) || [];
        session.user.permissions = (token.permissions as string[]) || [];
      }
      return session;
    }
  }
};
