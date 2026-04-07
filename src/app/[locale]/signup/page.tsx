import { AuthCard, SignupForm } from "@/components/auth";

export default function SignupPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <AuthCard title="Create an account" description="Enter your details to get started">
        <SignupForm />
      </AuthCard>
    </div>
  );
}
