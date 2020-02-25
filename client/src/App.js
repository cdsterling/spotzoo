import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'


import NavBar from './components/NavBar/NavBar.js';
import SmallCard from './components/SmallCard/SmallCard.js';
import MapOne from './components/Map/Map.js';

import mapboxgl from 'mapbox-gl'

import ReactMapGl,{Marker} from "react-map-gl"
import Red from "./red_marker.png"
import User from "./user.png"
import PetsIcon from '@material-ui/icons/Pets';
import { Icon } from '@material-ui/core';

import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import SmallCard from './components/SmallCard/SmallCard.js';

import Home from './components/pages/Home/Home.js';
import Contribute from './components/pages/Contribute/Contribute.js';
import Spotting from './components/pages/Spotting/Spotting.js';
const MAPBOX_TOKEN = process.env.REACT_APP_TOKEN;

class App extends Component {

  state = {
      animal_details: null,
      filter: "",
      highlighted_animal: null,
      animal_name: "",
      animal_latitude: null,
      animal_longitude: null,
      animal_spot_time: null,
      animal_animalType: null,
      "viewport": {
        width: '100vw',
        height: '100vh',
        latitude: 37.6162,
        longitude: -122.0884,
        zoom: 10
      },
      userLocation : {},
      data:[],
      distance : [],
      animals:[],
      animal:"name",
      submitter:"submitter",
      comment:"comment"
      
    };
  
  onViewportChange = viewport => {
    this.setState({viewport});
  }
  // User location function
  setUserLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
       let setUserLocation = {
           lat: position.coords.latitude,
           long: position.coords.longitude
        }; 
        // distance to markers
        let distanceOne = {}
        for (let i of this.state.data ){
            let k = new mapboxgl.LngLat(i.longitude, i.latitude);
            let s = new mapboxgl.LngLat(setUserLocation.long, setUserLocation.lat)
            let dist = k.distanceTo(s)* 0.000621
            let miles = (Math.max( Math.ceil(dist * 10) / 10, 2.8 ))
            let id = i["_id"];
            distanceOne[id] = miles;     
          } 
        this.setState({
          distance : distanceOne,
          userLocation: setUserLocation,
          viewport: {
            latitude :position.coords.latitude,
            longitude : position.coords.longitude
          }

        });
        
    });
  };    
    
  // DELETE function,
  deleteMarker(documentId) {
    fetch('/api/mongodb/markers/?_id=' + documentId, {
        method: 'DELETE',
      })
      .then(response => response.json())
      .then(data => {
        console.log('Got this back', data);
        this.onFetch();
      });
  }

  // Api call grab data from mongodb

  // this.setState({data}, () => console.log('data fetched...', data)
  //       dataOne.push(data);
  onFetch() {
    console.log('runing')
    let dataOne = []
    fetch('/api/mongodb/markers/')
        .then(res => res.json())
        .then(data => {
          console.log('receiving data', data);
          dataOne.push(data);
        //   this.setState({data});
          console.log(dataOne)

          this.setUserLocation();
          
                 
        });
    fetch('/api/mongodb/animals/')
        .then(res => res.json())
        .then(animals => {
          console.log('receiving data', animals);
          this.setState({animals});
          console.log(animals)
          })
  }

  onChangeContent = (ev) => {
    this.setState({
      animal : ev.target.value,
    });
  }
  onChangeSubmitter = (ev) => {
    this.setState({
      submitter : ev.target.value,
    });
  }
  onChangeComment = (ev) => {
    this.setState({
      comment : ev.target.value,
    });
  }

  //Post function// create new markers, store data into database
  submit = () => {
      var date = new Date();
    
      const formData = {

        animal : this.state.animal,
        latitude: this.state.userLocation.lat,
        longitude: this.state.userLocation.long, 
        comment :this.state.comment,
        submitter : this.state.submitter,
        time : String(date),
        emoji:"\u2728"

      };
      console.log(this.state.name)
  
      fetch('/api/mongodb/markers/', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Got this back', data);
  
        });
  }
  componentDidMount(){
    
    this.onFetch();  

  }


  render () {
    const One = Object.keys(this.state.userLocation).length
    
    
    return (
      <div className="App">


        <div className="NavBarContainer">
          <NavBar 
            homeLink='/'
            contributeLink='/contribute'
          />
        </div>
        {/* <div className="App-mainContent">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/contribute/' component={Contribute} />
            <Route exact path='/spotting/' component={Spotting} />
          </Switch>
        </div> */}
        
        <div className="SideBarContainer">

          {/* {
            this.state.animal_details.map( animal => (
              <SmallCard 
              emoji={'🐇'}
              name={animal.name}
              timestamp={animal.time}
              submitted_by={animal.spotter}
              />
            )
          )} */}
          <SmallCard 
            emoji={'🐇'}
            name={'name'}
            timestamp={'timestamp'}
            submitted_by={'submitted by'}
          />
          
        </div>

        <div className="MapContainer">

                <ReactMapGl
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
                    <PetsIcon/>

                    {this.state.distance[data._id]} <br/> {data.animal}  </Marker>

                  ))
                ) : (
                  <div>Empty</div>
                )}

                </ReactMapGl>
        
       
  </div>
  <div className="form">
  <form>
    <label>
      Name:
      <input type="text" name="animal" value={this.state.animal} onChange={this.onChangeContent}/>
    </label>
    <label>
      Comment:
      <input type="text" name="comment" value={this.state.comment} onChange={this.onChangeComment}/>
    </label>
    <label>
      submitter:
      <input type="text" name="submitter" value={this.state.submitter} onChange={this.onChangeSubmitter}/>
    </label>
    <input type="submit" value="Submit" onClick ={this.submit} />
  </form>
</div>
</div>
);

}
}

export default App;


  // <ReactMapGl
  // {...this.state.viewport}
  // mapboxApiAccessToken = {process.env.REACT_APP_TOKEN}
  // mapStyle ='mapbox://styles/marby87/ck6j39qkz0i7k1inu9gqqc4o1'
  // onViewportChange={(viewport) => this.onViewportChange(viewport)}> 

  // {Object.keys(this.state.userLocation).length !== 0 ? (
  //   <Marker
  //     className="user"
  //     keys ="1"
  //     latitude={this.state.userLocation.lat}
  //     longitude={this.state.userLocation.long}
  //   >
    
  //     <img className = "location-icon" src={User}/>
  //   </Marker>
  // ) : ( 
  //   <div>Empty</div>
  // )}

  // {Object.values(this.state.data).length !==0 ?(
  //   this.state.data.map((data,index) => (
  //   <Marker
  //     className = "markers"
  //     keys={data._id}
  //     id={data._id}
  //     latitude={data.latitude}
  //     longitude={data.longitude}
      
  //     >
  //     <img className = "location-icon" src={data.emoji}/>

  //     {this.state.distance[data._id]} <br/> {data.animal}  </Marker>

  //   ))
  // ) : (
  //   <div>Empty</div>
  // )}

  // </ReactMapGl>



              // <MapOne          
              // onViewport ={(viewport) => this.onViewportChange(viewport)}

              // userLat ={this.state.userLocation.lat}
              // userLong ={this.state.userLocation.long}
              // User ={Red}
              // />