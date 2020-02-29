import React, { Component } from 'react';
import {Card, Typography, CardActions, CardActionArea, CardContent, CardHeader, TextField, FormControl, InputLabel, Select, MenuItem, Button} from '@material-ui/core';

import CardImage from '../CardImage/CardImage.js'
import './AddCard.css';

class AddCard extends Component {

    handleSubmit = () => {
        console.log("submitted");
    }

    render() {
        const { animal, animalOptions, submitter, comment, onSubmit, onInputChange } = this.props;

        return (
        <Card className='AddCard' square="true">
        <CardContent square={true} className='AddCard-content'>
            <CardHeader title="Spotted Something?"  />
            <div className='AddCard-primary'>
            <CardImage animal={animal} />
            <form onSubmit={this.handleSubmit} className='AddCard-primary' >
                <FormControl variant="outlined" style={{marginBottom: "1rem"}}>
                    <InputLabel id="label" required style={{backgroundColor: "white"}}>
                        Animal
                    </InputLabel>
                    <Select
                        name="animal"
                        value={animal}
                        onChange={(event) => onInputChange(event)}
                        labelId="label" 
                        id="select"
                    >
                    {animalOptions.map( option => 
                        (<MenuItem value={option}>{option}</MenuItem>)
                    )}
                    </Select>
                </FormControl>
                <TextField id="firstName" required label="First Name" variant="outlined" fullWidth value={submitter} onChange={(event) => onInputChange(event)}  style={{marginBottom: "1rem"}} />
                <TextField id="comment" label="Comment" variant="outlined" style={{marginBottom: "1rem"}} fullWidth value={comment} onChange={(event) => onInputChange(event)} />
                <Button variant="contained" color="primary" type="submit" fullWidth >
                    Submit
                </Button>

            </form>

            </div>
        </CardContent>
        </Card>
        );
    }
}

export default AddCard;