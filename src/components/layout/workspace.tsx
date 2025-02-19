import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import WorkspaceSidebar from '../molecules/workspace-sidebar';
import WorkspaceOptions from '../molecules/workspace/workspace-options';

export const WorkspaceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[100vh]">
      <WorkspaceOptions />
      <div className="h-[calc(100vh - 40px)] flex">
        <WorkspaceSidebar />
        <ResizablePanelGroup direction="horizontal" className="min-h-screen w-full">
          <ResizablePanel className="bg-violet-600 md:block" defaultSize={20} minSize={11}>
            <div>sidebar</div>
          </ResizablePanel>
          <ResizableHandle withHandle autoSave="workspace-pannel" />
          <ResizablePanel minSize={20}>
            <div>{children}</div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};
