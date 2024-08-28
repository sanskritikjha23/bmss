import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryForm from './CategoryForm';

const CategoryManagement = () => {
    const [categories, setCategories] = useState([]);
    const [editingCategory, setEditingCategory] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:5000/category/get-categories');
                setCategories(response.data.categories);
            } catch (error) {
                setError('Failed to fetch categories.');
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    const handleEdit = (category) => {
        setEditingCategory(category);
    };

    const handleDelete = async (categoryId) => {
        try {
            await axios.delete(`http://localhost:5000/category/delete-category/${categoryId}`);
            setCategories(categories.filter(category => category.id !== categoryId));
        } catch (error) {
            setError('Failed to delete category.');
            console.error('Error deleting category:', error);
        }
    };

    const handleSave = async () => {
        try {
            const response = await axios.get('http://localhost:5000/category/get-categories');
            setCategories(response.data.categories);
            setEditingCategory(null);
        } catch (error) {
            setError('Failed to refresh categories.');
            console.error('Error refreshing categories:', error);
        }
    };

    const handleCancel = () => {
        setEditingCategory(null);
    };

    return (
        <div>
            <h1>Category Management</h1>
            <button onClick={() => setEditingCategory({})}>Create New Category</button>
            {error && <p className="error">{error}</p>}
            {editingCategory && (
                <CategoryForm
                    category={editingCategory}
                    onSave={handleSave}
                    onCancel={handleCancel}
                />
            )}
            <ul>
                {categories.map(category => (
                    <li key={category.id}>
                        <h3>{category.categoryName}</h3>
                        <p>Type: {category.typeOfBudget}</p>
                        <p>Time: {new Date(category.time).toDateString()}</p>
                        <p>Expense: ${category.usualExpenseOfMonth}</p>
                        <p>Limit: ${category.limit}</p>
                        <button onClick={() => handleEdit(category)}>Edit</button>
                        <button onClick={() => handleDelete(category.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryManagement;
