import { validationResult } from "express-validator";
import Users from "../models/users.model.js";
import encrypt from "../Encryption/encrypt.js";
import Read from "../basicFunctions/read.js";
import Create from "../basicFunctions/create.js";
import Update from "../basicFunctions/update.js";

const select = {
	id: true,
	firstName: true,
	lastName: true,
	email: true,
}

export default class UserController {
	static async getAllUsers(req, res) {
		// Retorna todos os usuários
		try {
			const user = await Read.getAll(Users, select);
			if (!user) {
				return res.status(404).json({ message: "Users not found." });
			}
			res.status(200).json(user);
		} catch (error) {
			console.log(error);
			res.status(500).send({ message: error.message });
		}
	}
	static async getUserById(req, res) {
		// Retorna um usuário pelo id
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ errors: errors.array() });
			}
			const user = await Read.getById(req.params.id, Users, select);
			if (!user) {
				return res.status(404).json({ message: "User not found." });
			}
			res.status(302).json(user);
		} catch (error) {
			console.log(error);
			res.status(500).send({ message: error.message });
		}
	}
	static async createUser(req, res) {
		// Cria um novo usuário
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ errors: errors.array() });
			}
			req.body.password = await encrypt(req.body.password);
			const user = await Create.createOne(req.body, Users, select);
			res.status(201).json(user);
		} catch (error) {
			console.log(error);
			res.status(500).send({ message: error.message });
		}
	}
	static async updateUserById(req, res) {
		// Atualiza um usuário pelo id
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ errors: errors.array() });
			}
			const user = await Update.updateOneById(req.params.id,Users,req.body, select)
			if (!user) {
				return res.status(404).json({ message: "User not found." });
			}
			res.status(200).json(user);
		} catch (error) {
			console.log(error);
			res.status(500).send({ message: error.message });
		}
	}
}
