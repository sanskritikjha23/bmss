import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const DeleteCategory = () => {
    const [categoryName, setCategoryName] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
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
        <div className="container mt-5">
            <div className="card shadow-lg">
                <div className="card-body">
                    <h1 className="card-title text-center">Delete Category</h1>
                    <div className="form-group">
                        <label htmlFor="categoryName">Enter Category Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="categoryName"
                            placeholder="Enter Category Name"
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                        />
                    </div>
                    {error && <p className="text-danger mt-3">{error}</p>}
                    <div className="text-center mt-4">
                        <button 
                            className="btn btn-danger mr-3" 
                            onClick={handleDelete}
                        >
                            Delete Category
                        </button>
                        <button 
                            className="btn btn-secondary" 
                            onClick={handleBack}
                        >
                            Back to Categories
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteCategory;
