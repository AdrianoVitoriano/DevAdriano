import { validationResult } from "express-validator";
import Comments from "../models/comments.model.js";
import Read from "../basicFunctions/read.js";
import Create from "../basicFunctions/create.js";
import Update from "../basicFunctions/update.js";
const select = {
	id: true,
	authorId: true,
	content: true,
	postId: true,
};
export default class CommentController {
	static async getAllCommentsByPostId(req, res) {
		// Retorna todos os comentários de um post
		try {
			const comments = await Read.getAllWhere(
				{ postId: parseInt(req.params.postId), deleted: false },
				Comments,
				select
			);
			if (!comments) {
				return res.status(404).json({ message: "Comments not found." });
			}
			res.status(200).json(comments);
		} catch (error) {
			console.log(error);
			res.status(500).send({ message: error.message });
		}
	}
	static async getCommentById(req, res) {
		// Retorna um comentário pelo id
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ errors: errors.array() });
			}
			const comments = await Read.getById(parseInt(req.params.id), Comments, select);
			if (!comments) {
				return res.status(404).json({ message: "Comment not found." });
			}
			res.status(302).json(comments);
		} catch (error) {
			console.log(error);
			res.status(500).send({ message: error.message });
		}
	}
	static async createCommentByPostId(req, res) {
		// Cria um novo comentário
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ errors: errors.array() });
			}
			req.body.postId = parseInt(req.params.postId);
			const comments = await Create.createOne(req.body, Comments, select);
			res.status(201).json(comments);
		} catch (error) {
			console.log(error);
			res.status(500).send({ message: error.message });
		}
	}
	static async updateCommentById(req, res) {
		// Atualiza um comentário pelo id
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ errors: errors.array() });
			}
			const comments = await Update.updateOneById(parseInt(req.params.id), Comments, req.body);
			if (!comments) {
				return res.status(404).json({ message: "Comment not found." });
			}
			res.status(200).json(comments);
		} catch (error) {
			console.log(error);
			res.status(500).send({ message: error.message });
		}
	}
}
