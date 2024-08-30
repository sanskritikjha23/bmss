import express from 'express';
import { createcateBudget, delcateBudget, getcateBudget, updatecateBudget } from '../Controller/category.controller.js';
import { body } from 'express-validator';

const router = express.Router();

router.post("/create-category", createcateBudget);
router.get("/get-category/:categoryName", getcateBudget);
router.put("/update-category", updatecateBudget);
router.delete("/del-category", delcateBudget);

export default router;