import { Router } from "express";
import { createPost, listPosts } from "../controllers/posts.controllers.js";

export const postsRouter = Router();

postsRouter.get("/", listPosts);
postsRouter.post("/", createPost);