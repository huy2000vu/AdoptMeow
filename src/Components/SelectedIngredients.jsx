import React from "react";
export default function SelectedIngredients({
  ingredientsList,
  removeFunction,
}) {
  return (
    <div className="selectedIngredients">
      <h1 className="title">Your ingredients: </h1>
      <div className="ingredients">
        {ingredientsList &&
          ingredientsList.map((ingredient, index) => (
            <button onClick={removeFunction} key={index}>
              {ingredient}
            </button>
          ))}
      </div>
    </div>
  );
}
