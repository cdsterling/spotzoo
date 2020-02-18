import React, { Component } from 'react';
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


import MapIcon from '@material-ui/icons/Map';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import SearchIcon from '@material-ui/icons/Search';

class App extends Component {

  state = {}

  render () {
    return (
      <div className="App">
        {/* Links go here */}
        <div className="NavBar">
          <AppBar position="static">
            <Toolbar className="NavBar-toolbar">
              <IconButton edge="start" className="NavBar-map" color="inherit" aria-label="map">
                <MapIcon />
              </IconButton>
              <Typography variant="h6" className="NavBar-title">
                SpotZoo
              </Typography>         
              <IconButton edge="end" className="NavBar-add" color="inherit" aria-label="add">
                <AddLocationIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
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