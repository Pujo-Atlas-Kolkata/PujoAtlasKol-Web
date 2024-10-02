import type { Pandal } from '@/types';
import { atom } from 'nanostores';

export const allPandalStore = atom<Pandal[]>([]);
export const trendingPandalStore = atom<Pandal[]>([]);
