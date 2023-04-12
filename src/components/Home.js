import React, { Component } from "react";
import Button from './Button';
 
class Home extends Component {
  render() {
    return (
        <div>
            <input type="text" placeholder="Search Place"/>
            <Button>Place</Button>
        </div>
    );
  }
}
 
export default Home;