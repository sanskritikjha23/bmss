import express from 'express';
import {
  generateReport,
  exportReportPDF,
  exportReportCSV
} from '../Controller/report.controller.js';

const router = express.Router();

// Generate a new report
router.post('/generate-report', generateReport);

// Export the report as PDF
router.get('/export-report/pdf/:reportId', exportReportPDF);

// Export the report as CSV
router.get('/export-report/csv/:reportId', exportReportCSV);

export default router;
