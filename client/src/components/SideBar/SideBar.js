import React, { Component } from 'react';

import SmallCard from '../SmallCard/SmallCard.js';

import './SideBar.css';
class Sidebar extends Component {
    render(){
        console.log("Entering Sidebar render method");
        return(
            <div className="SideBarContainer">
                { 
                this.props.animalData.map((data) => (
                    <SmallCard
                        animal = {data.animal}
                        submittedAt ={data.time}
                        submitter = {data.submitter}
                        comment = {data.comment}
                    />
                ))
                }
            </div>
        )
    }
}
export default Sidebar;