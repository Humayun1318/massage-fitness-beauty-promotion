import { CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import type { Membership } from '@/types';

interface MembershipCardProps {
  plan: Membership;
}

export function MembershipCard({ plan }: MembershipCardProps) {
  return (
    <Card className="space-y-6">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-600">{plan.title}</p>
        <p className="text-3xl font-semibold text-slate-950 dark:text-white">{plan.price}</p>
      </div>
      <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
        {plan.benefits.map((benefit) => (
          <li key={benefit} className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-brand-500" />
            {benefit}
          </li>
        ))}
      </ul>
      <button className="inline-flex w-full items-center justify-center rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">
        Join now
      </button>
    </Card>
  );
}
