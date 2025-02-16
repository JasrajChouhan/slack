import { WorkspaceSchema } from '@/schemas';
import { z } from 'zod';
export type WorkspaceSchemaType = z.infer<typeof WorkspaceSchema>;
