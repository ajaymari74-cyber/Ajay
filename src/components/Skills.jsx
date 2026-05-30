/**
 * Skills Section — 2026 Quantum Bento UI
 * Zero Progress Bars · Official SVG Logos · Glassmorphism
 */
import { motion } from 'framer-motion';

/* ── Official Brand SVG Icons ── */
const Icons = {
  React: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="3.2" fill="#61DAFB"/>
      <ellipse cx="20" cy="20" rx="17" ry="6.5" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
      <ellipse cx="20" cy="20" rx="17" ry="6.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 20 20)"/>
      <ellipse cx="20" cy="20" rx="17" ry="6.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 20 20)"/>
    </svg>
  ),
  NodeJS: (
    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 3.6l14 8v16l-14 8.2L6 27.6v-16L20 3.6z" fill="#339933" opacity="0.15"/>
      <path d="M20 3.6l14 8v16l-14 8.2L6 27.6v-16L20 3.6z" stroke="#339933" strokeWidth="1.5" fill="none"/>
      <text x="20" y="24" textAnchor="middle" fill="#339933" fontSize="10" fontWeight="bold">JS</text>
    </svg>
  ),
  PHP: (
    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="20" cy="20" rx="16" ry="9" fill="#8892BF" opacity="0.12"/>
      <ellipse cx="20" cy="20" rx="16" ry="9" stroke="#8892BF" strokeWidth="1.5" fill="none"/>
      <text x="20" y="24" textAnchor="middle" fill="#8892BF" fontSize="11" fontWeight="bold" fontFamily="monospace">PHP</text>
    </svg>
  ),
  MySQL: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="20" cy="10" rx="13" ry="5" fill="#4479A1"/>
      <path d="M7 10v8c0 2.76 5.82 5 13 5s13-2.24 13-5v-8" stroke="#4479A1" strokeWidth="0.5"/>
      <ellipse cx="20" cy="18" rx="13" ry="5" fill="#4479A1" opacity="0.4"/>
      <path d="M7 18v8c0 2.76 5.82 5 13 5s13-2.24 13-5v-8" stroke="#4479A1" strokeWidth="0.5"/>
      <ellipse cx="20" cy="26" rx="13" ry="5" fill="#4479A1" opacity="0.7"/>
    </svg>
  ),
  Flutter: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 4L7 19l6.5 6.5L35 4H22z" fill="#54C5F8"/>
      <path d="M13.5 25.5L7 32l6.5 6.5h13l-6.5-6.5 6.5-6.5h-13z" fill="#01579B"/>
      <path d="M13.5 25.5l6.5 6.5 3.5-3.5-3.5-3-6.5 0z" fill="#29B6F6"/>
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 4c-6 0-9 2.5-9 7v3h9v2H9C6 16 4 18 4 21s2 6 5 7l3.5.8V26c0-2.5 2-4.5 7.5-4.5H29c3.5 0 6-2.5 6-6V11c0-4-2.5-7-6-7h-9z" fill="#3776AB"/>
      <circle cx="16" cy="10" r="1.5" fill="white"/>
      <path d="M20 36c6 0 9-2.5 9-7v-3h-9v-2h11c3 0 5-2 5-5s-2-6-5-7L27.5 12.2V15c0 2.5-2 4.5-7.5 4.5H11c-3.5 0-6 2.5-6 6v5c0 4 2.5 7 6 7h9z" fill="#FFD43B"/>
      <circle cx="24" cy="30" r="1.5" fill="#3776AB"/>
    </svg>
  ),
  JavaScript: (
    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="4" fill="#F7DF1E"/>
      <path d="M23 27.5c0 2.4 1.2 3.5 3 3.5s3.2-1.1 3.2-3.6V18h-3v9c0 1-.3 1.5-1.2 1.5s-1.2-.5-1.2-1.5L23 27.5zm-9.5.5c.5 2.5 1.8 3.5 4.5 3.5s4.5-1.5 4.5-4.5c0-2.5-1.2-3.6-3.7-4.4-2.2-.7-2.8-1-2.8-2.2 0-.8.5-1.2 1.5-1.2.8 0 1.5.4 1.8 1.8h3c-.3-2.8-1.8-4.5-4.8-4.5s-4.5 1.7-4.5 4.3c0 2.6 1.2 3.6 3.6 4.3 2.1.7 2.8 1.2 2.8 2.3 0 1-.7 1.5-1.7 1.5-1.3 0-2-.7-2.3-1.9h-3z" fill="#1a1a1a"/>
    </svg>
  ),
  HTML5: (
    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 4l2.5 28L20 36l10.5-4L33 4H7z" fill="#E34F26"/>
      <path d="M20 33.5V7.5H10l2.2 24.5L20 33.5z" fill="#EF652A"/>
      <path d="M14 22h6l.5 5.5-3.5.9-3.5-.9-.3-3.5H10l.6 7.5L20 34v-3.5l-4.5-1.5L15.2 25H14v-3zm0-8h6.4L20 18h3l-.6-6H14v3z" fill="white"/>
      <path d="M20 22v3h3.5l-.4 4.5L20 30.5V34l7-2.1L28 18h-8l.2 4z" fill="#EBEBEB"/>
    </svg>
  ),
  Tailwind: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 10c-3.6 0-5.8 1.8-7 5.4 1.4-1.8 3-2.5 4.8-2.1 1 .25 1.78 1.04 2.62 1.9C21.86 16.7 23.54 18.5 27 18.5c3.6 0 5.8-1.8 7-5.4-1.4 1.8-3 2.5-4.8 2.1-1.04-.26-1.78-1.04-2.62-1.9C25.14 11.8 23.46 10 20 10z" fill="#06B6D4"/>
      <path d="M13 21.5c-3.6 0-5.8 1.8-7 5.4 1.4-1.8 3-2.5 4.8-2.1 1.04.26 1.78 1.04 2.62 1.9C14.86 28.2 16.54 30 20 30c3.6 0 5.8-1.8 7-5.4-1.4 1.8-3 2.5-4.8 2.1-1.04-.26-1.78-1.04-2.62-1.9C18.14 23.3 16.46 21.5 13 21.5z" fill="#06B6D4"/>
    </svg>
  ),
  Docker: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 16h4v4h-4z" fill="#2496ED"/>
      <path d="M21 16h4v4h-4z" fill="#2496ED"/>
      <path d="M21 11h4v4h-4z" fill="#2496ED"/>
      <path d="M11 16h4v4h-4z" fill="#2496ED"/>
      <path d="M16 11h4v4h-4z" fill="#2496ED"/>
      <path d="M6 20.5c0 5 7 7.5 14.5 7.5S35 26 35 20.5c-1.5.5-2.5.5-4 0-1-3-3-5-6-5H16c-2.5 0-5 2.5-5 4-1-.5-3-.5-5 1z" fill="#2496ED" opacity="0.85"/>
      <path d="M34 15c0-1.5-1-2-2-2h-1v2h-2v-2h-2v2h-2v-2h-2v2h-4c0 1.5 1 3 2.5 3 0 2-2 4-5 4H8.5C10 26.5 15 28 20 28s11-2.5 11-8c2 0 3-1 3-3v-2z" fill="#2496ED"/>
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M37.7 18.3L21.7 2.3a2.3 2.3 0 0 0-3.4 0l-3.4 3.4 4.3 4.3a2.8 2.8 0 0 1 3.5 3.5l4.1 4.1a2.8 2.8 0 1 1-1.7 1.6l-3.8-3.8v10a2.8 2.8 0 1 1-2.3 0V14a2.8 2.8 0 0 1-1.5-3.7L13.3 6 2.3 17a2.3 2.3 0 0 0 0 3.3l16 16a2.3 2.3 0 0 0 3.3 0l16-16a2.3 2.3 0 0 0 0-2z" fill="#F05032"/>
    </svg>
  ),
  AWS: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5 21c-.2.7-.3 1.5-.3 2.2C12.2 26.8 14.8 29 18 29c1 0 2-.2 2.8-.7.9 1.5 2.5 2.5 4.3 2.5 2.7 0 4.9-2.2 4.9-4.9 0-.3 0-.6-.1-.9C31 24 32 22.1 32 20c0-3.3-2.7-6-6-6-.5 0-1 .1-1.4.2C23.5 12.1 21.4 11 19 11c-3.7 0-6.7 3-6.7 6.7 0 1.1.3 2.2.9 3.1L12.5 21z" fill="#FF9900"/>
      <path d="M13 32l-1.5-1.5 1-1 1 1-1-1z" fill="#FF9900"/>
      <text x="20" y="22" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="sans-serif">AWS</text>
    </svg>
  ),
};

const CATEGORIES = [
  {
    id: 'frontend',
    title: 'Front-End Mastery',
    tagline: 'Pixel-perfect, interactive user interfaces.',
    color: '#61DAFB',
    skills: [
      { name: 'React.js', logo: Icons.React },
      { name: 'JavaScript', logo: Icons.JavaScript },
      { name: 'HTML5', logo: Icons.HTML5 },
      { name: 'Tailwind CSS', logo: Icons.Tailwind },
    ],
  },
  {
    id: 'backend',
    title: 'Back-End & Data',
    tagline: 'Scalable APIs and robust server logic.',
    color: '#22c55e',
    skills: [
      { name: 'Node.js', logo: Icons.NodeJS },
      { name: 'PHP', logo: Icons.PHP },
      { name: 'MySQL', logo: Icons.MySQL },
      { name: 'Python', logo: Icons.Python },
    ],
  },
  {
    id: 'platform',
    title: 'Cloud & Mobile',
    tagline: 'Cross-platform apps and secure infrastructure.',
    color: '#a855f7',
    skills: [
      { name: 'Flutter', logo: Icons.Flutter },
      { name: 'Docker', logo: Icons.Docker },
      { name: 'AWS', logo: Icons.AWS },
      { name: 'Git', logo: Icons.Git },
    ],
  },
];

const TOOLS = [
  'Figma', 'TypeScript', 'Linux VPS', 'Dart', 'Nginx', 'Redis', 'CI/CD', 'Firebase', 'REST APIs', 'Postman',
  'Figma', 'TypeScript', 'Linux VPS', 'Dart', 'Nginx', 'Redis', 'CI/CD', 'Firebase', 'REST APIs', 'Postman',
];

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } },
};

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        
        {/* ── Section Header ── */}
        <div className="skills-header">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="label-modern">Technical Arsenal</span>
            <h2 className="display-lg">
              Next-Gen <span className="animated-gradient-text">Expertise.</span>
            </h2>
          </motion.div>
          <motion.p className="header-text" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            A curated stack of high-performance technologies, moving beyond legacy indicators to focus on actual platform mastery.
          </motion.p>
        </div>

        {/* ── 2026 Bento Grid ── */}
        <div className="bento-grid">
          {CATEGORIES.map((cat, i) => (
            <motion.div 
              key={cat.id} 
              className="bento-card"
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-20px' }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Card Header */}
              <div className="card-top">
                <div className="card-indicator" style={{ background: cat.color, boxShadow: `0 0 12px ${cat.color}80` }} />
                <div>
                  <h3 className="card-title">{cat.title}</h3>
                  <p className="card-tagline">{cat.tagline}</p>
                </div>
              </div>

              {/* Skill SVG Tiles */}
              <div className="svg-tiles">
                {cat.skills.map(skill => (
                  <div key={skill.name} className="svg-tile">
                    <div className="svg-icon-wrap" style={{ background: `${cat.color}08`, border: `1px solid ${cat.color}15` }}>
                      {skill.logo}
                    </div>
                    <span className="svg-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Additional Tools Ticker ── */}
        <motion.div 
          className="tools-ticker-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="ticker-eyebrow">Workflow & Tooling</div>
          <div className="ticker-track-outer">
            <div className="fade-l" /><div className="fade-r" />
            <div className="ticker-track-inner">
              <div className="ticker-items">
                {TOOLS.map((t, i) => (
                  <span key={i} className="tool-chip">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      <style>{`
        /* ── Section Setup ── */
        .skills-section { 
          padding: clamp(80px, 12vw, 150px) 0; 
          background: var(--bg); 
          position: relative; 
          overflow: hidden; 
        }
        
        /* Atmospheric Orbs */
        .skills-section::before {
          content: ''; position: absolute; top: 0; left: -10%;
          width: min(800px, 100vw); height: min(800px, 100vw);
          background: radial-gradient(circle, var(--violet-glow) 0%, transparent 60%);
          filter: blur(100px); pointer-events: none; z-index: 0;
        }
        .skills-section::after {
          content: ''; position: absolute; bottom: 0; right: -10%;
          width: min(700px, 90vw); height: min(700px, 90vw);
          background: radial-gradient(circle, rgba(97,218,251,0.06) 0%, transparent 60%);
          filter: blur(100px); pointer-events: none; z-index: 0;
        }

        .container { position: relative; z-index: 1; }

        /* ── Header ── */
        .skills-header {
          display: flex; justify-content: space-between; align-items: flex-end;
          margin-bottom: clamp(40px, 6vw, 80px); gap: 30px;
        }
        .skills-header .display-lg {
          font-size: clamp(2.5rem, 6vw, 4.5rem) !important;
          line-height: 1.1; margin-top: 16px;
        }
        .header-text {
          max-width: 450px; color: var(--text-2);
          font-size: clamp(0.95rem, 1.5vw, 1.1rem); line-height: 1.7;
          text-align: right; margin-bottom: 8px;
        }

        /* ── Bento Grid ── */
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(16px, 2vw, 32px);
          margin-bottom: clamp(16px, 2vw, 32px);
        }

        .bento-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: clamp(20px, 3vw, 32px);
          padding: clamp(24px, 3vw, 40px);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          display: flex; flex-direction: column; gap: 32px;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s, border-color 0.4s;
          box-shadow: 0 4px 24px rgba(0,0,0,0.04);
        }
        .bento-card:hover {
          transform: translateY(-8px);
          border-color: var(--border-2);
          box-shadow: 0 24px 48px rgba(0,0,0,0.12);
        }

        .card-top { display: flex; align-items: flex-start; gap: 16px; }
        .card-indicator {
          width: 12px; height: 12px; border-radius: 50%;
          margin-top: 6px; flex-shrink: 0;
        }
        .card-title {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(1.4rem, 2vw, 1.8rem); font-weight: 800;
          color: var(--text-1); letter-spacing: -0.01em; margin-bottom: 6px;
        }
        .card-tagline { font-size: 0.9rem; color: var(--text-3); line-height: 1.5; }

        /* SVG Tiles */
        .svg-tiles {
          display: grid; grid-template-columns: repeat(2, 1fr);
          gap: clamp(12px, 1.5vw, 20px); margin-top: auto;
        }
        .svg-tile {
          display: flex; flex-direction: column; align-items: center; gap: 12px;
          padding: 20px 12px;
          background: var(--surface-2); border-radius: 20px;
          border: 1px solid transparent;
          transition: all 0.3s ease;
        }
        .bento-card:hover .svg-tile { border-color: var(--border); background: var(--surface-3); }
        .svg-tile:hover { transform: scale(1.05); }
        
        .svg-icon-wrap {
          width: 56px; height: 56px; border-radius: 16px;
          display: flex; align-items: center; justify-content: center;
          padding: 10px; transition: transform 0.3s;
        }
        .svg-tile:hover .svg-icon-wrap { transform: translateY(-4px); }
        .svg-icon-wrap svg { width: 100%; height: 100%; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1)); }
        .svg-name { font-size: 0.85rem; font-weight: 700; color: var(--text-2); text-align: center; }

        /* ── Ticker ── */
        .tools-ticker-wrap {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: clamp(16px, 2vw, 24px); padding: clamp(20px, 3vw, 32px);
          backdrop-filter: blur(10px); text-align: center;
        }
        .ticker-eyebrow {
          font-size: 0.72rem; font-weight: 800; letter-spacing: 0.2em;
          text-transform: uppercase; color: var(--text-4); margin-bottom: 24px;
        }
        .ticker-track-outer { position: relative; overflow: hidden; }
        .fade-l, .fade-r {
          position: absolute; top: 0; bottom: 0; width: 80px; z-index: 2; pointer-events: none;
        }
        .fade-l { left: 0; background: linear-gradient(to right, var(--bg), transparent); }
        .fade-r { right: 0; background: linear-gradient(to left, var(--bg), transparent); }
        .ticker-track-inner { overflow: hidden; }
        .ticker-items {
          display: flex; gap: 16px; width: max-content;
          animation: slide 35s linear infinite;
        }
        .tool-chip {
          padding: 10px 24px; border-radius: 12px;
          background: var(--surface-2); border: 1px solid var(--border);
          font-size: 0.9rem; font-weight: 700; color: var(--text-2); white-space: nowrap;
          transition: all 0.3s;
        }
        .tools-ticker-wrap:hover .tool-chip { border-color: var(--border-2); color: var(--text-1); }

        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .bento-grid { grid-template-columns: repeat(2, 1fr); }
          .bento-card:last-child { grid-column: 1 / -1; }
        }
        @media (max-width: 900px) {
          .skills-header { flex-direction: column; align-items: flex-start; gap: 20px; text-align: left; }
          .header-text { text-align: left; }
        }
        @media (max-width: 768px) {
          .skills-section { padding: 80px 0; }
          .bento-grid { grid-template-columns: 1fr; gap: 20px; }
          .bento-card:last-child { grid-column: auto; }
          .svg-tiles { gap: 12px; }
        }
        @media (max-width: 480px) {
          .skills-section { padding: 60px 0; }
          .skills-header { margin-bottom: 40px; }
          .bento-card { padding: 24px; gap: 24px; border-radius: 24px; }
          .svg-tile { padding: 16px 12px; border-radius: 16px; }
          .svg-icon-wrap { width: 48px; height: 48px; }
          .fade-l, .fade-r { width: 40px; }
          .tool-chip { padding: 8px 16px; font-size: 0.8rem; }
        }
      `}</style>
    </section>
  );
}
