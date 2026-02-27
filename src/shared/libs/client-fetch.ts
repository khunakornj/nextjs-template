import { redirect } from 'next/navigation';

import { ApiResponse } from '../api/auth/refresh/refresh.api.type';
import { useAuth } from '../hooks/use-auth';
import { useDeviceUid } from '../hooks/use-device-uid';
import {
  fetcher,
  FetcherBaseOptions,
  FetcherWriteOptions,
  Method,
} from './fetcher';

export type UseClientFetchReturn = ReturnType<typeof useClientFetch>;

type ClientFetch = {
  (
    path: string,
    method: 'GET' | 'DELETE',
    options?: FetcherBaseOptions,
  ): Promise<Response>;

  <T extends object>(
    path: string,
    method: 'POST' | 'PUT' | 'PATCH',
    options: FetcherWriteOptions<T>,
  ): Promise<Response>;
};

// prevent double fetch
let clientSideRefreshPromise: Promise<string | null> | null = null;

export function useClientFetch() {
  const { authToken, setToken, removeSession } = useAuth();
  const deviceUid = useDeviceUid();

  const clientFetch: ClientFetch = async (
    path: string,
    method: Method,
    options: any = {},
  ): Promise<Response> => {
    const executeFetch = async (token: string | null) => {
      const headers = { ...options.headers };
      if (token) headers['authorization'] = `Bearer ${token}`;
      return fetcher(path, method as any, { ...options, headers });
    };

    const res = await executeFetch(authToken);

    // Only run the refresh logic if client
    if (res.status === 401 && typeof window !== 'undefined') {
      if (!clientSideRefreshPromise) {
        clientSideRefreshPromise = (async () => {
          try {
            const refreshRes = await fetcher('/auth/refresh', 'POST', {
              body: {},
              headers: { 'x-device': deviceUid },
            });

            if (refreshRes.ok) {
              const jsonData: ApiResponse = await refreshRes.json();
              const newToken = jsonData.data.token;
              setToken(newToken);
              return newToken;
            }

            removeSession();
            redirect('/');
          } finally {
            // Reset for the next time tokens expire
            clientSideRefreshPromise = null;
          }
        })();
      }

      const newToken = await clientSideRefreshPromise;
      if (newToken) return executeFetch(newToken);
    }

    return res;
  };

  return clientFetch;
}
