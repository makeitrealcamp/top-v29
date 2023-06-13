import { Router } from 'express';

import {
  createReviewHandler,
  deleteReviewByIdHandler,
  getAllReviewsHandler,
  getReviewByIdHandler,
  updateReviewByIdHandler,
} from './review.controller';

const router = Router();

router.post('/', createReviewHandler);
router.get('/', getAllReviewsHandler);
router.get('/:id', getReviewByIdHandler);
router.patch('/:id', updateReviewByIdHandler);
router.delete('/:id', deleteReviewByIdHandler);

export default router;
