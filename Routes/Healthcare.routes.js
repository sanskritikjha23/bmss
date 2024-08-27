import express from "express";
import {body}  from "express-validator";
import { createHealthCareBudget, delHealthCareBudget, getHealthCareBudget, updateHealthCareBudget } from "../Controller/HealthCare.controller.js";
const router = express.Router();
router.get("/get-Healthcare/:id",getHealthCareBudget);
router.delete("/del-Healthcare", delHealthCareBudget);
router.put("/update-Healthcare/:id",updateHealthCareBudget);
router.post("/create-Healthcare",createHealthCareBudget);

export default router;