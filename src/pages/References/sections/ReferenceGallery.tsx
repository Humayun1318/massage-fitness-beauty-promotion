

import { motion, AnimatePresence } from 'framer-motion';

// Import reference images - you'll need to add these images
import refImage1 from '@/assets/images/hero.png';
import refImage2 from '@/assets/images/hero.png';
import refImage3 from '@/assets/images/hero.png';
import refImage4 from '@/assets/images/hero.png';
import refImage5 from '@/assets/images/hero.png';
import refImage6 from '@/assets/images/hero.png';
import refImage7 from '@/assets/images/hero.png';
import refImage8 from '@/assets/images/hero.png';
import refImage9 from '@/assets/images/hero.png';
import { testimonials } from '@/data/testimonials.data';


// Reference images data
export const referenceImages = [
  { id: 1, image: refImage1, title: 'Client Reference 1' },
  { id: 2, image: refImage2, title: 'Client Reference 2' },
  { id: 3, image: refImage3, title: 'Client Reference 3' },
  { id: 4, image: refImage4, title: 'Client Reference 4' },
  { id: 5, image: refImage5, title: 'Client Reference 5' },
  { id: 6, image: refImage6, title: 'Client Reference 6' },
  { id: 7, image: refImage7, title: 'Client Reference 7' },
  { id: 8, image: refImage8, title: 'Client Reference 8' },
  { id: 9, image: refImage9, title: 'Client Reference 9' }
];

// Reference Image Gallery Component
export function ReferenceGallery() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {referenceImages.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          className="group relative aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-slate-700 shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 dark:hover:shadow-cyan-500/5 transition-all duration-300 cursor-pointer"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/src/assets/images/placeholder.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <p className="p-3 text-white text-sm font-medium w-full text-center">
              {item.title}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}