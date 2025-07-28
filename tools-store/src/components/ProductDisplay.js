import React from "react";
import "./ProductDisplay.css";

const ProductDisplay = ({ image, name }) => {
  return (
    <div className="card card-container">
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default ProductDisplay;
