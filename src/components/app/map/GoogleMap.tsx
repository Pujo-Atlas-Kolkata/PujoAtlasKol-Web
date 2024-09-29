import { useMemo, useState, useCallback, memo, useEffect } from 'react';
import { APIProvider, Map, useMap, type MapMouseEvent } from '@vis.gl/react-google-maps';
import { UserLocation } from './UserLocation';
import { DEFAULT_VIEW_LAT_LONG } from '@/constants';
import type { GoogleMapProps } from './types';
import { ClusteredMarkers } from './ClusterMarker';
import { CgSpinner } from 'react-icons/cg';
import { useAllPandals } from '@/hooks';
import { activePandalStore } from '@/stores';
import { useStore } from '@nanostores/react';

const SelectedPandal = () => {
  const map = useMap();
  const showOnMap = localStorage.getItem('showOnMap');
  let activePandal = useStore(activePandalStore);

  if (!activePandal && showOnMap) {
    try {
      activePandal = JSON.parse(showOnMap);
    } catch (error) {
      console.error(`Error parsing showMap: ${error}`);
    }
  }

  useEffect(() => {
    if (!map || !activePandal) return;
    console.log('Found pandal marker on map', activePandalStore);
    map.panTo({ lat: activePandal.lat, lng: activePandal.lon });
    map.setZoom(30);
  }, [map, activePandal]);

  return <></>;
};

export const GoogleMaps = ({ apiKey, icon }: GoogleMapProps) => {
  const { data: pandals, isLoading, isError } = useAllPandals();

  const locations = useMemo(() => pandals?.result ?? [], [pandals]);
  const center = useMemo(() => DEFAULT_VIEW_LAT_LONG, []);
  const zoom = 15;
  const [activeLocationId, setActiveLocationId] = useState<string | null>(null);
  const [isMapLoading, setIsMapLoading] = useState<boolean>(true);

  const handleMapClick = useCallback((e: MapMouseEvent) => {
    e.stop();
    setActiveLocationId(null);
  }, []);

  const loadingContent = useMemo(
    () => (
      <div className="flex justify-center items-center mx-auto">
        <CgSpinner size={40} className="animate-spin" />
      </div>
    ),
    [],
  );

  const errorContent = useMemo(
    () => (
      <div className="mt-3 whitespace-nowrap font-work leading-tight text-sm !text-red-600 rounded-lg drop-shadow-sm text-center p-4 bg-[#e6dfcf] flex justify-center items-center mx-auto">
        Something went wrong.
        <br />
        Please try again later!
      </div>
    ),
    [],
  );

  const mapContent = useMemo(
    () => (
      <section className="max-w-screen overflow-hidden focus:outline-none">
        <APIProvider apiKey={apiKey}>
          <Map
            maxZoom={23}
            minZoom={10}
            id="map"
            gestureHandling="greedy"
            defaultZoom={zoom}
            defaultCenter={center}
            mapId="4e06f8f1228c0ba9"
            onClick={handleMapClick}
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
            <SelectedPandal />
          </Map>
        </APIProvider>
      </section>
    ),
    [apiKey, zoom, center, handleMapClick, activeLocationId, locations, icon, setActiveLocationId],
  );

  return (
    <>
      {(isMapLoading || isLoading) && loadingContent}
      {!isLoading && isError && errorContent}
      {!isLoading && !isError && mapContent}
    </>
  );
};

export default memo(GoogleMaps);
