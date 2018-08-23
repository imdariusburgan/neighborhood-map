import React, { Component } from "react";

export default class header extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <nav>
            <div className="hamburger-menu">
              <div />
              <div />
              <div />
            </div>
          </nav>
          <h1>Map App</h1>
        </header>
      </React.Fragment>
    );
  }
}
