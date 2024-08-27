import express from "express";
import { body } from "express-validator";
import { createStationaryBudget, delStationaryBudget, getStationaryBudget, updateStationaryBudget } from "../Controller/Stationary.controller.js";
const router = express.Router();
router.get("/get-Stationary/:id",getStationaryBudget);
router.delete("/del-Stationary",delStationaryBudget);
router.put("/update-Stationary",updateStationaryBudget);
router.post("/create-Stationary",createStationaryBudget);

export default router;