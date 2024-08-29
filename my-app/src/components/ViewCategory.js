// ViewCategory.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewCategory = () => {
    const [categoryId, setCategoryId] = useState('');
    const [category, setCategory] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        if (categoryId) {
            axios.get(`http://localhost:5000/category/get-category/${categoryId}`)
                .then(response => {
                    setCategory(response.data);
                })
                .catch(error => {
                    setError('Failed to fetch category.');
                    console.error('Fetch error:', error);
                });
        }
    }, [categoryId]);

    const handleChange = (e) => {
        setCategoryId(e.target.value);
    };

    return (
        <div>
            <h1>View Category</h1>
            <input
                type="text"
                placeholder="Enter Category ID"
                value={categoryId}
                onChange={handleChange}
            />
            <button onClick={() => setCategoryId(categoryId)}>Fetch Category</button>
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
        </div>
    );
};

export default ViewCategory;
