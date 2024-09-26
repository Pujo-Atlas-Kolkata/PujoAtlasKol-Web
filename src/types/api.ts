export type ApiResponse<T> = {
  result: T;
  status: 'success' | 'error';
};
