import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MapIcon from '@material-ui/icons/Map';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import SearchIcon from '@material-ui/icons/Search';

import './NavBar.css';
const style = {
  background : '#858363', 
};

class NavBar extends Component {
  render() {
    const {homeLink, contributeLink} = this.props;
    return (
    <AppBar position="static" style={style} elevation={0} >
        <Toolbar className="NavBar-toolbar">
        <IconButton edge="start" className="NavBar-map" color="inherit" aria-label="map" href={homeLink}>
            <MapIcon />
        </IconButton>
        <h3 className="NavBar-title">
            SpotZoo
        </h3>         
        <IconButton edge="end" className="NavBar-add" color="inherit" aria-label="add" href={contributeLink}>
            <AddLocationIcon />
        </IconButton>
        </Toolbar>
    </AppBar>
    );
  }
}

export default NavBar;
