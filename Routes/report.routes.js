
// routes/report.routes.js
import express from 'express';
import { generateReport } from '../Controller/report.controller.js';

const router = express.Router();

router.get('/', generateReport);

export default router;

