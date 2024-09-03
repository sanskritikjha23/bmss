import { generateCSV, generatePDF } from './report.utils.js'; // Assuming these are defined elsewhere
import path from 'path';

export const downloadReport = async (req, res) => {
  try {
    const { format } = req.query;
    const expenses = [/* your expense data */];

    if (format === 'csv') {
      const csv = generateCSV(expenses);
      res.attachment('report.csv');
      res.send(csv);
    } else if (format === 'pdf') {
      const pdfPath = path.join(__dirname, 'report.pdf'); // Ensure path is correct
      generatePDF(expenses, pdfPath);
      res.download(pdfPath);
    } else {
      res.status(400).send('Invalid format');
    }
  } catch (error) {
    console.error('Error downloading report:', error);
    res.status(500).send('Failed to download report');
  }
};
