import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddRecipePage from './components/AddRecipePage';
import RecipeDetailPage from './components/RecipeDetailPage';
import RecipeListPage from './components/RecipeListPage.';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeListPage recipes={recipes} />} />
        <Route path="/add" element={<AddRecipePage addRecipe={addRecipe} />} />
        <Route path="/recipe/:id" element={<RecipeDetailPage recipes={recipes} />} />
      </Routes>
    </Router>
  );
}

export default App;
