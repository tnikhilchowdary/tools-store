import react from "react";
import ProductDisplay from "../components/ProductDisplay";
import Powertools from "../assets/power-tools.jpg";
import Automotive from "../assets/automotive.jpeg";
import Electrical from "../assets/electrical.jpg";
import Automotivetools from "./Automotivetools";
import Electricaltools from "./Electricaltools";
import Powertool from "./Powertools";
import {Link} from "react-router-dom";




const toolCategory = [
    {
        name: "Power Tools",
        image: Powertools,
        link:"/powertools-tools"
    },
    {
        name:"Automotive Tools",
        image: Automotive,
        link:"/automotivetools-tools"
    },
    {
        name:"Electrcial Tools",
        image: Electrical,
        link:"/electrical-tools"
    }
];

const Home = () => {
    return(
        <div className="card-container">
            {toolCategory.map((tool, index) => (
                <Link to={tool.link} key={index}>
                    <ProductDisplay name={tool.name} image={tool.image}/>
                </Link>
            ))}
        </div>
    )
}

export default Home;