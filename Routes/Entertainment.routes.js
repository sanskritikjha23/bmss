import express from "express";
import {body} from "express-validator";
import { createEntertainmentBudget, delEntertainmentBudget, getEntertainmentBudget, updateEntertainmentBudget } from "../Controller/Entertainment.controller.js";

const router = express.Router();
router.get("/get-entertainment/:id", getEntertainmentBudget);
router.delete("/del-entertainment",delEntertainmentBudget);
router.put("/update-entertainment/:id",updateEntertainmentBudget);
router.post("/create-entertainment",createEntertainmentBudget);

export default router;