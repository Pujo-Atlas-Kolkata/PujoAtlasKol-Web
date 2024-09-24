import { useCallback, useMemo, useState } from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { UserLocation } from './UserLocation';
import { DEFAULT_VIEW_LAT_LONG } from '@/constants/location';
import type { GoogleMapProps } from './types';
import { ClusteredMarkers } from './ClusterMarker';

export const GoogleMaps = ({ apiKey, locations, icon }: GoogleMapProps) => {
  const center = useMemo(() => DEFAULT_VIEW_LAT_LONG, []);
  const zoom = 15;
  const [activeLocationId, setActiveLocationId] = useState<number | null>(null);

  const handleMapClick = useCallback(() => {
    setActiveLocationId(null);
  }, []);

  return (
    <section className="max-w-screen h-[500px] overflow-hidden rounded-[22px] focus:outline-none">
      <APIProvider apiKey={apiKey}>
        <Map
          id="map"
          gestureHandling="greedy"
          defaultZoom={zoom}
          defaultCenter={center}
          mapId="4e06f8f1228c0ba9"
          onClick={handleMapClick}
          className="relative w-full h-full"
        >
          <UserLocation />
          {locations && (
            <ClusteredMarkers
              activeLocationId={activeLocationId}
              locations={locations}
              icon={icon}
            />
          )}
        </Map>
      </APIProvider>
    </section>
  );
};
