import { Router } from "express";
import SectionController from "../controllers/sections.controller.js";
import { createSectionValidator,updateSectionValidator } from "../validators/sectionsValidator.js";

const router = Router();
router.get("/",  SectionController.getAllSections );
router.get("/:id",  SectionController.getSectionById );
router.put("/:id", updateSectionValidator,  SectionController.updateSectionById );
router.post("/", createSectionValidator, SectionController.createSection );

export default router;