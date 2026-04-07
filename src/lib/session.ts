import { prisma } from "@/lib/prisma";
import { signAccessToken, signRefreshToken, verifyToken } from "@/lib/jwt";

export async function refreshAccessToken(refreshToken: string) {
  try {
    const payload = await verifyToken(refreshToken);
    const userId = payload.sub as string;

    const dbToken = await prisma.refreshToken.findUnique({
      where: { token: refreshToken, userId },
    });

    if (!dbToken || dbToken.expiresAt < new Date()) {
      throw new Error("Invalid or expired refresh token");
    }

    const newAccessToken = await signAccessToken({ sub: userId });
    return { accessToken: newAccessToken };
  } catch {
    throw new Error("Invalid or expired refresh token");
  }
}

export async function createSession(userId: string) {
  const accessToken = await signAccessToken({ sub: userId });
  const refreshToken = await signRefreshToken({ sub: userId });

  await prisma.refreshToken.create({
    data: {
      token: refreshToken,
      userId,
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
    },
  });

  return { accessToken, refreshToken };
}
