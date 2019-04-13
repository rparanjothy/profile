import React, { Component } from "react";
import "./Highlights.css";
import { Badge } from "reactstrap";

class Highlights extends Component {
  componentWillMount() {
    this.setState(
      {
        skills: [
          "Cloud Computing",
          "Full-Stack Development",
          "API Development",
          "Docker",
          "Distributed Architecture",
          "Large Scale Data Pipelines",
          "Java",
          "Python (pandas, itertools, numpy, scipy, pillow, Flask)",
          "NodeJS",
          "C#",
          "UNIX Shell Scripting",
          "Data Analytics",
          "SQL (Google Big Query, Oracle, DB2, Postgres, MySQL)",
          "NoSQL (Cassandra, MongoDB)",
          "PL/SQL",
          "Microservices Architecture",
          "Image Processing",
          "ETL",
          "Agile Methodologies",
          "Leadership",
          "Project Management",
          "Technical Writing",
          "Risk Mitigation",
          "Dev Ops / Web Ops",
          "Software Quality",
          "Reliability Engineering",
          "Automation",
          "SpringBoot",
          "Data Engineering",
          "Redis"
          
        ]
      },
      () => console.log("skills loaded")
    );
  }
  render() {
    return (
      <div className="highlight-info">
        {this.state.skills
          ? this.state.skills.sort().map(skill => (
              <div className="skill-item">
                {/* <h5> */}
                  <Badge color="none">{skill.trim()}</Badge>
                {/* </h5> */}
              </div>
            ))
          : null}
      </div>
    );
  }
}

export default Highlights;
