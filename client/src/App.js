import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import mapboxgl from 'mapbox-gl'
import ReactMapGl,{Marker} from "react-map-gl"
import Red from "./red_marker.png"
import User from "./user.png"

import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import SmallCard from './components/SmallCard/SmallCard.js';

import Home from './components/pages/Home/Home.js';
import Contribute from './components/pages/Contribute/Contribute.js';
import Spotting from './components/pages/Spotting/Spotting.js';

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
      distance : []
      
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
          distance : distanceOne
        })
        console.log(this.state.distance)
        this.setState({
          userLocation: setUserLocation,
       });
       this.state.viewport.latitude = position.coords.latitude;
       this.state.viewport.longitude = position.coords.longitude;
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
          this.setState({data});
          console.log(dataOne)

          this.setUserLocation();
          
                 
        });
      }

  onChangeContent = (ev) => {
    this.setState({
      name : ev.target.value,
    });
  }

  //Post function// create new markers, store data into database
  submit = () => {
      var date = new Date();
    
      const formData = {

        animal : this.state.name,
        latitude: this.state.userLocation.lat,
        longitude: this.state.userLocation.long, 
        date : date,
        comment :this.state.comment,
        submitter : this.state.submitter,

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
    
    
    return (
      <div className="App">
        <nav className="App-navigation">
            <h1 className="App-title">Test</h1>
            {/* <Link to="/">Home</Link>
            <Link to="/contribute/">Contribute</Link>
            <Link to="/spotting/">Spotting</Link> */}
        </nav>
        <div className="App-mainContent">
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/contribute/' component={Contribute} />
                <Route exact path='/spotting/' component={Spotting} />
            </Switch>
        </div>                
      </div>
    );
  }
}

export default App;