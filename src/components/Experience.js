import React, { Component } from "react";
import "./Experience.css";
import { Badge, Button } from "reactstrap";

class Experience extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.setState({ expdet: { height: "20vh" }, hide: true });
  }
  render() {
    return (
      <div className="experience-box">
        <div className="company-info">
          <div className="experience-logo">
            <img src={this.props.logo} />
          </div>
          <div className="experience-company">{this.props.company}</div>
        </div>
        <div className="experience-title">{this.props.title}</div>
        <div className="experience-tech">
          {this.props.tech
            ? this.props.tech
                .split(",")
                .sort()
                .map(t => (
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
        <div className="experience-details" style={this.state.expdet}>
          {this.props.details.split("• ").map(e => (
            // <div style={{ paddingBottom: "1px" }}>{e ? "- " + e : null}</div>
            <div
              className="experience-bullet"
              style={{ paddingBottom: "8px", paddingLeft: "2px" }}
            >
              {e ? e : null}
            </div>
          ))}
        </div>
        <div className="experience-seemore">
          {this.state.hide ? (
            <Button
              size="sm"
              color="link"
              onClick={e =>
                this.setState({
                  expdet: { minHeight: "20vh" },
                  hide: !this.state.hide
                })
              }
            >
              Read more ..
            </Button>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Experience;
