import { Router } from 'express';

import {
  createUserHandler,
  deleteUserByIdHandler,
  getAllUsersHandler,
  getUserByIdHandler,
  updateUserByIdHandler,
} from './user.controller';

const router = Router();

router.post('/', createUserHandler);
router.get('/', getAllUsersHandler);
router.get('/:id', getUserByIdHandler);
router.patch('/:id', updateUserByIdHandler);
router.delete('/:id', deleteUserByIdHandler);

export default router;
