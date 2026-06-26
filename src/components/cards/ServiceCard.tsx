import { ArrowRight, Dumbbell, Leaf, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import type { Service } from '@/types';

const iconMap = {
  dumbbell: Dumbbell,
  users: Users,
  leaf: Leaf
};

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon as keyof typeof iconMap] || ArrowRight;

  return (
    <Card className="space-y-5">
      <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300">
        <Icon className="h-6 w-6" />
      </div>
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{service.title}</h3>
        <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">{service.description}</p>
      </div>
    </Card>
  );
}
