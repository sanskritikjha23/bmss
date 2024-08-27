import React from 'react';
import CategoryItem from './CategoryItem';

const CategoryList = ({ categories, onEdit, onDelete }) => {
    return (
        <div>
            {categories.map(category => (
                <CategoryItem
                    key={category.id}
                    category={category}
                    onEdit={() => onEdit(category.id)}
                    onDelete={() => onDelete(category.id)}
                />
            ))}
        </div>
    );
};

export default CategoryList;
