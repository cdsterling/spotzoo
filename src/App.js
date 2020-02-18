import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar.js';
import SmallCard from './components/SmallCard/SmallCard.js';

//Component - Pages
import Welcome from './components/pages/Welcome/Welcome.js';

animal_data = [
    { 
        name: "Lake Goose",
        latitude: 1.22,
        longitude: 3.22,
        time:"7:22 AM",
        animalType: "Goose"
    },
    { 
        name: "Lake Goose",
        latitude: 1.22,
        longitude: 3.22,
        time:"7:22 AM",
        animalType: "Goose"
    },
    { 
        name: "Lake Goose",
        latitude: 1.22,
        longitude: 3.22,
        time:"7:22 AM",
        animalType: "Goose"
    },
    { 
        name: "Lake Goose",
        latitude: 1.22,
        longitude: 3.22,
        spot_time:"7:22 AM",
        animalType: "Goose"
    }


]


class App extends Component {

  state = {
      animal_details: animal_data,
      filter: "",
      highlighted_animal: null,
      animal_name: "",
      animal_latitude: null,
      animal_longitude: null,
      animal_spot_time: null,
      animal_animalType: null

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
          Map
        </div>
      </div>
    );
  }
}

export default App;