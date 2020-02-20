import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar.js';
import SmallCard from './components/SmallCard/SmallCard.js';
import ReactMapGl,{Marker} from "react-map-gl"
import Red from "./red_marker.png"
import User from "./user.png"

//Component - Pages
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
    };
  

  onViewportChange = viewport => {
    this.setState({viewport});
  }

  setUserLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
       let setUserLocation = {
           lat: position.coords.latitude,
           long: position.coords.longitude
        };
        this.setState({
          userLocation: setUserLocation,
       });
       this.state.viewport.latitude = position.coords.latitude;
       this.state.viewport.longitude = position.coords.longitude;
    });
  };
  

  onFetch() {
    console.log('runing')
    let dataOne = []
    fetch('/api/mongodb/markers/')
        .then(res => res.json())
        .then(data => this.setState({data}, () => console.log('data fetched...', data)));
    }

  onChangeContent = (ev) => {
    this.setState({
      name : ev.target.value,
    });
  }

    
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
    this.setUserLocation();
    this.onFetch();

  }


  render () {
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
            keys={data.id}
            id={data.id}
            latitude={data.latitude}
            longitude={data.longitude}
            
            >
            <img className = "location-icon" src={Red}/>
            {data.animal}</Marker>
  
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