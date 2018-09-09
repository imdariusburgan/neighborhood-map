import React, { Component } from "react";
import GoogleMaps from "../components/googlemap";
import Header from "../components/header";
import SideMenu from "../components/sidemenu";

export default class homepage extends Component {
  state = {
    filteredListOpen: true,
    AllLocations: [],
    FilteredLocations: []
  };

  componentDidMount() {
    this.loadLocations();
  }

  loadLocations = () => {
    const places = this.props.locations;
    this.setState({
      AllLocations: places
    });
  };

  // Show or hide filtered list on header button click
  showOrHideList = () => {
    this.setState({ filteredListOpen: !this.state.filteredListOpen });
  };

  // Check if the text from the input field (filterText) is present in the name of a location. If so, return it.
  filterList = filterText => {
    const allLocations = this.state.AllLocations;
    let filteredLocations = allLocations.filter(location => {
      if (location.name.toLowerCase().includes(filterText.toLowerCase())) {
        return location;
      }
    });
    console.log(this.state.locations);
    this.setState({ FilteredLocations: filteredLocations });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <Header onMenuClick={this.showOrHideList} />
          <GoogleMaps
            className="map"
            filteredlocations={this.state.FilteredLocations}
            locations={this.state.AllLocations}
          />
          <SideMenu
            displayMenu={this.state.filteredListOpen}
            locations={this.state.AllLocations}
            filteredlocations={this.state.FilteredLocations}
            onchange={filterText => {
              this.filterList(filterText);
            }}
          />
        </div>
      </React.Fragment>
    );
  }
}
