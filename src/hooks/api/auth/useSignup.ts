import { singupRequest } from '@/api/auth';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const queryClient = useQueryClient();

export const useSignup = () => {
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
