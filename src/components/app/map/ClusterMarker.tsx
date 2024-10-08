import { useMap, type AdvancedMarkerRef } from '@vis.gl/react-google-maps';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { type Marker, MarkerClusterer } from '@googlemaps/markerclusterer';
import type { Pandal } from '@/types';
import LocationMarker from './LocationMarker';

type ClusteredMarkersProps = {
  locations: Pandal[];
  icon: string;
  activeLocationId: string | null;
  setActiveLocationId: (id: string) => void;
};

export const ClusteredMarkers = ({
  locations,
  icon,
  activeLocationId,
  setActiveLocationId,
}: ClusteredMarkersProps) => {
  const [markers, setMarkers] = useState<{ [key: string]: Marker }>({});

  const map = useMap();
  const clusterer = useMemo(() => {
    if (!map) return null;

    return new MarkerClusterer({ map });
  }, [map]);

  useEffect(() => {
    if (!clusterer) return;

    clusterer.clearMarkers();
    clusterer.addMarkers(Object.values(markers));
  }, [clusterer, markers]);

  const setMarkerRef = useCallback((marker: AdvancedMarkerRef | null, id: string) => {
    setMarkers((markers) => {
      if ((marker && markers[id]) || (!marker && !markers[id])) return markers;

      if (marker) {
        return { ...markers, [id]: marker };
      } else {
        const { ...newMarkers } = markers;

        return newMarkers;
      }
    });
  }, []);

  return (
    <>
      {locations.map((location) => (
        <LocationMarker
          key={location.id}
          id={location.id}
          name={location.name}
          address={location.address}
          lat={location.lat}
          lng={location.lon}
          icon={icon}
          metro={location.metro}
          activeMarkerId={activeLocationId}
          setActiveMarkerId={setActiveLocationId}
          setMarkerRef={setMarkerRef}
        />
      ))}
    </>
  );
};
