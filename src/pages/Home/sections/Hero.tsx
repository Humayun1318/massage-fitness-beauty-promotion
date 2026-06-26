import { ArrowRight, Shield, Award, Flower2, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroImage from "@/assets/images/hero.png"

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
              src={heroImage}
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
              I am a fully qualified and fully insured mobile Massage Therapist, Personal Trainer
              and Beautician, offering bespoke services in the privacy and comfort of your home,
              office, hotel suite, aged care residence, hospital or holiday property.
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
              With over a decade of professional experience in Australia, I bring premium equipment,
              personalised treatments and a discreet service tailored to your lifestyle, ensuring
              every appointment delivers comfort, convenience and exceptional care.
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
                <ArrowRight size={20} strokeWidth={2.5} />
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
