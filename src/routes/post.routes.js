import { Router } from 'express';
import { createPost, listPosts, getPost } from '../controllers/posts.controllers.js';
import { listCommentsForPost, createCommentForPost } from '../controllers/comments.controller.js';

export const postsRouter = Router();

postsRouter.get('/', listPosts);
postsRouter.post('/', createPost);
postsRouter.get('/:id', getPost);

postsRouter.get('/:postId/comments', listCommentsForPost);
postsRouter.get('/:postId/comments', createCommentForPost);
