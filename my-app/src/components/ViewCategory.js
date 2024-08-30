import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
        <div>
            <h1>View Category</h1>
            <input
                type="text"
                placeholder="Enter Category Name"
                value={categoryName}
                onChange={handleChange}
            />
            <button onClick={handleFetch}>Fetch Category</button>
            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            {category && (
                <div>
                    <p><strong>Name:</strong> {category.categoryName}</p>
                    <p><strong>Type:</strong> {category.typeOfBudget}</p>
                    <p><strong>Time:</strong> {new Date(category.time).toDateString()}</p>
                    <p><strong>Expense:</strong> ${category.usualExpenseOfMonth}</p>
                    <p><strong>Limit:</strong> ${category.limit}</p>
                </div>
            )}
            <button onClick={handleBack}>Back to Categories</button>
        </div>
    );
};

export default ViewCategory;
