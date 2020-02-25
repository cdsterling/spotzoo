import React, { Component } from 'react';

import './SmallCard.css';
import {Card, CardMedia, Typography, Subtitle2, CardActions, CardActionArea, CardContent, CardHeader, Collapse, IconButton} from '@material-ui/core';

class SmallCard extends Component {

  render() {
    const { animal, submittedAt, submitter, comment, onClick } = this.props;
    return (
    <Card className='SmallCard' square="true">
      <CardActionArea onClick={onClick} >
      <CardHeader title={animal} subheader={`Spotted by ${submitter} on ${submittedAt}`} style={{paddingBottom: "0"}} />
      <CardContent square={true} className='SmallCard-content'>
        <CardMedia style={{ height: 0, paddingTop: '50%'}} image={require ('./racoon.jpg')} className="SmallCard-image" />
        <div className='SmallCard-primary'>
          <Typography variant="subtitle2" align="center" gutterBottom className="SmallCard-primary-details">
            {comment}
          </Typography>
        </div>
      </CardContent>
      </CardActionArea>
    </Card>
    );
  }
}

export default SmallCard;


