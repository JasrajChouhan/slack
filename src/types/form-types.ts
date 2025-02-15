import { z } from 'zod';

import { SignupSchema } from '@/schemas';

export type SignupSchemaType = z.infer<typeof SignupSchema>;
