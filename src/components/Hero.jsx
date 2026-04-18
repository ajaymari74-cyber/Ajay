/**
 * Hero Section — 2026 Premium Design
 * - Aurora animated blobs in background
 * - Staggered text reveal with line-by-line animation
 * - Split layout: Left content / Right floating card
 * - Stats bento row at bottom
 */
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const WORDS = ['Scalable.', 'Cross-Platform.', 'Production-Ready.', 'High-Performance.'];

/* Text reveal line animation */
const lineReveal = (delay = 0) => ({
  hidden: { opacity: 0, y: '100%' },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

const stats = [
  { num: '3+',  label: 'Years of Experience', icon: '💻' },
  { num: '4+',  label: 'Live Production Projects', icon: '🚀' },
  { num: '30+', label: 'Developers Mentored', icon: '🎓' },
  { num: '12+', label: 'Database Modules Built', icon: '🗄️' },
];

const techStack = ['React', 'Node.js', 'PHP / PDO', 'MySQL', 'Flutter', 'MongoDB', 'Express', 'REST API'];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const contentY  = useTransform(scrollYProgress, [0, 1], ['0%', '-18%']);
  const contentOp = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section id="hero" ref={ref} style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '90px',
      paddingBottom: '40px',
    }}>
      {/* ── Aurora background ── */}
      <div className="aurora-orb aurora-orb-1" />
      <div className="aurora-orb aurora-orb-2" />
      <div className="aurora-orb aurora-orb-3" />

      {/* Subtle grid dots */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '44px 44px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
      }} />

      <motion.div
        style={{ y: contentY, opacity: contentOp }}
        className="container"
      >
        {/* ── Top badge ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ marginBottom: '32px' }}
        >
          <span className="avail-badge">
            <span className="pulse-dot" />
            Available for Work
          </span>
        </motion.div>

        {/* ── Main headline ── */}
        <div style={{ overflow: 'hidden', marginBottom: '8px' }}>
          <motion.h1
            variants={lineReveal(0.2)}
            initial="hidden"
            animate="visible"
            className="display-xl"
            style={{ color: 'var(--text-1)' }}
          >
            I build things
          </motion.h1>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: '8px' }}>
          <motion.div
            variants={lineReveal(0.35)}
            initial="hidden"
            animate="visible"
            className="display-xl gradient-text"
          >
            for the web
          </motion.div>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: '36px' }}>
          <motion.div
            variants={lineReveal(0.48)}
            initial="hidden"
            animate="visible"
            className="display-xl"
            style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            &amp; mobile.
          </motion.div>
        </div>

        {/* ── Two-col: description + floating card ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '40px', alignItems: 'start', marginBottom: '52px' }}>
          {/* Left: desc + CTA + tags */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <p className="body-lg" style={{ maxWidth: '520px', marginBottom: '28px' }}>
              Full-Stack Developer specialising in{' '}
              <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>MERN stack</strong>,{' '}
              <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>PHP/PDO APIs</strong>, and{' '}
              <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>Flutter</strong>.
              Building real production systems from scratch to deployment since 2023.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '28px' }}>
              <motion.a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn btn-primary"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects →
              </motion.a>
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                ↓ Download Resume
              </motion.a>
            </div>

            {/* Location */}
            <p className="body-sm" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>📍</span>
              <span>Kanyakumari, Tamil Nadu · BCA '26 · GASCKK</span>
            </p>
          </motion.div>

          {/* Right: Floating glass card */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="glass hide-mobile"
            style={{
              padding: '24px',
              minWidth: '220px',
              marginTop: '12px',
            }}
          >
            {/* Profile avatar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '14px',
                background: 'linear-gradient(135deg, rgba(204,255,0,0.2), rgba(124,58,237,0.2))',
                border: '1px solid rgba(204,255,0,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.4rem', position: 'relative',
              }}>
                👨‍💻
                <span style={{
                  position: 'absolute', bottom: '-2px', right: '-2px',
                  width: '10px', height: '10px', background: '#22c55e',
                  borderRadius: '50%', border: '2px solid #060608',
                }} />
              </div>
              <div>
                <p style={{ fontSize: '0.88rem', fontWeight: 700, color: '#fff' }}>Ajay M</p>
                <p style={{ fontSize: '0.72rem', color: 'var(--text-3)' }}>Full-Stack Developer</p>
              </div>
            </div>

            {/* Mini stats */}
            {[
              { label: 'Projects Live', value: '4+' },
              { label: 'Devs Mentored', value: '30+' },
              { label: 'DB Modules', value: '12+' },
            ].map((s) => (
              <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <span style={{ fontSize: '0.73rem', color: 'var(--text-3)' }}>{s.label}</span>
                <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--lime)' }}>{s.value}</span>
              </div>
            ))}

            {/* Open to work */}
            <div style={{ marginTop: '14px', padding: '10px 12px', borderRadius: '10px', background: 'rgba(204,255,0,0.07)', border: '1px solid rgba(204,255,0,0.15)' }}>
              <p style={{ fontSize: '0.7rem', color: 'var(--lime)', fontWeight: 600, letterSpacing: '0.06em' }}>
                ✓ Open to Opportunities
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── Tech stack marquee ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          style={{ overflow: 'hidden', position: 'relative', marginBottom: '60px' }}
        >
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {techStack.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0 + i * 0.07, duration: 0.4, ease: 'backOut' }}
                className="tag"
                style={{ fontSize: '0.75rem' }}
              >
                {t}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* ── Stats bento ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              whileHover={{ scale: 1.04 }}
              className="stat-card"
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{s.icon}</div>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="scroll-indicator"
        style={{
          position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
        }}
      >
        <span style={{ fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-4)', fontWeight: 600 }}>
          Scroll
        </span>
        <div style={{ width: '1px', height: '36px', background: 'linear-gradient(to bottom, var(--lime), transparent)' }} />
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          #hero > div > div[style*="grid-template-columns: 1fr auto"] {
            grid-template-columns: 1fr !important;
          }
          #hero > div > div[style*="repeat(4, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
