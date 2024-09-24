export interface LocationMarker {
  id: number;
  name: string;
  lat: number;
  lng: number;
  distance?: number;
}

export interface LocationMarkerProps {
  id: number;
  name: string;
  lat: number;
  lng: number;
  icon: string;
  activeMarkerId: number | null;
  setActiveMarkerId: (id: number | null) => void;
}

export interface GoogleMapProps {
  apiKey: string;
  locations: LocationMarker[];
  icon: string;
}
