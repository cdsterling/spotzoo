import React, { Component } from 'react';

import SmallCard from '../SmallCard/SmallCard.js';
import AddCard from '../AddCard/AddCard.js';

import './SideBar.css';
class Sidebar extends Component {
    render(){
        const { cardComponent, data, onClick, onInputChange } = this.props;

        if (cardComponent === "SmallCard") {
            return(
                <div className="SideBarContainer">
                { 
                data.map((data) => (
                    <SmallCard
                        animal = {data.animal}
                        submittedAt ={data.time}
                        submitter = {data.submitter}
                        comment = {data.comment}
                        onClick = {onClick}
                    />
                ))
                }
                </div>
            )
            
        } else {
            return(
                <div className="SideBarContainer">
                    <AddCard
                        animalOptions = {data.animalOptions}
                        animal = {data.animal}
                        submitter = {data.submitter}
                        comment = {data.comment}
                        onSubmit = {onClick}
                        onInputChange = {onInputChange}
                    />
                </div>
            )
        }
    }
}
export default Sidebar;