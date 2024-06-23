import React from 'react';
import { Link } from 'react-router-dom';

const RecipeListPage = ({ recipes }) => {
  return (
    <div className='recipe'>
     <div className='flex'>
     <h1 className='Recipe'>Recipe List</h1> 
     <Link to="/add">Add New Recipe</Link>
     </div>
      <div>
        {recipes.map((recipe, index) => (
          <div key={index}>
            <Link to={`/recipe/${index}`}>
              <h2>{recipe.title}</h2>
              <p>{recipe.description}</p>
              <img src={recipe.image} alt={recipe.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeListPage;
