import { parse } from 'json2csv';
import PDFDocument from 'pdfkit';
import fs from 'fs';

export const generateCSV = (data) => parse(data);

export const generatePDF = (data, filePath) => {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(filePath));
  data.forEach(item => {
    doc.text(`Date: ${item.date}, Amount: ${item.amount}`);
  });
  doc.end();
};
