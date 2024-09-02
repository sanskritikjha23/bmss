// src/CreateCategory.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './create.css'; // Ensure this file contains your custom styles

const CreateCategory = () => {
    const [formData, setFormData] = useState({
        categoryName: '',
        typeOfBudget: '',
        time: '',
        usualExpenseOfMonth: '',
        limit: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/category/create-category', formData)
            .then(response => {
                setSuccess('Category created successfully');
                // Redirect after successful creation
                setTimeout(() => {
                    navigate('/categories'); // Redirect to Categories page
                }, 1000); // Delay to show success message before redirect
            })
            .catch(error => {
                setError('Failed to create category.');
                console.error('Create error:', error);
            });
    };

    const handleBack = () => {
        navigate('/categories'); // Navigate to Categories page
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Create Category</h1>
            <form onSubmit={handleSubmit} className="form-group">
                <div className="mb-3">
                    <input
                        type="text"
                        name="categoryName"
                        value={formData.categoryName}
                        onChange={handleChange}
                        placeholder="Category Name"
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        name="typeOfBudget"
                        value={formData.typeOfBudget}
                        onChange={handleChange}
                        placeholder="Type of Budget"
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="date"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="number"
                        name="usualExpenseOfMonth"
                        value={formData.usualExpenseOfMonth}
                        onChange={handleChange}
                        placeholder="Usual Expense of Month"
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="number"
                        name="limit"
                        value={formData.limit}
                        onChange={handleChange}
                        placeholder="Limit"
                        className="form-control"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100 mb-3">Create Category</button>
            </form>
            {error && <p className="text-danger text-center">{error}</p>}
            {success && <p className="text-success text-center">{success}</p>}
            <button onClick={handleBack} className="btn btn-secondary w-100">Back to Categories</button>
        </div>
    );
};

export default CreateCategory;
