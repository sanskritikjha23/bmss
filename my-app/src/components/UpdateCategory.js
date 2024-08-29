import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Use this to get categoryId from the URL

const UpdateCategory = () => {
    const { id } = useParams(); // Get categoryId from URL params
    const [formData, setFormData] = useState({
        categoryName: '',
        typeOfBudget: '',
        time: '',
        usualExpenseOfMonth: '',
        limit: ''
    });
    const [error, setError] = useState('');

    // Fetch category details when component mounts
    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/category/get-category/${id}`);
                setFormData(response.data); // Assuming response.data contains category details
            } catch (error) {
                setError('Failed to fetch category details.');
                console.error('Fetch error:', error);
            }
        };

        fetchCategory();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/category/update-category/${id}`, formData)
            .then(response => {
                alert('Category updated successfully');
            })
            .catch(error => {
                setError('Failed to update category.');
                console.error('Update error:', error);
            });
    };

    return (
        <div>
            <h1>Update Category</h1>
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
                <button type="submit">Update Category</button>
            </form>
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default UpdateCategory;
