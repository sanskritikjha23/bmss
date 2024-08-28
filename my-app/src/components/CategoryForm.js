import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryForm = ({ category, onSave, onCancel }) => {
    const [formCategory, setFormCategory] = useState({
        categoryName: '',
        typeOfBudget: '',
        time: '',
        usualExpenseOfMonth: '',
        limit: '',
    });
    const [error, setError] = useState('');

    useEffect(() => {
        if (category && category.id) {
            setFormCategory({
                categoryName: category.categoryName || '',
                typeOfBudget: category.typeOfBudget || '',
                time: category.time || '',
                usualExpenseOfMonth: category.usualExpenseOfMonth || '',
                limit: category.limit || '',
            });
        } else {
            setFormCategory({
                categoryName: '',
                typeOfBudget: '',
                time: '',
                usualExpenseOfMonth: '',
                limit: '',
            });
        }
    }, [category]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormCategory(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (category && category.id) {
                await axios.put(`http://localhost:5000/category/update-category/${category.id}`, formCategory);
            } else {
                await axios.post('http://localhost:5000/category/create-category', formCategory);
            }
            onSave(); // Notify parent component of success
        } catch (error) {
            setError('Failed to save category.');
            console.error('Error saving category:', error);
        }
    };

    return (
        <div>
            <h2>{category && category.id ? 'Edit Category' : 'Add Category'}</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="categoryName"
                    value={formCategory.categoryName}
                    onChange={handleChange}
                    placeholder="Category Name"
                    required
                />
                <input
                    type="text"
                    name="typeOfBudget"
                    value={formCategory.typeOfBudget}
                    onChange={handleChange}
                    placeholder="Type of Budget"
                    required
                />
                <input
                    type="date"
                    name="time"
                    value={formCategory.time}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="usualExpenseOfMonth"
                    value={formCategory.usualExpenseOfMonth}
                    onChange={handleChange}
                    placeholder="Usual Expense of Month"
                    required
                />
                <input
                    type="number"
                    name="limit"
                    value={formCategory.limit}
                    onChange={handleChange}
                    placeholder="Limit"
                    required
                />
                <button type="submit">{category && category.id ? 'Update' : 'Create'}</button>
                <button type="button" onClick={onCancel}>Cancel</button>
            </form>
        </div>
    );
};

export default CategoryForm;
