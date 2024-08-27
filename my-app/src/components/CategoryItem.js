import React from 'react';

const CategoryItem = ({ category, onEdit, onDelete }) => {
    return (
        <div className="category-item">
            <h3>{category.categoryName}</h3>
            <p>Type: {category.typeOfBudget}</p>
            <p>Time: {new Date(category.time).toDateString()}</p>
            <p>Expense: ${category.usualExpenseOfMonth}</p>
            <p>Limit: ${category.limit}</p>
            <button onClick={onEdit}>Edit</button>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
};

export default CategoryItem;

