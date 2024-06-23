import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipePage = ({ addRecipe }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      title,
      description,
      ingredients,
      steps,
      image,
    };
    console.log(newRecipe);
    addRecipe(newRecipe);
    navigate('/');
  };

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <textarea placeholder="Ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
      <textarea placeholder="Preparation Steps" value={steps} onChange={(e) => setSteps(e.target.value)} required />
      <input type="file" onChange={handleImageChange} required />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipePage;
