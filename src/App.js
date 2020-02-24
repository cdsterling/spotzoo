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
            emoji={'🐇'}
            name={'Rabbit'}
            timestamp={'10pm on October 21st'}
            submittedBy={'Josh'}
          />
          <SmallCard 
            emoji={'🐇'}
            name={'name'}
            timestamp={'timestamp'}
            submittedBy={'submitted by'}
          />
          <SmallCard 
            emoji={'🐇'}
            name={'name'}
            timestamp={'timestamp'}
            submittedBy={'submitted by'}
          />
          <SmallCard 
            emoji={'🐇'}
            name={'name'}
            timestamp={'timestamp'}
            submittedBy={'submitted by'}
          />
          <SmallCard 
            emoji={'🐇'}
            name={'name'}
            timestamp={'timestamp'}
            submittedBy={'submitted by'}
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