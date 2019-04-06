import React, { Component } from "react";
import "./Highlights.css";

class Highlights extends Component {
 
  componentWillMount(){
    this.setState(
      {
        skills: [
          "Cloud Computing",
          "Full-Stack Development",
          "API Development",
          "Container Technologies",
          "Distributed Architecture",
          "Large Scale Data Pipelines",
          "Java",
          "Python",
          "NodeJS",
          "C#",
          "UNIX Shell Scripting",
          "Data Analytics",
          "SQL / NoSQL / PLSQL",
          "Microservices Architecture",
          "pandas",
          "Image Processing",
          "ETL",
          "Agile Methodologies",
          "Leadership",
          "Project Management",
          "Technical Communication",
          "Risk Mitigation",
          "Dev Ops / Web Ops",
          "Software Quality",
          "Reliability Engineering", 
         "Automation"
        ]
      },
      () => console.log("skills loaded")
    );
  }
  render() {
    return (
      <div className="highlight-info">
        {this.state.skills
          ? this.state.skills.map(skill => (
              <div className="skill-item">{skill}</div>
            ))
          : null}
      </div>
    );
  }
}

export default Highlights;
