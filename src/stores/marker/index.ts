import { atom } from 'nanostores';

export const marker = atom<google.maps.LatLngLiteral | null>(null);
