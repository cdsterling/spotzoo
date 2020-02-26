import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import NavBar from '../../NavBar/NavBar.js';
import SmallCard from '../../SmallCard/SmallCard.js';

import './Contribute.css';
class Contribute extends Component {

    render(){
        return (
            <div className="Home">
              <div className="NavBarContainer">
                <NavBar 
                  homeLink='/'
                  contributeLink='/contribute'
                />
              </div>
            </div>
        );
    }

}

export default Contribute;