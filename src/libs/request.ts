import axios, { AxiosError, type AxiosRequestConfig, type AxiosResponse } from 'axios';

type RequestResult<T> =
  | {
      data: T;
      error: null;
    }
  | {
      data: null;
      error: string;
    };

export const request = {
  get: async <T>(url: string, config?: AxiosRequestConfig): Promise<RequestResult<T>> => {
    return handleRequest<T>(() => axios.get<T>(url, config));
  },

  post: async <T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<RequestResult<T>> => {
    return handleRequest<T>(() => axios.post<T>(url, data, config));
  },

  put: async <T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<RequestResult<T>> => {
    return handleRequest<T>(() => axios.put<T>(url, data, config));
  },

  delete: async <T>(url: string, config?: AxiosRequestConfig): Promise<RequestResult<T>> => {
    return handleRequest<T>(() => axios.delete<T>(url, config));
  },
};

async function handleRequest<T>(
  requestFn: () => Promise<AxiosResponse<T>>,
): Promise<RequestResult<T>> {
  try {
    const response = await requestFn();
    return { data: response.data, error: null };
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return {
        data: null,
        error: error?.response?.data?.message || error.message,
      };
    }
    return {
      data: null,
      error: 'An unknown occurred',
    };
  }
}
