import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MapIcon from '@material-ui/icons/Map';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import SearchIcon from '@material-ui/icons/Search';

import './NavBar.css';
class NavBar extends Component {
  render() {
    return (
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
    );
  }
}

export default NavBar;
