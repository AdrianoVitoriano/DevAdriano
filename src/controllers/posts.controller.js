import { validationResult } from "express-validator";
import Posts from "../models/posts.model.js";
import Read from "../basicFunctions/read.js";
import Create from "../basicFunctions/create.js";
import Update from "../basicFunctions/update.js";

const select = {
	id: true,
	title: true,
	authorId: true,
	content: true,
	image: true,
	sectionId: true,
};

export default class PostController {
	static async getAllPosts(req, res) {
		// Retorna todos os posts publicados
		try {
			const posts = await Read.getAllWhere({ published: true }, Posts, select);
			if (!posts) {
				return res.status(404).json({ message: "Posts not found." });
			}
			res.status(200).json(posts);
		} catch (error) {
			console.log(error);
			res.status(500).send({ message: error.message });
		}
	}
	static async getPostById(req, res) {
		// Retorna um post pelo id
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ errors: errors.array() });
			}
			const posts = await Read.getById(parseInt(req.params.id),Posts,select)
			if (!posts) {
				return res.status(404).json({ message: "Post not found." });
			}
			res.status(302).json(posts);
		} catch (error) {
			console.log(error);
			res.status(500).send({ message: error.message });
		}
	}
	static async createPost(req, res) {
		// Cria um novo post
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ errors: errors.array() });
			}
			const posts = await Create.createOne(req.body,Posts,select)
			res.status(201).json(posts);
		} catch (error) {
			console.log(error);
			res.status(500).send({ message: error.message });
		}
	}
	static async updatePostById(req, res) {
		// Atualiza um post pelo id
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ errors: errors.array() });
			}
			const posts = await Update.updateOneById(parseInt(req.params.id),Posts,req.body,select)
			if (!posts) {
				return res.status(404).json({ message: "Post not found." });
			}
			res.status(200).json(posts);
		} catch (error) {
			console.log(error);
			res.status(500).send({ message: error.message });
		}
	}
}
