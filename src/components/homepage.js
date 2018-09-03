import React, { Component } from "react";
import GoogleMaps from "../components/googlemap";
import Header from "../components/header";
import SideMenu from "../components/sidemenu";

export default class homepage extends Component {
  state = {
    filteredListOpen: false,
    locations: [
      {
        name: "Tower City",
        title: "This is Tower City in Cleveland, Ohio",
        lat: 41.497226,
        lng: -81.694049
      },
      {
        name: "Quicken Loans Arena",
        title: "This is Quicken Loans in Cleveland, Ohio",
        lat: 41.496326,
        lng: -81.689357
      },
      {
        name: "West Side Market",
        title: "This is the West Side Market in Cleveland, Ohio",
        lat: 41.4844955,
        lng: -81.7031866
      },
      {
        name: "Greater Cleveland Aquarium",
        title: "This is the Greater Cleveland Aquarium in Cleveland, Ohio",
        lat: 41.496555,
        lng: -81.703903
      },
      {
        name: "Cuyahoga Community College",
        title: "This is the Cuyahoga Community College in Cleveland, Ohio",
        lat: 41.49409,
        lng: -81.669852
      }
    ]
  };

  // Show filtered list on header button click
  showOrHideList = () => {
    this.setState({ filteredListOpen: !this.state.filteredListOpen });
    console.log(this.state.filteredListOpen);
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <Header onMenuClick={this.showOrHideList} />
          <GoogleMaps className="map" locations={this.state.locations} />
          <SideMenu
            displayMenu={this.state.filteredListOpen}
            locations={this.state.locations}
          />
        </div>
      </React.Fragment>
    );
  }
}
