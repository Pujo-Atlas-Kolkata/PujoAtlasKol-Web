import { useCallback, useEffect, useState } from 'react';
import { type RequestConfig, type QueryResult } from './types';
import { request } from '@/libs/request';

export const usePost = <Data, Err>(
  input: string | Request | URL,
  init?: RequestInit,
  config: RequestConfig = { cache: false },
): QueryResult<Data, Err> => {
  const [data, setData] = useState<Data | undefined>(undefined);
  const [error, setError] = useState<Err | undefined>(undefined);
  const [isPending, setIsPending] = useState(true);

  const refetch = useCallback((signal: AbortSignal = new AbortController().signal) => {
    setIsPending(true);
    request
      .post<Data, Err>(input, { ...init, signal }, config)
      .then((response) => {
        if (response.error) {
          setError(response.error);
        }
        if (response.data) {
          setData(response.data);
        }
      })
      .finally(() => {
        setIsPending(false);
      });
  }, []);

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
