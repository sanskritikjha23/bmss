import express from 'express';
import { createcateBudget, delcateBudget, getcateBudget, updatecateBudget } from '../Controller/category.controller.js';
import { body } from 'express-validator';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.post("/create-category", verifyToken,createcateBudget);
router.get("/get-category/:categoryName",verifyToken, getcateBudget);
router.put("/update-category/:categoryName",verifyToken, updatecateBudget);
router.delete("/del-category",verifyToken, delcateBudget);

export default router;