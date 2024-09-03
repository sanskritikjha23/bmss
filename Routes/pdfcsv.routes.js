import express from 'express';
import { downloadReport } from './expense.controller.js'; // Import the controller function

const router = express.Router();

// Other routes...

router.get('/expense/download-report', downloadReport); // Define the route and link it to the controller function

export default router;
