import React, { useCallback, useRef } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const mapContainerStyle = {
  height: "50vh",
  width: "90vh",
};

const options = {
  disableDefaultUI: true,
  zoomControl: true
};

export default function GoogleMapComponent() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDi0pLESQUMwb_nz2e_YiYhYblAO05DKM4"
  });

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);
 
  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <GoogleMap
      id="map"
      mapContainerStyle={mapContainerStyle}
      zoom={8} 
      //margin={[50, 50, 50, 50]}
      center={{
        lat: -34.397,
        lng: 150.644,
      }} 
      options={options}
      onLoad={onMapLoad}
    >
    
    </GoogleMap>
  );
}
