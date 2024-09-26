import type { Pandal } from '@/types';
import { atom } from 'nanostores';

export const activePandalStore = atom<Pandal | null>(null);
