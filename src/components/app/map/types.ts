import type { AdvancedMarkerRef } from '@vis.gl/react-google-maps';

export type LocationMarkerProps = {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  icon: string;
  activeMarkerId: string | null;
  setActiveMarkerId: (id: string) => void;
  setMarkerRef: (marker: AdvancedMarkerRef | null, id: string) => void;
};

export type GoogleMapProps = {
  apiKey: string;
  icon: string;
};
