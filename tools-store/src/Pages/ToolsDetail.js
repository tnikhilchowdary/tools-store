import React from "react";
import { useParams, Link } from "react-router-dom";
import wrench from "../assets/wrench.jpeg";
import Circular from "../assets/Circular.webp";
import Electrical from "../assets/electrical.jpg";
import "./ToolsDetail.css";

const tools = [
  { id: 1, name: "Electric Drill", price: 50, image: Electrical, description: "Powerful electric drill." },
  { id: 2, name: "Circular Saw", price: 75, image: Circular, description: "High-performance saw." },
  { id: 3, name: "Impact Wrench", price: 250, image: wrench, description: "Strong torque wrench." },
];

const ToolsDetail = () => {
  const { id } = useParams();
  const tool = tools.find((tool) => tool.id === parseInt(id));

  if (!tool) return <h2 className="not-found">Tool not found!</h2>;

  return (
    <div className="tool-detail-container">
      <img src={tool.image} alt={tool.name} className="tool-detail-image" />
      <div className="tool-detail-info">
        <h1>{tool.name}</h1>
        <p className="tool-price">${tool.price}</p>
        <p className="tool-description">{tool.description}</p>
        <Link to="/powertools-tools" className="back-button">← Back to Products</Link>
      </div>
    </div>
  );
};

export default ToolsDetail;
