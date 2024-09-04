// import { generateCSV, generatePDF } from '../utils/report.utils.js'; // Adjust path as needed
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// export const downloadReport = async (req, res) => {
//   try {
//     const { format } = req.query;
//     const expenses = [
//       { date: '2024-09-01', amount: 100 },
//       { date: '2024-09-02', amount: 150 },
//     ];

//     if (format === 'csv') {
//       const csv = generateCSV(expenses);
//       res.attachment('report.csv');
//       res.send(csv);
//     } else if (format === 'pdf') {
//       const pdfPath = path.join(__dirname, 'report.pdf'); // Ensure path is correct
//       generatePDF(expenses, pdfPath);
//       res.download(pdfPath);
//     } else {
//       res.status(400).send('Invalid format');
//     }
//   } catch (error) {
//     console.error('Error downloading report:', error);
//     res.status(500).send('Failed to download report');
//   }
// };
