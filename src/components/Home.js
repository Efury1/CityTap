import React, { Component } from "react";
import Button from './Button';
import GoogleMapComponent from './googleMap'
 
class Home extends Component {
  render() {
    return (
      <>
      <h1>City Tap</h1>
        <div class="box">
            <GoogleMapComponent/>
        </div>
        </>
    );
  }
}
 
export default Home;