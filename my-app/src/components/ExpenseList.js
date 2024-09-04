import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

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
    navigate('/expense-form');
  };

  const handleViewReport = () => {
    navigate('/generate-report');
  };

  const downloadCSV = () => {
    if (expenses.length === 0) {
      alert('No expenses to download.');
      return;
    }

    const headers = ['ID', 'Description', 'Amount', 'Date'];
    const rows = expenses.map(expense => [
      expense.id,
      expense.description,
      expense.amount,
      new Date(expense.date).toLocaleDateString()
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(field => `"${field.toString().replace(/"/g, '""')}"`).join(','))
    ].join('\n');

    console.log('CSV Content:', csvContent);

    try {
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'expenses.csv';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error during CSV download:', error);
      alert('An error occurred while trying to download the CSV file.');
    }
  };

  const downloadPDF = () => {
    if (expenses.length === 0) {
      alert('No expenses to download.');
      return;
    }

    const doc = new jsPDF();

    const headers = ['ID', 'Description', 'Amount', 'Date'];
    const rows = expenses.map(expense => [
      expense.id,
      expense.description,
      expense.amount,
      new Date(expense.date).toLocaleDateString()
    ]);

    doc.text('Expense List', 14, 16);
    doc.autoTable({
      head: [headers],
      body: rows,
      startY: 20,
      theme: 'striped',
      margin: { top: 30 }
    });

    doc.save('expenses.pdf');
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Expense Management</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="d-flex justify-content-between mb-4">
        <button className="btn btn-primary" onClick={handleAdd}>Add New Expense</button>
        <button className="btn btn-secondary ml-2" onClick={handleViewReport}>View Report</button>
        <button className="btn btn-info ml-2" onClick={downloadCSV}>Download CSV</button>
        <button className="btn btn-danger ml-2" onClick={downloadPDF}>Download PDF</button>
      </div>
      <ul className="list-group">
        {expenses.length > 0 ? (
          expenses.map(expense => (
            <li key={expense.id} className="list-group-item mb-3 shadow-sm">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="mb-1"><strong>Description:</strong> {expense.description}</p>
                  <p className="mb-1"><strong>Amount:</strong> ${expense.amount}</p>
                  <p className="mb-1"><strong>Date:</strong> {new Date(expense.date).toDateString()}</p>
                </div>
                <div>
                  <button className="btn btn-sm btn-outline-primary mr-2" onClick={() => handleEdit(expense.id)}>Edit</button>
                  <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(expense.id)}>Delete</button>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p className="text-center">No expenses found.</p>
        )}
      </ul>
    </div>
  );
};

export default ExpenseList;
