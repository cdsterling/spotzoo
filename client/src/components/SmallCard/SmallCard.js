import React, { Component } from 'react';

import './SmallCard.css';
import Card from '@material-ui/core/Card';

class SmallCard extends Component {
  render() {
    const {emoji, name, timestamp, submitted_by} = this.props;
    return (
    <Card className="SmallCard">
        <div className="SmallCard-thumbnail">
            {emoji}
        </div>
        <div className="SmallCard-text">
          <p>{this.props.name}, {name}</p>
          <p>{timestamp}</p>
          <p>{submitted_by}</p>
        </div>
    </Card>
    );
  }
}

export default SmallCard;
