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
    const { userLocation, viewport, onViewportChange, data, sideBarData, mapboxApiAccessToken, distance, onFetch } = this.props;

    console.log("-->this.props.userLocation:", userLocation);
    console.log("-->this.props.data:", data);
    console.log("-->this.props.viewport:", viewport);

    return (
      <div className="Home">
        <Sidebar
          cardComponent = "SmallCard"
          data = {sideBarData}
        />
        <Map
          viewport={this.props.viewport}
          mapboxApiAccessToken = {mapboxApiAccessToken}
          onViewportChange = {onViewportChange}
          userLocation = {userLocation}
          data = {data}
          distance = {distance}  
          onFetch = {onFetch}       
        />
      </div>
    );
  }
}

export default Home;