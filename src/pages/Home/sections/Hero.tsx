// import { ArrowRight, Shield, Award, Flower2, Smartphone } from 'lucide-react';
// import { Link } from 'react-router-dom';

// /* ─────────────────────────── Feature badges ─────────────────────────── */
// const features = [
//   {
//     icon: Smartphone,
//     title: 'MOBILE SERVICES',
//     desc: 'We come to you with everything needed for your comfort.',
//   },
//   {
//     icon: Award,
//     title: 'QUALIFIED & INSURED',
//     desc: 'Fully qualified professionals you can trust.',
//   },
//   {
//     icon: Flower2,
//     title: 'TAILORED EXPERIENCE',
//     desc: 'Personalised treatments to suit your lifestyle.',
//   },
//   {
//     icon: Shield,
//     title: 'DISCREET & PRIVATE',
//     desc: 'Professional service with total privacy and care.',
//   },
// ];



// /* ═══════════════════════════ HERO ══════════════════════════════════════ */
// export default function Hero() {
//   return (
//     <section className="relative min-h-screen flex flex-col bg-[#060810] overflow-hidden">
//       {/* ── Ambient background layers ── */}
//       <div className="absolute inset-0 pointer-events-none select-none">
//         {/* Hero background image placeholder — swap with real asset */}
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
//           style={{ backgroundImage: "url('/src/assets/images/bg.png')" }}
//         />
//       </div>

//       {/* ── Main hero content ── */}
//       <div className="relative z-10 flex-1 flex items-center px-6 lg:px-10 xl:px-16 py-12 lg:py-20">
//         <div className="w-full max-w-2xl">
//           {/* "Purls" script heading */}
          
//           <img
//             src="/src/assets/images/Banner-Purls-re-01.jpg"
//             alt="Purls"
//             className="w-[300px] sm:w-[400px] mb-6 sm:mb-8"
//           />

//           {/* Body copy 1 */}
//           <p className="text-white/75 text-sm sm:text-[15px] leading-relaxed mb-4 max-w-lg">
//             I am a fully qualified and fully insured mobile Massage Therapist, Personal Trainer, and
//             Beautician, offering bespoke services in the privacy and comfort of your own space —
//             whether that's your home, office, hotel suite, aged care residence, hospital, or holiday
//             property. I bring all professional equipment and premium products with me, creating a
//             seamless experience tailored to your needs. Each appointment is personalised to support
//             your well-being and lifestyle, offering a discreet, professional service tailored to
//             clients who value excellence, privacy, and convenience.
//           </p>

//           {/* Body copy 2 */}
//           <p className="text-white/75 text-sm sm:text-[15px] leading-relaxed mb-10 max-w-lg">
//             With over a decade of professional experience in Australia, I bring a unique blend of
//             advanced skill, deep empathy, and global perspective to my work. After 10 transformative
//             years abroad, I've returned home to launch a business rooted in excellence, integrity,
//             and a deep commitment to those I serve.
//           </p>

//           {/* CTA */}
//           <Link
//             to="/contact"
//             className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-black text-base hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(34,211,238,0.5)] active:scale-[0.97] transition-all duration-300"
//             style={{
//               background: 'linear-gradient(90deg, #22d3ee 0%, #3b82f6 100%)',
//             }}
//           >
//             Contact Now
//             <ArrowRight size={18} strokeWidth={2.5} />
//           </Link>
//         </div>
//       </div>

//       {/* ── Feature badges ── */}
//       <div className="relative z-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 bg-black/50 backdrop-blur-sm">
//         {features.map((f, i) => {
//           const Icon = f.icon;
//           return (
//             <div
//               key={f.title}
//               className={`flex items-start gap-4 px-7 py-8 ${
//                 i < features.length - 1
//                   ? 'xl:border-r sm:border-b xl:border-b-0 border-white/10 border-b'
//                   : ''
//               }`}
//             >
//               {/* Icon */}
//               <div className="shrink-0 mt-1">
//                 <Icon
//                   size={42}
//                   strokeWidth={1.2}
//                   className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]"
//                 />
//               </div>
//               {/* Text */}
//               <div>
//                 <p className="text-white font-extrabold text-[13px] tracking-widest uppercase mb-1.5">
//                   {f.title}
//                 </p>
//                 <p className="text-white/55 text-sm leading-snug">{f.desc}</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }
// import { ArrowRight, Shield, Award, Flower2, Smartphone } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const features = [
//   {
//     icon: Smartphone,
//     title: 'MOBILE SERVICES',
//     desc: 'We come to you with everything needed for your comfort.',
//   },
//   {
//     icon: Award,
//     title: 'QUALIFIED & INSURED',
//     desc: 'Fully qualified professionals you can trust.',
//   },
//   {
//     icon: Flower2,
//     title: 'TAILORED EXPERIENCE',
//     desc: 'Personalised treatments to suit your lifestyle.',
//   },
//   {
//     icon: Shield,
//     title: 'DISCREET & PRIVATE',
//     desc: 'Professional service with total privacy and care.',
//   },
// ];

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen flex flex-col bg-black overflow-hidden">
//       {/* ── Background Image ── */}
//       <div className="absolute inset-0 pointer-events-none select-none">
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{ 
//             backgroundImage: "url('/src/assets/images/bg.png')",
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         />
        
//         {/* Dark overlay for text readability */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        
//         {/* Bottom gradient */}
//         <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black to-transparent" />

//         {/* Ambient glows */}
//         <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-blue-900/20 blur-[120px]" />
//         <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-cyan-900/15 blur-[80px]" />
//       </div>

//       {/* ── Main Content ── */}
//       <div className="relative z-10 flex-1 flex items-center px-4 sm:px-6 lg:px-10 xl:px-16 py-8 sm:py-12">
//         <div className="w-full max-w-4xl lg:max-w-5xl">
//           {/* Title */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//             className="mb-4 sm:mb-6 md:mb-8"
//           >
//             <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
//               <span className="block">Purls</span>
//               <span className="block text-cyan-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mt-1 sm:mt-2">
//                 Massage · Fitness · Beauty
//               </span>
//             </h1>
//           </motion.div>

//           {/* Text Content */}
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={{
//               hidden: { opacity: 0 },
//               visible: {
//                 opacity: 1,
//                 transition: {
//                   staggerChildren: 0.1,
//                 },
//               },
//             }}
//             className="max-w-2xl lg:max-w-3xl"
//           >
//             <motion.p
//               variants={{
//                 hidden: { opacity: 0, y: 15 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//               className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4"
//             >
//               I am a fully qualified and fully insured mobile Massage Therapist, Personal Trainer, and
//               Beautician, offering bespoke services in the privacy and comfort of your own space —
//               whether that's your home, office, hotel suite, aged care residence, hospital, or holiday
//               property.
//             </motion.p>

//             <motion.p
//               variants={{
//                 hidden: { opacity: 0, y: 15 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//               className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 md:mb-10"
//             >
//               I bring all professional equipment and premium products with me, creating a seamless 
//               experience tailored to your needs. Each appointment is personalised to support your 
//               well-being and lifestyle, offering a discreet, professional service tailored to clients 
//               who value excellence, privacy, and convenience.
//             </motion.p>

//             {/* CTA */}
//             <motion.div
//               variants={{
//                 hidden: { opacity: 0, y: 15 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//             >
//               <Link
//                 to="/contact"
//                 className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-xl font-bold text-black text-sm sm:text-base md:text-lg hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(34,211,238,0.5)] active:scale-[0.97] transition-all duration-300 shadow-lg shadow-cyan-500/20"
//                 style={{
//                   background: 'linear-gradient(90deg, #22d3ee 0%, #3b82f6 100%)',
//                 }}
//               >
//                 Contact Now
//                 <ArrowRight size={18} strokeWidth={2.5} className="sm:w-[20px] sm:h-[20px]" />
//               </Link>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       {/* ── Feature badges ── */}
//       <div className="relative z-10 border-t border-white/10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 bg-black/60 backdrop-blur-sm">
//         {features.map((f, i) => {
//           const Icon = f.icon;
//           return (
//             <motion.div
//               key={f.title}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
//               className={`
//                 flex items-center gap-2 sm:gap-3 px-3 sm:px-4 lg:px-6 py-4 sm:py-5 lg:py-6
//                 ${i < features.length - 1 ? 'lg:border-r border-white/10' : ''}
//                 ${i < features.length - 2 ? 'border-b lg:border-b-0 border-white/10' : ''}
//                 ${i === features.length - 2 ? 'border-b lg:border-b-0 border-white/10' : ''}
//                 hover:bg-white/5 transition-colors duration-300
//               `}
//             >
//               <div className="shrink-0">
//                 <Icon
//                   size={24}
//                   strokeWidth={1.2}
//                   className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.7)] sm:w-[30px] sm:h-[30px] lg:w-[36px] lg:h-[36px]"
//                 />
//               </div>
//               <div className="min-w-0">
//                 <p className="text-white font-extrabold text-[9px] sm:text-[10px] lg:text-[12px] tracking-widest uppercase mb-0.5">
//                   {f.title}
//                 </p>
//                 <p className="text-white/50 text-[9px] sm:text-[10px] lg:text-sm leading-tight hidden sm:block">
//                   {f.desc}
//                 </p>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }
import { ArrowRight, Shield, Award, Flower2, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Smartphone,
    title: 'MOBILE SERVICES',
    desc: 'We come to you with everything needed for your comfort.',
  },
  {
    icon: Award,
    title: 'QUALIFIED & INSURED',
    desc: 'Fully qualified professionals you can trust.',
  },
  {
    icon: Flower2,
    title: 'TAILORED EXPERIENCE',
    desc: 'Personalised treatments to suit your lifestyle.',
  },
  {
    icon: Shield,
    title: 'DISCREET & PRIVATE',
    desc: 'Professional service with total privacy and care.',
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-white dark:bg-[#0B0F14]">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Light */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:hidden" />

        {/* Dark */}
        <div className="absolute inset-0 hidden dark:block bg-gradient-to-br from-[#0B0F14] via-[#111827] to-[#0A0A0A]" />

        {/* Light Glow */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-cyan-200/30 blur-[120px] dark:hidden" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-blue-200/20 blur-[100px] dark:hidden" />

        {/* Dark Glow */}
        <div className="absolute -top-20 right-0 hidden w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[150px] dark:block" />
        <div className="absolute bottom-0 left-0 hidden w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[120px] dark:block" />
        <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_40%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-5 sm:px-6 lg:px-10 py-16 lg:py-20">
        <div className="w-full max-w-5xl text-center">
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 sm:mb-10 lg:mb-12 flex justify-center"
          >
            <img
              src="src/assets/images/hero.png"
              alt="Purls Wellness"
              className="
                w-full
                max-w-[280px]
                sm:max-w-[400px]
                md:max-w-[520px]
                lg:max-w-[680px]
                xl:max-w-[780px]
                object-contain
              "
            />
          </motion.div>

          {/* Description */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="max-w-4xl mx-auto"
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
              className="
                text-gray-700
                dark:text-white/85
                text-base
                sm:text-lg
                md:text-xl
                leading-relaxed
              "
            >
              I am a fully qualified and fully insured mobile Massage Therapist,
              Personal Trainer and Beautician, offering bespoke services in the
              privacy and comfort of your home, office, hotel suite, aged care
              residence, hospital or holiday property.
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
              className="
                mt-5
                text-gray-600
                dark:text-white/65
                text-sm
                sm:text-base
                md:text-lg
                leading-relaxed
                max-w-3xl
                mx-auto
              "
            >
              With over a decade of professional experience in Australia, I
              bring premium equipment, personalised treatments and a discreet
              service tailored to your lifestyle, ensuring every appointment
              delivers comfort, convenience and exceptional care.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
              className="pt-8 sm:pt-10 flex justify-center"
            >
              <Link
                to="/contact"
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-7
                  sm:px-9
                  py-3.5
                  sm:py-4
                  rounded-2xl
                  font-semibold
                  text-black
                  text-sm
                  sm:text-base
                  bg-gradient-to-r
                  from-cyan-400
                  to-sky-500
                  hover:scale-105
                  hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]
                  transition-all
                  duration-300
                "
              >
                Contact Now
                <ArrowRight
                  size={20}
                  strokeWidth={2.5}
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Feature Badges - UNCHANGED */}
      <div className="relative z-10 border-t border-gray-200/50 dark:border-white/10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 bg-white/80 backdrop-blur-sm dark:bg-slate-950/60">
        {features.map((f, i) => {
          const Icon = f.icon;

          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              className={`
                flex items-center gap-2 sm:gap-3 px-3 sm:px-4 lg:px-6 py-4 sm:py-5 lg:py-6
                ${
                  i < features.length - 1
                    ? 'lg:border-r border-gray-200/50 dark:border-white/10'
                    : ''
                }
                ${
                  i < features.length - 2
                    ? 'border-b lg:border-b-0 border-gray-200/50 dark:border-white/10'
                    : ''
                }
                ${
                  i === features.length - 2
                    ? 'border-b lg:border-b-0 border-gray-200/50 dark:border-white/10'
                    : ''
                }
                hover:bg-gray-100/50 dark:hover:bg-white/5 transition-colors duration-300
              `}
            >
              <div className="shrink-0">
                <Icon
                  size={24}
                  strokeWidth={1.2}
                  className="text-cyan-500 dark:text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.3)] dark:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)] sm:w-[30px] sm:h-[30px] lg:w-[36px] lg:h-[36px]"
                />
              </div>

              <div className="min-w-0">
                <p className="text-gray-800 dark:text-white font-extrabold text-[9px] sm:text-[10px] lg:text-[12px] tracking-widest uppercase mb-0.5">
                  {f.title}
                </p>

                <p className="text-gray-500 dark:text-white/50 text-[9px] sm:text-[10px] lg:text-sm leading-tight hidden sm:block">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}