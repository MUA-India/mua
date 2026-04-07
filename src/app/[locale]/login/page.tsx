import { AuthCard, LoginForm } from "@/components/auth";

export default function LoginPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <AuthCard title="Welcome back" description="Enter your email to sign in to your account">
        <LoginForm />
      </AuthCard>
    </div>
  );
}
