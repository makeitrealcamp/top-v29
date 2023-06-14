import { Request, Response, NextFunction } from 'express';

import {
  createReview,
  deleteReview,
  getAllReviews,
  getReviewById,
  getreviewReviews,
  updateReview,
} from './review.service';

export async function createReviewHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data = req.body;
    const review = await createReview(data);
    return res.status(201).json({ review });
  } catch (error) {
    next(error);
  }
}

export async function getAllReviewsHandler(req: Request, res: Response) {
  const reviews = await getAllReviews();

  return res.json({ reviews });
}

export async function getReviewByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const review = await getReviewById(id);

  if (!review) {
    return res.sendStatus(404);
  }

  return res.json({ review });
}

export async function updateReviewByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;

  const data = req.body;

  try {
    const review = await updateReview(id, data);

    return res.json({ review });
  } catch (error) {
    return next(error);
  }
}

export async function deleteReviewByIdHandler(req: Request, res: Response) {
  const { id } = req.params;

  await deleteReview(id);

  return res.status(204).end();
}
