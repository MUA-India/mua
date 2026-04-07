import { AuthCard, EmailVerificationForm } from "@/components/auth";
import { Suspense } from "react";

export default function VerifyEmailPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <AuthCard
        title="Verify your email"
        description="Please enter the verification code sent to your email"
      >
        <Suspense fallback={<div>Loading...</div>}>
          <EmailVerificationForm />
        </Suspense>
      </AuthCard>
    </div>
  );
}
