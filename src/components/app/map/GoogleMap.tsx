import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  AdvancedMarker,
  APIProvider,
  Map,
  useMap,
  type MapCameraChangedEvent,
} from '@vis.gl/react-google-maps';
import { IoMdLocate } from 'react-icons/io';
import { FaDirections } from 'react-icons/fa';
import { cn } from '@/libs/utils';

interface Pandal {
  id: number;
  name: string;
  lat: number;
  lng: number;
}

interface PandalMarkerProps {
  id: number;
  name: string;
  lat: number;
  lng: number;
  activePandalId: number | null;
  setActivePandalId: (id: number | null) => void;
}

type Props = {
  apiKey: string;
  pandals: Pandal[];
};

const Me = () => {
  return (
    <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow shadow-blue-500 animate-pulse" />
  );
};

const PandalMarker = ({
  id,
  name,
  lat,
  lng,
  activePandalId,
  setActivePandalId,
}: PandalMarkerProps) => {
  const handleMarkerClick = useCallback(() => {
    setActivePandalId(id);
  }, [id, setActivePandalId]);

  const handleGetDirectionsClick = useCallback(() => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(url, '_blank');
  }, [lat, lng]);

  const showDirectionsButton = activePandalId === id;

  return (
    <AdvancedMarker position={{ lat, lng }} onClick={handleMarkerClick}>
      <div className="relative cursor-pointer">
        <img src="/pandal-map-marker.svg" alt="pandel marker" className="w-14 h-14" />
        {showDirectionsButton && (
          <>
            <div className="absolute left-12 top-3 font-sans rounded-3xl bg-black !text-white font-bold text-sm py-1.5 px-3 whitespace-nowrap">
              {name}
            </div>
            <div className="absolute left-12 top-10 mt-2 flex justify-center items-center">
              <button
                onClick={handleGetDirectionsClick}
                className={cn(
                  'py-1.5 px-3 bg-black border-2 text-sm whitespace-nowrap',
                  'font-sans font-bold rounded-full',
                  'flex justify-center items-center',
                )}
              >
                <div className="flex flex-row-reverse justify-center items-center gap-x-1">
                  <FaDirections className="h-4 w-4 animate-arrow-left-right fill-white" />
                  <span className="!text-white">Navigate</span>
                </div>
              </button>
            </div>
          </>
        )}
      </div>
    </AdvancedMarker>
  );
};

const Locator = () => {
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
          <Me />
        </AdvancedMarker>
      )}
    </>
  );
};

export const GoogleMaps = ({ apiKey, pandals }: Props) => {
  const center = useMemo(() => ({ lat: 22.4747061, lng: 88.3642162 }), []);
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
          <Locator />
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
