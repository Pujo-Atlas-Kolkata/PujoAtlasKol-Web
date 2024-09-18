import { useMap, AdvancedMarker } from '@vis.gl/react-google-maps';
import { useState, useCallback, useEffect } from 'react';
import { IoMdLocate } from 'react-icons/io';

const MyLocation = () => {
  return (
    <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow shadow-blue-500 animate-pulse" />
  );
};

export const UserLocation = () => {
  const map = useMap('map');
  const [userLocation, setUserLocation] = useState<google.maps.LatLngLiteral | null>(null);

  const goToUserLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (!map) {
          return;
        }
        map.panTo({ lat: position.coords.latitude, lng: position.coords.longitude });
        setUserLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
        map.setZoom(26);
      });
    }
  }, [map, setUserLocation]);

  useEffect(() => {
    goToUserLocation();
  }, [goToUserLocation]);

  return (
    <>
      <button
        onClick={() => goToUserLocation()}
        className="absolute top-14 right-[10px] shadow-slate-400 shadow bg-white p-1"
      >
        <IoMdLocate className="w-8 h-8 fill-blue-500" />
      </button>
      {userLocation && (
        <AdvancedMarker position={userLocation}>
          <MyLocation />
        </AdvancedMarker>
      )}
    </>
  );
};
