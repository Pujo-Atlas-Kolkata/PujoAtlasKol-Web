import { useCallback, useMemo, useState } from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { UserLocation } from './UserLocation';
import { DEFAULT_VIEW_LAT_LONG } from '@/libs/config';
import type { GoogleMapProps } from './types';
import PandalMarker from './PandalMarker';

export const GoogleMaps = ({ apiKey, pandals }: GoogleMapProps) => {
  // memoize center and zoom values to avoid unnecessary recalculations
  const center = useMemo(() => DEFAULT_VIEW_LAT_LONG, []);
  const zoom = 15;
  const [activePandalId, setActivePandalId] = useState<number | null>(null);

  const handleMapClick = useCallback(() => {
    // clear active pandal when map is clicked
    setActivePandalId(null);
  }, []);

  // memoized PandalMarkers to prevent unnecessary re-renders
  const pandalMarkers = useMemo(
    () =>
      pandals.map((pandal) => (
        <PandalMarker
          key={pandal.id}
          id={pandal.id}
          name={pandal.name}
          lat={pandal.lat}
          lng={pandal.lng}
          activePandalId={activePandalId}
          setActivePandalId={setActivePandalId}
        />
      )),
    [pandals, activePandalId],
  );

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
          {pandalMarkers}
        </Map>
      </APIProvider>
    </section>
  );
};
