import { signinRequest } from '@/api/auth';
import { useAuth } from '@/context';
import { useToast } from '@/hooks/use-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useSignin = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { setAuth, auth } = useAuth();
  const { error, isError, isPending, mutate, mutateAsync, data, isSuccess } = useMutation({
    mutationFn: signinRequest,
    onSuccess: response => {
      // set into localstorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data));
      setAuth({
        token: response.data.token,
        user: response.data,
        isLoading: false,
      });
      console.log(auth);
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
