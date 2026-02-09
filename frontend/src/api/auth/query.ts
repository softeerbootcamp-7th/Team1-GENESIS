import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';

import { queryClient } from '@/main';

import { getUser } from '../user/api';
import { logout } from './api';

export const useLogoutMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: logout,
    throwOnError: true,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getUser'] });
      navigate({ to: '/login' });
    },
  });
};

export const useGetUserQuery = () =>
  useSuspenseQuery({
    queryKey: ['getUser'],
    queryFn: getUser,
  });
