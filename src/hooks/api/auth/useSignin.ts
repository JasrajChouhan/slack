import { signinRequest } from '@/api/auth';
import { useToast } from '@/hooks/use-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useSignin = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { error, isError, isPending, mutate, mutateAsync, data, isSuccess } = useMutation({
    mutationFn: signinRequest,
    onSuccess: response => {
      // set into localstorage
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', response);
      queryClient.invalidateQueries({ queryKey: ['users-signin'] });
      toast({
        title: 'Signin successful',
        description: 'You have successfully signed in',
      });
    },
    onError: () => {
      toast({
        title: 'Signin failed',
        description: 'Please try again',
        variant: 'destructive',
      });
      throw new Error('Signin failed');
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
