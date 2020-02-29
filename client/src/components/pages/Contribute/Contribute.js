import React, { Component } from 'react';
import Sidebar from '../../SideBar/SideBar.js';
import Map from  '../../Map/Map.js';
import './Contribute.css';


class Contribute extends Component {

render(){
    console.log("Contribute Render function");
    const { userLocation, viewport, onViewportChange, data, sideBarData, mapboxApiAccessToken, distance, onFetch, onInputChange } = this.props;

    console.log("-->this.props.userLocation:", userLocation);
    console.log("-->this.props.data:", data);
    console.log("-->this.props.viewport:", viewport);

    return (
      <div className="Contribute">
        <Sidebar
          cardComponent = "AddCard"
          data = {sideBarData}
          onInputChange = {onInputChange}
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