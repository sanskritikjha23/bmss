import express from 'express';

const router = express.Router();

router.post("/create-category", createCategory);
router.get("/list", getCategorylist);
router.put("/:id", updateCategory);
router.delete("/:id", delCategory);

export default router;