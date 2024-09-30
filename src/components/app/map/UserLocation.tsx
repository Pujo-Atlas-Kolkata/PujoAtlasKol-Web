import { useMap, AdvancedMarker } from '@vis.gl/react-google-maps';
import { useState, useCallback, useEffect } from 'react';
import { IoMdLocate } from 'react-icons/io';

type UserLocationProps = {
  activeLocationId: string | null;
};

const MyLocation = () => (
  <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow shadow-blue-500 animate-pulse" />
);

export const UserLocation = ({ activeLocationId }: UserLocationProps) => {
  const map = useMap('map');
  const [userLocation, setUserLocation] = useState<google.maps.LatLngLiteral | null>(null);
  const [error, setError] = useState<string | null>(null);

  const goToUserLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        if (!map) return;

        const { latitude, longitude } = position.coords;
        const location = { lat: latitude, lng: longitude };

        setUserLocation(location);

        if (!activeLocationId) {
          map.panTo(location);
          map.setZoom(18);
        }

        setError(null);
      },
      () => {
        setError('Unable to retrieve your location. Please check location permissions.');

        setTimeout(() => {
          setError(null);
        }, 5000);
      },
    );
  }, [activeLocationId, map]);

  // automatically get user location on component mount
  useEffect(() => {
    if (map) {
      goToUserLocation();
    }
  }, [goToUserLocation, map]);

  return (
    <>
      <button
        onClick={goToUserLocation}
        className="absolute top-14 right-[10px] shadow-slate-400 shadow bg-white p-1"
        aria-label="Go to user location"
        disabled={!map} // disable button if map isn't ready
      >
        <IoMdLocate className="w-8 h-8 fill-blue-500" />
      </button>

      {error && (
        <div className="rounded-lg mx-auto w-[80%] text-xs !text-red-500 font-bold absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black py-2.5 px-5">
          {error}
        </div>
      )}

      {userLocation && (
        <AdvancedMarker position={userLocation}>
          <MyLocation />
        </AdvancedMarker>
      )}
    </>
  );
};
