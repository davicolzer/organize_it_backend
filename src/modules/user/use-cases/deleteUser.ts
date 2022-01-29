import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export async function _delete (id: string) {
  return prisma.user.delete({
    where: {
      id
    }
  })
}