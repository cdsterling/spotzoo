import React, { Component } from 'react';
import Sidebar from '../../SideBar/SideBar.js';
import Map from  '../../Map/Map.js';
import './Contribute.css';


class Contribute extends Component {

render(){
    const { userLocation, viewport, onViewportChange, data, sideBarData, mapboxApiAccessToken, distance, onFetch, onClick, onInputChange } = this.props;
    return (
      <div className="Contribute">
        <Sidebar
          cardComponent = "AddCard"
          data = {sideBarData}
          onInputChange = {onInputChange}
          onClick = {onClick}
        />
        <Map
          viewport={viewport}
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

export default Contribute;