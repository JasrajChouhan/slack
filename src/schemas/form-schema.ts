import { z } from 'zod';

export const SignupSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Username must be at least 3 characters long' }).max(20, {
      message: 'Username must be at most 20 characters long'
    }),
  email: z
    .string()
    .email({
      message: 'Invalid email address'
    }),
  password: z
    .string()
    .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/, {
      message: 'Password must be at least 6 characters long and contain at least one letter and one number'
    })
});

