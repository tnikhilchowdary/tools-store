import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import Logo from "../assets/tools-logo.jpg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-top">
        <Link to="/" className="logo">
          <img src={Logo} alt="Tools Store Logo" className="logo-img" />
        </Link>
        <div className="auth-buttons">
          <NavLink to="/signup" className="register-link">Register</NavLink>
          <NavLink to="/login">
            <button className="sign-in-btn">Sign In</button>
          </NavLink>
        </div>
      </div>

      <div className="navbar-bottom">
        <button className="dropdown-btn">All Products ▾</button>
        <input
          type="text"
          className="search-input"
          placeholder="Enter keyword, item, model or part #"
        />
        <button className="search-btn"><FaSearch /></button>
        <div className="right-section">
          <NavLink to="/account">Account ▾</NavLink>
          <Link to="/cart"><FaShoppingCart className="cart-icon" /></Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
