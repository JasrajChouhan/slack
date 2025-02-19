import { Button } from '@/components/ui/button';
import { useFetchWorkspaceDetails } from '@/hooks/workspace';
import { InfoIcon, Loader2, SearchIcon } from 'lucide-react';
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
    <nav className="flex h-10 items-center justify-center bg-[#5c3B58] p-1.5">
      <div className="flex flex-1"> </div>

      <div>
        <Button className="bg-accent/25 hover:bg-accent/15 my-1 h-7 w-full text-white">
          <SearchIcon />
          <span> {workspace?.data?.name || 'workspace'}</span>
        </Button>
      </div>

      <div className="ml-auto flex flex-1 items-center justify-end">
        <Button className="hover:bg-accent/15 h-8 w-8 bg-transparent">
          <InfoIcon className="h-5 text-white" />
        </Button>
      </div>
    </nav>
  );
};

export default WorkspaceOptions;
