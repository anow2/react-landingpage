import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Headline.css";

class Headline extends Component {
  render() {
    return (
      <div className="Headline">
        <text className="headlineText">
          Branded Reaction Gifs <br />
          To Stand Out On Social
        </text>
        <text className="headlineTextBottom">
          {" "}
          What better way to look cool to your social audiences than this?
        </text>
        <span className="freeGIFButton"> Get your free BRANDGIF </span>
      </div>
    );
  }
}

export default Headline;
