import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({ title, subtitle, className }: SectionTitleProps) {
  return (
    <div className={cn('space-y-2 text-center', className)}>
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-600">
        Gym & Fitness
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mx-auto max-w-2xl text-sm text-slate-600 dark:text-slate-400">{subtitle}</p>
      ) : null}
    </div>
  );
}
