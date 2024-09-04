import React from 'react';
import { useLocation } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExpenseReport = () => {
  const location = useLocation();
  const data = location.state?.data || [];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Expense Report</h1>
      <div className="row">
        <div className="col-md-12">
          {data.length > 0 ? (
            <BarChart width={800} height={400} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" tickFormatter={(date) => new Date(date).toLocaleDateString()} />
              <YAxis tickFormatter={(value) => `$${value}`} />
              <Tooltip formatter={(value) => `$${value}`} labelFormatter={(label) => new Date(label).toLocaleDateString()} />
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
