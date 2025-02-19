import { BellIcon, HomeIcon, MessageSquareIcon, MoreHorizontalIcon } from 'lucide-react';
import SidebarButton from '../atoms/sidebar-button';
import UserButton from './user-button';
import WorkspaceSwitter from './workspace/workspace-switter';

const SidebarButtons = () => {
  return (
    <>
      <SidebarButton Icon={HomeIcon} label="Home" />
      <SidebarButton Icon={MessageSquareIcon} label="DMs" />
      <SidebarButton Icon={BellIcon} label="Notifications" />
      <SidebarButton Icon={MoreHorizontalIcon} label="More" />
    </>
  );
};

const WorkspaceSidebar = () => {
  return (
    <aside className="flex h-screen w-[60px] flex-col gap-y-2 bg-violet-900 p-2 shadow-lg transition-all duration-300 sm:w-[80px] md:w-[150px] lg:w-[200px]">
      <div className="flex justify-center">
        <span className="text-center font-bold text-white">Logo</span>
      </div>
      <WorkspaceSwitter />
      <SidebarButtons />
      <div className="mt-auto mb-5 flex flex-col items-center justify-center gap-y-1">
        <UserButton />
      </div>
    </aside>
  );
};

export default WorkspaceSidebar;
