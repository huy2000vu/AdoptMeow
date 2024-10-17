import React from "react";
export default function SelectedIngredients({ ingredientsList }) {
  return (
    <div className="selectedIngredients">
      <h1 className="title">Your ingredients: </h1>
      {ingredientsList &&
        ingredientsList.map((ingredient, index) => (
          <button key={index}>{ingredient}</button>
        ))}
    </div>
  );
}
