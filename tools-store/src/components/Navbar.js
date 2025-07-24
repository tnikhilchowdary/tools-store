import React  from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/tools-logo.jpg";

const Navbar = () => {
    return(
        <div>
            <NavLink>
                <img src={Logo} alt="logo" />
                <Link>Home</Link>
            </NavLink>
        </div>
    )
}
export default Navbar;