/**
 * About Section — 2026 Professional Portfolio
 * Premium split layout · Stats · Skill chips · Tech ticker
 */
import { motion } from 'framer-motion';

const STATS = [
  { value: '3+',    label: 'Years Experience',  color: '#a855f7' },
  { value: '99.9%', label: 'System Uptime',     color: '#22c55e' },
  { value: '5K+',   label: 'Active Users',      color: '#3b82f6' },
  { value: '40%',   label: 'Latency Reduced',   color: '#f43f5e' },
];

const EXPERTISE = [
  { label: 'System Architecture',      color: '#a855f7' },
  { label: 'REST API Design',           color: '#3b82f6' },
  { label: 'React & Node.js',           color: '#06b6d4' },
  { label: 'Flutter Mobile',            color: '#7c3aed' },
  { label: 'MySQL & PDO',               color: '#10b981' },
  { label: 'Cloud Deployment',          color: '#f59e0b' },
  { label: 'Microservices',             color: '#ec4899' },
  { label: 'Agile / SDLC',             color: '#f43f5e' },
];

const TECH_ROW1 = ['React', 'Node.js', 'PHP', 'MySQL', 'Flutter', 'Docker', 'AWS', 'Python', 'Git', 'Firebase', 'REST APIs', 'Tailwind CSS'];
const TECH_ROW2 = ['TypeScript', 'Linux VPS', 'Dart', 'Redis', 'CI/CD', 'Figma', 'Postman', 'VS Code', 'GitHub', 'Nginx', 'PHP PDO', 'JSON Web Tokens'];

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.55, ease: [0.23, 1, 0.32, 1] } },
};

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="about-header"
        >
          <span className="about-eyebrow">About Me</span>
          <h2 className="about-headline">
            Building systems that<br />
            <span className="animated-gradient-text">scale & perform.</span>
          </h2>
        </motion.div>

        {/* ── Main Grid ── */}
        <div className="about-grid">

          {/* ── LEFT COLUMN ── */}
          <div className="about-left">

            {/* Bio Card */}
            <motion.div variants={cardVariant} initial="hidden" whileInView="show" viewport={{ once: true }} className="abt-card bio-card">
              <div className="bio-top">
                <div className="bio-initial">A</div>
                <div>
                  <div className="bio-name">Ajay M</div>
                  <div className="bio-title">Senior Full-Stack Engineer</div>
                </div>
                <div className="avail-pill">
                  <span className="avail-dot" />
                  Open to Work
                </div>
              </div>
              <p className="bio-text">
                I'm a <strong>Full-Stack Developer</strong> with 3+ years building production-grade digital
                systems for institutions and enterprises. I design fault-tolerant architectures,
                high-concurrency REST APIs, and cross-platform mobile apps.
              </p>
              <p className="bio-text" style={{ marginTop: '14px' }}>
                Currently leading engineering at <strong>GASCKK.ORG.IN</strong> and architecting the
                <strong> Astra AMS</strong> — a cloud platform serving <strong>5,000+ users</strong> with 99.9% uptime.
              </p>
            </motion.div>

            {/* Stats Row */}
            <motion.div variants={cardVariant} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.05 }} className="stats-row">
              {STATS.map((s) => (
                <div key={s.label} className="stat-card abt-card">
                  <span className="stat-value" style={{ color: s.color }}>{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </motion.div>

          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="about-right">

            {/* Expertise Card */}
            <motion.div variants={cardVariant} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.1 }} className="abt-card expertise-card">
              <div className="exp-label">Core Expertise</div>
              <div className="chip-grid">
                {EXPERTISE.map((e) => (
                  <span key={e.label} className="exp-chip" style={{ '--chip-color': e.color }}>
                    <span className="chip-dot" style={{ background: e.color }} />
                    {e.label}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Standards Card */}
            <motion.div variants={cardVariant} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.15 }} className="abt-card standards-card">
              <div className="exp-label">Engineering Standards</div>
              <div className="std-list">
                {[
                  { key: 'Code Quality',   val: 'Production Grade',  icon: '✦' },
                  { key: 'Security',       val: 'Zero-Trust Model',  icon: '🔐' },
                  { key: 'Architecture',   val: 'Microservices',     icon: '⬡' },
                  { key: 'Deployment',     val: 'Linux VPS · Cloud', icon: '☁' },
                  { key: 'Methodology',    val: 'Agile / SDLC',      icon: '⟳' },
                ].map((s) => (
                  <div key={s.key} className="std-row">
                    <span className="std-icon">{s.icon}</span>
                    <span className="std-key">{s.key}</span>
                    <span className="std-val">{s.val}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

        {/* ── Quote Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="abt-card quote-banner"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--lime)" className="q-icon">
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
          </svg>
          <p className="q-text">
            "Simplicity is the ultimate sophistication. Build systems that scale elegantly and fail gracefully."
          </p>
        </motion.div>

        {/* ── Tech Ticker ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="abt-card ticker-card"
        >
          <div className="ticker-label">Tech Ecosystem</div>
          <div className="ticker-wrap">
            <div className="ticker-fade-l" /><div className="ticker-fade-r" />
            <div className="ticker-row">
              <div className="ticker-strip">
                {[...TECH_ROW1, ...TECH_ROW1].map((t, i) => <span key={i} className="t-chip">{t}</span>)}
              </div>
            </div>
            <div className="ticker-row" style={{ marginTop: '12px' }}>
              <div className="ticker-strip ticker-strip-rev">
                {[...TECH_ROW2, ...TECH_ROW2].map((t, i) => <span key={i} className="t-chip">{t}</span>)}
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      <style>{`
        /* ── Section ── */
        .about-section {
          background: var(--bg);
          padding: clamp(60px, 10vw, 120px) 0;
          position: relative; overflow: hidden;
        }
        .about-section::before {
          content: ''; position: absolute; top: -20%; left: -10%;
          width: min(700px, 100vw); height: min(700px, 100vw);
          background: radial-gradient(circle, var(--violet-glow) 0%, transparent 70%);
          filter: blur(80px); pointer-events: none; z-index: 0;
        }
        .about-section::after {
          content: ''; position: absolute; bottom: -10%; right: -10%;
          width: min(500px, 80vw); height: min(500px, 80vw);
          background: radial-gradient(circle, var(--lime-glow) 0%, transparent 70%);
          filter: blur(80px); pointer-events: none; z-index: 0;
        }
        .about-section .container { position: relative; z-index: 1; }

        /* ── Header ── */
        .about-header { margin-bottom: clamp(32px, 5vw, 64px); }
        .about-eyebrow {
          display: inline-block;
          font-size: 0.72rem; font-weight: 800; letter-spacing: 0.2em;
          text-transform: uppercase; color: var(--violet);
          background: var(--surface-2); border: 1px solid var(--border);
          padding: 6px 16px; border-radius: 999px; margin-bottom: 20px;
        }
        .about-headline {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2rem, 5.5vw, 4rem);
          font-weight: 900; line-height: 1.1;
          letter-spacing: -0.03em; color: var(--text-1);
          margin: 0;
        }

        /* ── Base Card ── */
        .abt-card {
          background: var(--surface) !important;
          border: 1px solid var(--border) !important;
          border-radius: clamp(16px, 2vw, 28px);
          padding: clamp(20px, 3vw, 32px);
          backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
          transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
          box-shadow: 0 4px 24px rgba(0,0,0,0.06);
        }
        .abt-card:hover {
          border-color: var(--border-2) !important;
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.12);
        }

        /* ── Main Grid ── */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(16px, 2.5vw, 28px);
          margin-bottom: clamp(16px, 2.5vw, 28px);
          align-items: start;
        }
        .about-left, .about-right {
          display: flex; flex-direction: column;
          gap: clamp(16px, 2.5vw, 28px);
        }

        /* ── Bio Card ── */
        .bio-top {
          display: flex; align-items: center;
          gap: 14px; flex-wrap: wrap;
          margin-bottom: 20px;
        }
        .bio-initial {
          width: 48px; height: 48px; border-radius: 14px; flex-shrink: 0;
          background: linear-gradient(135deg, var(--violet), var(--lime));
          display: flex; align-items: center; justify-content: center;
          font-family: 'Outfit', sans-serif;
          font-size: 1.4rem; font-weight: 900; color: #fff;
        }
        .bio-name {
          font-family: 'Outfit', sans-serif;
          font-size: 1.4rem; font-weight: 900;
          color: var(--text-1); line-height: 1; letter-spacing: -0.02em;
        }
        .bio-title {
          font-size: 0.78rem; font-weight: 700;
          color: var(--violet); text-transform: uppercase;
          letter-spacing: 0.08em; margin-top: 3px;
        }
        .avail-pill {
          display: flex; align-items: center; gap: 7px;
          padding: 6px 14px; border-radius: 999px;
          background: rgba(34,197,94,0.1);
          border: 1px solid rgba(34,197,94,0.25);
          font-size: 0.7rem; font-weight: 800; color: #22c55e;
          letter-spacing: 0.05em; text-transform: uppercase;
          white-space: nowrap; margin-left: auto;
        }
        .avail-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #22c55e; animation: pulse-glow 2s infinite;
          box-shadow: 0 0 8px #22c55e; flex-shrink: 0;
        }
        .bio-text {
          font-size: clamp(0.85rem, 1.5vw, 1rem);
          color: var(--text-2); line-height: 1.75;
        }
        .bio-text strong { color: var(--text-1); font-weight: 700; }

        /* ── Stats ── */
        .stats-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(10px, 1.5vw, 16px);
        }
        .stat-card {
          display: flex; flex-direction: column;
          gap: 4px; padding: clamp(14px, 2vw, 20px) !important;
          text-align: center; align-items: center;
        }
        .stat-value {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 900; line-height: 1;
        }
        .stat-label {
          font-size: clamp(0.6rem, 1vw, 0.72rem);
          font-weight: 700; color: var(--text-4);
          text-transform: uppercase; letter-spacing: 0.12em;
          text-align: center;
        }

        /* ── Expertise Card ── */
        .expertise-card { }
        .exp-label {
          font-size: 0.72rem; font-weight: 800; letter-spacing: 0.2em;
          text-transform: uppercase; color: var(--violet);
          margin-bottom: 18px;
        }
        .chip-grid {
          display: flex; flex-wrap: wrap;
          gap: clamp(6px, 1vw, 10px);
        }
        .exp-chip {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 7px 14px; border-radius: 999px;
          background: color-mix(in srgb, var(--chip-color) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--chip-color) 25%, transparent);
          font-size: clamp(0.72rem, 1.2vw, 0.82rem); font-weight: 700;
          color: var(--text-1); transition: all 0.25s;
          cursor: default;
        }
        .exp-chip:hover {
          background: color-mix(in srgb, var(--chip-color) 20%, transparent);
          border-color: color-mix(in srgb, var(--chip-color) 50%, transparent);
          transform: translateY(-2px);
        }
        .chip-dot {
          width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0;
        }

        /* ── Standards Card ── */
        .std-list { display: flex; flex-direction: column; }
        .std-row {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 0; border-bottom: 1px solid var(--border);
        }
        .std-row:last-child { border-bottom: none; padding-bottom: 0; }
        .std-icon { font-size: 0.85rem; width: 20px; text-align: center; color: var(--violet); flex-shrink: 0; }
        .std-key { font-size: clamp(0.75rem, 1.3vw, 0.85rem); color: var(--text-2); font-weight: 600; flex: 1; }
        .std-val {
          font-size: clamp(0.72rem, 1.2vw, 0.82rem); font-weight: 800;
          color: var(--text-1); background: var(--surface-2);
          padding: 4px 10px; border-radius: 8px;
          border: 1px solid var(--border); white-space: nowrap;
        }

        /* ── Quote Banner ── */
        .quote-banner {
          display: flex; align-items: flex-start; gap: 16px;
          margin-bottom: clamp(16px, 2.5vw, 28px);
          background: linear-gradient(135deg, var(--violet-glow), var(--lime-glow)) !important;
          border-color: var(--border-2) !important;
        }
        .q-icon { flex-shrink: 0; margin-top: 2px; }
        .q-text {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(1rem, 2.2vw, 1.3rem);
          font-weight: 500; color: var(--text-1);
          line-height: 1.55; letter-spacing: -0.01em;
          margin: 0;
        }

        /* ── Tech Ticker ── */
        .ticker-card { overflow: hidden; }
        .ticker-label {
          font-size: 0.72rem; font-weight: 800; letter-spacing: 0.2em;
          text-transform: uppercase; color: var(--violet);
          margin-bottom: 18px;
        }
        .ticker-wrap { position: relative; }
        .ticker-fade-l, .ticker-fade-r {
          position: absolute; top: 0; bottom: 0; width: 60px; z-index: 2; pointer-events: none;
        }
        .ticker-fade-l { left: 0;  background: linear-gradient(to right, var(--bg), transparent); }
        .ticker-fade-r { right: 0; background: linear-gradient(to left,  var(--bg), transparent); }
        .ticker-row { overflow: hidden; }
        .ticker-strip {
          display: flex; gap: 12px; width: max-content;
          animation: ticker-scroll 28s linear infinite;
        }
        .ticker-strip-rev {
          animation: ticker-scroll-rev 32s linear infinite;
        }
        .t-chip {
          display: inline-block;
          padding: 8px 18px; border-radius: 10px;
          background: var(--surface-2); border: 1px solid var(--border);
          font-size: clamp(0.75rem, 1.2vw, 0.88rem); font-weight: 700;
          color: var(--text-2); white-space: nowrap;
          transition: border-color 0.3s, color 0.3s;
        }
        .ticker-card:hover .t-chip { border-color: var(--border-2); color: var(--text-1); }

        @keyframes ticker-scroll-rev {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }

        /* ── Responsive: Tablet ── */
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr; }
          .stats-row  { grid-template-columns: repeat(4, 1fr); }
        }

        /* ── Responsive: Mobile ── */
        @media (max-width: 600px) {
          .about-section { padding: 20px 0 60px 0; }
          .about-grid    { gap: 14px; margin-bottom: 14px; }
          .about-left, .about-right { gap: 14px; }
          .stats-row     { grid-template-columns: repeat(2, 1fr); gap: 10px; }
          .bio-top       { gap: 10px; }
          .avail-pill    { margin-left: 0; width: 100%; justify-content: center; }
          .bio-initial   { width: 42px; height: 42px; font-size: 1.2rem; }
          .chip-grid     { gap: 8px; }
          .exp-chip      { padding: 6px 12px; font-size: 0.75rem; }
          .quote-banner  { flex-direction: column; gap: 12px; padding: 20px !important; }
          .q-icon        { display: none; }
          .std-row       { gap: 8px; padding: 10px 0; }
          .ticker-fade-l, .ticker-fade-r { width: 32px; }
        }

        /* ── Responsive: XS ── */
        @media (max-width: 380px) {
          .stats-row { grid-template-columns: 1fr 1fr; }
          .bio-name  { font-size: 1.2rem; }
          .abt-card  { padding: 18px !important; border-radius: 14px !important; }
        }
      `}</style>
    </section>
  );
}
