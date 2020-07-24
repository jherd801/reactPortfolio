import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./Pages/Contact"
import Portfolio from "./Pages/Portfolio"
import Home from "./Pages/Home"
import HealthSafety from "./Pages/HealthSafety"
import WebDev from "./Pages/WebDev"
import Navbar from "./Components/Navbar/Navbar"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="Row">
          <div>
            <Header />
          </div>
          <div>
            <Navbar />
          </div>
        </div>
        <div className="jumbotron">
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/portfolio/healthsafety" component={HealthSafety} />
        <Route exact path="/portfolio/webdev" component={WebDev} />
        <Route exact path="/contact" component={Contact} />
        </div>
      <Footer />
      </div>
    </Router>
  );
}

export default App;

