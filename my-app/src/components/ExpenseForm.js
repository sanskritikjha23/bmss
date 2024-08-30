import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ExpenseForm = () => {
  const { expenseId } = useParams(); // Get expenseId from URL params for editing
  const navigate = useNavigate(); // Initialize navigate hook
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (expenseId) {
      const fetchExpense = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/expense/${expenseId}`);
          const { description, amount, date } = response.data;
          setDescription(description);
          setAmount(amount);
          setDate(date);
        } catch (error) {
          console.error('Error fetching expense:', error);
          setError('Failed to fetch expense.');
        }
      };

      fetchExpense();
    }
  }, [expenseId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (expenseId) {
        // Update existing expense
        await axios.put(`http://localhost:5000/expense/${expenseId}`, { description, amount, date });
      } else {
        // Create new expense
        await axios.post('http://localhost:5000/expense', { description, amount, date });
      }
      // Redirect to ExpenseReport after successful operation
      navigate('/expense-report');
    } catch (error) {
      console.error('Error saving expense:', error);
      setError('Failed to save expense.');
    }
  };

  const handleCancel = () => {
    navigate('/expense-report'); // Navigate to ExpenseReport
  };

  const handleViewReport = () => {
    navigate('/expense-report'); // Navigate to ExpenseReport
  };

  return (
    <div>
      <h2>{expenseId ? 'Edit Expense' : 'Add Expense'}</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
        <input
          type="number"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          required
        />
        <input
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">{expenseId ? 'Update' : 'Add'}</button>
        <button type="button" onClick={handleCancel}>Back to Expense Report</button>
        <button type="button" onClick={handleViewReport}>View Report</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
