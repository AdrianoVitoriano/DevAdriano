import { Router } from "express";
import CategoryController from "../controllers/categories.controller.js";
import { createCategoryValidator,updateCategoryValidator } from "../validators/categoriesValidator.js";

const router = Router();
router.get("/",  CategoryController.getAllCategories ); // Rota para listar todas as categorias
router.get("/:id",  CategoryController.getCategoryById );
router.put("/:id", updateCategoryValidator,  CategoryController.updateCategoryById );
router.post("/", createCategoryValidator, CategoryController.createCategory );

export default router;