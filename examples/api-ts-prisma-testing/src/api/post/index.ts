import { Router } from 'express';

import {
  createPostHandler,
  deletePostByIdHandler,
  getAllPostsHandler,
  getPostByIdHandler,
  updatePostByIdHandler,
} from './post.controller';

const router = Router();

router.post('/', createPostHandler);
router.get('/', getAllPostsHandler);
router.get('/:id', getPostByIdHandler);
router.patch('/:id', updatePostByIdHandler);
router.delete('/:id', deletePostByIdHandler);

export default router;
