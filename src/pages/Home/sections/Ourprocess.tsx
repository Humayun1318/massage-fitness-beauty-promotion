import { motion } from 'framer-motion';
// import { SectionHeader } from '@/components/ui/SectionHeader';
import { PROCESS } from '@/data/home.data';
import { SectionHeader } from '@/components/shared/SectionHeader';

/* ══════════════════════════════════════════════════════════════ */
export default function OurProcess() {
  return (
    <section
      id="process"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: 'var(--surface)' }}
    >
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          pill="How It Works"
          title="Simple,"
          titleHighlight="Seamless Process"
          subtitle="Getting a premium mobile wellness service has never been easier. Four simple steps stand between you and total relaxation."
        />

        {/* Steps */}
        <div className="mt-16 relative">
          {/* Connector line — desktop only */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-[52px] left-[calc(12.5%+32px)] right-[calc(12.5%+32px)] h-[1px]"
            style={{ background: 'linear-gradient(90deg,rgba(34,211,238,0.4),rgba(59,130,246,0.4))' }}
          />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center text-center"
              >
                {/* Step circle */}
                <div className="relative z-10 mb-6">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center font-black text-xl"
                    style={{
                      background: 'linear-gradient(135deg,#22d3ee,#3b82f6)',
                      color: '#000',
                      boxShadow: '0 0 28px rgba(34,211,238,0.35)',
                    }}
                  >
                    {s.step}
                  </div>
                </div>

                {/* Card */}
                <div
                  className="w-full rounded-3xl p-6"
                  style={{
                    background: 'var(--surface-strong)',
                    border: '1px solid rgba(148,163,184,0.1)',
                    boxShadow: 'var(--shadow)',
                  }}
                >
                  <h3 className="font-bold text-[15px] mb-2.5" style={{ color: 'var(--text)' }}>
                    {s.title}
                  </h3>
                  <p className="text-[13.5px] leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {s.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}