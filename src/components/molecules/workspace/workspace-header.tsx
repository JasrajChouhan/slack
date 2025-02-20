import { Button } from '@/components/ui/button';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth, useWorkspacePrefrence } from '@/context';
import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
import { ListFilterIcon, SquarePenIcon } from 'lucide-react';

const WorkspaceHeader = ({ workspace }: { workspace: any }) => {
  const workspaceMembers = workspace?.members;
  const { auth } = useAuth();

  const isLoggedInUserAdminOfWorkspace = workspaceMembers?.find((member: any) => {
    return member.memberId._id === auth?.user?._id && member.role === 'admin';
  });
  const { setOpenCreateWorkspacePrefModal } = useWorkspacePrefrence();

  const hanldePrefrencesModal = () => {
    setOpenCreateWorkspacePrefModal(true);
  };

  return (
    <div className="flex h-[50px] items-center justify-center gap-0.5 px-4">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button className="bg-accent/25 hover:bg-accent/15 w-auto overflow-hidden p-1.5 text-lg font-semibold">
            <span>{workspace?.name || 'Workspace'}</span>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent side="bottom" align="start" className="w-64">
          <DropdownMenuItem>
            <div className="relative mr-2 flex size-9 items-center justify-center overflow-hidden rounded-md bg-[#616061] text-xl font-semibold text-white">
              {workspace?.name.charAt(0).toUpperCase()}
            </div>

            <div className="flex flex-col items-start">
              <p className="font-bold">{workspace?.name}</p>
              <p className="text-muted-foreground text-xs">Active Workspace</p>
            </div>
          </DropdownMenuItem>

          {isLoggedInUserAdminOfWorkspace && (
            <>
              <DropdownMenuItem className="cursor-pointer py-2" onClick={hanldePrefrencesModal}>
                Preferences
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer py-2">
                Invite to people <span className="font-semibold">{workspace?.name}</span>
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="flex items-center gap-0.5">
        <Button variant="transparent" size="iconSm">
          <ListFilterIcon className="size-5" />
        </Button>

        <Button variant="transparent" size="iconSm">
          <SquarePenIcon className="size-5" />
        </Button>
      </div>
    </div>
  );
};

export default WorkspaceHeader;
