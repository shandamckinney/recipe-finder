import express from "express";

import {
  getRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  getRecipeById,
} from "../controllers/recipes.js";

const router = express.Router();

router.get("/", getRecipes);
router.get("/:id", getRecipeById);
router.post("/", createRecipe);
router.patch("/:id", updateRecipe);
router.delete("/:id", deleteRecipe);

export default router;
