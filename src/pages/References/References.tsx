import { motion } from 'framer-motion';

// Import hero image
import heroImage from '@/assets/images/hero.png';
import { Award, User } from 'lucide-react';
import { testimonials } from '@/data/testimonials.data';
import { TestimonialCarousel } from './sections/TestimonialCarousel';
import { ReferenceGallery, referenceImages } from './sections/ReferenceGallery';

export default function ReferencesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section with Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <div className="relative w-full h-64 sm:h-80 md:h-[350px] rounded-2xl overflow-hidden bg-gray-100 dark:bg-slate-700">
            <img
              src={heroImage}
              alt="References and Testimonials"
              className="w-full h-full object-cover"
              loading="eager"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/src/assets/images/placeholder.svg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Overlay Text */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                References
              </h1>
              <p className="text-white/80 text-sm sm:text-base max-w-2xl">
                What my clients say about their experience
              </p>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="shrink-0 p-2 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 dark:from-cyan-400/10 dark:to-blue-500/10">
              <Award size={24} className="text-cyan-600 dark:text-cyan-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              What My Clients Say
            </h2>
            <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">
              {testimonials.length} reviews
            </span>
          </div>

          <TestimonialCarousel />
        </section>

        {/* References Gallery Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="shrink-0 p-2 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 dark:from-cyan-400/10 dark:to-blue-500/10">
              <User size={24} className="text-cyan-600 dark:text-cyan-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Client References</h2>
            <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">
              {referenceImages.length} references
            </span>
          </div>

          <ReferenceGallery />
        </section>
      </div>
    </div>
  );
}
