import React from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetailPage = ({ recipes }) => {
  const { id } = useParams();
  const recipe = recipes[id];

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <h3>Ingredients</h3>
      <p>{recipe.ingredients}</p>
      <h3>Preparation Steps</h3>
      <p>{recipe.steps}</p>
      <img src={recipe.image} alt={recipe.title} />
    </div>
  );
};

export default RecipeDetailPage;
