import { useDebounce } from '@/hooks';
import { useQuery } from '@/hooks';
import { useLocation } from '@/hooks';
import { cacheStore, time } from '@/libs/utils';
import axios from 'axios';

const URL = 'https://search-staging.pujoatlas.xyz/indexes/pandals/search';
const token = `Bearer ${import.meta.env.PUBLIC_SEARCH_API_KEY}`;

type Hit = {
  uuid: string;
  name: string;
  lat: number;
  lon: number;
  address: string;
  zone: string;
  WKT: string;
};

type SearchData = {
  hits: Hit[];
  query: string;
  processingTimeMs: number;
  limit: number;
  offset: number;
  estimatedTotalHits: number;
};

const sortLocationsByProximity = (locations: Hit[], currentLocation: GeolocationCoordinates) => {
  return locations.sort((a, b) => {
    const distanceA = Math.sqrt(
      Math.pow(a.lat - currentLocation.latitude, 2) +
        Math.pow(a.lon - currentLocation.longitude, 2),
    );
    const distanceB = Math.sqrt(
      Math.pow(b.lat - currentLocation.latitude, 2) +
        Math.pow(b.lon - currentLocation.longitude, 2),
    );
    return distanceA - distanceB;
  });
};

export const useSearch = (search: string) => {
  const debouncedSearch = useDebounce(search, 500);
  const { location } = useLocation();

  const fetchSearchResults = async (searchQuery: string): Promise<SearchData> => {
    const { data } = await axios.post<SearchData>(
      URL,
      {
        q: searchQuery,
        limit: 50,
      },
      {
        headers: {
          Authorization: token,
        },
      },
    );
    const sortedData = location ? sortLocationsByProximity(data.hits, location) : data.hits;

    cacheStore.set(
      JSON.stringify(['search', searchQuery]),
      { ...data, hits: sortedData },
      time.days(1),
    );

    return data;
  };

  const { data, isFetching } = useQuery<SearchData>({
    queryKey: ['search', debouncedSearch],
    queryFn: ({ queryKey }) => {
      const cachedData = cacheStore.get<SearchData>(JSON.stringify(queryKey));
      if (cachedData) {
        return Promise.resolve(cachedData);
      }

      return fetchSearchResults(debouncedSearch);
    },
    enabled: debouncedSearch.length > 3,
    retry: 1,
  });

  return {
    isSearching: isFetching,
    hits: data?.hits ?? [],
  };
};
