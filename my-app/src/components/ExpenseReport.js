// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const ExpenseReport = () => {
//   const [reportData, setReportData] = useState({ labels: [], data: [] });
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchReport = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/report');
//         setReportData(response.data);
//       } catch (error) {
//         console.error('Error fetching report:', error);
//         setError('Failed to fetch report.');
//       }
//     };

//     fetchReport();
//   }, []);

//   const data = {
//     labels: reportData.labels,
//     datasets: [
//       {
//         label: 'Expenses',
//         data: reportData.data,
//         borderColor: 'rgba(75, 192, 192, 1)',
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//       }
//     ]
//   };

//   return (
//     <div>
//       <h1>Expense Report</h1>
//       {error && <p className="error">{error}</p>}
//       {reportData.labels.length > 0 && reportData.data.length > 0 ? (
//         <Line data={data} />
//       ) : (
//         <p>Loading report...</p>
//       )}
//     </div>
//   );
// };

// export default ExpenseReport;

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ExpenseReport = ({ data }) => {
  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="amount" fill="#8884d8" />
    </BarChart>
  );
};

export default ExpenseReport;
