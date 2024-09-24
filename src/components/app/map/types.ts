import type { Marker } from '@googlemaps/markerclusterer';

export interface Location {
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
  locations: Location[];
  icon: string;
}
