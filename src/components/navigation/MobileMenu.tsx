// import { X, Phone } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { navLinks } from '@/constants/navLinks';


// interface MobileMenuProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           {/* Backdrop */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
//             onClick={onClose}
//           />

//           {/* Menu Panel */}
//           <motion.div
//             initial={{ x: '100%' }}
//             animate={{ x: 0 }}
//             exit={{ x: '100%' }}
//             transition={{ type: 'tween', duration: 0.3 }}
//             className="fixed inset-y-0 right-0 z-50 w-72 bg-slate-900 shadow-2xl lg:hidden border-l border-white/10"
//           >
//             {/* Header */}
//             <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
//               <span className="text-white font-bold text-sm tracking-widest">MENU</span>
//               <button
//                 onClick={onClose}
//                 className="p-2 rounded-full hover:bg-white/10 transition-colors"
//                 aria-label="Close menu"
//               >
//                 <X size={20} className="text-white/70" />
//               </button>
//             </div>

//             {/* Navigation Links with stagger animation */}
//             <nav className="px-4 py-6 space-y-1">
//               {navLinks.map((link, index) => (
//                 <motion.div
//                   key={link.label}
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.05 }}
//                 >
//                   <Link
//                     to={link.path}
//                     onClick={onClose}
//                     className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
//                       link.path === '/'
//                         ? 'text-cyan-400 bg-cyan-400/10'
//                         : 'text-white/70 hover:text-white hover:bg-white/5'
//                     }`}
//                   >
//                     {link.label}
//                   </Link>
//                 </motion.div>
//               ))}
//             </nav>

//             {/* Contact CTA */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-slate-800/50"
//             >
//               <a
//                 href="https://wa.me/+61434605902"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
//               >
//                 <Phone size={16} />
//                 Contact Now
//               </a>
//             </motion.div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// }
import { X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '@/constants/navLinks';
// import { navLinks } from '@/config/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-y-0 right-0 z-50 w-72 bg-white dark:bg-slate-900 shadow-2xl lg:hidden border-l border-gray-200 dark:border-white/10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 dark:border-white/10">
              <span className="text-gray-900 dark:text-white font-bold text-sm tracking-widest">MENU</span>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                aria-label="Close menu"
              >
                <X size={20} className="text-gray-600 dark:text-white/70" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="px-4 py-6 space-y-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={onClose}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      link.path === '/'
                        ? 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-400/10'
                        : 'text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 dark:border-white/10 bg-gray-50/80 dark:bg-slate-800/50"
            >
              <a
                href="https://wa.me/+61434605902"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
              >
                <Phone size={16} />
                Contact Now
              </a>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}