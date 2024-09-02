import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/expense');
        setExpenses(response.data.expenses); // Ensure this matches your API response format
      } catch (error) {
        console.error('Error fetching expenses:', error);
        setError('Failed to fetch expenses.');
      }
    };

    fetchExpenses();
  }, []);

  const handleEdit = (expenseId) => {
    navigate(`/expense-form/${expenseId}`);
  };

  const handleDelete = async (expenseId) => {
    try {
      await axios.delete(`http://localhost:5000/expense/${expenseId}`);
      setExpenses(expenses.filter(expense => expense.id !== expenseId));
    } catch (error) {
      console.error('Error deleting expense:', error);
      setError('Failed to delete expense.');
    }
  };

  const handleAdd = () => {
    navigate('/expense-form');
  };

  const handleViewReport = () => {
    navigate('/generate-report');
  };

  return (
    <div>
      <h1>Expense Management</h1>
      {error && <p className="error">{error}</p>}
      <button onClick={handleAdd}>Add New Expense</button>
      <button onClick={handleViewReport} style={{ marginLeft: '10px' }}>View Report</button>
      <ul>
        {expenses.length > 0 ? (
          expenses.map(expense => (
            <li key={expense.id}>
              <p>Description: {expense.description}</p>
              <p>Amount: ${expense.amount}</p>
              <p>Date: {new Date(expense.date).toDateString()}</p>
              <button onClick={() => handleEdit(expense.id)}>Edit</button>
              <button onClick={() => handleDelete(expense.id)}>Delete</button>
            </li>
          ))
        ) : (
          <p>No expenses found.</p>
        )}
      </ul>
    </div>
  );
};

export default ExpenseList;
