import { motion } from 'framer-motion';

interface SectionHeaderProps {
  pill?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionHeader({
  pill,
  title,
  titleHighlight,
  subtitle,
  center = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={center ? 'text-center' : ''}
    >
      {pill && <span className="accent-pill mb-5 inline-flex">{pill}</span>}
      <h2 className="section-heading mb-4">
        {title}{' '}
        {titleHighlight && (
          <span
            style={{
              background: 'linear-gradient(90deg,#22d3ee,#3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {titleHighlight}
          </span>
        )}
      </h2>
      <p className={`section-subtitle ${center ? '' : 'mx-0 max-w-xl text-left'}`}>{subtitle}</p>
    </motion.div>
  );
}
