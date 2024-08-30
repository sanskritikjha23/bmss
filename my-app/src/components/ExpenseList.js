import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate hook

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/expense');
        setExpenses(response.data.expenses);
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
    navigate('/expense-form'); // Navigate to Expense Form for adding a new expense
  };

  return (
    <div>
      <h1>Expense Management</h1>
      {error && <p className="error">{error}</p>}
      <button onClick={handleAdd}>Add New Expense</button>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>
            <p>Description: {expense.description}</p>
            <p>Amount: ${expense.amount}</p>
            <p>Date: {new Date(expense.date).toDateString()}</p>
            <button onClick={() => handleEdit(expense.id)}>Edit</button>
            <button onClick={() => handleDelete(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
