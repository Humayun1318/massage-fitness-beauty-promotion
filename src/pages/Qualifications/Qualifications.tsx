import { Container } from '@/components/ui/container';
import { PageBanner } from '@/components/ui/page-banner';

export default function QualificationsPage() {
  return (
    <Container className="py-20">
      <PageBanner title="Qualifications" description="Our coaches are certification-backed and approach each athlete with care." />
      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft dark:border-slate-800 dark:bg-slate-950">
          <h3 className="text-xl font-semibold">Certified Trainers</h3>
          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
            Our coaching staff holds competitive certifications in strength training, nutrition, and rehabilitation.
          </p>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft dark:border-slate-800 dark:bg-slate-950">
          <h3 className="text-xl font-semibold">Community Safety</h3>
          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
            We maintain a safe, inclusive environment with clean facilities and programming for all goals.
          </p>
        </div>
      </div>
    </Container>
  );
}
