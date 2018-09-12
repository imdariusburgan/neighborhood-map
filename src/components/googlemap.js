import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class GoogleMap extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    animation: null
  };

  // This function will show a marker's info window when clicked
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    console.log(this.state.activeMarker);
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

  render() {
    const style = {
      height: "400px",
      width: "100%"
    };

    return (
      <div className="map" style={style}>
        <Map
          google={this.props.google}
          onClick={this.onMapClicked}
          style={style}
          zoom={14}
          initialCenter={{ lat: 41.491076, lng: -81.696053 }}
        >
          {this.props.locations.map((marker, index) => {
            return (
              <Marker
                key={index}
                onClick={this.onMarkerClick}
                name={marker.name}
                title={marker.title}
                position={{
                  lat: marker.lat,
                  lng: marker.lng
                }}
                animation={
                  this.state.activeMarker
                    ? marker.name === this.state.activeMarker.name
                      ? this.props.google.maps.Animation.BOUNCE
                      : null
                    : null
                }
              />
            );
          })}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDwmWMef1tFyoOOz8DiWqZdVwetRP6TemQ"
})(GoogleMap);
