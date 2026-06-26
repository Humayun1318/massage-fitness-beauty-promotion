import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';


import { CertificateCard } from './sections/CertificateCard';
import { qualificationCategories } from '@/data/qualificationCategories';


// Import hero image
import heroImage from '@/assets/images/hero.png';

export default function QualificationsPage() {
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
              alt="Qualifications and Certificates"
              className="w-full h-full object-cover"
              loading="eager"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/src/assets/images/placeholder.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Overlay Text */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                Qualifications
              </h1>
              <p className="text-white/80 text-sm sm:text-base max-w-2xl">
                Professional certifications and qualifications across massage, fitness, beauty, and
                first aid
              </p>
            </div>
          </div>
        </motion.div>

        {/* Qualifications Categories */}
        <div className="space-y-12">
          {qualificationCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="shrink-0 p-2 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 dark:from-cyan-400/10 dark:to-blue-500/10">
                  <category.icon size={28} className="text-cyan-600 dark:text-cyan-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h2>
                <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">
                  {category.items.length} certificates
                </span>
              </div>

              {/* Certificate Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {category.items.map((item, itemIndex) => (
                  <CertificateCard
                    key={itemIndex}
                    name={item.name}
                    image={item.image}
                    index={itemIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total Certificates Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 p-6 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 dark:from-cyan-400/5 dark:to-blue-500/5 rounded-2xl border border-cyan-400/20 dark:border-cyan-400/10 text-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div>
              <span className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">
                {qualificationCategories.reduce((acc, cat) => acc + cat.items.length, 0)}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                Total Certificates
              </span>
            </div>
            <div className="w-px h-8 bg-gray-300 dark:bg-gray-700 hidden sm:block" />
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <GraduationCap size={18} className="text-cyan-500" />
              <span>Across {qualificationCategories.length} Categories</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
