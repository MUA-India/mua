import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  // Create Permissions
  const permissions = [
    { name: "VIEW_ARTISTS", description: "Can view artists" },
    { name: "BOOK_ARTIST", description: "Can book an artist" },
    { name: "MANAGE_SERVICES", description: "Can manage services" },
    { name: "MANAGE_BOOKINGS", description: "Can manage bookings" },
    { name: "ADMIN_ACCESS", description: "Full admin access" }
  ];

  for (const p of permissions) {
    await prisma.permission.upsert({
      where: { name: p.name },
      update: {},
      create: p
    });
  }

  // Create Roles
  const roles = [
    {
      name: "USER",
      description: "Regular user",
      permissions: ["VIEW_ARTISTS", "BOOK_ARTIST"]
    },
    {
      name: "ARTIST",
      description: "Professional makeup artist",
      permissions: ["VIEW_ARTISTS", "MANAGE_SERVICES", "MANAGE_BOOKINGS"]
    },
    {
      name: "ADMIN",
      description: "Platform administrator",
      permissions: [
        "VIEW_ARTISTS",
        "BOOK_ARTIST",
        "MANAGE_SERVICES",
        "MANAGE_BOOKINGS",
        "ADMIN_ACCESS"
      ]
    }
  ];

  for (const r of roles) {
    const role = await prisma.role.upsert({
      where: { name: r.name },
      update: {},
      create: {
        name: r.name,
        description: r.description
      }
    });

    for (const pName of r.permissions) {
      const permission = await prisma.permission.findUnique({ where: { name: pName } });
      if (permission) {
        await prisma.rolePermission.upsert({
          where: {
            roleId_permissionId: {
              roleId: role.id,
              permissionId: permission.id
            }
          },
          update: {},
          create: {
            roleId: role.id,
            permissionId: permission.id
          }
        });
      }
    }
  }

  console.log("Seeding completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
