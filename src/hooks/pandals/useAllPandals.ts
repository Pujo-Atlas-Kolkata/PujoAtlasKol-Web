import { pandalStore } from '@/stores';
import { useQuery } from '@/hooks';
import type { ApiResponse, Pandal } from '@/types';
import { cacheStore, time } from '@/libs/utils';
import { Api } from '@/constants';
import axios from 'axios';

export const useAllPandals = () =>
  useQuery({
    queryKey: [Api.Pujo.List.All],
    queryFn: async ({ signal, queryKey }) => {
      const cachedData = cacheStore.get<ApiResponse<Pandal[]>>(JSON.stringify(queryKey));
      if (cachedData) {
        pandalStore.set(cachedData.result);
        return cachedData;
      }
      const { data } = await axios.get<ApiResponse<Pandal[]>>(Api.Pujo.List.All, { signal });
      cacheStore.set(JSON.stringify(queryKey), data, time.hours(1));
      pandalStore.set(data.result);
      return data;
    },
  });
