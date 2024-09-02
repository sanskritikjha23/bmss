// src/Categories.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateCategories.css'; // Ensure this file is correctly referenced

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
        navigate('/create-expense'); // Redirect to ExpenseForm page
    };

    return (
        <div className="categories-container">
            <h1>Category Management</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4 mb-4">
                        <button onClick={handleCreate} className="btn btn-create">Create Category</button>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4">
                        <button onClick={handleUpdate} className="btn btn-update">Update Category</button>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4">
                        <button onClick={handleGet} className="btn btn-get">View Category</button>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4">
                        <button onClick={handleDelete} className="btn btn-delete">Delete Category</button>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4">
                        <button onClick={handleViewExpenses} className="btn btn-expenses">Expenses</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
