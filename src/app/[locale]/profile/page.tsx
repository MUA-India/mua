import { redirect } from "next/navigation";

import { getServerSession } from "next-auth/next";

import { authOptions } from "@/lib/auth";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="container py-10">
      <h1 className="mb-6 text-3xl font-bold">Profile</h1>
      <div className="rounded-lg border bg-card p-6">
        <div className="space-y-4">
          <div>
            <span className="font-semibold">Name:</span> {session.user.name}
          </div>
          <div>
            <span className="font-semibold">Email:</span> {session.user.email}
          </div>
          <div>
            <span className="font-semibold">Roles:</span>{" "}
            {session.user.roles?.join(", ") || "No roles"}
          </div>
          <div>
            <span className="font-semibold">Permissions:</span>{" "}
            {session.user.permissions?.join(", ") || "No permissions"}
          </div>
        </div>
      </div>
    </div>
  );
}
