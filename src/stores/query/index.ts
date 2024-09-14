import { QueryClient } from '@tanstack/react-query';
import { atom } from 'nanostores';

export const queryClient = atom(new QueryClient());
