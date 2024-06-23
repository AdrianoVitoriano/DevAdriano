import { Router } from "express";
import PostController from "../controllers/posts.controller.js";
import { createPostValidator, updatePostValidator } from "../validators/postsValidator.js";

const router = Router();
router.get("/", PostController.getAllPosts);
router.get("/:id", PostController.getPostById);
router.put("/:id", updatePostValidator, PostController.updatePostById);
router.post("/", createPostValidator, PostController.createPost);

export default router;
