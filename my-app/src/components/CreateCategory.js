import React from 'react';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
    const navigate = useNavigate();

    const handleCreate = () => {
        navigate('/create-category');
    };

    const handleUpdate = () => {
        navigate('/update-category'); // Redirect to Update Category page
    };

    const handleGet = () => {
        navigate('/get-category'); // Redirect to View Category page
    };

    const handleDelete = () => {
        navigate('/del-category'); // Redirect to Delete Category page
    };
    return (
        <div>
            <h1>Create Category</h1>
            <button onClick={handleCreate}>Create Category</button>
            <button onClick={handleUpdate}>Update Category</button>
            <button onClick={handleGet}>Get Category</button>
            <button onClick={handleDelete}>Delete Category</button>
        </div>
    ) 

};

export default Categories;
