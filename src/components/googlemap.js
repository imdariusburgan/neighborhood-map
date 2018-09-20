import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.myRef = [];
    this.state = {
      showingInfoWindow: false,
      activeMarker: this.props.activeMarker,
      selectedPlace: {},
      animation: null,
      selectedListItem: ""
    };
  }

  componentDidUpdate() {
    // console.log(this.myRef);
    // this.checkClickedListItem();
  }

  render() {
    const style = {
      height: "400px",
      width: "100%"
    };

    return (
      <div className="map">
        <Map
          google={this.props.google}
          onClick={this.props.mapClick}
          style={style}
          zoom={14}
          initialCenter={{ lat: 41.491076, lng: -81.696053 }}
        >
          {this.props.locations.map((marker, index) => {
            return (
              <Marker
                key={index}
                ref={this.props.setRef}
                onClick={this.props.markerClick}
                name={marker.name}
                title={marker.title}
                position={{
                  lat: marker.lat,
                  lng: marker.lng
                }}
                animation={
                  this.props.activeMarker
                    ? marker.name === this.props.activeMarker.name
                      ? this.props.google.maps.Animation.BOUNCE
                      : null
                    : null
                }
              />
            );
          })}
          <InfoWindow
            marker={this.props.activeMarker}
            visible={this.props.showInfoWindow}
          >
            <div>
              <h1>{this.props.selectedPlace.name}</h1>
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
