import { CLIENT_ENV } from './env.client';
import qs from 'qs';

type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

type FetcherBaseOptions = {
  params?: Record<string, any>;
  headers?: Record<string, string>;
  version?: number;
};

type FetcherWriteOptions<T extends object> = FetcherBaseOptions & {
  body: T;
};

// overloads
export function fetcher(
  path: string,
  method: 'GET' | 'DELETE',
  options?: FetcherBaseOptions,
): Promise<Response>;

export function fetcher<T extends object>(
  path: string,
  method: 'POST' | 'PUT' | 'PATCH',
  options: FetcherWriteOptions<T>,
): Promise<Response>;

export function fetcher(path: string, method: Method, options: any = {}) {
  const { params, body, headers, version } =
    options as FetcherWriteOptions<any>;

  // build URL
  const query = params ? qs.stringify(params) : '';

  let url = `${CLIENT_ENV.NEXT_PUBLIC_API_URL}${path}`;
  if (version) {
    url += `/${version}`;
  }
  if (query) {
    url += `?${query}`;
  }

  const defaultHeaders: Record<string, string> = {
    Accept: 'application/json',
  };

  // final request init
  const init: RequestInit = {
    method,
    headers: {
      ...defaultHeaders,
      ...headers,
    },
  };

  if (body) {
    init.headers = {
      ...init.headers,
      'Content-Type': 'application/json',
    };
    init.body = JSON.stringify(body);
  }

  return fetch(url, init);
}
