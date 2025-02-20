import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useWorkspacePrefrence } from '@/context';

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
        hello
      </DialogContent>
      <DialogFooter></DialogFooter>
    </Dialog>
  );
};

export default WorkspacePrefrencesModal;
