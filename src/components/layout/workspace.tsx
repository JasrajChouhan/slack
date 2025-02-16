import WorkspaceSidebar from '../molecules/workspace-sidebar';

export const WorkspaceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen ">
      <div className='h-full flex'>
        <WorkspaceSidebar />
        {children}
      </div>
    </div>
  );
};
