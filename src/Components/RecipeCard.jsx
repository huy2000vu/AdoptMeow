import React from "react";
export default function RecipeCard({ title, image }) {
  return (
    <div className="Card">
      <img
        src={image}
        alt={title}
        style={{ width: "200px", height: "200px" }}
      />
      <div className="details">
        <h2>{title}</h2>
      </div>
    </div>
  );
}
