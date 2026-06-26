import { motion } from 'framer-motion';
import { Dumbbell, User, BarChart, Repeat, TrendingUp } from 'lucide-react';

// Import hero image
import heroImage from '@/assets/images/PNF-Personal-Training.png';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { ContactForm } from '@/components/forms/ContactForm';

export default function PersonalTrainingPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section with Image and Price Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          {/* Image */}
          <div className="relative w-full h-64 sm:h-80 md:h-[600px] rounded-2xl overflow-hidden bg-gray-100 dark:bg-slate-700 mb-6">
            <img
              src={heroImage}
              alt="Personal Training"
              className="w-full h-full object-cover"
              loading="eager"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/src/assets/images/placeholder.svg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>

          {/* Price Cards */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="inline-flex items-center gap-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl px-6 py-3 shadow-sm">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Package</span>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">11 hours</span>
            </div>
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl px-6 py-3 shadow-lg shadow-cyan-500/20">
              <span className="text-sm font-medium text-black/70">Price</span>
              <span className="text-2xl font-bold text-black">£500</span>
            </div>
            <div className="inline-flex px-3 py-1 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 dark:from-cyan-400/30 dark:to-blue-500/30 rounded-full">
              <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                Best Value
              </span>
            </div>
          </div>
        </motion.div>

        {/* Content Section 1: Personal Training Details - No Image */}
        <section className="mb-8">
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="shrink-0 p-2 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 dark:from-cyan-400/10 dark:to-blue-500/10">
                <Dumbbell size={24} className="text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Personal Training
              </h3>
            </div>
            <div className="space-y-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              <p>
                I am a Personal Trainer who specialises in rehabilitation with my primary focus on
                promoting neutral spine. Aligning the body is crucial for preventing injury,
                reducing pain, ensuring proper movement patterns, and improving overall posture.
              </p>
              <p>
                This focus helps you to regain strength, mobility, and functionality through
                targeted exercise and stretch.
              </p>
              <p>
                I will design you a safe and effective fitness plan to aid recovery and prevent
                further injury, all built around your unique rehabilitation needs.
              </p>
              <p>
                Understanding the body's musculoskeletal system means that I can create bespoke
                routines for your specific injury, physique and ability. Drawing on anatomy and
                biometrics to assess muscle imbalances, I address these through targeted exercise,
                corrective movement patterns and specifically tailored programming.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Session 1 - No Image */}
        <section className="mb-8">
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="shrink-0 p-2 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 dark:from-cyan-400/10 dark:to-blue-500/10">
                <User size={24} className="text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Session 1</h3>
            </div>
            <div className="space-y-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              <p>
                Two-hour initial consultation, where we discuss your medical history, goals, and go
                through physical testing such as strength, stamina and flexibility.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Session 2 - No Image */}
        <section className="mb-8">
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="shrink-0 p-2 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 dark:from-cyan-400/10 dark:to-blue-500/10">
                <BarChart size={24} className="text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Session 2</h3>
            </div>
            <div className="space-y-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              <p>Physical analysis explained, and one-hour bespoke programming begins.</p>
            </div>
          </div>
        </section>

        {/* Section 4: Sessions 3-9 - No Image */}
        <section className="mb-8">
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="shrink-0 p-2 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 dark:from-cyan-400/10 dark:to-blue-500/10">
                <Repeat size={24} className="text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Session 3 – 9</h3>
            </div>
            <div className="space-y-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              <p>One-hour bespoke routines continually progressed or regressed.</p>
            </div>
          </div>
        </section>

        {/* Section 5: Session 10 - No Image */}
        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="shrink-0 p-2 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 dark:from-cyan-400/10 dark:to-blue-500/10">
                <TrendingUp size={24} className="text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Session 10</h3>
            </div>
            <div className="space-y-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              <p>One hour re-testing to show your improvements.</p>
            </div>
          </div>
        </section>

        {/* contact */}
        <section className="mt-8">
          <SectionHeader
            // pill="Spotlight"
            title="Need Help?"
            titleHighlight="Let’s chat"
            // subtitle="Carefully curated treatments that represent the very best of what we offer — each one bespoke, evidence-based, and delivered at your door."
          />
          <ContactForm />
        </section>
      </div>
    </div>
  );
}
