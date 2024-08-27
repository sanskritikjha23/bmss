import React from 'react';

const ExpenseItem = ({ expense, onEdit, onDelete }) => {
  return (
    <div>
      <h3>{expense.description}</h3>
      <p>Amount: ${expense.amount}</p>
      <p>Date: {new Date(expense.date).toDateString()}</p>
      <p>Category ID: {expense.categoryId}</p>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default ExpenseItem;
