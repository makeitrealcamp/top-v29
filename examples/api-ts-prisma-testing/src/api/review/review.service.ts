import { PrismaClient } from '@prisma/client';

import { ReviewType } from './review.type';

const prisma = new PrismaClient();

export async function getAllReviews() {
  const reviews = await prisma.review.findMany();

  return reviews;
}

export async function getReviewById(id: string) {
  const review = await prisma.review.findUnique({
    where: {
      id,
    },
  });

  return review;
}

export async function createReview(data: ReviewType) {
  const review = await prisma.review.create({
    data,
  });

  return review;
}

export async function updateReview(id: string, data: ReviewType) {
  const review = await prisma.review.update({
    where: {
      id,
    },
    data,
  });

  return review;
}

export async function deleteReview(id: string) {
  const review = await prisma.review.delete({
    where: {
      id,
    },
  });

  return review;
}

export async function getreviewReviews(id: string) {
  const reviews = await prisma.review.findMany({
    where: {
      postId: id,
    },
  });

  return reviews;
}
