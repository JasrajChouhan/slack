import { Button } from '@/components/ui/button';
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { DropdownMenu } from '@radix-ui/react-dropdown-menu';

const WorkspaceHeader = ({ workspace }: { workspace: any }) => {
  console.log(workspace?.name);
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
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default WorkspaceHeader;
