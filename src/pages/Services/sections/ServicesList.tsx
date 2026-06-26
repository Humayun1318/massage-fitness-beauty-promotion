import { fallbackImage, servicesData } from '@/data/services';
import { motion, type Variants} from 'framer-motion';

interface ServicesListProps {
  category: string;
}

export function ServicesList({ category }: ServicesListProps) {
  const filteredServices = category === 'All' 
    ? servicesData 
    : servicesData.filter(service => service.category === category);

  // Card variants for framer-motion
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const imageVariants: Variants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const iconVariants: Variants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredServices.map((service, index) => {
        const Icon = service.icon;
        return (
          <motion.div
            key={service.id}
            custom={index}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={cardVariants}
            className="group bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 dark:hover:shadow-cyan-500/5 transition-shadow duration-300"
          >
            {/* Image Section */}
            <motion.div 
              className="relative w-full h-56 sm:h-64 md:h-56 lg:h-64 overflow-hidden bg-gray-100 dark:bg-slate-700"
              variants={imageVariants}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  // Fallback if image fails to load
                  (e.target as HTMLImageElement).src = fallbackImage;
                }}
              />
              
              {/* Category Badge - Overlay on Image */}
              <div className="absolute top-4 right-4">
                <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-black/60 backdrop-blur-sm rounded-full border border-white/10">
                  {service.category}
                </span>
              </div>

              {/* Gradient Overlay for better text readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </motion.div>

            {/* Content Section */}
            <div className="p-6">
              {/* Icon and Title */}
              <div className="flex items-start gap-3 mb-3">
                <motion.div 
                  className="shrink-0 p-2 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 dark:from-cyan-400/10 dark:to-blue-500/10"
                  variants={iconVariants}
                >
                  <Icon 
                    size={24} 
                    className="text-cyan-600 dark:text-cyan-400" 
                  />
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}