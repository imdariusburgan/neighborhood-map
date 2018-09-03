import React, { Component } from "react";

export default class sidemenu extends Component {
  render() {
    return (
      <div
        className={
          this.props.displayMenu ? "showMenu container-fluid" : "hideMenu"
        }
      >
        <h2 className="pt-4">Cleveland Locations</h2>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">
              Button
            </button>
          </div>
        </div>
        <div>
          <ul className="list-unstyled">
            {this.props.locations.map((location, index) => {
              return <li key={index}>{location.name}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
