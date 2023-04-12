import React, { useState } from 'react';
import {Client} from "@googlemaps/google-maps-services-js";

import { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  render() {
    const { address } = this.props;
    console.log("hi",  this.props.address);
    return (
      <Map
        google={this.props.google}
        zoom={15}
        className="maps"
        initialCenter={{ lat: this.props.lat, lng: this.props.lng }}
        onClick={this.onMapClicked}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={'Current Location'}
          position={{ lat: this.props.lat, lng: this.props.lng }}
        />
      </Map>
        
    );
    
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyCeRHKIdbLhizyMV0D6Gr0rHEPXc427jtE'
})(Maps);
