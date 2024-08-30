import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ViewCategory = () => {
    const [categoryName, setCategoryName] = useState(''); // Change state variable name
    const [category, setCategory] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // Added loading state
    const navigate = useNavigate();

    useEffect(() => {
        if (categoryName) {
            // Fetch category data when categoryName changes
            const fetchCategory = async () => {
                setLoading(true); // Start loading
                try {
                    const response = await axios.get(`http://localhost:5000/category/get-category/${categoryName}`);
                    setCategory(response.data);
                    setError('');
                } catch (err) {
                    setError('Failed to fetch category.');
                    setCategory(null);
                } finally {
                    setLoading(false); // End loading
                }
            };

            fetchCategory();
        }
    }, [categoryName]); // Dependency on categoryName

    const handleChange = (e) => {
        setCategoryName(e.target.value); // Update categoryName
    };

    const handleFetch = () => {
        if (categoryName) {
            // Trigger fetch by setting categoryName
            setCategoryName(categoryName); // This will trigger useEffect to fetch data
        } else {
            setError('Please enter a category name.');
        }
    };

    const handleBack = () => {
        navigate('/categories'); // Navigate to Categories page
    };

    return (
        <div>
            <h1>View Category</h1>
            <input
                type="text"
                placeholder="Enter Category Name"
                value={categoryName}
                onChange={handleChange} // Handle input change
            />
            <button onClick={handleFetch}>Fetch Category</button>
            {loading && <p>Loading...</p>} {/* Show loading text */}
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
            <button onClick={handleBack}>Back to Categories</button> {/* Back button */}
        </div>
    );
};

export default ViewCategory;
