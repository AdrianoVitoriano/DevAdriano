import { Router } from "express";
import CommentController from "../controllers/comments.controller.js";
import { createCommentValidator, updateCommentValidator } from "../validators/commentsValidator.js";

const router = Router();
router.get("/:id", CommentController.getCommentById);
router.get("/post/:postId", CommentController.getAllCommentsByPostId);
router.put("/:id", updateCommentValidator, CommentController.updateCommentById);
router.post("/:postId", createCommentValidator, CommentController.createCommentByPostId);

export default router;
