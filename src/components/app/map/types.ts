import type { Marker } from '@googlemaps/markerclusterer';

export interface Location {
  id: string;
  name: string;
  city: string;
  address: string;
  lat: number;
  lon: number;
  zone: string;
}

export interface LocationMarkerProps {
  id: string;
  name: string;
  lat: number;
  lng: number;
  icon: string;
  activeMarkerId: string | null;
  setActiveMarkerId: (id: string) => void;
  setMarkerRef: (marker: Marker | null, id: string) => void;
}

export interface GoogleMapProps {
  apiKey: string;
  locations: Location[];
  icon: string;
}
