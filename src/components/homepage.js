// TO-DO ITEMS:
// - Figure out why when a list item is first clicked, the map marker does not highlight + why a list item must be clicked twice in order to highlight map marker
// - Figure out why when a marker is clicked, if you click the map, errors are then logged

import React, { Component } from "react";
import GoogleMaps from "../components/googlemap";
import Header from "../components/header";
import SideMenu from "../components/sidemenu";

export default class homepage extends Component {
  constructor(props) {
    super(props);
    this.myRef = [];
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      selectedListItem: "",
      filteredListOpen: true,
      Locations: []
    };
  }

  // This lifecyle events triggers the loadLocations function
  componentDidMount() {
    this.loadLocations();
  }

  // This function sets the state with all locations
  loadLocations = () => {
    this.setState({
      Locations: this.props.locations
    });
  };

  // This function pushes a reference to each marker on the map to the myRef variable
  setRef = marker => {
    this.myRef.push(marker);
  };

  /*************************************************************
   *  ALL FUNCTIONS FOR CHANGING THE MAP ARE LISTED HERE
   *************************************************************/

  // This function will show a marker's info window when clicked
  onMarkerClick = (props, marker) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  // This function will hide a marker's info window when the map is clicked
  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: {}
      });
    }
  };

  // This function checks to see if there is a marker reference matching the clicked list item. If so, display the marker's animation
  checkClickedListItem = () => {
    new Promise(resolve => {
      if (this.state.clickedListItem !== "" && this.myRef.length > 0) {
        resolve();
      }
    }).then(() => {
      this.myRef.map(marker => {
        if (this.state.clickedListItem === marker.marker.name) {
          // this.setState({
          //   activeMarker: marker.marker,
          //   selectedPlace: marker.props,
          //   showingInfoWindow: true
          // });
          console.log(marker.props);
          console.log(marker.marker);
          this.onMarkerClick(marker.props, marker.marker);
        }
        return null;
      });
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

  listItemClick = item => {
    new Promise(resolve => {
      this.setState({ clickedListItem: item });
      resolve();
    }).then(() => {
      this.checkClickedListItem();
    });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <Header onMenuClick={this.showOrHideList} />
          <GoogleMaps
            className="map"
            locations={this.state.Locations}
            selectedLocation={this.state.clickedListItem}
            markerClick={this.onMarkerClick}
            mapClick={this.onMapClicked}
            activeMarker={this.state.activeMarker}
            showInfoWindow={this.state.showingInfoWindow}
            selectedPlace={this.state.selectedPlace}
            setRef={this.setRef}
          />
          <SideMenu
            displayMenu={this.state.filteredListOpen}
            locations={this.state.Locations}
            onchange={filterText => {
              this.filterList(filterText);
            }}
            onclick={item => {
              this.listItemClick(item);
            }}
          />
        </div>
      </React.Fragment>
    );
  }
}
