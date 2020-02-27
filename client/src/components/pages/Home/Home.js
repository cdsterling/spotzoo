// Home
import React, { Component } from 'react';

import SmallCard from '../../SmallCard/SmallCard.js';
import NavBar from '../../NavBar/NavBar.js';

import ReactMapGl,{Marker} from "react-map-gl"
import Red from "../../../red_marker.png"
import User from "../../../user.png"


import './Home.css';
class Home extends Component {

    render () {
        return (
            <div className="Home">
                <div className="NavBarContainer">
                    <NavBar 
                        homeLink='/'
                        contributeLink='/contribute'
                    />
                </div>       
                <div className="SideBarContainer">
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
                    />
                    <SmallCard 
                    emoji={'🐇'}
                    name={'name'}
                    timestamp={'timestamp'}
                    submitted_by={'submitted by'}
                    />
                </div>
                <div className="MapContainer">
                    {/* <ReactMapGl
                        {...this.state.viewport}
                        mapboxApiAccessToken = {process.env.REACT_APP_TOKEN}
                        mapStyle ='mapbox://styles/marby87/ck6j39qkz0i7k1inu9gqqc4o1'
                        onViewportChange={(viewport) => this.onViewportChange(viewport)}> 

                        {Object.keys(this.state.userLocation).length !== 0 ? (
                            <Marker
                            className="user"
                            keys ="1"
                            latitude={this.state.userLocation.lat}
                            longitude={this.state.userLocation.long}
                            >

                            <img className = "location-icon" src={User}/>
                            </Marker>
                        ) : ( 
                            <div>Empty</div>
                        )}

                        {Object.values(this.state.data).length !==0 ?(
                            this.state.data.map((data,index) => (
                            <Marker
                            className = "markers"
                            keys={data._id}
                            id={data._id}
                            latitude={data.latitude}
                            longitude={data.longitude}

                            >
                            <img className = "location-icon" src={Red} 
                            />
                            {this.state.distance[data._id]} <br/> {data.animal}  </Marker>

                            ))
                        ) : (
                            <div>Empty</div>
                        )}
                    </ReactMapGl> */}
                </div>
            </div>
        );
    }
}
export default Home;