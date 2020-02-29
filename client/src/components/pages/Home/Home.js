import React, { Component } from 'react';
import Sidebar from '../../SideBar/SideBar.js';
import Map from  '../../Map/Map.js';

import './Home.css';
class Home extends Component {
  render(){
    const { userLocation, viewport, onViewportChange, data, sideBarData, mapboxApiAccessToken, distance, onFetch } = this.props;
    return (
      <div className="Home">
        <Sidebar
          cardComponent = "SmallCard"
          data = {sideBarData}
          onClick = {this.props.onClick}
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