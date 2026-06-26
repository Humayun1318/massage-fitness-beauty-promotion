import { motion } from 'framer-motion';
import { Sparkles, Clock } from 'lucide-react';

// Import hero image
import heroImage from '@/assets/images/beauty.png';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { ContactForm } from '@/components/forms/ContactForm';

export default function BeautyPackagesPage() {
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
          <div className="relative w-full h-64 sm:h-80 md:h-[700px] rounded-2xl overflow-hidden bg-gray-100 dark:bg-slate-700 mb-6">
            <img
              src={heroImage}
              alt="Beauty Packages"
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
              <span className="text-2xl font-bold text-gray-900 dark:text-white">Two Hours</span>
            </div>
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl px-6 py-3 shadow-lg shadow-cyan-500/20">
              <span className="text-sm font-medium text-black/70">Price</span>
              <span className="text-2xl font-bold text-black">£150</span>
            </div>
            <div className="inline-flex px-3 py-1 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 dark:from-cyan-400/30 dark:to-blue-500/30 rounded-full">
              <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                Luxury Package
              </span>
            </div>
          </div>
        </motion.div>

        {/* Section 1: 60-minute treatments - No Image */}
        <section className="mb-8">
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="shrink-0 p-2 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 dark:from-cyan-400/10 dark:to-blue-500/10">
                <Clock size={24} className="text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                60-minute treatments include: (choose one)
              </h3>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              <li className="flex items-start gap-2">
                <Sparkles size={16} className="text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>Facial (anti-ageing, acne, sensitive, male).</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles size={16} className="text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  Luxury Manicure (essential oil warm water hand bath, hand and arm exfoliation,
                  hand and arm massage, cuticle trim, nail trim, file and shape, base coat, colour
                  enamel, top coat, nail oil).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles size={16} className="text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  Luxury Pedicure (essential oil warm water foot bath, foot and leg exfoliation,
                  foot and leg massage, cuticle trim, nail trim, file and shape, base coat, colour
                  enamel, top coat, nail oil).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles size={16} className="text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>Remedial Massage.</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles size={16} className="text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>Deep Tissue Massage.</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles size={16} className="text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>Sports/PNF.</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles size={16} className="text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>Lymphatic Drainage</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles size={16} className="text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>Aromatherapy Hot Stones.</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles size={16} className="text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>Pregnancy Massage.</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles size={16} className="text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>Indian Head</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles size={16} className="text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>Thai Massage.</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles size={16} className="text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>Seated Massage.</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles size={16} className="text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>Aged Care/Palliative Care/Bereavement Massage.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 2: 30-minute treatments - No Image */}
        <section className="mb-8">
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="shrink-0 p-2 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 dark:from-cyan-400/10 dark:to-blue-500/10">
                <Clock size={24} className="text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                30-minute treatments include: (choose one)
              </h3>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              <li className="flex items-start gap-2">
                <Sparkles size={16} className="text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  Express Manicure (essential oil warm water hand bath, cuticle trim, nail trim,
                  file and shape, base coat, colour enamel, top coat, nail oil).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles size={16} className="text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  Express Pedicure (essential oil warm water foot bath, cuticle trim, nail trim,
                  file and shape, base coat, colour enamel, top coat, nail oil).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles size={16} className="text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>Full Leg Waxing.</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles size={16} className="text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>Full Arm Waxing.</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles size={16} className="text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>Male Chest.</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles size={16} className="text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>Male Back.</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles size={16} className="text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>Male Buttocks.</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles size={16} className="text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>Female Bikini Line.</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles size={16} className="text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>Indian Head Massage</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles size={16} className="text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>Seated Massage</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3: 15-minute treatments - No Image */}
        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="shrink-0 p-2 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 dark:from-cyan-400/10 dark:to-blue-500/10">
                <Clock size={24} className="text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                15 minute treatments include: (choose two)
              </h3>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              <li className="flex items-start gap-2">
                <Sparkles size={16} className="text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>Eyelash Tint.</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles size={16} className="text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>Eyebrow Tint.</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles size={16} className="text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>Eyebrow Shape/Maintenance.</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles size={16} className="text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>Manicure (base coat, colour enamel, top coat only).</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles size={16} className="text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>Pedicure (base coat, colour enamel, top coat only).</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles size={16} className="text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>Half Leg Wax.</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles size={16} className="text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>Half Arm Wax.</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles size={16} className="text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>Female Waxing – nasal, lip and chin.</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles size={16} className="text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>Male Waxing – nasal and ears.</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles size={16} className="text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>Indian Head Massage.</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles size={16} className="text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>Seated Massage.</span>
              </li>
            </ul>
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
