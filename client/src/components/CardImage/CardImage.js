import React, { Component } from 'react';
import {CardMedia} from '@material-ui/core';

// ["","","","","","","","","","","","","","","","","","","","","","","turtle","bear"]

class CardImage extends Component {

  render() {
    const { animal } = this.props;
    if (animal !== "") {
      return (
          <CardMedia 
              style={{ height: 0, paddingTop: '50%'}} 
              image={require ("./images/" + animal.replace(" ", "_") + ".jpg")} 
              className="CardImage" 
          />
      );
    } else {
      return (
        <empty />
      )
    }
  }
}

export default CardImage;


