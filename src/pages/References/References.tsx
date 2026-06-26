import { Container } from '@/components/ui/container';
import { PageBanner } from '@/components/ui/page-banner';

export default function ReferencesPage() {
  return (
    <Container className="py-20">
      <PageBanner title="Success Stories" description="Athletes and members who leveled up their fitness." />
      <div className="mt-12 space-y-6 text-slate-700 dark:text-slate-300">
        <p className="leading-7">
          Our community includes athletes, busy professionals, and anyone who wants a smarter path to wellness.
        </p>
        <p className="leading-7 text-slate-600 dark:text-slate-400">
          With personalized coaching and consistent programming, PowerFit is built for long-term momentum.
        </p>
      </div>
    </Container>
  );
}
