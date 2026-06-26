import { motion, type Variants } from 'framer-motion';
import { Clock, DollarSign } from 'lucide-react';

interface PricingCardProps {
  duration?: string;
  price: string;
  description?: string;
  isPopular?: boolean;
  index?: number;
}

export function PricingCard({
  duration,
  price,
  description,
  isPopular = false,
  index = 0,
}: PricingCardProps) {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
    hover: {
      y: -4,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      variants={cardVariants}
      className={`
        relative overflow-hidden rounded-2xl border transition-all duration-300
        ${
          isPopular
            ? 'border-cyan-400 dark:border-cyan-500 shadow-lg shadow-cyan-500/10 scale-100 md:scale-105'
            : 'border-gray-200 dark:border-slate-700 hover:shadow-lg'
        }
        bg-white dark:bg-slate-800
      `}
    >
      {isPopular && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500" />
      )}

      <div className="p-6 sm:p-8">
        {duration && (
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
            <Clock size={18} />
            <span className="text-sm font-medium">{duration}</span>
          </div>
        )}

        <div className="flex items-center gap-1 mb-3">
          <DollarSign size={28} className="text-cyan-500 dark:text-cyan-400" />
          <span className="text-4xl font-bold text-gray-900 dark:text-white">{price}</span>
        </div>

        {description && <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>}

        {isPopular && (
          <div className="mt-4 inline-block px-3 py-1 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 dark:from-cyan-400/30 dark:to-blue-500/30 rounded-full">
            <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400">
              Most Popular
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
