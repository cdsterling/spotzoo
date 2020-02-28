import React, { Component } from 'react';
import {Card, CardMedia, Typography, CardActionArea, CardContent, CardHeader} from '@material-ui/core';
import { format } from 'date-fns'
import './SmallCard.css';
import CardImage from '../CardImage/CardImage.js'

class SmallCard extends Component {

  capitalize = (s) => {
    return (s.charAt(0).toUpperCase() + s.slice(1))
  }

  render() {
    const { animal, submittedAt, submitter, comment, onClick } = this.props;
    const animalFormatted = this.capitalize(animal)
    const submitterFormatted = this.capitalize(submitter)
    const submittedAtFormatted = format(Date.parse(submittedAt), "h aa on MMMM do")
    return (
    <Card className='SmallCard' square="true">
      <CardActionArea onClick={onClick} >
      <CardHeader title={animalFormatted} subheader={`Spotted by ${submitterFormatted} at ${submittedAtFormatted}`} style={{paddingBottom: "0"}} />
      <CardContent square={true} className='SmallCard-content'>
        <CardImage animal={animal} />
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


