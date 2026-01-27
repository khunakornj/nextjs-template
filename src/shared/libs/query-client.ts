// query-client.ts
import { QueryClient } from '@tanstack/react-query';
import { cache } from 'react';

import { META_INVALIDATE_QUERY_KEY } from '../common/constants';

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      mutations: {
        onSettled: (_data, _error, _variables, _context, mutation) => {
          const invalidateKey = mutation.meta?.[META_INVALIDATE_QUERY_KEY] as
            | string[]
            | undefined;

          if (invalidateKey) {
            mutation.client.invalidateQueries({
              queryKey: invalidateKey,
            });
          }
        },
      },
    },
  });
}

// Server: one per request
const getServerQueryClient = cache(() => makeQueryClient());

// Client: singleton
let browserQueryClient: QueryClient | undefined;

export function getQueryClient() {
  if (typeof window === 'undefined') {
    return getServerQueryClient();
  }

  if (!browserQueryClient) {
    browserQueryClient = makeQueryClient();
  }

  return browserQueryClient;
}
