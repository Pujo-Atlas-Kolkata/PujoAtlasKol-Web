import type { Marker } from '@googlemaps/markerclusterer';

export type LocationMarkerProps = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  icon: string;
  activeMarkerId: string | null;
  setActiveMarkerId: (id: string) => void;
  setMarkerRef: (marker: Marker | null, id: string) => void;
};

export type GoogleMapProps = {
  apiKey: string;
  icon: string;
};
