import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useCreateWorkSpace } from '@/context';
import { useCreateWorkspace } from '@/hooks/workspace';
import { WorkspaceSchema } from '@/schemas';
import { WorkspaceSchemaType } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { BiLoaderCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router';
import { z } from 'zod';

export const CreateWorkspaceModal = () => {
  const { mutateAsync: createWorkspace } = useCreateWorkspace();
  const navigate = useNavigate();
  const { openCreateWorkspaceModal, setOpenCreateWorkspaceModal } = useCreateWorkSpace();

  const form = useForm<z.infer<typeof WorkspaceSchema>>({
    resolver: zodResolver(WorkspaceSchema),
    defaultValues: {
      name: '',
      descreption: '',
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = form;
  console.log(openCreateWorkspaceModal);
  const onSubmit = async (data: WorkspaceSchemaType) => {
    try {
      await createWorkspace(data);
      setOpenCreateWorkspaceModal(false);
      navigate('/home'); // TODO : Change to workspace section
    } catch (error) {
      console.log(error);
    } finally {
      setOpenCreateWorkspaceModal(false);
    }
  };

  const handleClose = () => {
    setOpenCreateWorkspaceModal(false);
  };

  return (
    <Dialog open={openCreateWorkspaceModal} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader> Create Workspace </DialogHeader>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-[90%] space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Workspace Name</FormLabel>
                  <FormControl>
                    <Input placeholder="My Workspace" maxLength={100}  {...field} disabled={isSubmitting} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="descreption"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descreption</FormLabel>
                  <FormControl>
                    <Textarea placeholder="My Workspace" {...field} disabled={isSubmitting} className="resize-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" variant={'outline'} className="w-full">
              {isSubmitting ? <BiLoaderCircle className="mr-2 h-4 w-4 animate-spin" /> : 'Create'}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
