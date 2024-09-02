import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UpdateCategory = () => {
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

    const handleSearch = () => {
        if (formData.categoryName.length < 3) {
            setError('Category Name must be at least 3 characters long.');
            return;
        }

        axios.get(`http://localhost:5000/category/get-category/${formData.categoryName}`)
            .then(response => {
                if (response.data) {
                    setFormData(response.data);
                    setError('');
                } else {
                    setError('Category not found.');
                }
            })
            .catch(error => {
                setError('Failed to retrieve category.');
                console.error('Retrieve error:', error);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:5000/category/update-category/${encodeURIComponent(formData.categoryName)}`, formData)

            .then(response => {
                setSuccess('Category updated successfully');
                setTimeout(() => {
                    navigate('/categories'); // Redirect to Categories page
                }, 1000); // Delay to show success message before redirect
            })
            .catch(error => {
                setError('Failed to update category.');
                console.error('Update error:', error);
            });
    };

    const handleBack = () => {
        navigate('/categories'); // Navigate to Categories page
    };

    return (
        <div>
            <h1>Update Category</h1>
            <input
                type="text"
                name="categoryName"
                value={formData.categoryName}
                onChange={handleChange}
                placeholder="Category Name (min 3 characters)"
                required
            />
            <button onClick={handleSearch}>Search</button>
            {formData.categoryName && (
                <form onSubmit={handleSubmit}>
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
                    <button type="submit">Update Category</button>
                </form>
            )}
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            <button onClick={handleBack}>Back to Categories</button>
        </div>
    );
};

export default UpdateCategory;
