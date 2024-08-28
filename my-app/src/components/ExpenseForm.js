import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExpenseForm = ({ expenseId, onSave, onCancel }) => {
    const [expense, setExpense] = useState({
        description: '',
        amount: '',
        date: ''
    });
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchExpense = async () => {
            if (expenseId) {
                try {
                    const response = await axios.get(`http://localhost:5000/expense/${expenseId}`);
                    setExpense(response.data.expense);
                } catch (error) {
                    console.error('Error fetching expense:', error);
                    setError('Failed to fetch expense.');
                }
            }
        };

        fetchExpense();
    }, [expenseId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExpense(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (expenseId) {
                await axios.put(`http://localhost:5000/expense/${expenseId}`, expense);
            } else {
                await axios.post('http://localhost:5000/expense', expense);
            }
            onSave(); // Notify parent component of success
        } catch (error) {
            console.error('Error saving expense:', error);
            setError('Failed to save expense.'); // Display error message
        }
    };

    return (
        <div>
            <h2>{expenseId ? 'Edit Expense' : 'Add Expense'}</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="description"
                    value={expense.description}
                    onChange={handleChange}
                    placeholder="Description"
                    required
                />
                <input
                    type="number"
                    name="amount"
                    value={expense.amount}
                    onChange={handleChange}
                    placeholder="Amount"
                    required
                />
                <input
                    type="date"
                    name="date"
                    value={expense.date}
                    onChange={handleChange}
                    required
                />
                <button type="submit">{expenseId ? 'Update' : 'Add'}</button>
                <button type="button" onClick={onCancel}>Cancel</button>
            </form>
        </div>
    );
};

export default ExpenseForm;
