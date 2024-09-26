import type { Pandal } from '@/types';
import { atom } from 'nanostores';

export const pandalStore = atom<Pandal[]>([]);
