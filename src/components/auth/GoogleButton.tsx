"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { GoogleIcon } from "@/components/icons";

export function GoogleButton() {
  return (
    <Button
      variant="outline"
      className="w-full"
      onClick={() => signIn("google", { callbackUrl: "/" })}
    >
      <GoogleIcon className="mr-2 h-4 w-4" />
      Continue with Google
    </Button>
  );
}
