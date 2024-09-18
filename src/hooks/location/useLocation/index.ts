import { useEffect, useState } from 'react';

export const useLocation = () => {
  const [location, setLocation] = useState<GeolocationCoordinates | null>(null);
  const [error, setError] = useState<string | null>();

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation(position.coords);
        setError(null);
      },
      (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          setError('Unable to retrieve your location. Please check location permissions.');
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          setError('Location information is unavailable.');
        } else if (error.code === error.TIMEOUT) {
          setError('The request to get user location timed out.');
        } else {
          setError('An unknown error occurred.');
        }

        setTimeout(() => {
          setError(null);
        }, 5000);
      },
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  return { location, error, getLocation };
};
