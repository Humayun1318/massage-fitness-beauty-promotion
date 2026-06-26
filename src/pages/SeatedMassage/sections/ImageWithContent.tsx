import { motion, type Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface ImageWithContentProps {
  image: string;
  imageAlt: string;
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  imagePosition?: 'left' | 'right';
  className?: string;
  index?: number;
}

export function ImageWithContent({
  image,
  imageAlt,
  title,
  icon,
  children,
  imagePosition = 'left',
  className = '',
  index = 0
}: ImageWithContentProps) {
  const isLeft = imagePosition === 'left';
  
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, x: isLeft ? 20 : -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3,
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`group bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 dark:hover:shadow-cyan-500/5 transition-all duration-300 ${className}`}
    >
      <div className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        {/* Image Section */}
        <motion.div 
          className="relative w-full md:w-1/2 h-64 md:h-auto min-h-[300px] overflow-hidden bg-gray-100 dark:bg-slate-700"
          variants={imageVariants}
          whileHover="hover"
        >
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-500"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/src/assets/images/placeholder.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        </motion.div>

        {/* Content Section */}
        <motion.div 
          variants={contentVariants}
          className="w-full md:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center"
        >
          {/* Title with Icon */}
          <div className="flex items-center gap-3 mb-4">
            {icon && (
              <div className="shrink-0 p-2 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 dark:from-cyan-400/10 dark:to-blue-500/10">
                {icon}
              </div>
            )}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
              {title}
            </h3>
          </div>

          {/* Content */}
          <div className="space-y-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            {children}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}