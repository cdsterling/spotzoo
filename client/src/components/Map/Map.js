import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'
import ReactMapGl, { Marker } from "react-map-gl"
import PetsIcon from "@material-ui/icons/Pets"
import User from "../../user.png"
// import ReactMapGl from "react-map-gl"


import './Map.css';



class Map extends Component {

    componentDidMount(){
    
        this.props.onFetch();  
    
      }

    render() {
        console.log("Entering Map render");
        console.log("--> this.props.data", this.props.data)
        console.log("--this.props.viewport:", this.props.viewport)
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


// <ReactMapGl
// {...this.state.viewport}
// mapboxApiAccessToken = {process.env.REACT_APP_TOKEN}
// mapStyle ='mapbox://styles/marby87/ck6j39qkz0i7k1inu9gqqc4o1'
// onViewportChange={(viewport) => this.onViewportChange(viewport)}> 

// {Object.keys(this.state.userLocation).length !== 0 ? (
//   <Marker
//     className="user"
//     keys ="1"
//     latitude={this.state.userLocation.lat}
//     longitude={this.state.userLocation.long}
//   >

//     <img className = "location-icon" src={User}/>
//   </Marker>
// ) : ( 
//    <div>Empty</div>
// )}

// {Object.values(this.state.data).length !==0 ?(
//   this.state.data.map((data,index) => (
//   <Marker
//     className = "markers"
//     keys={data._id}
//     id={data._id}
//     latitude={data.latitude}
//     longitude={data.longitude}

//     >
//     <img className = "location-icon" src={Red} 
//     />
//     {this.state.distance[data._id]} <br/> {data.animal}  </Marker>

//   ))
// ) : (
//   <div>Empty</div>
// )}


// </ReactMapGl>



   //   <Marker
            //     className="user"
            //     keys ="1"
            //     latitude={this.props.userLat}
            //     longitude={this.props.userLong}
            //   >

            //     <img className = "location-icon" src={this.props.User}/>
            //   </Marker>


            //   <Marker
            //     className = "markers"
            //     keys={this.props.keys}
            //     id={this.props.id}
            //     latitude={this.props.latitude}
            //     longitude={this.props.longitude}

            //     >
            //     <img className = "location-icon" src={this.props.Red} 
            //     />
            //     </Marker>



            // {Object.keys(this.state.viewport).length !==0 ? (
            //     <Marker
            //     className="user"
            //     keys ="1"
            //     latitude={this.props.userLat}
            //     longitude={this.props.userLong}
            //     >  
            //     <img className = "location-icon" src={this.props.User} />

            // ):(

            //     <div>Empty</div>
            // )

            // </Marker>



        //     <ReactMapGl
        //     {...this.state.viewport}
        //    mapboxApiAccessToken = {process.env.REACT_APP_TOKEN}
        //     mapStyle ='mapbox://styles/marby87/ck6j39qkz0i7k1inu9gqqc4o1'
        //     onViewportChange={this.props.onViewport}>  



        //   </ReactMapGl>
