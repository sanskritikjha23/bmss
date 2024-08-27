import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryForm from './CategoryForm';
import CategoryList from './CategoryList';
import './CategoryManagement.css'; // Optional: Create a separate CSS file for category management styles

const CategoryManagement = () => {
  const [categories, setCategories] = useState([]);
  const [editingCategoryId, setEditingCategoryId] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/category/get-category')
      .then(response => {
        setCategories(response.data.categories);
      })
      .catch(error => console.error(error));
  }, [categories]);

  const handleEdit = (id) => {
    setEditingCategoryId(id);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/category/del-category/${id}`)
      .then(() => {
        setCategories(categories.filter(category => category.id !== id));
      })
      .catch(error => console.error(error));
  };

  const handleSave = () => {
    setEditingCategoryId(null);
  };

  const handleCancel = () => {
    setEditingCategoryId(null);
  };

  return (
    <div className="category-management">
      {editingCategoryId ? (
        <CategoryForm categoryId={editingCategoryId} onSave={handleSave} onCancel={handleCancel} />
      ) : (
        <CategoryForm onSave={handleSave} onCancel={handleCancel} />
      )}
      <CategoryList
        categories={categories}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default CategoryManagement;
