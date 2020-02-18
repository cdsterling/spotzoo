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