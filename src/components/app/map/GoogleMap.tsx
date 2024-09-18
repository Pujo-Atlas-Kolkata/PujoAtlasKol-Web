import { useCallback, useMemo, useState } from 'react';
import { APIProvider, Map, type MapCameraChangedEvent } from '@vis.gl/react-google-maps';
import { UserLocation } from './UserLocation';
import { DEFAULT_VIEW_LAT_LONG } from '@/libs/config';
import type { GoogleMapProps } from './types';
import PandalMarker from './PandalMarker';

export const GoogleMaps = ({ apiKey, pandals }: GoogleMapProps) => {
  const center = useMemo(() => DEFAULT_VIEW_LAT_LONG, []);
  const zoom = useMemo(() => 15, []);
  const [activePandalId, setActivePandalId] = useState<number | null>(null);

  // Handle clicks on the map to close the active button
  const handleMapClick = useCallback(() => {
    setActivePandalId(null);
  }, []);

  return (
    <section className="max-w-screen h-[500px] overflow-hidden rounded-[22px] focus:outline-none">
      <APIProvider apiKey={apiKey} onLoad={() => console.log('Maps API has loaded.')}>
        <Map
          id="map"
          gestureHandling={'greedy'}
          defaultZoom={zoom}
          defaultCenter={center}
          mapId={'4e06f8f1228c0ba9'}
          onCameraChanged={(ev: MapCameraChangedEvent) =>
            console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
          }
          onClick={handleMapClick}
          className="relative w-full h-full"
        >
          <UserLocation />
          {pandals.map((pandal) => (
            <PandalMarker
              key={pandal.id}
              id={pandal.id}
              name={pandal.name}
              lat={pandal.lat}
              lng={pandal.lng}
              activePandalId={activePandalId}
              setActivePandalId={setActivePandalId}
            />
          ))}
        </Map>
      </APIProvider>
    </section>
  );
};
