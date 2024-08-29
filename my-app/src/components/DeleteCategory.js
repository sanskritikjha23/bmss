// DeleteCategory.js
import React, { useState } from 'react';
import axios from 'axios';

const DeleteCategory = () => {
    const [categoryId, setCategoryId] = useState('');
    const [error, setError] = useState('');

    const handleDelete = () => {
        axios.delete(`http://localhost:5000/category/delete-category/${categoryId}`)
            .then(response => {
                alert('Category deleted successfully');
            })
            .catch(error => {
                setError('Failed to delete category.');
                console.error('Delete error:', error);
            });
    };

    return (
        <div>
            <h1>Delete Category</h1>
            <input
                type="text"
                placeholder="Enter Category ID"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
            />
            <button onClick={handleDelete}>Delete Category</button>
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default DeleteCategory;
