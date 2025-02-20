import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useWorkspacePrefrence } from '@/context';
import { Trash2Icon } from 'lucide-react';

const WorkspacePrefrencesModal = () => {
  const { openCreateWorkspacePrefModal, setOpenCreateWorkspacePrefModal } = useWorkspacePrefrence();

  const hanldeChange = () => {
    setOpenCreateWorkspacePrefModal(false);
  };
  return (
    <Dialog open={openCreateWorkspacePrefModal} onOpenChange={hanldeChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Workspace Prefrences</DialogTitle>
        </DialogHeader>

        <div className="flex cursor-pointer flex-col gap-y-4 bg-white px-4 py-2 hover:bg-gray-50">
          <div className="flex h-10 items-center justify-between rounded-lg border px-2">
            <p className="text-sm font-semibold">Workspace Name</p>
            <p className="text-sm font-semibold hover:underline">Edit</p>
          </div>

          <button className="flex cursor-pointer items-center gap-x-2 rounded-lg border bg-white px-5 py-4 hover:bg-gray-50">
            <Trash2Icon className="size-5" />
            <p className="text-sm font-semibold">Delete Workspace</p>
          </button>
        </div>
      </DialogContent>
      <DialogFooter></DialogFooter>
    </Dialog>
  );
};

export default WorkspacePrefrencesModal;
