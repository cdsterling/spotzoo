import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar.js';
import SmallCard from './components/SmallCard/SmallCard.js';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


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