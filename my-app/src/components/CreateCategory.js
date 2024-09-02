import React from 'react';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
    const navigate = useNavigate();

    const handleCreate = () => {
        navigate('/create-category');
    };

    const handleUpdate = () => {
        navigate('/update-category');
    };

    const handleGet = () => {
        navigate('/get-category');
    };

    const handleDelete = () => {
        navigate('/del-category');
    };

    const handleViewExpenses = () => {
        navigate('/expense-form'); // Redirect to ExpenseForm page
    };

    return (
        <div>
            <h1>Category Management</h1>
            <button onClick={handleCreate}>Create Category</button>
            <button onClick={handleUpdate}>Update Category</button>
            <button onClick={handleGet}>View Category</button>
            <button onClick={handleDelete}>Delete Category</button>
            <button onClick={handleViewExpenses}>Expenses</button> {/* Redirect to ExpenseForm */}
        </div>
    );
};

export default Categories;
