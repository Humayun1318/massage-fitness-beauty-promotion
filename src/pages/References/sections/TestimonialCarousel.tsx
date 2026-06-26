import { testimonials } from '@/data/testimonials.data';
import { ChevronLeft, ChevronRight, Star, Quote, User, Calendar, Award } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Testimonial Carousel Component
export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const current = testimonials[currentIndex];

  return (
    <div
      className="relative bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 p-6 sm:p-8 md:p-10 shadow-sm"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 opacity-10">
        <Quote size={64} className="text-cyan-500" />
      </div>

      {/* Rating Stars */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={
              i < current.rating
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-gray-300 dark:text-gray-600'
            }
          />
        ))}
        <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">{current.rating}.0</span>
      </div>

      {/* Testimonial Text */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-[120px]"
      >
        <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed italic">
          "{current.text}"
        </p>
      </motion.div>

      {/* Client Info */}
      <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200 dark:border-slate-700">
        <div className="shrink-0 p-2 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 dark:from-cyan-400/10 dark:to-blue-500/10">
          <User size={20} className="text-cyan-600 dark:text-cyan-400" />
        </div>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white">{current.name}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{current.service}</p>
        </div>
        <div className="ml-auto flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
          <Calendar size={14} />
          <span>Verified</span>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200 dark:border-slate-700">
        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-gradient-to-r from-cyan-400 to-blue-500'
                  : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
