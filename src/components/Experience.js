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
        <div className="company-info">
          <div className="experience-logo">
            <img src={this.props.logo} />
           
          </div>
          <div className="experience-company">
            <h3>{this.props.company}</h3>
          </div>
        </div>
        <div className="experience-title">
          <h6>{this.props.title}</h6>
        </div>
        <div className="experience-tech">
          {this.props.tech
            ? this.props.tech.split(",").sort().map(t => (
                <Badge
                  pill
                  color="dark"
                  style={{ marginRight: "5px", fontSize: "12px" }}
                >
                  {t}
                </Badge>
              ))
            : null}
        </div>
        <div className="experience-details">
          {this.props.details.split("• ").map(e => (
            // <div style={{ paddingBottom: "1px" }}>{e ? "- " + e : null}</div>
            <div className="experience-bullet" style={{ paddingBottom: "8px",paddingLeft:"2px" }}>{e ? e : null}</div>
          ))}
        </div>
        <hr />
      </div>
    );
  }
}

export default Experience;
