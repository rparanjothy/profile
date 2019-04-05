import React, { Component } from "react";
import "./Experience.css";
import { Badge } from "reactstrap";

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="experience-box">
        <div className="experience-company"><h3>{this.props.company}</h3></div>
        <div className="experience-title"><h6>{this.props.title}</h6></div>
        <div className="experience-tech">
          {this.props.tech
            ? this.props.tech.split(",").map(t => (
                
                  <Badge pill color="primary" style={{ marginRight: "5px", fontSize:"12px"}} >
                    {t}
                  </Badge>
                
              ))
            : null}
        </div>
        <div className="experience-details">
          {this.props.details.split("• ").map(e => (
            <div>{e}</div>
          ))}
        </div>
        <hr />
      </div>
    );
  }
}

export default Experience;
