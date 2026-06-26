import { memberships } from '@/data/memberships';
import { SectionTitle } from '@/components/ui/section-title';
import { MembershipCard } from '@/components/cards/MembershipCard';

export function Memberships() {
  return (
    <section className="bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Memberships" subtitle="Flexible plans for every commitment level." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {memberships.map((plan) => (
            <MembershipCard key={plan.title} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
