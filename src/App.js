import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./Pages/Contact"
import Portfolio from "./Pages/Portfolio"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar/Navbar"
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
