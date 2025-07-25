import React from "react";

const ProductDisplay = ({ image, name }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default ProductDisplay;
