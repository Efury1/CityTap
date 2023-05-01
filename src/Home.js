import React from "react";
import {withRouter} from 'react-router';

const Home = () => {
    return (
        <div>
            <h1>Welcome to City Tap</h1>
            <GoogleMapComponent></GoogleMapComponent>
        </div>
    );
};

export default Home;