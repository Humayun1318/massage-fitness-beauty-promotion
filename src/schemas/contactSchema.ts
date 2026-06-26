import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().min(8, 'Please enter your phone number.'),
  referral: z.string().min(2, 'Please tell us how you heard about Purls.'),
  message: z.string().min(10, 'Please enter your message.'),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
