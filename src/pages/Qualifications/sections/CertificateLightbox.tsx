import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomOut } from 'lucide-react';
import { useEffect } from 'react';

interface CertificateLightboxProps {
  isOpen: boolean;
  image: string;
  title: string;
  onClose: () => void;
}

export function CertificateLightbox({ isOpen, image, title, onClose }: CertificateLightboxProps) {
  // Prevent scrolling when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors duration-200"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            {/* Zoom Out Hint */}
            {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 px-4 py-2 bg-black/50 rounded-full text-white/80 text-sm">
              <ZoomOut size={16} />
              <span>Click anywhere to close</span>
            </div> */}

            {/* Certificate Image */}
            <div className="relative w-full max-h-[85vh] overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-auto max-h-[85vh] object-contain"
                loading="lazy"
              />
            </div>

            {/* Certificate Title */}
            <div className="p-4 text-center bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700">
              <p className="text-gray-800 dark:text-gray-200 font-medium">{title}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
