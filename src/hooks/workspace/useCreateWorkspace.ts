import { createWorkspaceRequest } from '@/api/workspace';
import { useAuth } from '@/context';
import { WorkspaceSchemaType } from '@/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';

export const useCreateWorkspace = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { auth } = useAuth();

  const { isError, isPending, isPaused, isSuccess, data, mutate, mutateAsync } = useMutation({
    mutationFn: (data: WorkspaceSchemaType) =>
      createWorkspaceRequest({
        token: auth?.token as string,
        data,
      }),

    onSuccess: () => {
      toast({
        title: 'Workspace created',
        description: 'You have successfully created a workspace',
      });
      queryClient.invalidateQueries({ queryKey: ['workspaces'] });
    },

    onError: () => {
      toast({
        title: 'Workspace creation failed',
        description: 'Please try again',
        variant: 'destructive',
      }),
        queryClient.invalidateQueries({ queryKey: ['workspaces'] });
    },
  });

  return {
    isError,
    isPending,
    isPaused,
    isSuccess,
    data,
    mutate,
    mutateAsync,
  };
};
