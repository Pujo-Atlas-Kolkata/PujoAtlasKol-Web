import type { RequestResult } from '@/libs/request';
export { type RequestResult, type RequestConfig } from '@/libs/request';

export type QueryResult<Data, Err> = RequestResult<Data, Err> & {
  isPending: boolean;
  refetch: () => void;
};
