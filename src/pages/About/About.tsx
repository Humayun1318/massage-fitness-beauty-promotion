import { Container } from '@/components/ui/container';
import { PageBanner } from '@/components/ui/page-banner';

export default function AboutPage() {
  return (
    <Container className="py-20">
      <PageBanner title="About Us" description="Our mission is to help every member feel stronger and more confident." />
      <div className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_0.8fr]">
        <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-soft dark:border-slate-800 dark:bg-slate-950">
          <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">
            PowerFit is built around purposeful training, modern facilities, and coaches who help members become their best.
          </p>
          <p className="leading-7 text-slate-600 dark:text-slate-400">
            Whether you are new to fitness or returning stronger, our team provides proven programs, accountability, and a supportive environment.
          </p>
        </div>
        <div className="space-y-6 text-slate-700 dark:text-slate-300">
          <div>
            <h3 className="text-xl font-semibold">Why choose PowerFit?</h3>
            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
              We focus on results-driven coaching, member success, and welcoming fitness experiences for all skill levels.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Community-first training</h3>
            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
              Our classes are built to help you feel supported while staying challenged and energized through every session.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
