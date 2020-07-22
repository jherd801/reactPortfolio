import React from "react";
import { Link } from 'react-router-dom';


function Portfolio() {
  return (
    <div className="navbar navbar-light bg-dark">
            <button><Link to="/portfolio/healthsafety">Health and Safety</Link></button>
            <button><Link to="/portfolio/webdev">Web Development</Link></button>
    </div>
)
  };

export default Portfolio;
