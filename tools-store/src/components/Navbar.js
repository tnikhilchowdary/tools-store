import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/tools-logo.jpg"; // Make sure this path is correct
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <img src={Logo} alt="Tool Store Logo" className="logo-img" />
      </div>
      <div className="navbar-right">
        <NavLink to="/signup" className="nav-link">Register</NavLink>
        <NavLink to="/login" className="sign-in-btn">Sign In</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
