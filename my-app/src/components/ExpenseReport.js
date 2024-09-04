import React from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExpenseReport = ({ data }) => {
  const handleDownload = async (format) => {
    try {
      const userEmail = localStorage.getItem('userEmail');
      if (!userEmail) {
        alert('User email not found. Please log in again.');
        return;
      }

      const response = await axios.get(`http://localhost:5000/pdfcsv/download-report?format=${format}`, {
        responseType: 'blob',
      });

      const blob = new Blob([response.data], { type: response.headers['content-type'] });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `expense_report.${format}`);
      document.body.appendChild(link);
      link.click();
      link.remove();

      await axios.post('http://localhost:5000/expense/send-report', { email: userEmail, format });
      alert(`Report downloaded and sent to ${userEmail}`);
    } catch (error) {
      console.error('Error downloading or sending report:', error);
      alert('Failed to download or send report. Please try again later.');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Expense Report</h1>
      <div className="row">
        <div className="col-md-8">
          <BarChart width={600} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="amount" fill="#8884d8" />
          </BarChart>
        </div>
        <div className="col-md-4 d-flex flex-column align-items-start">
          <button className="btn btn-primary mb-2" onClick={() => handleDownload('csv')}>
            Download CSV
          </button>
          <button className="btn btn-secondary mb-2" onClick={() => handleDownload('pdf')}>
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpenseReport;
