import React, { Component } from 'react';
import Sidebar from '../../SideBar/SideBar.js';
import Map from  '../../Map/Map.js';

import './Home.css';
class Home extends Component {
//PROPS:
//viewport
// mapboxApiAccessToken
// viewportChange
// userLocation
// data
// distance
//
  render(){
    console.log("Home Render function");
    console.log("-->this.props.userLocation:", this.props.userLocation);
    console.log("-->this.props.data:", this.props.data);
    console.log("-->this.props.viewport:", this.props.viewport);

    return (
      <div className="Home">
        <Sidebar
          sideBarFill = "animals"
          animalData = {this.props.data}
        />
        <Map
          viewport={this.props.viewport}
          mapboxApiAccessToken = {this.props.mapboxApiAccessToken}
          onViewportChange = {this.props.onViewportChange}
          userLocation = {this.props.userLocation}
          data = {this.props.data}
          distance = {this.props.distance}  
          onFetch = {this.props.onFetch}       
        />
      </div>
    );
  }
}

export default Home;