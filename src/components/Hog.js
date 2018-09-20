import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Hog extends Component {
  constructor() {
    super();

    this.state = {
      toggle: "none"
    };
  }

  handleClick = e => {
    this.state.toggle === "none"
      ? this.setState({ toggle: "" })
      : this.setState({ toggle: "none" });
  };

  render() {
    const graphImage = require("../hog-imgs/" +
      this.props.hog.name.toLowerCase().replace(/ /g, "_") +
      ".jpg");

    return (
      <div className="ui card eight wide column">
        <div className="image">
          <img src={graphImage} />
        </div>
        <div className="content" onClick={this.handleClick}>
          <a className="header">{this.props.hog.name}</a>
          <div className="meta">
            <span className="specialty" style={{ display: this.state.toggle }}>
              {this.props.hog.specialty}
            </span>
            <div className="weight" style={{ display: this.state.toggle }}>
              {
                this.props.hog[
                  "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
                ]
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
