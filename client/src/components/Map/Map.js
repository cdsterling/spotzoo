
import React, { Component } from 'react';
import './Map.css';
import mapboxgl from 'mapbox-gl'
import ReactMapGl,{Marker} from "react-map-gl"



class MapOne extends Component {
    state={
        data:[],
        "viewport": {
            width: '100vw',
            height: '100vh',
            latitude: 37.6162,
            longitude: -122.0884,
            zoom: 10
          }
    }


    render(){
        return(

            <ReactMapGl
            {...this.state.viewport}
           mapboxApiAccessToken = {process.env.REACT_APP_TOKEN}
            mapStyle ='mapbox://styles/marby87/ck6j39qkz0i7k1inu9gqqc4o1'
            onViewportChange={this.props.onViewport}>             
    
          </ReactMapGl>


        )
    }
}
export default MapOne


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
