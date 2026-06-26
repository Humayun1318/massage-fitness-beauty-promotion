import { motion } from 'framer-motion';
import { 
  Dumbbell, 
  Activity, 
  Heart, 
  Target, 
  Clock, 
  Award,
  Zap,
  Check,
  User,
  BarChart,
  Repeat,
  TrendingUp
} from 'lucide-react';
// import { SectionHeader } from '@/components/ui/SectionHeader';
// import { ImageWithContent } from '@/components/ui/ImageWithContent';

// Import images
import trainingImage1 from '@/assets/images/personal-training/training-1.jpg';
import trainingImage2 from '@/assets/images/personal-training/training-2.jpg';
import trainingImage3 from '@/assets/images/personal-training/training-3.jpg';
import { ImageWithContent } from '../SeatedMassage/sections/ImageWithContent';
import { SectionHeader } from '@/components/shared/SectionHeader';

export default function PersonalTrainingPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Personal Training
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Rehabilitation-focused personal training for injury recovery and prevention
          </p>
        </motion.div>

        {/* SECTION 1: Personal Training Overview - Image LEFT, Content RIGHT */}
        <section className="mb-8">
          <ImageWithContent
            image={trainingImage1}
            imageAlt="Personal Training"
            title="Personal Training"
            icon={<Dumbbell size={24} className="text-cyan-600 dark:text-cyan-400" />}
            imagePosition="left"
            index={0}
          >
            <p>I am a Personal Trainer who specialises in rehabilitation with my primary focus on promoting neutral spine. Aligning the body is crucial for preventing injury, reducing pain, ensuring proper movement patterns, and improving overall posture.</p>
            <p>This focus helps you to regain strength, mobility, and functionality through targeted exercise and stretch.</p>
            <p>I will design you a safe and effective fitness plan to aid recovery and prevent further injury, all built around your unique rehabilitation needs.</p>
            <p>Understanding the body's musculoskeletal system means that I can create bespoke routines for your specific injury, physique and ability. Drawing on anatomy and biometrics to assess muscle imbalances, I address these through targeted exercise, corrective movement patterns and specifically tailored programming.</p>
          </ImageWithContent>
        </section>

        {/* SECTION 2: Session 1 - Image RIGHT, Content LEFT */}
        <section className="mb-8">
          <ImageWithContent
            image={trainingImage2}
            imageAlt="Initial Consultation"
            title="Session 1"
            icon={<User size={24} className="text-cyan-600 dark:text-cyan-400" />}
            imagePosition="right"
            index={1}
          >
            <p>Two-hour initial consultation, where we discuss your medical history, goals, and go through physical testing such as strength, stamina and flexibility.</p>
          </ImageWithContent>
        </section>

        {/* SECTION 3: Session 2 - Image LEFT, Content RIGHT */}
        <section className="mb-8">
          <ImageWithContent
            image={trainingImage3}
            imageAlt="Bespoke Programming"
            title="Session 2"
            icon={<BarChart size={24} className="text-cyan-600 dark:text-cyan-400" />}
            imagePosition="left"
            index={2}
          >
            <p>Physical analysis explained, and one-hour bespoke programming begins.</p>
          </ImageWithContent>
        </section>

        {/* SECTION 4: Sessions 3-9 - No Images */}
        <section className="mb-8">
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="shrink-0 p-2 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 dark:from-cyan-400/10 dark:to-blue-500/10">
                <Repeat size={24} className="text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Session 3 – 9
              </h3>
            </div>
            <div className="space-y-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              <p>One-hour bespoke routines continually progressed or regressed.</p>
            </div>
          </div>
        </section>

        {/* SECTION 5: Session 10 - No Images */}
        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="shrink-0 p-2 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 dark:from-cyan-400/10 dark:to-blue-500/10">
                <TrendingUp size={24} className="text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Session 10
              </h3>
            </div>
            <div className="space-y-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              <p>One hour re-testing to show your improvements.</p>
            </div>
          </div>
        </section>

        {/* Pricing Section - No Images */}
        <section>
          <SectionHeader title="Pricing" />
          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="relative overflow-hidden rounded-2xl border-2 border-cyan-400 dark:border-cyan-500 bg-white dark:bg-slate-800 shadow-lg shadow-cyan-500/10 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500" />
              <div className="p-6 sm:p-8 text-center">
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Package</div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">
                  11 hours
                </div>
                <div className="text-3xl font-semibold text-cyan-600 dark:text-cyan-400">£500</div>
                <div className="mt-4 inline-block px-3 py-1 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 dark:from-cyan-400/30 dark:to-blue-500/30 rounded-full">
                  <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                    Best Value
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}