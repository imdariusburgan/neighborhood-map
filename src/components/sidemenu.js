import React, { Component } from "react";
import FilterForm from "../components/filterform";

export default class sidemenu extends Component {
  render() {
    return (
      <div
        className={
          this.props.displayMenu ? "showMenu container-fluid" : "hideMenu"
        }
      >
        <h2 className="pt-4">Cleveland Locations</h2>
        <FilterForm />
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
