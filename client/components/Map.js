import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const MapComponent = ({ address }) => {
  const [loading, setLoading] = useState(true);
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    const geocodeAddress = () => {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address }, (results, status) => {
        if (status === 'OK') {
          setCoordinates({
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng()
          });
        } else {
          console.error('Geocoding failed:', status);
        }
        setLoading(false);
      });
    };

    if (window.google && window.google.maps) {
      geocodeAddress();
    } else {
      setLoading(false);
    }
  }, [address]);

  const mapStyles = {
    height: '400px',
    width: '100%'
  };

  const textStyles = 'text-xl font-bold text-gray-800 mb-4';
  const darkTextStyles = 'text-white'; 

  const defaultCenter = {
    lat: 0,
    lng: 0
  };

  return (
    <div style={mapStyles} className="my-8">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className={textStyles}>
            <h3 className={darkTextStyles}>¿Dónde vas a estar?</h3> 
            <p  className={`text-lg font-normal my-4 ${darkTextStyles}`}>{address}</p>
          </div>
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={10}
            center={coordinates || defaultCenter}
          >
            {coordinates && <Marker position={coordinates} />}
          </GoogleMap>
        </>
      )}
    </div>
  );
};

export default MapComponent;














