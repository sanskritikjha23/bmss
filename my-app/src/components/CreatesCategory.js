import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
        <div>
            <h1>Create Category</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="categoryName"
                    value={formData.categoryName}
                    onChange={handleChange}
                    placeholder="Category Name"
                    required
                />
                <input
                    type="text"
                    name="typeOfBudget"
                    value={formData.typeOfBudget}
                    onChange={handleChange}
                    placeholder="Type of Budget"
                    required
                />
                <input
                    type="date"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="usualExpenseOfMonth"
                    value={formData.usualExpenseOfMonth}
                    onChange={handleChange}
                    placeholder="Usual Expense of Month"
                    required
                />
                <input
                    type="number"
                    name="limit"
                    value={formData.limit}
                    onChange={handleChange}
                    placeholder="Limit"
                    required
                />
                <button type="submit">Create Category</button>
            </form>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            <button onClick={handleBack}>Back to Categories</button>
        </div>
    );
};

export default CreateCategory;
