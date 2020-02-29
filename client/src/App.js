import React, { Component } from 'react';
import './App.css';
import mapboxgl from 'mapbox-gl'

import NavBar from './components/NavBar/NavBar.js';

import { Link, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home.js';
import Contribute from './components/pages/Contribute/Contribute.js';



class App extends Component {

  state = {
    animal_details: null,
    filter: "",
    highlighted_animal: null,
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
    animal:"",
    submitter:"",
    comment:"",
    clicked:{}
    
  };
  
  onViewportChange = (viewport) => {
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
            let miles = Math.round(dist * 100) / 100
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
        this.onFetch();
      });
  }

  // Api call grab data from mongodb
  onFetch() {
    let dataOne = []
    fetch('/api/mongodb/markers/')
        .then(res => res.json())
        .then(data => {
          console.log('receiving markers data', data);
          this.setState({data: data});
          this.setUserLocation();
                 
        });
    fetch('/api/mongodb/animals/')
        .then(res => res.json())
        .then(animals => {
          console.log('receiving animals data', animals);
          let animalOptions = animals[0].animals
          animalOptions = animalOptions.sort()
          this.setState({animals: animalOptions});
          })
  }

  // changes state when inputting new animal
  onInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  //Post function// create new markers, store data into database
  submit = () => {
    console.log('submitting new marker');
    const date = new Date();
  
    const formData = {
      animal : this.state.animal,
      latitude: this.state.userLocation.lat,
      longitude: this.state.userLocation.long, 
      comment :this.state.comment,
      submitter : this.state.submitter,
      time : String(date),
    };

    fetch('/api/mongodb/markers/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      })
      .then(response => response.json())
      .then(data => {
        // reset form
        this.setState({
          animal: "", 
          submitter: "", 
          comment: "",
        })
        
        this.onFetch()
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
            viewport.zoom = 15;
            this.setState({viewport})
  
          }
        }
      }
      if (id === this.state.clicked["_id"]){
        let viewport = {...this.state.viewport}
        viewport.longitude = this.state.userLocation.long;
        viewport.latitude = this.state.userLocation.lat;
        viewport.zoom = 12;
        this.setState({viewport})
        this.setState({clicked:{}})

      }

    }
  componentDidMount(){
    this.onFetch();  
  }

  render () {
    if (this.state.data) {
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
                    sideBarData = {this.state.data}
                    distance = {this.state.distance}  
                    onFetch = {() => this.onFetch()}  
                    onClick = {this.onClicked}      
                    />
                  } 
                  />
              <Route 
                render={() => 
                  <Contribute 
                    viewport={this.state.viewport}
                    mapboxApiAccessToken = {process.env.REACT_APP_TOKEN}
                    onViewportChange = {(viewport) => this.onViewportChange(viewport)}
                    userLocation = {this.state.userLocation}
                    data = {this.state.data}
                    sideBarData = {
                      {
                        animalOptions: this.state.animals, 
                        animal: this.state.animal, 
                        submitter: this.state.submitter, 
                        comment: this.state.comment,  
                      }
                    }
                    onInputChange = {this.onInputChange}
                    distance = {this.state.distance}  
                    onFetch = {() => this.onFetch()}       
                    onClick = {this.submit}
                    />
                  } 
                  />
              />
            </Switch>
          </div>
        </div>
      );
    } else {
      return (
        <div> Loading....</div>
      )
    }
    }
  }

export default App;


