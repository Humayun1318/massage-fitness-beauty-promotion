import { Container } from '@/components/ui/container';
import { PageBanner } from '@/components/ui/page-banner';
import { memberships } from '@/data/memberships';
import { MembershipCard } from '@/components/cards/MembershipCard';

export default function MembershipsPage() {
  return (
    <Container className="py-20">
      <PageBanner title="Memberships" description="Find the plan that fits your schedule and goals." />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {memberships.map((plan) => (
          <MembershipCard key={plan.title} plan={plan} />
        ))}
      </div>
    </Container>
  );
}
