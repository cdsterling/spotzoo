import React, { Component } from 'react';
import {CardMedia} from '@material-ui/core';

// ["deer","cat","dog","raccoon","squirrel","snake","possum","lion","goose","turkey","bird","pelican","vulture","eagle","falcon","hawk","dove","crow","blackbird","blue jay","mouse","rat","frog","owl","bat","coyote","weasel","beaver","rabbit","ferret","stoat","skunk","fox","lizard","cougar","bobcat","sea lion","turtle","bear"]

class CardImage extends Component {

  render() {
    const { animal } = this.props;
    return (
        <CardMedia 
            style={{ height: 0, paddingTop: '50%'}} 
            image={require ("./images/" + animal + ".jpg")} 
            className="SmallCard-image" 
        />
    );
  }
}

export default CardImage;


