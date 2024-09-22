import { atom } from 'nanostores';

export const markerStore = atom<google.maps.LatLngLiteral | null>(null);
