import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export async function hasPermission(permissionName: string) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.permissions) return false;
  return session.user.permissions.includes(permissionName);
}

export async function hasRole(roleName: string) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.roles) return false;
  return session.user.roles.includes(roleName);
}

export function checkPermissions(userPermissions: string[], requiredPermissions: string[]) {
  return requiredPermissions.every((p) => userPermissions.includes(p));
}

export function checkRoles(userRoles: string[], requiredRoles: string[]) {
  return requiredRoles.some((r) => userRoles.includes(r));
}
