"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

export default function AuthErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  let errorMessage = "An unexpected error occurred during authentication.";
  if (error === "Configuration") {
    errorMessage = "There is a problem with the server configuration.";
  } else if (error === "AccessDenied") {
    errorMessage = "Access has been denied.";
  } else if (error === "Verification") {
    errorMessage = "The verification token has expired or has already been used.";
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-destructive">
            Authentication Error
          </CardTitle>
          <CardDescription>We encountered a problem while signing you in.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{errorMessage}</p>
          {error && (
            <p className="mt-2 font-mono text-xs text-muted-foreground">Error code: {error}</p>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button asChild variant="outline">
            <Link href="/login">Back to Login</Link>
          </Button>
          <Button asChild>
            <Link href="/">Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
