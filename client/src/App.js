import React, { Component } from 'react';
import './App.css';
import mapboxgl from 'mapbox-gl'

import NavBar from './components/NavBar/NavBar.js';
import SmallCard from './components/SmallCard/SmallCard.js';
import MapOne from './components/Map/Map.js';
import ReactMapGl,{Marker} from "react-map-gl"
import Red from "./red_marker.png"
import User from "./user.png"
import PetsIcon from '@material-ui/icons/Pets';
import { Icon } from '@material-ui/core';
import AddCard from './components/AddCard/AddCard.js';

import { Link, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home.js';
import Contribute from './components/pages/Contribute/Contribute.js';



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
    viewport: {
      width: '100vw',
      height: '100vh',
      latitude: 37.6162,
      longitude: -122.0884,
      zoom: 13
    },
    userLocation : {},
    data:[],
    distance : [],
    animals:[],
    animal:"name",
    submitter:"submitter",
    comment:"comment",
    clicked:{}
    
  };
  
  onViewportChange = (viewport) => {
    console.log("Entering onViewportChange method:", viewport)
    this.setState({viewport});
  }
  // User location function
  setUserLocation = () => {
    console.log("Entering setUserLocaiton method");
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
          distance : distanceOne
        })
        console.log(this.state.distance)
        this.setState({
          userLocation: setUserLocation,
       });
       let viewport = {...this.state.viewport}
       viewport.longitude = setUserLocation.long;
       viewport.latitude = setUserLocation.lat;
       viewport.zoom = 12;
       this.setState({viewport})
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
  onFetch() {
    console.log('entering method onFetch')
    let dataOne = []
    fetch('/api/mongodb/markers/')
        .then(res => res.json())
        .then(data => {
          console.log('receiving markers data', data);
          this.setState({data});
          this.setUserLocation();
                 
        });
    fetch('/api/mongodb/animals/')
        .then(res => res.json())
        .then(animals => {
          console.log('receiving animals data', animals);
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
  // Onclick for smallcards function
    onClicked =(id) => {
      if (Object.keys(this.state.clicked).length === 0 || id !== this.state.clicked["_id"])
      {
        for(let i of this.state.data){
          
          if (id === i._id){
            this.setState({clicked:i})
            console.log(this.state.clicked)
            let viewport = {...this.state.viewport}
            viewport.longitude = i.longitude;
            viewport.latitude = i.latitude;
            viewport.zoom = 17;
            this.setState({viewport})
  
          }
        }
      }
      if (id === this.state.clicked["_id"]){
        let viewport = {...this.state.viewport}
        viewport.longitude = this.state.userLocation.long;
        viewport.latitude = this.state.userLocation.lat;
        viewport.zoom = 17;
        this.setState({viewport})
        this.setState({clicked:{}})

      }

    }
//   componentDidMount(){
//     this.onFetch();  
//   }

  render () {
    return (
      <div className="App">
        <div className="NavBarContainer HOMEJS">
          <NavBar 
            homeLink='/'
            contributeLink='/contribute'
          />
        </div>
        <div className="App-mainContent">
          <Switch>
            <Route 
              exact path='/' 
              render={() => 
                <Home 
                  viewport={this.state.viewport}
                  mapboxApiAccessToken = {process.env.REACT_APP_TOKEN}
                  onViewportChange = {(viewport) => this.onViewportChange(viewport)}
                  userLocation = {this.state.userLocation}
                  data = {this.state.data}
                  distance = {this.state.distance}  
                  onFetch = {() => this.onFetch()}       
                />
              } 
            />
            <Route exact path='/contribute/' component={Contribute} />
          </Switch>
        </div>
      </div>
      );
    }
  }

export default App;


