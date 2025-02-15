import { singupRequest } from '@/api/auth';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useSignup = () => {
  const queryClient = useQueryClient();
  const { error, isError, isPending, mutate, mutateAsync, data } = useMutation({
    mutationFn: singupRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users-signup'] });
    },
    onError: () => {
      throw new Error('Signup failed');
    },
  });

  return {
    error,
    isError,
    isPending,
    mutate,
    mutateAsync,
    data,
  };
};
