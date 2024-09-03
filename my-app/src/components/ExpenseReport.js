import React from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './ExpenseReport.css'; // Custom styles

const ExpenseReport = ({ data }) => {
  const handleDownload = async (format) => {
    try {
      const response = await axios.get(`http://localhost:5000/pdfcsv/download-report?format=${format}`, {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `report.${format}`);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error downloading report:', error);
    }
  };

  const handleEmail = async () => {
    try {
      const userEmail = localStorage.getItem('userEmail');
      if (!userEmail) {
        alert('User email not found. Please log in again.');
        return;
      }
      await axios.post('http://localhost:5000/expense/send-report', { email: userEmail });
      alert('Report sent to your email.');
    } catch (error) {
      console.error('Error sending report via email:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Expense Report</h1>
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <BarChart width={600} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="amount" fill="#8884d8" />
              </BarChart>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Actions</h4>
              <button className="btn btn-primary mb-2" onClick={() => handleDownload('csv')}>
                Download CSV
              </button>
              <button className="btn btn-secondary mb-2" onClick={() => handleDownload('pdf')}>
                Download PDF
              </button>
              <button className="btn btn-info" onClick={handleEmail}>
                Email Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseReport;
