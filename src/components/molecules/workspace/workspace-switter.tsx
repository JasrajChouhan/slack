import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useFetchWorkspaceDetails, useFetchWorkspaces } from '@/hooks/workspace';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

const WorkspaceSwitter = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { workspaceId } = useParams();
  const { isFetching, data: workspaceData } = useFetchWorkspaceDetails(workspaceId as string);
  const { data: workspaces, isError, isFetching: isFetchingWorkspaces } = useFetchWorkspaces();

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      const sidebar = document.getElementsByTagName('aside');
      if (sidebar) {
        setIsCollapsed(sidebar[0].clientWidth <= 80);
      }
    };
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isFetching) {
    return <Loader2 className="text-muted-foreground animate-spin text-6xl font-bold" />;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button className="bg-accent/25 hover:bg-accent/15 w-full text-zinc-200 hover:text-zinc-100">
          {isCollapsed ? workspaceData?.data?.name.charAt(0).toUpperCase() : workspaceData?.data?.name}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem title="Current workspace" className="flex flex-col items-start justify-start gap-y-1">
          <p className="truncate text-zinc-800 hover:text-zinc-900">{workspaceData?.data?.name}</p>
          <span className="font-semibold">Active</span>
        </DropdownMenuItem>
        {isFetchingWorkspaces ? (
          <Loader2 className="text-muted-foreground animate-spin border-b border-zinc-800 text-6xl font-bold" />
        ) : (
          workspaces?.data.map((item: any) => {
            if (workspaceData?.data?._id === item._id) return null;
            return (
              <DropdownMenuItem
                key={item._id}
                className={`text-muted-foreground flex cursor-pointer flex-col items-start justify-start hover:text-zinc-900`}
                onClick={() => {
                  navigate(`/workspaces/${item._id}`);
                }}
              >
                <p className="truncate">{item.name}</p>
              </DropdownMenuItem>
            );
          })
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default WorkspaceSwitter;
