import WorkspaceSidebar from '../molecules/workspace-sidebar';

export const WorkspaceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen overflow-hidden border border-slate-600">
      <WorkspaceSidebar />
      <div className="flex-1 overflow-auto p-4">{children}</div>
    </div>
  );
};
