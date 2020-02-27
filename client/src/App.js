import React, { Component } from 'react';
import './App.css';
import mapboxgl from 'mapbox-gl'

import NavBar from './components/NavBar/NavBar.js';
import SmallCard from './components/SmallCard/SmallCard.js';
import Map from './components/Map/Map.js';
import ReactMapGl,{Marker} from "react-map-gl"
import Red from "./red_marker.png"
import User from "./user.png"
import PetsIcon from '@material-ui/icons/Pets';
import { Icon } from '@material-ui/core';
import AddCard from './components/AddCard/AddCard.js';


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
  componentDidMount(){
    
    this.onFetch();  

  }


  render () {
    return (
      <div className="App">
        <div className="NavBarContainer">
          <NavBar 
            homeLink='/'
            contributeLink='/contribute'
          />
        </div>
        {/* switch/routes go here */}
        <div className="SideBarContainer">
          {/* Component Examples */}
          <SmallCard 
            animal={'Racoon'}
            submittedAt={'April 1st at 12pm'}
            submitter={'Chad'}
            comment={'Watch out! A Racoon!'}
            // onClick={}
          />
          <AddCard 
            animal={''}
            animalOptions={['Racoon', 'Bear']}
            submitter={''}
            comment={''}
            // onSubmit={}
          />
        </div>
        <div className="MapContainer">
        <Map 
          viewport={this.state.viewport}
          userLocation={this.state.userLocation}
          data={this.state.data}
          onViewportChange={this.onViewportChange}
          distance={this.state.distance}
        />
        </div>
      </div>
   

);
}
}

export default App;


