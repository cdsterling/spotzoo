import React, { Component } from 'react';

import SmallCard from '../SmallCard/SmallCard.js';

import './SideBar.css';
class Sidebar extends Component {
    render(){

        return(
            <div className="SideBarContainer">
                {this.props.SidebarFill =="animals" ?(
                    
                        this.props.animalData.map((data,index) => (
                            <SmallCard
                                name = {data.animal}
                                timestamp = {data.timestamp}
                                submitted_by = {data.submitter}
                            />
                        ))
                    
                ) : (

                    <div>Empty</div>
                )}

                
                


            </div>
        )
    }

}
export default Sidebar;