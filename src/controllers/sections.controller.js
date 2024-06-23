import { validationResult } from "express-validator";
import Sections from "../models/sections.model.js";
import Read from "../basicFunctions/read.js";
import Create from "../basicFunctions/create.js";
import Update from "../basicFunctions/update.js";

const select = {
	id: true,
	title: true,
};

export default class SectionController {
	static async getAllSections(req, res) {
		// Retorna todas as seções ativas
		try {
			const sections = await Read.getAllWhere({ active: true }, Sections, select);
			if (!sections) {
				return res.status(404).json({ message: "Sections not found." });
			}
			res.status(200).json(sections);
		} catch (error) {
			console.log(error);
			res.status(500).send({ message: error.message });
		}
	}
	static async getSectionById(req, res) {
		// Retorna uma seção pelo id
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ errors: errors.array() });
			}
			const sections = await Read.getById(parseInt(req.params.id), Sections, select);
			if (!sections) {
				return res.status(404).json({ message: "Section not found." });
			}
			res.status(302).json(sections);
		} catch (error) {
			console.log(error);
			res.status(500).send({ message: error.message });
		}
	}
	static async createSection(req, res) {
		// Cria uma nova seção
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ errors: errors.array() });
			}
			const sections = await Create.createOne(req.body, Sections, select);
			res.status(201).json(sections);
		} catch (error) {
			console.log(error);
			res.status(500).send({ message: error.message });
		}
	}
	static async updateSectionById(req, res) {
		// 	Atualiza uma seção pelo id
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ errors: errors.array() });
			}
			const sections = await Update.updateOneById(parseInt(req.params.id), Sections, req.body, select);
			if (!sections) {
				return res.status(404).json({ message: "Section not found." });
			}
			res.status(200).json(sections);
		} catch (error) {
			console.log(error);
			res.status(500).send({ message: error.message });
		}
	}
}
