import Alert from '@/components/atoms/alert';
import WorkspaceHeader from '@/components/molecules/workspace/workspace-header';
import { useFetchWorkspaceDetails } from '@/hooks/workspace';
import { Loader2 } from 'lucide-react';
import { useParams } from 'react-router';

const WorkspacePannel = () => {
  const { workspaceId } = useParams();
  const { isFetching, data: workspace, isSuccess } = useFetchWorkspaceDetails(workspaceId as string);

  if (isFetching) {
    return <Loader2 />;
  }

  if (!isSuccess) {
    return <Alert />;
  }
  return (
    <div className="bg-slack-medium flex h-full flex-col">
      <WorkspaceHeader workspace={workspace.data} />
    </div>
  );
};

export default WorkspacePannel;
