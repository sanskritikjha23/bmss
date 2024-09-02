import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './view.css'; // Import custom CSS

const ViewCategory = () => {
    const [categoryName, setCategoryName] = useState('');
    const [category, setCategory] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (categoryName) {
            setLoading(true);
            axios.get(`http://localhost:5000/category/get-category/${categoryName}`)
                .then(response => {
                    setCategory(response.data);
                    setError('');
                })
                .catch(err => {
                    setError('Failed to fetch category.');
                    setCategory(null);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [categoryName]);

    const handleChange = (e) => {
        setCategoryName(e.target.value);
    };

    const handleFetch = () => {
        if (categoryName) {
            setCategoryName(categoryName);
        } else {
            setError('Please enter a category name.');
        }
    };

    const handleBack = () => {
        navigate('/categories');
    };

    return (
        <div className="container mt-5">
            <div className="card shadow-lg p-4">
                <h1 className="text-center mb-4">View Category</h1>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Category Name"
                        value={categoryName}
                        onChange={handleChange}
                    />
                </div>
                <div className="text-center mb-4">
                    <button className="btn btn-primary" onClick={handleFetch}>Fetch Category</button>
                </div>
                {loading && <p className="text-center">Loading...</p>}
                {error && <p className="text-danger text-center">{error}</p>}
                {category && (
                    <div className="category-details">
                        <p><strong>Name:</strong> {category.categoryName}</p>
                        <p><strong>Type:</strong> {category.typeOfBudget}</p>
                        <p><strong>Time:</strong> {new Date(category.time).toDateString()}</p>
                        <p><strong>Expense:</strong> ${category.usualExpenseOfMonth}</p>
                        <p><strong>Limit:</strong> ${category.limit}</p>
                    </div>
                )}
                <div className="text-center mt-4">
                    <button className="btn btn-secondary" onClick={handleBack}>Back to Categories</button>
                </div>
            </div>
        </div>
    );
};

export default ViewCategory;
