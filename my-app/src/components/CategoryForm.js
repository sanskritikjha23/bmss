import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryForm = ({ categoryId, onSave, onCancel }) => {
    const [category, setCategory] = useState({
        categoryName: '',
        typeOfBudget: '',
        time: '',
        usualExpenseOfMonth: '',
        limit: ''
    });

    useEffect(() => {
        if (categoryId) {
            axios.get(`http://localhost:5000/category/get-category/${categoryId}`)
                .then(response => {
                    setCategory(response.data.categories[0]);
                })
                .catch(error => console.error(error));
        }
    }, [categoryId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCategory(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (categoryId) {
            axios.put(`http://localhost:5000/category/update-category/${categoryId}`, category)
                .then(() => onSave())
                .catch(error => console.error(error));
        } else {
            axios.post('http://localhost:5000/category/create-category', category)
                .then(() => onSave())
                .catch(error => console.error(error));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="categoryName" value={category.categoryName} onChange={handleChange} placeholder="Category Name" required />
            <input type="text" name="typeOfBudget" value={category.typeOfBudget} onChange={handleChange} placeholder="Type of Budget" required />
            <input type="date" name="time" value={category.time} onChange={handleChange} required />
            <input type="number" name="usualExpenseOfMonth" value={category.usualExpenseOfMonth} onChange={handleChange} placeholder="Usual Expense of Month" required />
            <input type="number" name="limit" value={category.limit} onChange={handleChange} placeholder="Limit" required />
            <button type="submit">{categoryId ? 'Update' : 'Create'}</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    );
};

export default CategoryForm;
