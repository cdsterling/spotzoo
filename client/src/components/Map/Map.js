import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'
import ReactMapGl, { Marker } from "react-map-gl"
import PetsIcon from "@material-ui/icons/Pets"
import User from "../../user.png"


import './Map.css';



class Map extends Component {

    render() {
        return (
            <div className="MapContainer">
                <ReactMapGl
                    {...this.props.viewport}
                    mapboxApiAccessToken={process.env.REACT_APP_TOKEN}
                    mapStyle='mapbox://styles/marby87/ck6j39qkz0i7k1inu9gqqc4o1'
                    onViewportChange={(viewport) => this.props.onViewportChange(viewport)}>

                    {Object.keys(this.props.userLocation).length !== 0 ? (
                        <Marker
                            className="user"
                            keys="1"
                            latitude={this.props.userLocation.lat}
                            longitude={this.props.userLocation.long}
                        >
                            <img className="location-icon" src={User} />
                        </Marker>
                    ) : (
                            <div>Empty</div>
                        )}

                    {Object.values(this.props.data).length !== 0 ? (
                        this.props.data.map((data, index) => (
                            <Marker
                                className="markers"
                                keys={data._id}
                                id={data._id}
                                latitude={data.latitude}
                                longitude={data.longitude}
                            >
                                <PetsIcon />
                                <br /><span> {data.animal}</span> <br />{this.props.distance[data._id]}   
                            </Marker>

                        ))
                    ) : (
                            <div>Empty</div>
                        )}
                </ReactMapGl>

            </div>

        )
    }
}
export default Map