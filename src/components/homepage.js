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
      animation: null,
      selectedListItem: "",
      filteredListOpen: true,
      Locations: []
    };
  }

  componentDidMount() {
    this.loadLocations();
  }

  setRef = marker => {
    this.myRef.push(marker);
  };

  loadLocations = () => {
    this.setState({
      Locations: this.props.locations
    });
  };

  // This function will hide a marker's info window when the map is clicked
  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  // This function will show a marker's info window when clicked
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    console.log(marker);
  };

  checkClickedListItem = () => {
    if (this.state.clickedListItem !== "") {
      this.myRef.map(marker => {
        return this.state.clickedListItem === marker.props.name
          ? this.setState({
              activeMarker: marker.marker,
              selectedPlace: marker.props,
              showInfoWindow: true
            })
          : null;
      });
    }
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
    this.setState({ clickedListItem: item, activeMarker: {} });
    this.checkClickedListItem();
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
