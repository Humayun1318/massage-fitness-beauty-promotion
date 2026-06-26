import { Dumbbell } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn('inline-flex items-center gap-2 text-brand-600', className)}>
      <Dumbbell className="h-6 w-6" />
      <span className="text-lg font-semibold tracking-tight">PowerFit</span>
    </div>
  );
}
