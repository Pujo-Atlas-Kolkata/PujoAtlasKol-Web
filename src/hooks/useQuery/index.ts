import { useDelete } from './delete';
import { useGet } from './get';
import { usePatch } from './patch';
import { usePost } from './post';
import { usePut } from './put';

export { request } from '@/libs/request';

export const useQuery = {
  get: useGet,
  post: usePost,
  put: usePut,
  delete: useDelete,
  patch: usePatch,
};
