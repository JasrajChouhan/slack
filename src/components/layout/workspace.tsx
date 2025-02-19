import WorkspaceSidebar from '../molecules/workspace-sidebar';

export const WorkspaceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <div className="flex h-full">
        <WorkspaceSidebar />
        {children}
      </div>
    </div>
  );
};
