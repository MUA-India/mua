import { AuthCard, OtpForm } from "@/components/auth";

export default function OtpLoginPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <AuthCard
        title="Login with Phone"
        description="Enter your phone number to receive an OTP"
      >
        <OtpForm />
      </AuthCard>
    </div>
  );
}
