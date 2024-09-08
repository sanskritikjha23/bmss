import express from 'express';
import { generateReport } from '../Controller/report.controller.js';

const router = express.Router();

router.get('/get-report', generateReport); // Define the route and link it to the controller function
router.post('/download-report', generateReport);

export default router;
