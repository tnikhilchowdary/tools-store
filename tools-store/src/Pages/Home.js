import react from "react";
import ProductDisplay from "../components/ProductDisplay";

const toolCategory = [
    "Power Tools",
    "Automotive Tools",
    "Electrical Tools"
];

const Home = () => {
    return(
        <div>
            {toolCategory.map((toolName, index) => (
                <ProductDisplay 
                key={index} 
                name={toolName}
                />
            ))}
        </div>
    )
}

export default Home;