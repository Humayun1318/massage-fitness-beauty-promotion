// import { Facebook, Instagram, Twitter, Youtube, Phone } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// const socialLinks = [
//   { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
//   { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
//   { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
//   { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
// ];

// export function TopBar() {
//   const isScrolled = useScrollAnimation();

//   return (
//     <motion.div
//       initial={{ opacity: 1, y: 0 }}
//       animate={{
//         opacity: isScrolled ? 0 : 1,
//         y: isScrolled ? -20 : 0,
//       }}
//       transition={{ duration: 0.3 }}
//       className="hidden sm:flex items-center justify-between px-6 lg:px-10 py-2 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-white/5"
//       style={{ pointerEvents: isScrolled ? 'none' : 'auto' }}
//     >
//       {/* Left - WhatsApp */}
//       <div className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
//         <Phone size={14} className="text-emerald-400" />
//         <a
//           href="https://wa.me/+61434605902"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-xs font-medium hover:text-emerald-400 transition-colors"
//         >
//           +61 434 605 902
//         </a>
//       </div>

//       {/* Right - Social Links */}
//       <div className="flex items-center gap-1">
//         {socialLinks.map(({ icon: Icon, href, label }) => (
//           <a
//             key={label}
//             href={href}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-1.5 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200"
//             aria-label={label}
//           >
//             <Icon size={14} />
//           </a>
//         ))}
//       </div>
//     </motion.div>
//   );
// }
import { Facebook, Instagram, Twitter, Youtube, Phone } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
];

export function TopBar() {
  return (
    <div className="top-bar hidden sm:flex items-center justify-between px-6 lg:px-10 py-2 bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-b border-gray-200/50 dark:border-white/5">
      {/* Left - WhatsApp */}
      <div className="flex items-center gap-2 text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white transition-colors">
        <Phone size={14} className="text-emerald-500 dark:text-emerald-400" />
        <a
          href="https://wa.me/+61434605902"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-gray-700 dark:text-white/80 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
        >
          +61 434 605 902
        </a>
      </div>

      {/* Right - Social Links */}
      <div className="flex items-center gap-1">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full text-gray-400 dark:text-white/50 hover:text-gray-700 dark:hover:text-white hover:bg-gray-200/50 dark:hover:bg-white/10 transition-all duration-200"
            aria-label={label}
          >
            <Icon size={14} />
          </a>
        ))}
      </div>
    </div>
  );
}