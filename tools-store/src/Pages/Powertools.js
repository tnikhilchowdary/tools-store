import React from "react";
import PowerDrill from "../assets/power-drill-1.jpeg";
import ToolSComponent from "../components/ToolsComponent";
import Cirular from "../assets/Circular.webp";
import wrench from "../assets/wrench.jpeg";
import Power from "./Powertools.css";

const PowerTools = [
    {
        id:1,
        name:"Electric Drill",
        price:50,
        image:PowerDrill
    },
    {
        id:2,
        name:"Circular Saw",
        Price:75,
        image:Cirular
    },
    {
        id:3,
        name:"Impact Wrench",
        price:250,
        image:wrench
    }
]

const Powertools = () => {
    return (
        <div className="tool-container">
           {PowerTools.map((power, index) => (
            <ToolSComponent 
            key={power.id}
            id={power.id}
            name={power.name}
            price={power.price}
            image={power.image}
            />
           ))}
        </div>
    );
};

export default Powertools;
