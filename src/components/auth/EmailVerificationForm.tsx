"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { verifyEmailOtp } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const verifyEmailSchema = z.object({
  otp: z.string().length(6, "OTP must be 6 digits"),
});

export function EmailVerificationForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const form = useForm<z.infer<typeof verifyEmailSchema>>({
    resolver: zodResolver(verifyEmailSchema),
    defaultValues: { otp: "" },
  });

  async function onSubmit(values: z.infer<typeof verifyEmailSchema>) {
    if (!email) {
      toast.error("Missing email address");
      return;
    }

    try {
      const result = await verifyEmailOtp({
        email,
        otp: values.otp,
      });

      if (result.success) {
        toast.success("Email verified successfully! You can now log in.");
        router.push("/login");
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : "Invalid verification code";
      toast.error(message);
    }
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">Verification code sent to {email}</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter 6-digit verification code</FormLabel>
                <FormControl>
                  <Input placeholder="000000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Verifying..." : "Verify Email"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
