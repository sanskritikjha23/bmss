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


import {BarChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Bar} from 'recharts'

const Chart=()=>{
 const arr=[
  {name:"facebook",value:233},
  {name:"instagram",value:2343}
 ]
return(
  <>
  <BarChart width={730} height={250} data={arr}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />

  <Bar dataKey="value" fill="#82ca9d" />
</BarChart>
  </>
)
}
export default Chart;