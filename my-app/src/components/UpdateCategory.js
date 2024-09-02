import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './update.css'; // Import custom CSS

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
                    navigate('/categories');
                }, 1000);
            })
            .catch(error => {
                setError('Failed to update category.');
                console.error('Update error:', error);
            });
    };

    const handleBack = () => {
        navigate('/categories');
    };

    return (
        <div className="container mt-5">
            <div className="card shadow-lg p-4">
                <h1 className="text-center mb-4">Update Category</h1>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        name="categoryName"
                        value={formData.categoryName}
                        onChange={handleChange}
                        placeholder="Category Name (min 3 characters)"
                        required
                    />
                </div>
                <div className="text-center mb-4">
                    <button className="btn btn-primary" onClick={handleSearch}>Search</button>
                </div>
                {formData.categoryName && (
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="typeOfBudget"
                                value={formData.typeOfBudget}
                                onChange={handleChange}
                                placeholder="Type of Budget"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="date"
                                className="form-control"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="number"
                                className="form-control"
                                name="usualExpenseOfMonth"
                                value={formData.usualExpenseOfMonth}
                                onChange={handleChange}
                                placeholder="Usual Expense of Month"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="number"
                                className="form-control"
                                name="limit"
                                value={formData.limit}
                                onChange={handleChange}
                                placeholder="Limit"
                                required
                            />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-success mr-2">Update Category</button>
                            <button type="button" className="btn btn-secondary" onClick={handleBack}>Back to Categories</button>
                        </div>
                    </form>
                )}
                {error && <p className="text-danger mt-3 text-center">{error}</p>}
                {success && <p className="text-success mt-3 text-center">{success}</p>}
            </div>
        </div>
    );
};

export default UpdateCategory;
