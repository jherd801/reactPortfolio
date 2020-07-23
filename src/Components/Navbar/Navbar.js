import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {
    return (
        <nav className="navbar navbar-light bg-dark">
                <span className="navbar-brand mb-0 h1 text-dark navlink"><Link to="/">Home</Link></span>
                <span className="navbar-brand mb-0 h1 text-dark navlink"><Link to="/portfolio">Portfolio</Link></span>
                <span className="navbar-brand mb-0 h1 text-dark navlink"><Link to="/contact">Contact</Link></span>
                {/* <span className="navbar-brand mb-0 h1 text-dark navlink"><Link to={require("../../assets/resume")} target="_blank">Resume</Link></span> */}
        </nav>
    )
}

export default Navbar;

