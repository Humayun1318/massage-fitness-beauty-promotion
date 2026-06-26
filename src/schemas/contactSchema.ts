import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name.'),
  email: z.string().email('Enter a valid email address.'),
  message: z.string().min(10, 'Send us a longer message.')
});

export type ContactFormValues = z.infer<typeof contactSchema>;
