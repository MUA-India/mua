"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { sendOtp } from "@/actions/auth";

const phoneSchema = z.object({
  phone: z.string().min(10, "Phone number must be at least 10 digits")
});

const otpSchema = z.object({
  otp: z.string().length(6, "OTP must be 6 digits")
});

export function OtpForm() {
  const router = useRouter();
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");

  const phoneForm = useForm<z.infer<typeof phoneSchema>>({
    resolver: zodResolver(phoneSchema),
    defaultValues: { phone: "" }
  });

  const otpForm = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
    defaultValues: { otp: "" }
  });

  async function onSendOtp(values: z.infer<typeof phoneSchema>) {
    try {
      await sendOtp(values);
      setPhone(values.phone);
      setStep("otp");
      toast.success("OTP sent to your phone");
    } catch {
      toast.error("Failed to send OTP");
    }
  }

  async function onVerifyOtp(values: z.infer<typeof otpSchema>) {
    try {
      const result = await signIn("phone-otp", {
        phone,
        otp: values.otp,
        redirect: false
      });

      if (result?.error) {
        toast.error("Invalid or expired OTP");
        return;
      }

      toast.success("Logged in successfully");
      router.push("/");
      router.refresh();
    } catch {
      toast.error("Something went wrong");
    }
  }

  if (step === "phone") {
    return (
      <Form {...phoneForm}>
        <form onSubmit={phoneForm.handleSubmit(onSendOtp)} className="space-y-4">
          <FormField
            control={phoneForm.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="+91 9999999999" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={phoneForm.formState.isSubmitting}>
            {phoneForm.formState.isSubmitting ? "Sending OTP..." : "Send OTP"}
          </Button>
        </form>
      </Form>
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">OTP sent to {phone}</p>
      <Form {...otpForm}>
        <form onSubmit={otpForm.handleSubmit(onVerifyOtp)} className="space-y-4">
          <FormField
            control={otpForm.control}
            name="otp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter 6-digit OTP</FormLabel>
                <FormControl>
                  <Input placeholder="000000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={otpForm.formState.isSubmitting}>
            {otpForm.formState.isSubmitting ? "Verifying..." : "Verify OTP"}
          </Button>
          <Button variant="ghost" className="w-full" onClick={() => setStep("phone")}>
            Change Phone Number
          </Button>
        </form>
      </Form>
    </div>
  );
}
