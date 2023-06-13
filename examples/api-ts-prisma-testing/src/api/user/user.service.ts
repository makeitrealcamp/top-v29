import { PrismaClient } from '@prisma/client';

import { UserType } from './user.type';

const prisma = new PrismaClient();

export async function getAllUsers() {
  const users = await prisma.user.findMany();

  return users;
}

export async function getUserById(id: string) {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  return user;
}

export async function createUser(data: UserType) {
  const user = await prisma.user.create({
    data,
  });

  return user;
}

export async function updateUser(id: string, data: UserType) {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data,
  });

  return user;
}

export async function deleteUser(id: string) {
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });

  return user;
}
