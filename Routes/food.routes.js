import express from "express";
import {body} from "express-validator";
import { createFoodBudget, delFoodBudget, getFoodBudget, updateFoodBudget } from "../Controller/food.controller.js";

const router = express.Router();

router.get("/get-food-budget/:id", getFoodBudget);
router.delete("/del-food-budget/:id", delFoodBudget);
router.put("/update-food-budget/:id", updateFoodBudget);
router.post("/create-food-budget",createFoodBudget);

export default router;