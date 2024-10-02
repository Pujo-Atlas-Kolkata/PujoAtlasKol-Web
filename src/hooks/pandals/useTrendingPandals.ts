import { trendingPandalStore } from '@/stores';
import { useQuery } from '@/hooks';
import type { ApiResponse, Pandal } from '@/types';
import { cacheStore, time } from '@/libs/utils';
import { Api } from '@/constants';
import axios from 'axios';

export const useTrendingPandals = () =>
  useQuery({
    queryKey: [Api.Pujo.List.Trending],
    queryFn: async ({ signal, queryKey }) => {
      const cachedData = cacheStore.get<ApiResponse<Pandal[]>>(JSON.stringify(queryKey));
      if (cachedData) {
        trendingPandalStore.set(cachedData.result);
        return cachedData;
      }
      const { data } = await axios.get<ApiResponse<Pandal[]>>(Api.Pujo.List.Trending, { signal });
      cacheStore.set(JSON.stringify(queryKey), data, time.minutes(10));
      trendingPandalStore.set(data.result);
      return data;
    },
  });
