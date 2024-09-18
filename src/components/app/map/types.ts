interface Pandal {
  id: number;
  name: string;
  lat: number;
  lng: number;
}

export interface GoogleMapProps {
  apiKey: string;
  pandals: Pandal[];
}

export interface PandalMarkerProps {
  id: number;
  name: string;
  lat: number;
  lng: number;
  activePandalId: number | null;
  setActivePandalId: (id: number | null) => void;
}
