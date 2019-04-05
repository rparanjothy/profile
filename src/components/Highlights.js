import React, { Component } from "react";
import "./Highlights.css";

class Highlights extends Component {
  render() {
    return (
      <div className="highlight-info">
        <ul className="skill-list">
          <li> Cloud Computing </li>
          <li> Full-Stack Development </li>
          <li> API Development </li>
          <li> Large Scale Data Pipelines </li>
          <li> Data Analytics</li>
          <li> Agile Methodologies</li>
          <li> Java</li>
          <li> Python</li>
          <li> NodeJS</li>
          <li> C#</li>
          <li> UNIX Shell Scripting</li>
          <li> SQL / NoSQL / PLSQL</li>
          <li> Microservices </li>
          <li> Leadership</li>
          <li> People Management</li>
          <li> Technical Communication</li>
          <li> Risk Mitigation</li>
          <li> Dev Ops / Web Ops </li>
          <li> Software Quality</li>
          <li> Reliability Quality</li>

          {/* <li> pandas|numpy|scipy|scapy|sklearn|pillow|itertools</li> */}

        </ul>
      </div>
    );
  }
}

export default Highlights;
