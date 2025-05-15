// components/AddRecipe.js
import React, { useState } from 'react';
import './AddRecipe.css';

function AddRecipe({ addRecipe }) {
  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: '',
    category: 'Breakfast',
    steps: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setRecipe(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe(recipe);
    setRecipe({
      name: '',
      ingredients: '',
      category: 'Breakfast',
      steps: ''
    });
  };

  return (
    <section id="add-recipe">
      <h2>Add Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Recipe Name:</label>
        <input 
          type="text" 
          id="name" 
          value={recipe.name} 
          onChange={handleChange} 
          required 
        />
        
        <label htmlFor="ingredients">Ingredients:</label>
        <textarea 
          id="ingredients" 
          value={recipe.ingredients} 
          onChange={handleChange} 
          required 
        />
        
        <label htmlFor="category">Category:</label>
        <select 
          id="category" 
          value={recipe.category} 
          onChange={handleChange}
        >
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Dessert">Dessert</option>
          <option value="Drinks">Drinks</option>
        </select>
        
        <label htmlFor="steps">Preparation Steps:</label>
        <textarea 
          id="steps" 
          value={recipe.steps} 
          onChange={handleChange} 
          required 
        />
        
        <button type="submit">Add Recipe</button>
      </form>
    </section>
  );
}

export default AddRecipe;