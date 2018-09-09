import React, { Component } from "react";
import GoogleMaps from "../components/googlemap";
import Header from "../components/header";
import SideMenu from "../components/sidemenu";

export default class homepage extends Component {
  state = {
    filteredListOpen: true,
    Locations: []
  };

  componentDidMount() {
    this.loadLocations();
  }

  loadLocations = () => {
    const places = this.props.locations;
    this.setState({
      Locations: places
    });
  };

  // Show or hide filtered list on header button click
  showOrHideList = () => {
    this.setState({ filteredListOpen: !this.state.filteredListOpen });
  };

  // Check if the text from the input field (filterText) is present in the name of a location.
  filterList = filterText => {
    if (filterText.length > 0) {
      this.setState({
        Locations: this.props.locations.filter(location => {
          return location.name
            .toLowerCase()
            .includes(filterText.trim().toLowerCase());
        })
      });
    } else {
      this.setState({ Locations: this.props.locations });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <Header onMenuClick={this.showOrHideList} />
          <GoogleMaps className="map" locations={this.state.Locations} />
          <SideMenu
            displayMenu={this.state.filteredListOpen}
            locations={this.state.Locations}
            onchange={filterText => {
              this.filterList(filterText);
            }}
          />
        </div>
      </React.Fragment>
    );
  }
}
