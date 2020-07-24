import React from "react";
import ProjectContainer from "../Components/ProjectContainer/ProjectContainer"
import "./style.css";
import Pdf from "../assets/resume.pdf"

const WebDev = () => (
  <div>
    <h1>Web Development</h1>

      <ProjectContainer />

    <aside>
        <p>
            Here's some people I've worked with in the cohort
        </p>
        <a className="nav-item nav-link text-secondary" href="https://github.com/nabeek" target="_blank" rel="noopener noreferrer">Nick Beekhuizen</a>
        <a className="nav-item nav-link text-secondary" href="https://github.com/nvalline" target="_blank" rel="noopener noreferrer">Nate Valline</a>
        <a className="nav-item nav-link text-secondary" href="https://github.com/ashtonwalden34" target="_blank" rel="noopener noreferrer">Ashton Walden</a>
        <a className="nav-item nav-link text-secondary" href={Pdf} target="_blank" rel="noopener noreferrer">Resume</a>
    </aside>
  </div>
);

export default WebDev;