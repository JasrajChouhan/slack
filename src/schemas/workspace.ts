import { z } from 'zod';

export const WorkspaceSchema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters long' }).max(20, {
    message: 'Name must be at most 20 characters long',
  }),
  descreption: z.string().min(3, { message: 'Description must be at least 3 characters long' }).max(100, {
    message: 'Description must be at most 100 characters long',
  }),
});
