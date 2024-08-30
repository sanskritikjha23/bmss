import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DeleteCategory = () => {
    const [categoryName, setCategoryName] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            // Send DELETE request using categoryName
            await axios.delete(`http://localhost:5000/category/del-category`, {
                data: { categoryName }
            });
            alert('Category deleted successfully');
            navigate('/categories');
        } catch (error) {
            setError('Failed to delete category.');
            console.error('Delete error:', error.response ? error.response.data : error.message);
        }
    };

    const handleBack = () => {
        navigate('/categories');
    };

    return (
        <div>
            <h1>Delete Category</h1>
            <input
                type="text"
                placeholder="Enter Category Name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
            />
            <button onClick={handleDelete}>Delete Category</button>
            {error && <p className="error">{error}</p>}
            <button onClick={handleBack}>Back to Categories</button>
        </div>
    );
};

export default DeleteCategory;
