import React, { Component } from "react";
import FilterForm from "../components/filterform";

export default class sidemenu extends Component {
  filterMarkers = text => {
    this.props.onchange(text);
  };

  handleClick = item => {
    this.props.onclick(item);
  };

  render() {
    const renderLocations = this.props.locations.map((location, index) => {
      return (
        <li
          onClick={() => {
            this.handleClick(location.name);
          }}
          key={index}
        >
          {location.name}
        </li>
      );
    }, this);

    return (
      <div
        className={
          this.props.displayMenu ? "showMenu container-fluid" : "hideMenu"
        }
      >
        <h2 className="pt-4">Cleveland Locations</h2>
        <FilterForm
          onchange={text => {
            this.filterMarkers(text);
          }}
        />
        <ul>{renderLocations}</ul>
      </div>
    );
  }
}
