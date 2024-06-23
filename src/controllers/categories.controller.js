import { validationResult } from "express-validator";
import Categories from "../models/categories.model.js";
import Create from "../basicFunctions/create.js";
import Update from "../basicFunctions/update.js";
import Read from "../basicFunctions/read.js";

const select = {
	id: true,
	title: true,
	active: true,
};

export default class CategoryController {
	static async getAllCategories(req, res) {
		// Retorna todos as categorias
		try {
			const categories = await Read.getAll(Categories, select);
			if (!categories) {
				return res.status(404).json({ message: "Categories not found." });
			}
			res.status(200).json(categories);
		} catch (error) {
			console.log(error);
			res.status(500).send({ message: error.message });
		}
	}
	static async getCategoryById(req, res) {
		// Retorna uma categoria pelo id
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ errors: errors.array() });
			}
			const categories = await Read.getById(parseInt(req.params.id), Categories, select);
			if (!categories) {
				return res.status(404).json({ message: "Category not found." });
			}
			res.status(302).json(categories);
		} catch (error) {
			console.log(error);
			res.status(500).send({ message: error.message });
		}
	}
	static async createCategory(req, res) {
		// Cria uma nova categoria
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ errors: errors.array() });
			}
			const categories = await Create.createOne(req.body, Categories, select);
			res.status(201).json(categories);
		} catch (error) {
			console.log(error);
			res.status(500).send({ message: error.message });
		}
	}
	static async updateCategoryById(req, res) {
		// Atualiza uma categoria pelo id
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ errors: errors.array() });
			}
			const categories = await Update.updateOneById(parseInt(req.params.id), Categories, req.body);
			if (!categories) {
				return res.status(404).json({ message: "Category not found." });
			}
			res.status(200).json(categories);
		} catch (error) {
			console.log(error);
			res.status(500).send({ message: error.message });
		}
	}
}
