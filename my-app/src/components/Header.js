import React from 'react';
import MoonIcon from './MoonIcon'; // or the correct path to your SVG
import SunIcon from './SunIcon';   // or the correct path to your SVG
import './Header.css';

function Header({ toggleDarkMode, darkMode }) {
  return (
    <header>
      <h1>Recipe Sharing App</h1>
      <nav>
        <ul>
          <li><a href="#add-recipe">Add Recipe</a></li>
          <li><a href="#view-recipes">View Recipes</a></li>
        </ul>
      </nav>
      <button 
        className="theme-toggle"
        onClick={toggleDarkMode}
      >
        {darkMode ? (
          <>
            <SunIcon /> Light Mode
          </>
        ) : (
          <>
            <MoonIcon /> Dark Mode
          </>
        )}
      </button>
    </header>
  );
}

export default Header; // This line must be present