import { singupRequest } from '@/api/auth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';

export const useSignup = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { error, isError, isPending, mutate, mutateAsync, data, isSuccess } = useMutation({
    mutationFn: singupRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users-signup'] });
      toast({
        title: 'Signup successful',
        description: 'You have successfully signed up',
      });
    },
    onError: () => {
      toast({
        title: 'Signup failed',
        description: 'Please try again',
        variant: 'destructive',
      });
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
    isSuccess,
  };
};
