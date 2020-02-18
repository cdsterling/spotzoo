import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';

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
          <NavBar />
        </div>
        {/* switch/routes go here */}
        <div className="SideBar">
          <Card className="AnimalCard">
            <div className="AnimalCard-thumbnail">
              Image
              Placeholder
            </div>
            <div className="AnimalCard-text">
              <p>Name</p>
              <p>Time</p>
              <p>Reported by</p>
            </div>
          </Card>
          <Card className="AnimalCard">
            <div className="AnimalCard-thumbnail">
              Image
              Placeholder
            </div>
            <div className="AnimalCard-text">
              <p>Name</p>
              <p>Time</p>
              <p>Reported by</p>
            </div>
          </Card>
          <Card className="AnimalCard">
            <div className="AnimalCard-thumbnail">
              Image
              Placeholder
            </div>
            <div className="AnimalCard-text">
              <p>Name</p>
              <p>Time</p>
              <p>Reported by</p>
            </div>
          </Card>
          <Card className="AnimalCard">
            <div className="AnimalCard-thumbnail">
              Image
              Placeholder
            </div>
            <div className="AnimalCard-text">
              <p>Name</p>
              <p>Time</p>
              <p>Reported by</p>
            </div>
          </Card>
          <Card className="AnimalCard">
            <div className="AnimalCard-thumbnail">
              Image
              Placeholder
            </div>
            <div className="AnimalCard-text">
              <p>Name</p>
              <p>Time</p>
              <p>Reported by</p>
            </div>
          </Card>
          <Card className="AnimalCard">
            <div className="AnimalCard-thumbnail">
              Image
              Placeholder
            </div>
            <div className="AnimalCard-text">
              <p>Name</p>
              <p>Time</p>
              <p>Reported by</p>
            </div>
          </Card>
        </div>
        <div className="Map">
          Map
        </div>
      </div>
    );
  }
}

export default App;