import express from 'express';
import { generateReport } from '../Controller/report.controller.js';

const router = express.Router();

router.get('/generate-report', generateReport); // Define the route and link it to the controller function

export default router;
