import { z } from 'zod';

import { SigninSchema, SignupSchema } from '@/schemas';

export type SignupSchemaType = z.infer<typeof SignupSchema>;
export type SigninSchemaType = z.infer<typeof SigninSchema>;
