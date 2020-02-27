import React, { Component } from 'react';

import './AddCard.css';
import {Card, Typography, CardActions, CardActionArea, CardContent, CardHeader, TextField, FormControl, InputLabel, Select, MenuItem, Button} from '@material-ui/core';

class AddCard extends Component {

    state = {
        animal: "",
        submitter: "", 
        comment: "",
    }

    onAnimalChange = (event) => {
        this.setState({
            animal: event.target.value,
        })
    }

    onSubmitterChange = (event) => {
        this.setState({
            submitter: event.target.value,
        })
    }

    onCommentChange = (event) => {
        this.setState({
            comment: event.target.value,
        })
    }

    handleSubmit = () => {
        console.log(this.state)
    }

    render() {
        const { animal, animalOptions, submitter, comment, onSubmit } = this.props;
        return (
        <Card className='AddCard' square="true">
        <CardContent square={true} className='AddCard-content'>
            <CardHeader title="Spotted Something?"  />
            <div className='AddCard-primary'>

            <form onSubmit={this.handleSubmit} className='AddCard-primary' >
                <FormControl variant="outlined" style={{marginBottom: "1rem"}}>
                    <InputLabel id="label" required style={{backgroundColor: "white"}}>
                        Animal
                    </InputLabel>
                    <Select
                        value={this.state.animal}
                        onChange={(event) => this.onAnimalChange(event)}
                        labelId="label" 
                        id="select"
                    >
                    {animalOptions.map( animal => 
                        (<MenuItem value={animal}>{animal}</MenuItem>)
                    )}
                    </Select>
                </FormControl>
                <TextField id="firstName" required label="First Name" variant="outlined" fullWidth value={this.state.submitter} onChange={(event) => this.onSubmitterChange(event)}  style={{marginBottom: "1rem"}} />
                <TextField id="comment" label="Comment" variant="outlined" style={{marginBottom: "1rem"}} fullWidth value={this.state.comment} onChange={(event) => this.onCommentChange(event)} />
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