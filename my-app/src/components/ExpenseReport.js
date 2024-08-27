import React from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const ExpenseReport = () => {
  const [reportData, setReportData] = React.useState({ labels: [], datasets: [] });

  React.useEffect(() => {
    const fetchReportData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/expense/report-data');
        const data = response.data;
        setReportData({
          labels: data.labels,
          datasets: [
            {
              label: 'Expenses',
              data: data.values,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            }
          ]
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchReportData();
  }, []);

  const handleDownloadPDF = () => {
    window.location.href = 'http://localhost:5000/report/generate-report';
  };

  return (
    <div>
      <h2>Expense Report</h2>
      <Bar data={reportData} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Expense Report' } } }} />
      <button onClick={handleDownloadPDF}>Download PDF Report</button>
    </div>
  );
};

export default ExpenseReport;
