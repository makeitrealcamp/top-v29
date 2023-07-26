import { Router } from 'express';

const router = Router();

// GET /api/helloworld
router.get('/', (req, res) => {
  res.json({ message: 'Your server is Running!!' });
});

export default router;
