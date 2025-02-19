import WorkspaceSidebar from '../molecules/workspace-sidebar';
import WorkspaceOptions from '../molecules/workspace/workspace-options';

export const WorkspaceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[100vh]">
      <WorkspaceOptions />
      <div className="h-[calc(100vh - 40px)] flex">
        <WorkspaceSidebar />
        {children}
      </div>
    </div>
  );
};
