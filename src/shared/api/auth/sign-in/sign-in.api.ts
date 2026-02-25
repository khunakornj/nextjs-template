import { mutationOptions } from '@tanstack/react-query';

import { fetcher, validateAndGetApiData } from '@/shared/libs/fetcher';

import type { ApiResponse, Body } from './sign-in.api.type';

export function useSignInApiOptions(deviceUid: string) {
  return mutationOptions({
    mutationFn: async (body: Body) => {
      const url = '/auth/sign-in';
      const res = await fetcher(url, 'POST', {
        body: {
          ...body,
          mode: 'backoffice',
        },
        headers: {
          'x-device': deviceUid,
        },
      });
      return validateAndGetApiData<ApiResponse, 'invalidAuth'>(res);
    },
  });
}
