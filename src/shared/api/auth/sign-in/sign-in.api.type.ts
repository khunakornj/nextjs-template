import { UserAttributes } from '@/shared/common/domain-types';
import { StandardApiResponse } from '@/shared/common/types';

export type Body = {
  email: string;
  password: string;
};

export type ApiResponse = StandardApiResponse<{
  user: {
    attributes: UserAttributes;
  };
  token: string;
}>;
