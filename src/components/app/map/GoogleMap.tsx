import { useMemo, useState } from 'react';
import { APIProvider, Map, type MapMouseEvent } from '@vis.gl/react-google-maps';
import { UserLocation } from './UserLocation';
import { DEFAULT_VIEW_LAT_LONG, FETCH_ALL_PANDALS } from '@/constants/location';
import type { GoogleMapProps } from './types';
import { ClusteredMarkers } from './ClusterMarker';
import { CgSpinner } from 'react-icons/cg';
import { useQuery } from '@/hooks';
import type { Location } from './types';

type Result = { result: Location[] };

export const GoogleMaps = ({ apiKey, icon }: GoogleMapProps) => {
  const fetchPandals = async () => {
    const response = await fetch(FETCH_ALL_PANDALS);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };

  const {
    data: pandals,
    isLoading,
    isError,
  } = useQuery<Result>({
    queryKey: ['pandals'],
    queryFn: fetchPandals,
  });

  const locations = pandals?.result ?? [];
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
      {(isMapLoading || isLoading) && (
        <div className="flex justify-center items-center mx-auto">
          <CgSpinner size={40} className="animate-spin" />
        </div>
      )}
      {!isLoading && isError && (
        <div className="mt-3 whitespace-nowrap font-work leading-tight text-sm !text-red-600 rounded-lg drop-shadow-sm text-center p-4 bg-[#e6dfcf] flex justify-center items-center mx-auto">
          Something went wrong.
          <br />
          Please try again later!
        </div>
      )}
      {!isLoading && !isError && (
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
              <ClusteredMarkers
                activeLocationId={activeLocationId}
                locations={locations}
                icon={icon}
                setActiveLocationId={setActiveLocationId}
              />
            </Map>
          </APIProvider>
        </section>
      )}
    </>
  );
};
