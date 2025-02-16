import { fetchWorkspaceDetailsRequest } from '@/api/workspace';
import { useAuth } from '@/context';
import { useQuery } from '@tanstack/react-query';

export const useFetchWorkspaceDetails = () => {
  const { auth } = useAuth();
  const token = auth?.token as string;
  const { data, isError, isFetched, isLoading, isLoadingError, refetch, status } = useQuery({
    queryKey: ['workspace-details'],
    queryFn: ({ queryKey }) => {
      const [_, workspaceId] = queryKey;
      return fetchWorkspaceDetailsRequest(workspaceId, token);
    },
    staleTime: 1 * 60 * 1000, // 1 minutes
    throwOnError: true,
  });
  return {
    data,
    isError,
    isFetched,
    isLoading,
    isLoadingError,
    refetch,
    status,
  };
};
