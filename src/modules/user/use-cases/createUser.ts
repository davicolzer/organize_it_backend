import { PrismaClient, User, Prisma } from "@prisma/client";
const prisma = new PrismaClient()

export async function create (data: Prisma.UserCreateInput) {
  return prisma.user.create({
    data
  })
}