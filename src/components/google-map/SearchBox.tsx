import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const SearchBox = ({ placeholder, onPlacesChanged }: any) => {
  const inputEl = useRef(null);
  let searchBox: google.maps.places.SearchBox;
  useEffect(() => {
    const input = ReactDOM.findDOMNode(inputEl.current) as any;
    searchBox = new google.maps.places.SearchBox(input);
    searchBox.addListener('places_changed', handlePlacesChanged);

    return () => google.maps.event.clearInstanceListeners(searchBox);
  }, []);

  const handlePlacesChanged = () => {
    if (onPlacesChanged) {
      const place = searchBox.getPlaces()[0];
      const lat = place.geometry?.location?.lat();
      const lng = place.geometry?.location?.lng();
      onPlacesChanged({ lat, lng });
    }
  };

  return <input className="google-map__searchbox" ref={inputEl} placeholder={placeholder} type="text" />;
};

export default SearchBox;
