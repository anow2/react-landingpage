import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header>
          <span className="left">
            <img
              src="https://uploads.codesandbox.io/uploads/user/deed1653-fbf8-4eea-be79-18bc04e04932/6m_i-BrandGifsLogoNav.png"
              className="logo"
            />
          </span>
          <span className="right">
            <a className="link" href="#">
              How it works
            </a>
            <a className="link" href="#">
              Pricing
            </a>
            <a className="link" href="#">
              Examples
            </a>
            <a className="link" href="#">
              FAQ
            </a>
            <span className="ctaButton">Get Started</span>
          </span>
        </header>
      </div>
    );
  }
}

export default Header;
