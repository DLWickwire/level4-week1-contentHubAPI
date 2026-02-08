import { Router } from 'express';
import { createPost, listPosts, getPost } from '../controllers/posts.controllers.js';

export const postsRouter = Router();

postsRouter.get('/', listPosts);
postsRouter.post('/', createPost);
postsRouter.get('/:id', getPost);