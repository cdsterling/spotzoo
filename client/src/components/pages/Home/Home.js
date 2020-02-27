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

        return (
            <div className="Home">
              <div className="SideBarContainer HOMEJS">
                <Sidebar
                    sideBarFill = "animals"
                    animalData = {this.props.data}
                />

              </div>
              <Map
                    viewport={this.props.viewport}
                    mapboxApiAccessToken = {this.props.mapboxApiAccessToken}
                    onViewportChange = {this.props.onViewportChange}
                    userLocation = {this.props.userLocation}
                    data = {this.props.data}
                    distance = {this.props.distance}  
                    onFetch = {this.props.onFetch}       
                  />
              />
              {/* <div className="MapContainer">
              <ReactMapGl
                {...this.props.viewport}
                mapboxApiAccessToken = {this.props.mapboxApiAccessToken}
                mapStyle ='mapbox://styles/marby87/ck6j39qkz0i7k1inu9gqqc4o1'
                onViewportChange={(viewport) => this.props.onViewportChange(viewport)}> 
              
              {Object.keys(this.props.userLocation).length !== 0 ? (
                <Marker
                  className="user"
                  keys ="1"
                  latitude={this.props.userLocation.lat}
                  longitude={this.props.userLocation.long}
                >
                
                  <img className = "location-icon" src={User}/>
                </Marker>
              ) : ( 
                 <div>SHIT</div>
              )}
      
              {Object.values(this.props.data).length !==0 ?(
                this.props.data.map((data,index) => (
                <Marker
                  className = "markers"
                  keys={data._id}
                  id={data._id}
                  latitude={data.latitude}
                  longitude={data.longitude}
                  
                  >
                  <img className = "location-icon" src={Red} 
                  />
                  {this.props.distance[data._id]} <br/> {data.animal}  </Marker>
        
                ))
              ) : (
                <div>SHIT</div>
              )}
                
      
            </ReactMapGl>
              </div> */}
            </div>
          );
        
    }

}

export default Home;