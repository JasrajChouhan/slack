import { fetchWorkspacesRequest } from '@/api/workspace';
import { useAuth } from '@/context';
import { useQuery } from '@tanstack/react-query';

export const useFetchWorkspaces = () => {
  const { auth } = useAuth();
  const token = auth?.token as string;
  const {
    data: workspaces,
    isError,
    isFetched,
    isLoading,
    isLoadingError,
    refetch,
    status,
  } = useQuery({
    queryKey: ['workspaces'],
    queryFn: () => fetchWorkspacesRequest(token),
    staleTime: 3 * 60 * 1000, // 3 minutes
  });

  return {
    data: workspaces,
    isError,
    isFetched,
    isLoading,
    isLoadingError,
    refetch,
    status,
  };
};
