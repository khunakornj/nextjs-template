import { queryOptions } from '@tanstack/react-query';

import { fetcher, validateAndGetApiData } from '@/shared/libs/fetcher';

import type { ApiResponse } from './refresh.api.type';

export function getRefreshApiOptions() {
  return queryOptions({
    queryKey: ['refresh'],
    queryFn: async () => {
      const url = '/auth/refresh';
      const res = await fetcher(url, 'POST', { body: {} });
      return validateAndGetApiData<ApiResponse, 'invalidAuth'>(res);
    },
  });
}
