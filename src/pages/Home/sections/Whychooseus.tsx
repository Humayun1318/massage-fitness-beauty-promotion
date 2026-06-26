import { motion } from 'framer-motion';
import {
  GraduationCap, ShieldCheck, MapPin, Calendar, Briefcase, Heart,
} from 'lucide-react';
// import { SectionHeader } from '@/components/ui/SectionHeader';
import { WHY_CARDS } from '@/data/home.data';
import { SectionHeader } from '@/components/shared/SectionHeader';

const ICONS = [GraduationCap, ShieldCheck, MapPin, Calendar, Briefcase, Heart];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

/* ══════════════════════════════════════════════════════════════ */
export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Ambient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full opacity-20 blur-[140px]"
          style={{ background: 'radial-gradient(ellipse,rgba(34,211,238,0.18),transparent 65%)' }}
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          pill="Our Promise"
          title="Why Choose"
          titleHighlight="Purls"
          subtitle="Every appointment is built on a foundation of professional excellence, deep care, and genuine commitment to your wellbeing."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {WHY_CARDS.map((w, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={w.title}
                variants={item}
                className="group relative rounded-3xl p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid rgba(148,163,184,0.1)',
                  boxShadow: 'var(--shadow)',
                }}
              >
                {/* Hover accent streak */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(90deg,#22d3ee,#3b82f6)' }}
                />

                {/* Icon */}
                <div
                  className="mb-5 flex items-center justify-center w-12 h-12 rounded-2xl"
                  style={{ background: 'var(--accent-soft)' }}
                >
                  <Icon
                    size={22}
                    style={{ color: 'var(--accent)' }}
                    strokeWidth={1.7}
                  />
                </div>

                <h3 className="font-bold text-[15px] mb-2.5" style={{ color: 'var(--text)' }}>
                  {w.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {w.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}