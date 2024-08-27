import express from 'express';
import { createcateBudget, delcateBudget, getcateBudget, updatecateBudget } from '../Controller/category.controller.js';
import { body } from 'express-validator';

const router = express.Router();

router.post("/create-category", createcateBudget);
router.get("/get-category/:id", getcateBudget);
router.put("/update-category/:id", updatecateBudget);
router.delete("/del-category/:id", delcateBudget);

export default router;