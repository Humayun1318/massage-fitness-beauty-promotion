
// import { Link } from 'react-router-dom';
// import { ThemeToggle } from '../shared/ThemeToggle';
// import { navLinks } from '@/constants/navLinks';



// /* ═══════════════════════════ NAVBAR ════════════════════════════════════ */
// export function Navbar() {
//   return (
//     <nav className="relative z-50 flex items-center justify-between px-6 lg:px-10 py-4 border-b border-white/10 bg-black/60 backdrop-blur-md">
//       {/* Logo */}
//       <div className="flex items-center gap-3 shrink-0">
//         <div className="relative flex items-center justify-center w-11 h-11 rounded-full border-2 border-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.6)]">
//           <span className="text-white font-extrabold text-xs tracking-widest leading-none">PMFB</span>
//         </div>
//         <span className="text-white font-semibold text-sm lg:text-base whitespace-nowrap">
//           Purls Massage Fitness Beauty
//         </span>
//       </div>

//       {/* Nav links — hidden on mobile/tablet */}
//       <ul className="hidden xl:flex items-center gap-6 text-sm font-medium">
//         {navLinks.map((link) => (
//           <li key={link.label}>
//             <Link
//               to={link.path}
//               className={
//                 link.active
//                   ? 'text-cyan-400 font-semibold drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]'
//                   : 'text-white/75 hover:text-white transition-colors duration-200'
//               }
//             >
//               {link.label}
//             </Link>
//           </li>
//         ))}
//       </ul>

//         {/* Theme toggle */}
//         <ThemeToggle />

//       {/* CTA button */}
//       <Link
//         to="/contact"
//         className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/60 text-white text-sm font-medium hover:border-cyan-400 hover:shadow-[0_0_12px_rgba(34,211,238,0.35)] transition-all duration-300 shrink-0"
//       >
//         Contact Now
//       </Link>
//     </nav>
//   );
// }
// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, Phone } from 'lucide-react';
// import { TopBar } from './TopBar';
// import { MobileMenu } from './MobileMenu';
// // import { ThemeToggle } from '@/components/ui/ThemeToggle';
// // import { navLinks } from '@/config/navigation';
// import { useScrollAnimation } from '@/hooks/useScrollAnimation';
// import { navLinks } from '@/constants/navLinks';
// import { ThemeToggle } from '../shared/ThemeToggle';

// export function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const location = useLocation();
//   const isScrolled = useScrollAnimation(); // Using your existing hook

//   // Close mobile menu on route change
//   useEffect(() => {
//     setIsMobileMenuOpen(false);
//   }, [location.pathname]);

//   return (
//     <>
//       <header className="fixed top-0 left-0 right-0 z-50">
//         {/* Top Bar - Hidden on mobile, always visible */}
//         <TopBar />

//         {/* Main Navigation - Sticky on scroll */}
//         <nav
//           className={`transition-all duration-300 ${
//             isScrolled
//               ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-white/5'
//               : 'bg-transparent'
//           }`}
//         >
//           <div className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3">
//             {/* Logo */}
//             <Link to="/" className="flex items-center gap-3 shrink-0 group">
//               <div className="relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.6)] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.8)] transition-shadow duration-300">
//                 <span className="text-white font-extrabold text-[10px] tracking-widest leading-none">
//                   PMFB
//                 </span>
//               </div>
//               <span className="hidden sm:block text-white font-semibold text-sm lg:text-base whitespace-nowrap">
//                 Purls Massage Fitness Beauty
//               </span>
//             </Link>

//             {/* Desktop Navigation Links */}
//             <ul className="hidden xl:flex items-center gap-1 text-sm font-medium">
//               {navLinks.map((link) => {
//                 const isActive = location.pathname === link.path || 
//                   (link.path.includes('#') && location.pathname === '/services' && link.path.includes('#'));
//                 return (
//                   <li key={link.label}>
//                     <Link
//                       to={link.path}
//                       className={`px-3.5 py-2 rounded-lg transition-all duration-200 ${
//                         isActive
//                           ? 'text-cyan-400 font-semibold bg-cyan-400/10'
//                           : 'text-white/70 hover:text-white hover:bg-white/5'
//                       }`}
//                     >
//                       {link.label}
//                     </Link>
//                   </li>
//                 );
//               })}
//             </ul>

//             {/* Right Side Actions */}
//             <div className="flex items-center gap-2 sm:gap-3">
//               {/* Mobile Contact Button */}
//               <a
//                 href="https://wa.me/+61434605902"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="xl:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
//                 aria-label="Contact via WhatsApp"
//               >
//                 <Phone size={18} className="text-emerald-400" />
//               </a>

//               {/* Theme Toggle */}
//               <ThemeToggle />

//               {/* Desktop Contact CTA */}
//               <Link
//                 to="/contact"
//                 className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/60 text-white text-sm font-medium hover:border-cyan-400 hover:shadow-[0_0_12px_rgba(34,211,238,0.35)] transition-all duration-300 shrink-0"
//               >
//                 <Phone size={14} />
//                 Contact Now
//               </Link>

//               {/* Mobile Menu Toggle */}
//               <button
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 className="xl:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
//                 aria-label="Toggle menu"
//               >
//                 <Menu size={22} className="text-white" />
//               </button>
//             </div>
//           </div>
//         </nav>
//       </header>

//       {/* Mobile Menu */}
//       <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

//       {/* Spacer - Account for both top bar and navbar height */}
//       <div className="h-[104px] sm:h-[128px] xl:h-[128px]" />
//     </>
//   );
// }
// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, Phone } from 'lucide-react';
// import { TopBar } from './TopBar';
// import { MobileMenu } from './MobileMenu';
// // import { ThemeToggle } from '@/components/ui/ThemeToggle';
// // import { navLinks } from '@/config/navigation';
// import { useScrollAnimation } from '@/hooks/useScrollAnimation';
// import { navLinks } from '@/constants/navLinks';
// import { ThemeToggle } from '../shared/ThemeToggle';

// export function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const location = useLocation();
//   const isScrolled = useScrollAnimation();

//   // Close mobile menu on route change
//   useEffect(() => {
//     setIsMobileMenuOpen(false);
//   }, [location.pathname]);

//   return (
//     <>
//       {/* Top Bar - Always at top, pushes navbar down */}
//       <div className="hidden sm:block">
//         <TopBar />
//       </div>

//       {/* Navbar Wrapper - Handles positioning */}
//       <div
//         className={`
//           w-full transition-all duration-300
//           ${isScrolled 
//             ? 'fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-white/5' 
//             : 'relative z-40 bg-transparent'
//           }
//         `}
//       >
//         <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3">
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-3 shrink-0 group">
//             <div className="relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.6)] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.8)] transition-shadow duration-300">
//               <span className="text-white font-extrabold text-[10px] tracking-widest leading-none">
//                 PMFB
//               </span>
//             </div>
//             <span className="hidden sm:block text-white font-semibold text-sm lg:text-base whitespace-nowrap">
//               Purls Massage Fitness Beauty
//             </span>
//           </Link>

//           {/* Desktop Navigation Links */}
//           <ul className="hidden xl:flex items-center gap-1 text-sm font-medium">
//             {navLinks.map((link) => {
//               const isActive = location.pathname === link.path || 
//                 (link.path.includes('#') && location.pathname === '/services' && link.path.includes('#'));
//               return (
//                 <li key={link.label}>
//                   <Link
//                     to={link.path}
//                     className={`px-3.5 py-2 rounded-lg transition-all duration-200 ${
//                       isActive
//                         ? 'text-cyan-400 font-semibold bg-cyan-400/10'
//                         : 'text-white/70 hover:text-white hover:bg-white/5'
//                     }`}
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>

//           {/* Right Side Actions */}
//           <div className="flex items-center gap-2 sm:gap-3">
//             {/* Mobile Contact Button */}
//             <a
//               href="https://wa.me/+61434605902"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="xl:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
//               aria-label="Contact via WhatsApp"
//             >
//               <Phone size={18} className="text-emerald-400" />
//             </a>

//             {/* Theme Toggle */}
//             <ThemeToggle />

//             {/* Desktop Contact CTA */}
//             <Link
//               to="/contact"
//               className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/60 text-white text-sm font-medium hover:border-cyan-400 hover:shadow-[0_0_12px_rgba(34,211,238,0.35)] transition-all duration-300 shrink-0"
//             >
//               <Phone size={14} />
//               Contact Now
//             </Link>

//             {/* Mobile Menu Toggle */}
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="xl:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
//               aria-label="Toggle menu"
//             >
//               <Menu size={22} className="text-white" />
//             </button>
//           </div>
//         </nav>
//       </div>

//       {/* Mobile Menu */}
//       <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

//       {/* Dynamic Spacer - Only when navbar is fixed to prevent content jump */}
//       {isScrolled && <div className="h-[64px] sm:h-[72px]" />}
//     </>
//   );
// }

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Phone } from 'lucide-react';
import { TopBar } from './TopBar';
import { MobileMenu } from './MobileMenu';
// import { ThemeToggle } from '@/components/ui/ThemeToggle';
// import { navLinks } from '@/config/navigation';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { navLinks } from '@/constants/navLinks';
import { ThemeToggle } from '../shared/ThemeToggle';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isScrolled = useScrollAnimation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden sm:block">
        <TopBar />
      </div>

      {/* Main Navigation */}
      <div
        className={`
          w-full transition-all duration-300 z-40
          ${isScrolled 
            ? 'fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50 dark:border-white/5' 
            : 'relative bg-transparent'
          }
        `}
      >
        <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.6)] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.8)] transition-shadow duration-300 bg-black/20 dark:bg-black/40">
              {/* PMFB Text - Always visible with proper contrast */}
              <span className="font-extrabold text-[10px] tracking-widest leading-none text-white dark:text-white drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">
                PMFB
              </span>
            </div>
            {/* Brand Name - Light mode: dark text, Dark mode: white text */}
            <span className="hidden sm:block font-semibold text-sm lg:text-base whitespace-nowrap text-gray-900 dark:text-white">
              Purls Massage Fitness Beauty
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden xl:flex items-center gap-1 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || 
                (link.path.includes('#') && location.pathname === '/services' && link.path.includes('#'));
              return (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className={`px-3.5 py-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'text-cyan-600 dark:text-cyan-400 font-semibold bg-cyan-100/50 dark:bg-cyan-400/10'
                        : 'text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Mobile Contact Button */}
            <a
              href="https://wa.me/+61434605902"
              target="_blank"
              rel="noopener noreferrer"
              className="xl:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Contact via WhatsApp"
            >
              <Phone size={18} className="text-emerald-500 dark:text-emerald-400" />
            </a>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Desktop Contact CTA - Fixed text visibility */}
            <Link
              to="/contact"
              className={`
                hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full border text-sm font-medium transition-all duration-300 shrink-0
                ${isScrolled 
                  ? 'border-cyan-500/60 dark:border-cyan-400/60 text-cyan-600 dark:text-white hover:border-cyan-500 dark:hover:border-cyan-400 hover:shadow-[0_0_12px_rgba(34,211,238,0.35)]' 
                  : 'border-cyan-400/60 text-gray-900 dark:text-white hover:border-cyan-400 hover:shadow-[0_0_12px_rgba(34,211,238,0.35)]'
                }
              `}
            >
              <Phone size={14} className="text-current" />
              Contact Now
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              <Menu size={22} className="text-gray-800 dark:text-white" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      {/* Spacer - Only when navbar is fixed */}
      {isScrolled && <div className="h-[64px] sm:h-[72px]" />}
    </>
  );
}