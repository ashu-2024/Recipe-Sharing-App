// App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AddRecipe from './components/AddRecipe';
import RecipeList from './components/RecipeList';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // Load recipes from localStorage on component mount
  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    setRecipes(savedRecipes);
  }, []);

  // Save recipes to localStorage when they change
  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  const addRecipe = (newRecipe) => {
    const recipeWithId = { ...newRecipe, id: Date.now() };
    setRecipes([...recipes, recipeWithId]);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Header toggleDarkMode={toggleDarkMode} />
      <main>
        <AddRecipe addRecipe={addRecipe} />
        <RecipeList recipes={recipes} setRecipes={setRecipes} />
      </main>
    </div>
  );
}

export default App;