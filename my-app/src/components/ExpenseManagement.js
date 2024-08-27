import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

const ExpenseManagement = () => {
  const [expenses, setExpenses] = useState([]);
  const [editingExpenseId, setEditingExpenseId] = useState(null);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/expense/get-expenses', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setExpenses(response.data.expenses);
      } catch (error) {
        console.error(error);
      }
    };

    fetchExpenses();
  }, [expenses]);

  const handleEdit = (id) => {
    setEditingExpenseId(id);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/expense/delete-expense/${id}`)
      .then(() => setExpenses(expenses.filter(expense => expense.id !== id)))
      .catch(error => console.error(error));
  };

  const handleSave = () => {
    setEditingExpenseId(null);
    // Refresh the expenses list after saving
    const fetchExpenses = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/expense/get-expenses', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setExpenses(response.data.expenses);
      } catch (error) {
        console.error(error);
      }
    };

    fetchExpenses();
  };

  const handleCancel = () => {
    setEditingExpenseId(null);
  };

  return (
    <div>
      {editingExpenseId ? (
        <ExpenseForm expenseId={editingExpenseId} onSave={handleSave} onCancel={handleCancel} />
      ) : (
        <ExpenseForm onSave={handleSave} onCancel={handleCancel} />
      )}
      <ExpenseList
        expenses={expenses}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ExpenseManagement;
