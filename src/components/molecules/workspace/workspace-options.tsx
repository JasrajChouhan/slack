import { useFetchWorkspaceDetails } from '@/hooks/workspace';
import { Loader2 } from 'lucide-react';
import { useParams } from 'react-router';

const WorkspaceOptions = () => {
  const { workspaceId } = useParams();
  console.log(workspaceId);

  // fetch details of workspace by workspaceId
  const { isLoading, data: workspace } = useFetchWorkspaceDetails(workspaceId as string);

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <Loader2 className="text-muted-foreground animate-spin text-6xl font-bold" />
        <h2>Please wait...</h2>
      </div>
    );
  }

  return (
    <nav>
      <div className="flex h-10 items-center justify-center bg-[#5c3B58] p-1.5">hello</div>
    </nav>
  );
};

export default WorkspaceOptions;
