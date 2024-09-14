import { useStore } from '@nanostores/react';
import { queryClient } from '@/stores/query';
import { useQuery as useTanstackQuery } from '@tanstack/react-query';
import type { DefaultError, QueryKey } from '@tanstack/query-core';

type UseQueryConfig<
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
> = Parameters<typeof useTanstackQuery<TQueryFnData, TError, TData, TQueryKey>>[0];

export const useQuery = <
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  config: UseQueryConfig<TQueryFnData, TError, TData, TQueryKey>,
) => {
  const client = useStore(queryClient);
  return useTanstackQuery<TQueryFnData, TError, TData, TQueryKey>(config, client);
};
