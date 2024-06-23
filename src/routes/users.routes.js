import { Router } from "express";
import UserController from "../controllers/users.controller.js";
import { createUserValidator,updateUserValidator } from "../validators/usersValidator.js";

const router = Router();
router.get("/",  UserController.getAllUsers );
router.get("/:id",  UserController.getUserById );
router.put("/:id", updateUserValidator,  UserController.updateUserById );
router.post("/", createUserValidator, UserController.createUser );

export default router;