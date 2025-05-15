// components/RecipeCard.js
import React from 'react';
import './RecipeCard.css';

function RecipeCard({ recipe, onDelete }) {
  return (
    <div className="recipe-card">
      <h3>{recipe.name}</h3>
      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <p><strong>Steps:</strong> {recipe.steps}</p>
      <p className="category"><strong>Category:</strong> {recipe.category}</p>
      <button 
        className="delete-btn"
        onClick={() => onDelete(recipe.id)}
      >
        Delete Recipe
      </button>
    </div>
  );
}

export default RecipeCard;