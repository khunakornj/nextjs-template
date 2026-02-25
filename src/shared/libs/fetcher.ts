import qs from 'qs';

import { StandardApiErrorResponse } from '../common/types';
import { CLIENT_ENV } from './env.client';

export type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

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

export async function fetcher(path: string, method: Method, options: any = {}) {
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

export async function validateAndGetApiData<T, E>(
  res: Response,
): Promise<T | StandardApiErrorResponse<E>> {
  const data = await res.json();

  if (res.status > 299 || res.status < 200) {
    return data as StandardApiErrorResponse<E>;
  }

  return data as T;
}

export async function getOrThrowApiData<T>(res: Response): Promise<T> {
  const data = await res.json();

  if (res.status > 299 || res.status < 200) {
    throw new Error(data.key);
  }

  return data as T;
}
