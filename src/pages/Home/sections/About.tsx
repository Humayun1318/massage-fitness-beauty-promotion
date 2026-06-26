import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/ui/section-title';

export function About() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About PowerFit" subtitle="Strength, wellness, and community crafted for every fitness goal." />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_0.7fr]"
        >
          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-soft dark:border-slate-800 dark:bg-slate-900">
            <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
              PowerFit is a modern gym destination built for athletes and work-life balance seekers alike.
              We combine expert coaching, small-group motivation, and recovery support to deliver a training experience worth repeating.
            </p>
          </div>
          <div className="space-y-5 text-slate-700 dark:text-slate-300">
            <div>
              <h3 className="text-xl font-semibold">What sets us apart</h3>
              <p className="mt-3 leading-7">
                Our studio offers flexible scheduling, robust equipment, and a supportive community designed around consistency.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">A welcoming environment</h3>
              <p className="mt-3 leading-7">
                From beginners to performance athletes, every program emphasizes safety, progress, and measurable results.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
