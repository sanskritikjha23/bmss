import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExpenseReport = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state?.data || []; // Default to an empty array

  console.log('Received data:', data); // For debugging

  // Ensure data is always an array
  const formattedData = Array.isArray(data) ? data.map(expense => ({
    date: new Date(expense.date).toLocaleDateString(),
    amount: expense.amount
  })) : [];

  console.log('Formatted data:', formattedData); // For debugging

  const handleSignOut = () => {
  
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Expense Report</h1>
      <div className="d-flex justify-content-between mb-4">
        <button className="btn btn-danger" onClick={handleSignOut}>Sign Out</button>
      </div>
      <div className="row">
        <div className="col-md-12">
          {formattedData.length > 0 ? (
            <BarChart width={800} height={400} data={formattedData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tickFormatter={(date) => new Date(date).toLocaleDateString()}
              />
              <YAxis
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip
                formatter={(value) => `$${value}`}
                labelFormatter={(label) => new Date(label).toLocaleDateString()}
              />
              <Legend />
              <Bar dataKey="amount" fill="#8884d8" />
            </BarChart>
          ) : (
            <p className="text-center">No data available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpenseReport;
