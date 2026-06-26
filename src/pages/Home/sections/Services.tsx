import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '@/data/home.data';
import { SectionHeader } from '@/components/shared/SectionHeader';

/* ── Stagger config ─────────────────────────────────────────── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

/* ══════════════════════════════════════════════════════════════ */
export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Subtle ambient blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-30 blur-[120px]"
        style={{ background: 'radial-gradient(ellipse,rgba(34,211,238,0.12),transparent 70%)' }}
      />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          pill="What We Offer"
          title="Our"
          titleHighlight="Services"
          subtitle="Every service is delivered mobile — we come to you with everything required for a premium, private experience."
        />

        {/* Cards grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICES.map((svc) => (
            <motion.div key={svc.id} variants={card}>
              <ServiceCard {...svc} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Individual card ────────────────────────────────────────── */
function ServiceCard({
  category,
  title,
  description,
  image,
  duration,
  badge,
  href,
}: (typeof SERVICES)[number]) {
  return (
    <Link
      to={href}
      className="group relative flex flex-col rounded-3xl overflow-hidden h-full outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
      style={{
        background: 'var(--surface)',
        border: '1px solid rgba(148,163,184,0.1)',
        boxShadow: 'var(--shadow)',
        transition: 'transform 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s ease',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-strong)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow)';
      }}
    >
      {/* Gradient border on hover via pseudo-ring */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background:
            'linear-gradient(135deg,rgba(34,211,238,0.18),rgba(59,130,246,0.12)) border-box',
          border: '1px solid transparent',
          WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'destination-out',
          maskComposite: 'exclude',
        }}
      />

      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Category pill */}
        <span className="absolute top-4 left-4 accent-pill text-[10px]">{category}</span>

        {/* Best seller badge */}
        {badge && (
          <span className="absolute top-4 right-4 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-400 to-blue-500 text-black">
            {badge}
          </span>
        )}

        {/* Duration chip — bottom of image */}
        <span className="absolute bottom-3 right-4 flex items-center gap-1 rounded-full bg-black/60 backdrop-blur-sm px-2.5 py-1 text-[11px] text-white/80">
          <Clock size={11} />
          {duration}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-base font-bold mb-2" style={{ color: 'var(--text)' }}>
          {title}
        </h3>
        <p
          className="text-[13.5px] leading-relaxed flex-1 mb-5"
          style={{ color: 'var(--text-muted)' }}
        >
          {description}
        </p>

        {/* CTA */}
        <span
          className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group-hover:gap-3"
          style={{ color: 'var(--accent)' }}
        >
          Learn More
          <ArrowRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
