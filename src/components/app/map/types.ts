import type { Marker } from '@googlemaps/markerclusterer';

interface LocationMarker {
  id: number;
  name: string;
  lat: number;
  lng: number;
}

export interface LocationMarkerProps {
  id: number;
  name: string;
  lat: number;
  lng: number;
  icon: string;
  activeMarkerId: number | null;
  setActiveMarkerId: (id: number | null) => void;
  setMarkerRef: (marker: Marker | null, id: number) => void;
}

export interface GoogleMapProps {
  apiKey: string;
  locations: LocationMarker[];
  icon: string;
}

export type Location = {
  id: number;
  name: string;
  lat: number;
  lng: number;
};
