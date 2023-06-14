import { PrismaClient } from '@prisma/client';

import { PostType } from './post.type';

const prisma = new PrismaClient();

export async function getAllPosts() {
  const posts = await prisma.post.findMany();

  return posts;
}

export async function getPostById(id: string) {
  const post = await prisma.post.findUnique({
    where: {
      id,
    },
  });

  return post;
}

export async function createPost(data: PostType) {
  const post = await prisma.post.create({
    data,
  });

  return post;
}

export async function updatePost(id: string, data: PostType) {
  const post = await prisma.post.update({
    where: {
      id,
    },
    data,
  });

  return post;
}

export async function deletePost(id: string) {
  const post = await prisma.post.delete({
    where: {
      id,
    },
  });

  return post;
}
