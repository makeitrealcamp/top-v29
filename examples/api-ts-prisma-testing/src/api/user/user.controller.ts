import { Request, Response, NextFunction } from 'express';

import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from './user.service';

export async function createUserHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data = req.body;

  try {
    if (!data.email || !data.name) {
      return res
        .status(400)
        .json({ message: 'Missing required fields: email and name' });
    }
    const user = await createUser(data);

    return res.status(201).json(user);
  } catch (error) {
    console.log('🚀 ~ file: user.controller.ts:23 ~ error:', error);
    return next(error);
  }
}

export async function getAllUsersHandler(req: Request, res: Response) {
  const users = await getAllUsers();

  return res.json(users);
}

export async function getUserByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;

  try {
    const user = await getUserById(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json(user);
  } catch (error) {
    return next(error);
  }
}

export async function updateUserByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const data = req.body;

  try {
    const user = await getUserById(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const updatedUser = await updateUser(id, data);

    return res.json(updatedUser);
  } catch (error) {
    return next(error);
  }
}

export async function deleteUserByIdHandler(req: Request, res: Response) {
  const { id } = req.params;

  const user = await getUserById(id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  await deleteUser(id);

  return res.status(204).end();
}
