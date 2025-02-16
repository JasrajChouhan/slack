import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth, useCreateWorkSpace } from '@/context';
import { useToast } from '@/hooks/use-toast';
import { LogOutIcon, PencilIcon, SettingsIcon } from 'lucide-react';
import { useNavigate } from 'react-router';

const UserButton = () => {
  const { auth, logout } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const { openCreateWorkspaceModal, setOpenCreateWorkspaceModal } = useCreateWorkSpace();

  const handleLogout = () => {
    if (logout) {
      logout();
      toast({
        title: 'Logout successful',
        description: 'You have successfully logged out.',
      });
      navigate('/auth/signin');
    }
  };

  const handleCreateWorkspace = () => {
    setOpenCreateWorkspaceModal(true);
  };

  const avatarUrl = auth?.user?.avatar || '';
  const username = auth?.user?.username || 'User';
  const initials = username.charAt(0).toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="relative outline-none">
        <Avatar>
          {avatarUrl ? <AvatarImage src={avatarUrl} alt="User Avatar" /> : null}
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={5} className="w-40 rounded-md bg-white p-1 shadow-md">
        <DropdownMenuItem
          onClick={handleCreateWorkspace}
          className="flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-gray-100"
        >
          <PencilIcon className="h-4 w-4" />
          <span>Create Workspace</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-gray-100">
          <SettingsIcon className="h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={handleLogout}
          className="flex cursor-pointer items-center gap-2 rounded-md p-2 text-red-500 hover:bg-gray-100"
        >
          <LogOutIcon className="h-4 w-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
