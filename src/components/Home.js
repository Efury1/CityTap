import React, { Component } from "react";
import Button from './Button';
import GoogleMapComponent from './googleMap'
 
class Home extends Component {
  render() {
    return (
        <div class="box">
            <input type="text" placeholder="Search Place"/>
            <Button>Place</Button>
            <GoogleMapComponent/>
        </div>
    );
  }
}
 
export default Home;