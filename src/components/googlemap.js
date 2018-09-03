import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class GoogleMap extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    animation: null
  };

  markerHighlight = marker => {
    console.log(marker);
  };

  onMarkerClick = (props, marker, e) => {
    this.markerHighlight(marker);
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

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
      weight: "100%"
    };

    const locations = [
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
    ];

    return (
      <div className="map">
        <Map
          google={this.props.google}
          onClick={this.onMapClicked}
          style={style}
          zoom={14}
          initialCenter={{ lat: 41.491076, lng: -81.696053 }}
        >
          {locations.map((marker, index) => {
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
