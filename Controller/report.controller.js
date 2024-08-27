import PDFDocument from 'pdfkit';
import fs from 'fs';
import { parse } from 'json2csv';
import Expense from '../Model/expense.model.js'; // Adjust the import according to your setup

// Generate a new report
export const generateReport = async (req, res) => {
  try {
    // Example: Generate a summary of expenses
    const expenses = await Expense.findAll(); // Adjust query as needed

    // Prepare data for the report
    const reportData = {
      totalExpenses: expenses.reduce((sum, expense) => sum + expense.amount, 0),
      expenseDetails: expenses
    };

    // Save report data to a temporary file or database as needed
    // Here we just return it in the response for simplicity
    res.status(200).json(reportData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to generate report' });
  }
};

// Export the report as PDF
export const exportReportPDF = async (req, res) => {
  const { reportId } = req.params; // Retrieve report ID if necessary

  try {
    // Generate PDF document
    const doc = new PDFDocument();
    const filename = `report-${reportId}.pdf`;
    const filePath = `./reports/${filename}`;

    doc.pipe(fs.createWriteStream(filePath));
    doc.fontSize(16).text('Expense Report', { align: 'center' });

    // Example data (replace with actual report data)
    const expenses = await Expense.findAll(); // Adjust query as needed
    expenses.forEach(expense => {
      doc.fontSize(12).text(`Description: ${expense.description}`);
      doc.text(`Amount: $${expense.amount}`);
      doc.text(`Date: ${new Date(expense.date).toDateString()}`);
      doc.moveDown();
    });

    doc.end();

    // Serve the file
    res.download(filePath, filename);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to export report as PDF' });
  }
};

// Export the report as CSV
export const exportReportCSV = async (req, res) => {
  const { reportId } = req.params; // Retrieve report ID if necessary

  try {
    // Fetch report data (example)
    const expenses = await Expense.findAll(); // Adjust query as needed

    // Convert data to CSV
    const csv = parse(expenses.map(expense => ({
      description: expense.description,
      amount: expense.amount,
      date: new Date(expense.date).toDateString()
    })));

    // Send CSV file as response
    res.header('Content-Type', 'text/csv');
    res.attachment(`report-${reportId}.csv`);
    res.send(csv);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to export report as CSV' });
  }
};
