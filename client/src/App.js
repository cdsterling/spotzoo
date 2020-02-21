import React, { Component } from 'react';
import './App.css';
import mapboxgl from 'mapbox-gl'

import NavBar from './components/NavBar/NavBar.js';
import SmallCard from './components/SmallCard/SmallCard.js';
import ReactMapGl,{Marker} from "react-map-gl"
import Red from "./red_marker.png"
import User from "./user.png"

// Component - Pages
// import Welcome from './components/pages/Welcome/Welcome.js';

// animal_data = [
//     { 
//         name: "Lake Goose",
//         latitude: 1.22,
//         longitude: 3.22,
//         time:"7:22 AM",
//         animalType: "Goose"
//     },
//     { 
//         name: "Lake Goose",
//         latitude: 1.22,
//         longitude: 3.22,
//         time:"7:22 AM",
//         animalType: "Goose"
//     },
//     { 
//         name: "Lake Goose",
//         latitude: 1.22,
//         longitude: 3.22,
//         time:"7:22 AM",
//         animalType: "Goose"
//     },
//     { 
//         name: "Lake Goose",
//         latitude: 1.22,
//         longitude: 3.22,
//         spot_time:"7:22 AM",
//         animalType: "Goose"
//     }


// ]


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
      distance : {}
      
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
        let distanceOne = []
        for (let i of this.state.data ){
            let k = new mapboxgl.LngLat(i.longitude, i.latitude);
            let s = new mapboxgl.LngLat(setUserLocation.long, setUserLocation.lat)
            let dist = k.distanceTo(s)* 0.000621
            let miles = (Math.max( Math.ceil(dist * 10) / 10, 2.8 ))
            let id = i["_id"];
            distanceOne.push({ [id] : miles })      
          } 
        this.setState({
          distance : distanceOne
        })
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
    console.log(this.state.distance)
    
    
    return (
      <div className="App">
        {/* Links go here */}
        <div className="NavBarContainer">
          <NavBar 
            homeLink='/'
            contributeLink='/contribute'
          />
        </div>
        {/* switch/routes go here */}
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
            <img className = "location-icon" src={Red} 
            />
            {data.animal} {this.state.distance[data._id]}</Marker>
  
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

export default App;