
import { Link } from 'react-router-dom';


import React, { useState } from 'react';
import '../styles/Navbar.css';

function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">MyApp</div>
            <ul className={isMobileMenuOpen ? "navbar-links mobile" : "navbar-links"}>
                <li><a href="/">Home</a></li>
                <li><a href="/register">Register</a></li>
                <li><a href="/Login">Login</a></li>
            </ul>
            <div className="menu-icon" onClick={toggleMenu}>
                <div className={isMobileMenuOpen ? "bar change" : "bar"}></div>
                <div className={isMobileMenuOpen ? "bar change" : "bar"}></div>
                <div className={isMobileMenuOpen ? "bar change" : "bar"}></div>
            </div>
        </nav>
    );
}

export default Navbar;





