import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar.js';
import SmallCard from './components/SmallCard/SmallCard.js';
import AddCard from './components/AddCard/AddCard.js';

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
          <AddCard 
            animalOptions={["Racoon", "Frog"]}
            submitter="Chad"
            comment="Oh shit, a racoon!"
            onSubmit={() => console.log("hey hey hey")}
          />
        </div>
        <div className="MapContainer">
          
        </div>
      </div>
    );
  }
}

export default App;