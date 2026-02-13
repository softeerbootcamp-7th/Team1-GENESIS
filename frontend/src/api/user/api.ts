import { customFetch } from '@/api/config/client';
import { ENDPOINTS } from '@/api/config/endpoint';
import type { UserResponse } from '@/api/user/type';

export const getUser = (): Promise<UserResponse> => {
  return customFetch({
    endpoint: ENDPOINTS.GET_USER,
    options: {
      method: 'GET',
    },
  });
};
