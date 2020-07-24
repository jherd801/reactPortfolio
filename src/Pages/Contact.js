import React from "react";
import { SocialIcon } from 'react-social-icons';
import "./style.css"

const Contact = () => (
  <div>
    <h1>CONTACT</h1>
    <p>
      Check me out on Linkedin, Github, or send me an email with the buttons below
    </p>
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 socialIcon">
          <SocialIcon url="https://www.linkedin.com/in/josh-herd-cih-csp-48546656/" target="_blank" />
      </div>
      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 socialIcon">
          <SocialIcon url="https://github.com/jherd801" target="_blank" />
      </div>
      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 socialIcon">
          <SocialIcon url="mailto:jherd801@gmail.com" target="_blank" />
      </div>
    </div>
  </div>
);

export default Contact;


