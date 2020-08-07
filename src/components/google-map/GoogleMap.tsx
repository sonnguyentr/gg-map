import GoogleMapReact from 'google-map-react';
import React, { useState } from 'react';
import SearchBox from './SearchBox';

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

const GoogleMap = ({ center = { lat: 29.7350902, lng: -95.6432177 }, zoom = 20 }) => {
  const [isLoaded, setLoaded] = useState(false);
  const [location, setLocation] = useState(center);

  const handlePlaceChange = (data: any) => {
    setLocation(data);
  };

  const handleGoogleMapApi = (google: any) => {
    setLoaded(true);
    console.log('connected');
    const map = google.map;
    const drawingManager = new google.maps.drawing.DrawingManager({
      drawingMode: google.maps.drawing.OverlayType.POLYGON,
      drawingControl: false,
      polygonOptions: {
        strokeColor: '#fe8002',
        strokeOpacity: 1,
        fillColor: '#038001b8',
        fillOpacity: 0.35,
        editable: true,
      },
    });

    google.maps.event.addListener(drawingManager, 'polygoncomplete', (polygon: any) => {
      drawingManager.setMap(null);
    });
    drawingManager.setMap(map);
  };

  return (
    <div className="google-map__container">
      {isLoaded && <SearchBox onPlacesChanged={handlePlaceChange} placeholder="Write your address here" />}
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyDqYyim-lkhPZeJpfagLj42OhqMOQiuhfs',
          libraries: ['drawing', 'places'].join(','),
        }}
        center={location}
        zoom={zoom}
        options={{ mapTypeId: 'satellite' }}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={handleGoogleMapApi}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
