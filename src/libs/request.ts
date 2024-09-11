export type RequestResult<Data, Err = Error> =
  | { data: Data; error: undefined }
  | { data: undefined; error: Err };

export type RequestConfig =
  | {
      cache: false;
    }
  | {
      cache: true;
      staleTime: number;
      key?: string;
    };

type RequestFunction = <Data, Err>(
  input: string | Request | URL,
  init?: Omit<RequestInit, 'method'>,
  config?: RequestConfig,
) => Promise<RequestResult<Data, Err>>;

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

const createRequestMethod = (method: Method): RequestFunction => {
  return async <Data, Err>(
    input: string | Request | URL,
    init?: Omit<RequestInit, 'method'>, // Omit the 'method' property
  ): Promise<RequestResult<Data, Err>> => {
    // Apply the method internally
    const initWithMethod: RequestInit = {
      method,
      ...init,
    };
    try {
      const response = await fetch(input, initWithMethod);
      const data = (await response.json()) as Data;
      return { data, error: undefined };
    } catch (error) {
      return { data: undefined, error: error as Err };
    }
  };
};

export const request = {
  get: createRequestMethod('GET'),
  post: createRequestMethod('POST'),
  put: createRequestMethod('PUT'),
  delete: createRequestMethod('DELETE'),
  patch: createRequestMethod('PATCH'),
} as const;
