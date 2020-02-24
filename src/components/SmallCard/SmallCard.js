import React, { Component } from 'react';

import './SmallCard.css';
import {Card, CardMedia, Typography, Subtitle2, CardActions, CardActionArea, CardContent, CardHeader, Collapse, IconButton} from '@material-ui/core';

import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class SmallCard extends Component {

  render() {
    const {emoji, name, timestamp, submittedBy} = this.props;
    return (
    <Card className='SmallCard' square="true">
      <CardActionArea>
      <CardHeader title="Racoon" subheader="Spotted by Kurt on April 21st" style={{paddingBottom: "0"}} />
      <CardContent square={true} className='SmallCard-content'>
        <CardMedia style={{ height: 0, paddingTop: '50%'}} image={require ('./raccoon.jpg')} className="SmallCard-image" />
        <div className='SmallCard-primary'>
          <Typography variant="subtitle2" align="center" gutterBottom className="SmallCard-primary-details">
            He tried to eat me!!!
          </Typography>
        </div>
      </CardContent>
      </CardActionArea>
    </Card>
    );
  }
}

export default SmallCard;


