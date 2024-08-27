import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExpenseForm = ({ expenseId, onSave, onCancel }) => {
  const [expense, setExpense] = useState({
    description: '',
    amount: '',
    date: '',
    categoryId: ''
  });

  useEffect(() => {
    if (expenseId) {
      axios.get(`http://localhost:5000/expense/get-expense/${expenseId}`)
        .then(response => {
          setExpense(response.data.expense);
        })
        .catch(error => console.error(error));
    }
  }, [expenseId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (expenseId) {
      axios.put(`http://localhost:5000/expense/update-expense/${expenseId}`, expense)
        .then(() => onSave())
        .catch(error => console.error(error));
    } else {
      axios.post('http://localhost:5000/expense/create-expense', expense)
        .then(() => onSave())
        .catch(error => console.error(error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="description" value={expense.description} onChange={handleChange} placeholder="Description" required />
      <input type="number" name="amount" value={expense.amount} onChange={handleChange} placeholder="Amount" required />
      <input type="date" name="date" value={expense.date} onChange={handleChange} required />
      <input type="number" name="categoryId" value={expense.categoryId} onChange={handleChange} placeholder="Category ID" required />
      <button type="submit">{expenseId ? 'Update' : 'Create'}</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default ExpenseForm;
