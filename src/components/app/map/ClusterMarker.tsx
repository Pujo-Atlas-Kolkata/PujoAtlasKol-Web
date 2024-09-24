import { InfoWindow, useMap } from '@vis.gl/react-google-maps';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { type Marker, MarkerClusterer } from '@googlemaps/markerclusterer';
import type { Location } from './types';
import LocationMarker from './LocationMarker';

export type ClusteredMarkersProps = {
  locations: Location[];
  icon: string;
  activeLocationId: number | null;
};

export const ClusteredMarkers = ({ locations, icon, activeLocationId }: ClusteredMarkersProps) => {
  const [markers, setMarkers] = useState<{ [key: string]: Marker }>({});
  const [selectedId, setSelectedId] = useState<number | null>(activeLocationId);

  const selected = useMemo(
    () => (locations && selectedId ? locations.find((t) => t.id === selectedId)! : null),
    [locations, selectedId],
  );

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

  const setMarkerRef = useCallback((marker: Marker | null, id: number) => {
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

  const handleInfoWindowClose = useCallback(() => {
    setSelectedId(null);
  }, []);

  return (
    <>
      {locations.map((location) => (
        <LocationMarker
          key={location.id}
          id={location.id}
          name={location.name}
          lat={location.lat}
          lng={location.lng}
          icon={icon}
          activeMarkerId={selectedId}
          setActiveMarkerId={setSelectedId}
          setMarkerRef={setMarkerRef}
        />
      ))}

      {selectedId && (
        <InfoWindow anchor={markers[selectedId]} onCloseClick={handleInfoWindowClose}>
          {selected?.name}
        </InfoWindow>
      )}
    </>
  );
};
