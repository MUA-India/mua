import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <div className="bg-card p-6 rounded-lg border">
        <div className="space-y-4">
          <div>
            <span className="font-semibold">Name:</span> {session.user.name}
          </div>
          <div>
            <span className="font-semibold">Email:</span> {session.user.email}
          </div>
          <div>
            <span className="font-semibold">Roles:</span> {session.user.roles?.join(", ") || "No roles"}
          </div>
          <div>
            <span className="font-semibold">Permissions:</span> {session.user.permissions?.join(", ") || "No permissions"}
          </div>
        </div>
      </div>
    </div>
  );
}
