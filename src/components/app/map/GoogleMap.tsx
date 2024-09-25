import { useEffect, useMemo, useState } from 'react';
import { APIProvider, Map, type MapMouseEvent } from '@vis.gl/react-google-maps';
import { UserLocation } from './UserLocation';
import { DEFAULT_VIEW_LAT_LONG } from '@/constants/location';
import type { GoogleMapProps } from './types';
import { ClusteredMarkers } from './ClusterMarker';
import { CgSpinner } from 'react-icons/cg';

export const GoogleMaps = ({ apiKey, locations, icon }: GoogleMapProps) => {
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    if (locations.length === 0) {
      setError('Unable to find Pujo locations');
    }
  }, [locations]);
  const center = useMemo(() => DEFAULT_VIEW_LAT_LONG, []);
  const zoom = 15;
  const [activeLocationId, setActiveLocationId] = useState<string | null>(null);
  const [isMapLoading, setIsMapLoading] = useState<boolean>(true);

  const handleMapClick = (e: MapMouseEvent) => {
    e.stop();
    setActiveLocationId(null);
  };
  return (
    <>
      {(isMapLoading || !locations) && (
        <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <CgSpinner size={60} className="animate-spin" />
        </div>
      )}
      <section className="max-w-screen overflow-hidden focus:outline-none">
        <APIProvider apiKey={apiKey}>
          <Map
            id="map"
            gestureHandling="greedy"
            defaultZoom={zoom}
            defaultCenter={center}
            mapId="4e06f8f1228c0ba9"
            onClick={(e) => handleMapClick(e)}
            className="relative w-full h-[calc(100vh-21rem)]"
            streetViewControl={false}
            onIdle={() => setIsMapLoading(false)}
          >
            <UserLocation />

            {error !== null ? (
              <div className="rounded-lg mx-auto w-[80%] text-xs !text-red-500 font-bold absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black py-2.5 px-5">
                {error}
              </div>
            ) : (
              <ClusteredMarkers
                activeLocationId={activeLocationId}
                locations={locations}
                icon={icon}
                setActiveLocationId={setActiveLocationId}
              />
            )}
          </Map>
        </APIProvider>
      </section>
    </>
  );
};
