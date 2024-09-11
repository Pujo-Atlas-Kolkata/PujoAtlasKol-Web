import { useCallback, useEffect, useState } from 'react';
import { type RequestConfig, type QueryResult } from './types';
import { request } from '@/libs/request';
import { cacheStore } from '@/libs/utils';

export const usePatch = <Data, Err>(
  input: string | Request | URL,
  init?: RequestInit,
  config?: RequestConfig,
): QueryResult<Data, Err> => {
  const [data, setData] = useState<Data | undefined>(undefined);
  const [error, setError] = useState<Err | undefined>(undefined);
  const [isPending, setIsPending] = useState(true);

  const refetch = useCallback(
    (signal: AbortSignal = new AbortController().signal) => {
      setIsPending(true);
      request
        .patch<Data, Err>(input, { ...init, signal }, config)
        .then((response) => {
          if (response.error) {
            setError(response.error);
          }
          if (response.data) {
            if (config?.cache) {
              cacheStore.delete(config.key ?? input.toString());
            }
            setData(response.data);
          }
        })
        .finally(() => {
          setIsPending(false);
        });
    },
    [input, init, config],
  );

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    refetch(signal);

    return () => controller.abort();
  }, [refetch]);

  if (error) {
    return { data: undefined, error, isPending, refetch };
  }
  return { data: data!, error: undefined, isPending, refetch };
};
