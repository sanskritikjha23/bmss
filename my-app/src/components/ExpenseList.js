import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExpenseForm from './ExpenseForm';

const ExpenseList = () => {
    const [expenses, setExpenses] = useState([]);
    const [editingExpense, setEditingExpense] = useState(null);
    const [error, setError] = useState('');

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

    const handleEdit = (expense) => {
        setEditingExpense(expense);
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

    const handleSave = () => {
        setEditingExpense(null);
        // Optionally, you can refresh the expenses here
        // fetchExpenses();
    };

    const handleCancel = () => {
        setEditingExpense(null);
    };

    return (
        <div>
            <h1>Expense Management</h1>
            {error && <p className="error">{error}</p>}
            <button onClick={() => setEditingExpense({})}>Add New Expense</button>
            {editingExpense && (
                <ExpenseForm
                    expenseId={editingExpense.id}
                    onSave={handleSave}
                    onCancel={handleCancel}
                />
            )}
            <ul>
                {expenses.map(expense => (
                    <li key={expense.id}>
                        <p>Description: {expense.description}</p>
                        <p>Amount: ${expense.amount}</p>
                        <p>Date: {new Date(expense.date).toDateString()}</p>
                        <button onClick={() => handleEdit(expense)}>Edit</button>
                        <button onClick={() => handleDelete(expense.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExpenseList;
