import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS for the navbar

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">MyApp</Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/" className="nav-item">Home</Link>
                </li>
                <li>
                    <Link to="/login" className="nav-item">Login</Link>
                </li>
                <li>
                    <Link to="/signup" className="nav-item">Sign Up</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
