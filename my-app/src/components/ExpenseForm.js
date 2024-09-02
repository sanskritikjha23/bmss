
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ExpenseForm = () => {
  const navigate = useNavigate(); // Initialize navigate hook
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create new expense
      await axios.post('http://localhost:5000/expense/create-expense', { description, amount, date });
      // Redirect to ExpenseList after successful creation
      navigate('/expenses');
    } catch (error) {
      console.error('Error saving expense:', error);
      setError('Failed to save expense.');
    }
  };

  const handleCancel = () => {
    navigate('/expenses'); // Navigate to ExpenseList
  };

  return (
    <div>
      <h2>Add Expense</h2>
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
        <button type="submit">Add</button>
        <button type="button" onClick={handleCancel}>Expense List</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
