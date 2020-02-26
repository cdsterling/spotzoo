import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../NavBar/NavBar.js';
import Sidebar from '../../SideBar/SideBar.js';

import SmallCard from '../../SmallCard/SmallCard.js';

import mapboxgl from 'mapbox-gl' 
import ReactMapGl,{Marker} from "react-map-gl"
import Red from "../../../red_marker.png"
import User from "../../../user.png"


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

    state = {

    };

    render(){
        return (
            <div className="Home">
              <div className="NavBarContainer">
                <NavBar 
                  homeLink='/'
                  contributeLink='/contribute'
                />
              </div>
              
              <div className="SideBarContainer">
                <Sidebar
                    sideBarFill = "animals"
                    animalData = {this.props.data}
                />

              
                {/* <SmallCard 
                  emoji={'🐇'}
                  name={'name'}
                  timestamp={'timestamp'}
                  submitted_by={'submitted by'}
                />
                <SmallCard 
                  emoji={'🐇'}
                  name={'name'}
                  timestamp={'timestamp'}
                  submitted_by={'submitted by'}
                />
                <SmallCard 
                  emoji={'🐇'}
                  name={'name'}
                  timestamp={'timestamp'}
                  submitted_by={'submitted by'}
                />
                <SmallCard 
                  emoji={'🐇'}
                  name={'name'}
                  timestamp={'timestamp'}
                  submitted_by={'submitted by'}
                />
                <SmallCard 
                  emoji={'🐇'}
                  name={'name'}
                  timestamp={'timestamp'}
                  submitted_by={'submitted by'}
                /> */}
              </div>
              <div className="MapContainer">
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
                 <div>Empty</div>
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
                <div>Empty</div>
              )}
                
      
            </ReactMapGl>
              </div>
            </div>
          );
        
    }

}

export default Home;