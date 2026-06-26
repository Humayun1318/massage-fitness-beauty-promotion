import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, MessageSquare, User, Phone, Search } from 'lucide-react';

import { contactSchema, type ContactFormValues } from '@/schemas/contactSchema';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (values: ContactFormValues) => {
    console.log('Contact form submitted:', values);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-950"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <div className="relative">
            <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input id="name" placeholder="Your name" className="pl-10" {...register('name')} />
          </div>
          {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="pl-10"
              {...register('email')}
            />
          </div>
          {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
        </div>

        {/* Phone Number */}
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <div className="relative">
            <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              id="phone"
              type="tel"
              placeholder="Your phone number"
              className="pl-10"
              {...register('phone')}
            />
          </div>
          {errors.phone && <p className="text-sm text-red-600">{errors.phone.message}</p>}
        </div>

        {/* Referral */}
        <div className="space-y-2">
          <Label htmlFor="referral">How did you hear about Purls?</Label>
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              id="referral"
              type="text"
              placeholder="Google, Facebook, Instagram, Friend..."
              className="pl-10"
              {...register('referral')}
            />
          </div>
          {errors.referral && <p className="text-sm text-red-600">{errors.referral.message}</p>}
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <div className="relative">
          <MessageSquare className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-slate-400" />
          <Textarea
            id="message"
            placeholder="How can we help you?"
            className="min-h-36 pl-10 pt-4"
            {...register('message')}
          />
        </div>
        {errors.message && <p className="text-sm text-red-600">{errors.message.message}</p>}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
