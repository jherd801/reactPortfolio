import React from "react";
import { Link } from 'react-router-dom';
import "./style.css"


function Portfolio() {
  return (
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 imgContainer">
        <h3>Health and Safety Portfolio</h3>
        <Link to="/portfolio/healthsafety"><img src={require('../assets/HSE.jpg')} className="portfolioImg" alt="HSE pic"/></Link>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 imgContainer">
        <h3>Web Development Portfolio</h3>
        <Link to="/portfolio/webdev"><img src={require('../assets/Web.png')} className="portfolioImg" alt="Coding pic"/></Link>
      </div>
    </div>
)
  };

export default Portfolio;
