import { useCallback, useMemo, useState } from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { UserLocation } from './UserLocation';
import { DEFAULT_VIEW_LAT_LONG } from '@/constants/location';
import type { GoogleMapProps } from './types';
import LocationMarker from './LocationMarker';

export const GoogleMaps = ({ apiKey, locations, icon }: GoogleMapProps) => {
  // memoize center and zoom values to avoid unnecessary recalculations
  const center = useMemo(() => DEFAULT_VIEW_LAT_LONG, []);
  const zoom = 15;
  const [activeLocationId, setActiveLocationId] = useState<number | null>(null);

  const handleMapClick = useCallback(() => {
    // clear active location when map is clicked
    setActiveLocationId(null);
  }, []);

  // memoized LocationMarkers to prevent unnecessary re-renders
  const locationMarkers = useMemo(
    () =>
      locations.map((location) => (
        <LocationMarker
          key={location.id}
          id={location.id}
          name={location.name}
          lat={location.lat}
          lng={location.lng}
          icon={icon}
          activeMarkerId={activeLocationId}
          setActiveMarkerId={setActiveLocationId}
        />
      )),
    [locations, icon, activeLocationId],
  );

  return (
    <section className="h-screen max-w-screen overflow-hidden focus:outline-none">
      <APIProvider apiKey={apiKey}>
        <Map
          id="map"
          gestureHandling="greedy"
          defaultZoom={zoom}
          defaultCenter={center}
          mapId="4e06f8f1228c0ba9"
          onClick={handleMapClick}
          className="relative w-full h-full"
          streetViewControl={false}
        >
          <UserLocation />
          {locationMarkers}
        </Map>
      </APIProvider>
    </section>
  );
};
