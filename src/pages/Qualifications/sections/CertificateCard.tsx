import { motion } from 'framer-motion';
import { ZoomIn } from 'lucide-react';
import { useState } from 'react';
import { CertificateLightbox } from './CertificateLightbox';

export function CertificateCard({
  name,
  image,
  index,
}: {
  name: string;
  image: string;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.05, duration: 0.3 }}
        className="relative group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsLightboxOpen(true)}
      >
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 dark:hover:shadow-cyan-500/5 transition-all duration-300">
          {/* Certificate Image */}
          <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-slate-700">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/src/assets/images/placeholder.svg';
              }}
            />

            {/* Hover Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/50 flex items-center justify-center"
            >
              <ZoomIn size={32} className="text-white" />
            </motion.div>
          </div>

          {/* Certificate Name */}
          <div className="p-4">
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200 line-clamp-2 text-center">
              {name}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Lightbox */}
      <CertificateLightbox
        isOpen={isLightboxOpen}
        image={image}
        title={name}
        onClose={() => setIsLightboxOpen(false)}
      />
    </>
  );
}
