/**
 * About.jsx — 2026 Executive Bento Storytelling Hub
 * Profile, Production Metrics, Engineering Standards & Technology Matrix
 */
import { useState } from 'react';
import { motion } from 'framer-motion';

const STATS = [
  { value: '2+', label: 'Years Experience', desc: 'Production software systems', color: 'var(--cyan)' },
  { value: '99.9%', label: 'System Uptime', desc: 'GASCKK & Astra platforms', color: '#10b981' },
  { value: '5,000+', label: 'Active Users', desc: 'Daily institutional platform traffic', color: '#8b5cf6' },
  { value: '40%', label: 'Latency Cut', desc: 'Optimized schema query pipelines', color: '#f43f5e' },
];

const EXPERTISE = [
  { label: 'Java Full Stack & Spring Framework', color: 'var(--cyan)' },
  { label: 'PHP (PDO) & MySQL Database Architecture', color: '#10b981' },
  { label: 'React.js & Node.js (MERN Ecosystem)', color: '#8b5cf6' },
  { label: 'Flutter & Dart (Cross-Platform Mobile)', color: '#06b6d4' },
  { label: 'REST API Security & JWT Authentication', color: '#f59e0b' },
  { label: 'Hostinger & Linux VPS Cloud Deployment', color: '#ec4899' },
  { label: 'Geo-Fencing Telemetry & Haversine Formula', color: '#3b82f6' },
  { label: 'Technical Team Leadership & Code Reviews', color: '#f43f5e' },
];

const TECH_ROW1 = ['Java', 'Spring Framework', 'PHP (PDO)', 'MySQL', 'MongoDB', 'React.js', 'Node.js', 'Express.js', 'Flutter', 'Dart', 'Tailwind CSS'];
const TECH_ROW2 = ['TypeScript', 'Hostinger VPS', 'Git / GitHub', 'RESTful APIs', 'AJAX', 'Postman', 'Figma', 'Linux Bash', 'JSON Schemas'];

const QUICK_FACTS = [
  { label: 'Location', value: 'Tenkasi, Tamil Nadu, India', icon: '📍' },
  { label: 'Degree', value: 'BCA (Expected 2026) · MSU Affiliated', icon: '🎓' },
  { label: 'Specialized Training', value: 'Java Full Stack (Vinsys & Generation India)', icon: '☕' },
  { label: 'Availability', value: 'Immediate Joiner for Software Developer Roles', icon: '🟢' },
  { label: 'Languages', value: 'Tamil (Native) · English (Intermediate)', icon: '🗣️' },
  { label: 'Lead Role', value: 'Web Dev Lead @ GASCKK.ORG.IN', icon: '🏛️' },
];

export default function About() {
  const [activeTab, setActiveTab] = useState('expertise');

  return (
    <section id="about" className="section about-section">
      <div className="container">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="about-header"
        >
          <span className="label-modern">Profile & Philosophy</span>
          <h2 className="display-lg">
            Engineering Systems That<br />
            <span className="animated-gradient-text">Perform & Scale.</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="about-bento-grid">

          {/* Bio Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="abt-card bio-card glass"
          >
            <div className="bio-top-row">
              <div className="bio-avatar-badge">
                <span className="mono bio-monogram">AM</span>
              </div>
              <div className="bio-identity">
                <div className="bio-name">Ajay M</div>
                <div className="bio-title">Junior Software Developer · Java Full Stack</div>
              </div>
              <div className="bio-status-pill">
                <span className="status-dot live" />
                <span>Open for Hire</span>
              </div>
            </div>

            <p className="bio-paragraph">
              I'm a <strong>Junior Software Developer and Java Full Stack Engineer</strong> based in <strong>Tenkasi, Tamil Nadu</strong> with 2+ years of hands-on experience architecting production web and mobile software.
            </p>

            <p className="bio-paragraph" style={{ marginTop: '14px' }}>
              Currently leading web development at <strong>GASCKK.ORG.IN</strong> and building the <strong>Astra Management System</strong> and <strong>GPS-based GeoTrack attendance platform</strong> — serving over <strong>5,000+ active users</strong>.
            </p>

            <div className="bio-stats-strip">
              {STATS.map(s => (
                <div key={s.label} className="bio-stat-item">
                  <span className="bio-stat-number" style={{ color: s.color }}>{s.value}</span>
                  <span className="bio-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Interactive Hub Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="abt-card interactive-card glass"
          >
            <div className="interactive-card-header">
              <div className="interactive-tabs">
                <button
                  className={`itab-btn ${activeTab === 'expertise' ? 'active' : ''}`}
                  onClick={() => setActiveTab('expertise')}
                >
                  Core Stack
                </button>
                <button
                  className={`itab-btn ${activeTab === 'standards' ? 'active' : ''}`}
                  onClick={() => setActiveTab('standards')}
                >
                  Engineering
                </button>
                <button
                  className={`itab-btn ${activeTab === 'facts' ? 'active' : ''}`}
                  onClick={() => setActiveTab('facts')}
                >
                  Quick Facts
                </button>
              </div>
            </div>

            <div className="interactive-card-body">
              {activeTab === 'expertise' && (
                <div className="chips-cloud">
                  {EXPERTISE.map(e => (
                    <span key={e.label} className="exp-chip">
                      <span className="chip-dot" style={{ background: e.color }} />
                      {e.label}
                    </span>
                  ))}
                </div>
              )}

              {activeTab === 'standards' && (
                <div className="standards-list">
                  {[
                    { key: 'Backend Architecture', val: 'Java Spring & PHP (PDO)', icon: '✦' },
                    { key: 'Database Security', val: 'Prepared Statements & JWT', icon: '🔐' },
                    { key: 'API Standard', val: 'RESTful Endpoints & JSON', icon: '⬡' },
                    { key: 'Cloud Deployment', val: 'Hostinger & Linux VPS', icon: '☁' },
                    { key: 'Technical Mentorship', val: 'MERN Workshops & Sprints', icon: '⟳' },
                  ].map(s => (
                    <div key={s.key} className="std-row">
                      <span className="std-icon">{s.icon}</span>
                      <span className="std-key">{s.key}</span>
                      <span className="std-val">{s.val}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'facts' && (
                <div className="facts-grid">
                  {QUICK_FACTS.map(f => (
                    <div key={f.label} className="fact-item">
                      <span className="fact-icon">{f.icon}</span>
                      <div className="fact-text">
                        <span className="fact-label">{f.label}</span>
                        <span className="fact-value">{f.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

        </div>

        {/* Tech Ticker Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="abt-card ticker-card glass"
        >
          <div className="ticker-top">
            <span className="ticker-heading">Production Tech Stack Matrix</span>
            <span className="ticker-counter mono">20+ Core Technologies</span>
          </div>

          <div className="ticker-viewport">
            <div className="ticker-fade-l" /><div className="ticker-fade-r" />

            <div className="ticker-track">
              <div className="ticker-inner">
                {[...TECH_ROW1, ...TECH_ROW1].map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>

            <div className="ticker-track" style={{ marginTop: '10px' }}>
              <div className="ticker-inner ticker-reverse">
                {[...TECH_ROW2, ...TECH_ROW2].map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      <style>{`
        .about-section {
          background: var(--bg);
          position: relative;
        }

        .about-header {
          margin-bottom: 44px;
        }

        .about-bento-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 24px;
          margin-bottom: 24px;
          align-items: stretch;
        }

        .abt-card {
          border-radius: 24px;
          padding: 30px;
          border: 1px solid var(--border) !important;
          background: var(--surface) !important;
          transition: all 0.3s ease;
        }
        .abt-card:hover {
          border-color: var(--border-cyan) !important;
          box-shadow: 0 20px 48px rgba(0, 0, 0, 0.35);
        }

        /* Bio Card */
        .bio-top-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        .bio-avatar-badge {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: var(--surface-2);
          border: 1.5px solid var(--border-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px var(--cyan-glow);
          flex-shrink: 0;
        }
        .bio-monogram {
          font-size: 1.1rem;
          font-weight: 900;
          color: var(--cyan);
        }
        .bio-identity { flex: 1; }
        .bio-name {
          font-family: 'Outfit', sans-serif;
          font-size: 1.45rem;
          font-weight: 900;
          color: var(--text-1);
          line-height: 1.1;
        }
        .bio-title {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--cyan);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-top: 3px;
        }
        .bio-status-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border-radius: 100px;
          background: var(--emerald-soft);
          border: 1px solid var(--emerald-glow);
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--emerald);
          text-transform: uppercase;
        }

        .bio-paragraph {
          font-size: 0.98rem;
          color: var(--text-2);
          line-height: 1.75;
        }
        .bio-paragraph strong {
          color: var(--text-1);
          font-weight: 700;
        }

        .bio-stats-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid var(--border);
        }
        .bio-stat-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .bio-stat-number {
          font-family: 'Outfit', sans-serif;
          font-size: 1.5rem;
          font-weight: 900;
          line-height: 1;
        }
        .bio-stat-label {
          font-size: 0.66rem;
          font-weight: 700;
          color: var(--text-3);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        /* Interactive Card */
        .interactive-card {
          display: flex;
          flex-direction: column;
        }
        .interactive-card-header {
          margin-bottom: 18px;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--border);
        }
        .interactive-tabs {
          display: flex;
          gap: 6px;
          background: var(--surface-2);
          padding: 4px;
          border-radius: 100px;
          border: 1px solid var(--border);
        }
        .itab-btn {
          flex: 1;
          padding: 8px 12px;
          border-radius: 100px;
          border: none;
          background: transparent;
          color: var(--text-3);
          font-size: 0.78rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .itab-btn.active {
          background: var(--cyan);
          color: var(--btn-text);
          box-shadow: 0 2px 10px var(--cyan-glow);
        }

        .chips-cloud {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .exp-chip {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 7px 12px;
          border-radius: 100px;
          background: var(--surface-2);
          border: 1px solid var(--border);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-1);
          transition: all 0.2s;
        }
        .exp-chip:hover {
          border-color: var(--cyan);
          transform: translateY(-2px);
        }
        .chip-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .standards-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .std-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 9px 12px;
          border-radius: 12px;
          background: var(--surface-2);
          border: 1px solid var(--border);
        }
        .std-icon { color: var(--cyan); font-size: 0.85rem; }
        .std-key { font-size: 0.8rem; font-weight: 700; color: var(--text-2); flex: 1; }
        .std-val {
          font-size: 0.76rem;
          font-weight: 800;
          color: var(--text-1);
          background: var(--surface-3);
          padding: 2px 8px;
          border-radius: 6px;
        }

        .facts-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .fact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 12px;
          background: var(--surface-2);
          border: 1px solid var(--border);
        }
        .fact-icon { font-size: 1rem; }
        .fact-text { display: flex; flex-direction: column; gap: 2px; }
        .fact-label { font-size: 0.65rem; font-weight: 800; color: var(--cyan); text-transform: uppercase; }
        .fact-value { font-size: 0.8rem; font-weight: 700; color: var(--text-1); line-height: 1.3; }

        /* Ticker Card */
        .ticker-card {
          overflow: hidden;
          padding: 22px 28px;
        }
        .ticker-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        .ticker-heading {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--cyan);
        }
        .ticker-counter {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--text-3);
        }

        .ticker-viewport {
          position: relative;
          overflow: hidden;
        }
        .ticker-fade-l, .ticker-fade-r {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 50px;
          z-index: 2;
          pointer-events: none;
        }
        .ticker-fade-l { left: 0; background: linear-gradient(to right, var(--bg-card), transparent); }
        .ticker-fade-r { right: 0; background: linear-gradient(to left, var(--bg-card), transparent); }

        .ticker-track { overflow: hidden; }
        .ticker-inner {
          display: flex;
          gap: 10px;
          width: max-content;
          animation: ticker-scroll 28s linear infinite;
        }
        .ticker-reverse {
          animation: ticker-scroll-rev 32s linear infinite;
        }

        .tech-badge {
          display: inline-block;
          padding: 7px 16px;
          border-radius: 8px;
          background: var(--surface-2);
          border: 1px solid var(--border);
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-2);
          white-space: nowrap;
          transition: all 0.2s;
        }
        .tech-badge:hover {
          border-color: var(--cyan);
          color: var(--cyan);
        }

        @media (max-width: 1024px) {
          .about-bento-grid { grid-template-columns: 1fr; }
          .bio-stats-strip { grid-template-columns: repeat(2, 1fr); gap: 14px; }
        }

        @media (max-width: 640px) {
          .abt-card { padding: 20px; }
          .facts-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
