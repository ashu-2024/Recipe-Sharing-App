// components/RecipeList.js
import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import './RecipeList.css';

function RecipeList({ recipes, setRecipes }) {
  const [filter, setFilter] = useState('All');

  const handleDelete = (id) => {
    const updatedRecipes = recipes.filter(recipe => recipe.id !== id);
    setRecipes(updatedRecipes);
  };

  const filteredRecipes = filter === 'All' 
    ? recipes 
    : recipes.filter(recipe => recipe.category === filter);

  return (
    <section id="view-recipes">
      <h2>Recipes</h2>
      <div className="filter-container">
        <label htmlFor="filter">Filter by Category:</label>
        <select 
          id="filter" 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Dessert">Dessert</option>
          <option value="Drinks">Drinks</option>
        </select>
      </div>
      
      <div className="recipe-list">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map(recipe => (
            <RecipeCard 
              key={recipe.id} 
              recipe={recipe} 
              onDelete={handleDelete}
            />
          ))
        ) : (
          <div className="no-recipes">
            {recipes.length === 0 
              ? "No recipes added yet. Add your first recipe above!" 
              : "No recipes match the selected filter."}
          </div>
        )}
      </div>
    </section>
  );
}

export default RecipeList;