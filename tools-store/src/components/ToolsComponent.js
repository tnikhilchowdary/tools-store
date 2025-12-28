import React from "react";
import { Link } from "react-router-dom";
import "./toolcard.css";

const ToolSComponent = ({ id, image, name, price }) => {
  return (
    <Link to={`/tools/${id}`} className="tool-link">
      <div className="tool-card">
        <img src={image} alt={name} />
        <h1>{name}</h1>
        <p>${price}</p>
      </div>
    </Link>
  );
};

export default ToolSComponent;
