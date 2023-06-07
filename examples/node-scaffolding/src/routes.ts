/**
 * Main application routes
 */
import { Application } from 'express';

import postRouter from './api/post';
import reviewRouter from './api/review';
import userRouter from './api/user';

function routes(app: Application) {
  app.use('/api/posts', postRouter);
  app.use('/api/reviews', reviewRouter);
  app.use('/api/users', userRouter);
}

export default routes;
