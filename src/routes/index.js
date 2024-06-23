import { Router } from "express";
import userRoutes from "./users.routes.js";
import categoriesRoutes from "./categories.routes.js";
import postsRoutes from "./posts.routes.js";
import commentsRoutes from "./comments.routes.js";
import sectionsRoutes from "./sections.routes.js";

const router = Router();
router.get("/", (req, res) => {
  res.send("Welcome to the Blog API!");
});
router.use("/users", userRoutes);
router.use("/categories", categoriesRoutes);
router.use("/posts", postsRoutes);
router.use("/comments", commentsRoutes);
router.use("/sections", sectionsRoutes);

export default router;