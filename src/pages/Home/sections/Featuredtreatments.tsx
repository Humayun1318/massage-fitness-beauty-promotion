import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
// import { SectionHeader } from '@/components/ui/SectionHeader';
import { TREATMENTS } from '@/data/home.data';
import { SectionHeader } from '@/components/shared/SectionHeader';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
  },
});

/* ══════════════════════════════════════════════════════════════ */
export default function FeaturedTreatments() {
  const [featured, ...rest] = TREATMENTS;

  return (
    <section
      id="treatments"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: 'var(--surface)' }}
    >
      {/* Decorative blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-[130px] opacity-20"
          style={{ background: 'radial-gradient(circle,rgba(59,130,246,0.3),transparent 70%)' }}
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          pill="Spotlight"
          title="Featured"
          titleHighlight="Treatments"
          subtitle="Carefully curated treatments that represent the very best of what we offer — each one bespoke, evidence-based, and delivered at your door."
        />

        {/* ── Hero treatment (large asymmetric) ── */}
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 grid lg:grid-cols-2 gap-8 items-center rounded-3xl overflow-hidden"
          style={{
            background: 'var(--surface-strong)',
            border: '1px solid rgba(148,163,184,0.1)',
            boxShadow: 'var(--shadow-strong)',
          }}
        >
          {/* Image */}
          <div className="relative overflow-hidden aspect-[16/10] lg:aspect-auto lg:h-full min-h-[300px]">
            <img
              src={featured.image}
              alt={featured.title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40" />
            <span className="absolute top-5 left-5 accent-pill">{featured.category}</span>
            <span
              className="absolute bottom-5 left-5 text-4xl"
              style={{ filter: 'drop-shadow(0 0 12px rgba(34,211,238,0.5))' }}
            >
              {featured.icon}
            </span>
          </div>

          {/* Content */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
              {featured.title}
            </h3>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
              {featured.description}
            </p>
            <Link to={featured.href} className="hero-button w-fit">
              Book This Treatment
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </motion.div>

        {/* ── Remaining treatments (4-col grid) ── */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((t, i) => (
            <motion.div
              key={t.id}
              variants={fadeUp(0.08 * i)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
            >
              <TreatmentCard {...t} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Compact treatment card ─────────────────────────────────── */
function TreatmentCard({
  category,
  title,
  description,
  image,
  icon,
  href,
}: (typeof TREATMENTS)[number]) {
  return (
    <Link
      to={href}
      className="group relative flex flex-col rounded-3xl overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
      style={{
        background: 'var(--surface-strong)',
        border: '1px solid rgba(148,163,184,0.08)',
        boxShadow: 'var(--shadow)',
        transition: 'transform 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s ease',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-5px)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-strong)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = '';
        (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow)';
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[3/2]">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
          style={{ '--tw-scale-x': '1.08', '--tw-scale-y': '1.08' } as React.CSSProperties}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <span className="absolute top-3 left-3 accent-pill text-[9px]">{category}</span>
        <span
          className="absolute bottom-3 right-3 text-xl"
          style={{ filter: 'drop-shadow(0 0 10px rgba(34,211,238,0.6))' }}
        >
          {icon}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <h4 className="font-bold text-[15px] mb-2" style={{ color: 'var(--text)' }}>
          {title}
        </h4>
        <p
          className="text-[13px] leading-relaxed flex-1 mb-4"
          style={{ color: 'var(--text-muted)' }}
        >
          {description}
        </p>
        <span
          className="inline-flex items-center gap-1 text-xs font-semibold group-hover:gap-2.5 transition-all duration-200"
          style={{ color: 'var(--accent)' }}
        >
          Learn More
          <ArrowRight size={13} />
        </span>
      </div>
    </Link>
  );
}
