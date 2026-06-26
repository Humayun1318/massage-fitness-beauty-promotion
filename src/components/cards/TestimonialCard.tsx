import { Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';
import type { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="space-y-4">
      <Quote className="h-5 w-5 text-brand-500" />
      <p className="text-base leading-7 text-slate-700 dark:text-slate-300">“{testimonial.quote}”</p>
      <div>
        <p className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</p>
        <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
      </div>
    </Card>
  );
}
