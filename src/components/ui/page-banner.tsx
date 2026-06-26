import { cn } from '@/lib/utils';

interface PageBannerProps {
  title: string;
  description?: string;
}

export function PageBanner({ title, description }: PageBannerProps) {
  return (
    <section className={cn('rounded-[2rem] border border-slate-200 bg-white p-10 shadow-soft dark:border-slate-800 dark:bg-slate-950')}>
      <div className="space-y-3 text-center">
        <p className="text-sm uppercase tracking-[0.24em] text-brand-600">Welcome</p>
        <h1 className="text-4xl font-semibold text-slate-950 dark:text-white">{title}</h1>
        {description ? <p className="mx-auto max-w-2xl text-sm text-slate-600 dark:text-slate-400">{description}</p> : null}
      </div>
    </section>
  );
}
