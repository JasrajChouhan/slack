import { fetchWorkspaceDetailsRequest } from '@/api/workspace';
import { useAuth } from '@/context';
import { useQuery } from '@tanstack/react-query';

export const useFetchWorkspaceDetails = (workspaceId: string) => {
  const { auth } = useAuth();
  const token = auth?.token as string;

  const { data, isError, isFetched, isLoading, isLoadingError, refetch, status } = useQuery({
    queryKey: [`workspace-details-${workspaceId}`],
    queryFn: () => fetchWorkspaceDetailsRequest(workspaceId as string, token),
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
