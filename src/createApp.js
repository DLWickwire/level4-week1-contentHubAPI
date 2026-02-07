import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
// Routes
import { postsRouter } from './routes/post.routes.js'; // named export
// Middleware
import { errorHandler } from './middleware/errorHandler.js'; // named export

export function createApp({ repos }) {
  const app = express();

  app.use(express.json());
  app.use(helmet());
  app.use(morgan('dev'));

  app.get('/health', (_req, res) => {
    res.json({ status: 'ok', message: 'app is running correctly' });
  });

  app.use((_req, res, next) => {
    res.locals.repos = repos;
    next();
  });

  app.use('/posts', postsRouter);
  app.use(errorHandler);

  return app;
}
