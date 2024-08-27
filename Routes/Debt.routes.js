import express from "express";
import { body } from "express-validator";
import { createDebtBudget, delDebtBudget, getDebtBudget, updateDebtBudget } from "../Controller/Debt.controller.js";


const router = express.Router();
router.get("/get-Debt/:id",getDebtBudget);
router.delete("/del-Debt",delDebtBudget);
router.put("/update-Debt/:id",updateDebtBudget);
router.post("/create-Debt",createDebtBudget);

export default router;