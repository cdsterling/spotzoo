import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar.js';
import SmallCard from './components/SmallCard/SmallCard.js';

class App extends Component {

  state = {}

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
            animal="Racoon"
            submittedAt="Feb 24 at 12 pm"
            submitter="Chad"
            comment="Oh shit, a racoon!"
            onClick={() => console.log("hey hey hey")}
          />
          <SmallCard 
            animal="Racoon"
            submittedAt="Feb 24 at 12 pm"
            submitter="Chad"
            comment="Oh shit, a racoon!"
            onClick={() => console.log("hey hey hey")}
          />
          <SmallCard 
            animal="Racoon"
            submittedAt="Feb 24 at 12 pm"
            submitter="Chad"
            comment="Oh shit, a racoon!"
            onClick={() => console.log("hey hey hey")}
          />
          <SmallCard 
            animal="Racoon"
            submittedAt="Feb 24 at 12 pm"
            submitter="Chad"
            comment="Oh shit, a racoon!"
            onClick={() => console.log("hey hey hey")}
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