import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
// Routes
import { postsRouter } from './routes/post.routes.js'; // named export
// Middleware
import { errorHandler } from './middleware/errorHandler.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { respond } from '#middleware/respond';

export function createApp({ repos, config = {} }) {
  const app = express();

  app.locals.config = config;

  app.use(express.json());
  app.use(helmet());
  app.use(morgan('dev'));

  app.get('/health', (_req, res) => {
    res.json({ status: 'ok', message: 'app is running correctly' });
  });

  app.use(respond);

  app.use((_req, res, next) => {
    res.locals.repos = repos;
    next();
  });

  app.use('/posts', postsRouter);
  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
