import { Request, Response, NextFunction } from 'express';

import {
  createPost,
  deletePost,
  getAllPosts,
  getPostById,
  updatePost,
} from './post.service';

export async function createPostHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data = req.body;

  try {
    const post = await createPost(data);

    return res.json(post);
  } catch (error) {
    return next(error);
  }
}

export async function getAllPostsHandler(req: Request, res: Response) {
  const posts = await getAllPosts();

  return res.json(posts);
}

export async function getPostByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;

  try {
    const post = await getPostById(id);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    return res.json(post);
  } catch (error) {
    return next(error);
  }
}

export async function updatePostByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const data = req.body;

  try {
    const post = await updatePost(id, data);

    return res.json(post);
  } catch (error) {
    return next(error);
  }
}

export async function deletePostByIdHandler(req: Request, res: Response) {
  const { id } = req.params;

  await deletePost(id);

  return res.status(204).end();
}
