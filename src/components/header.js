import React, { Component } from "react";

export default class header extends Component {
  render() {
    return (
      <header className="navbar navbar-dark bg-dark">
        <nav>
          <div className="hamburger-menu" onClick={this.props.onMenuClick}>
            <div />
            <div />
            <div />
          </div>
        </nav>
        <h1 className="navbar-brand">Map App</h1>
      </header>
    );
  }
}
