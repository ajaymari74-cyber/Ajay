/**
 * Skills.jsx — 2026 Quantum Bento Technical Arsenal
 * Java Full Stack, PHP/MySQL, MERN, Flutter & Spring Framework
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ── Crisp Official Brand SVG Logos ── */
const Icons = {
  Java: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.5 32.5c4.5.3 8.5-.8 11.5-2.2-2.5 1.5-7 2.5-11.5 2.2z" fill="#5382A1"/>
      <path d="M14.5 28.5c5.5.4 10.5-.7 14.5-2-3 1.3-8.5 2.2-14.5 2z" fill="#E76F00"/>
      <path d="M22.5 19c2 2.2 1.5 4.5-2 6.5 4-1 6.5-3.5 5.5-6.5-1-2.5-3.5-3.5-3.5-3.5s2.5 1.5 0 3.5z" fill="#5382A1"/>
      <path d="M18 10c2.5 2.5 2 4.5-2 7 4.5-1.5 7-4.5 5.5-7.5-1.5-3-3.5-4-3.5-4s2.5 2 0 4.5z" fill="#E76F00"/>
      <text x="20" y="27" textAnchor="middle" fill="#5382A1" fontSize="11" fontWeight="bold" fontFamily="sans-serif">JAVA</text>
    </svg>
  ),
  Spring: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#6DB33F" fillOpacity="0.15"/>
      <path d="M20 7L8 14v12l12 7 12-7V14L20 7z" stroke="#6DB33F" strokeWidth="2" fill="none"/>
      <path d="M28 17c-2 6-11 4-12 12-1 4 3 6 7 5 5-1 7-7 5-12" stroke="#6DB33F" strokeWidth="2" strokeLinecap="round" fill="none"/>
    </svg>
  ),
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
  MongoDB: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#47A248" fillOpacity="0.12"/>
      <path d="M20 6s-6 5-6 12c0 6 5 9 6 15 1-6 6-9 6-15 0-7-6-12-6-12z" fill="#47A248"/>
      <path d="M20 6v27c1-6 6-9 6-15 0-7-6-12-6-12z" fill="#4EA94B"/>
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
  Tailwind: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 10c-3.6 0-5.8 1.8-7 5.4 1.4-1.8 3-2.5 4.8-2.1 1 .25 1.78 1.04 2.62 1.9C21.86 16.7 23.54 18.5 27 18.5c3.6 0 5.8-1.8 7-5.4-1.4 1.8-3 2.5-4.8 2.1-1.04-.26-1.78-1.04-2.62-1.9C25.14 11.8 23.46 10 20 10z" fill="#06B6D4"/>
      <path d="M13 21.5c-3.6 0-5.8 1.8-7 5.4 1.4-1.8 3-2.5 4.8-2.1 1.04.26 1.78 1.04 2.62 1.9C14.86 28.2 16.54 30 20 30c3.6 0 5.8-1.8 7-5.4-1.4 1.8-3 2.5-4.8 2.1-1.04-.26-1.78-1.04-2.62-1.9C18.14 23.3 16.46 21.5 13 21.5z" fill="#06B6D4"/>
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M37.7 18.3L21.7 2.3a2.3 2.3 0 0 0-3.4 0l-3.4 3.4 4.3 4.3a2.8 2.8 0 0 1 3.5 3.5l4.1 4.1a2.8 2.8 0 1 1-1.7 1.6l-3.8-3.8v10a2.8 2.8 0 1 1-2.3 0V14a2.8 2.8 0 0 1-1.5-3.7L13.3 6 2.3 17a2.3 2.3 0 0 0 0 3.3l16 16a2.3 2.3 0 0 0 3.3 0l16-16a2.3 2.3 0 0 0 0-2z" fill="#F05032"/>
    </svg>
  ),
};

const CATEGORIES = [
  {
    id: 'backend',
    categoryName: 'Java & Backend Architecture',
    tagline: 'Enterprise Java, Spring Framework, and secure PHP/PDO.',
    color: '#00f5ff',
    skills: [
      { name: 'Java (OOP & Core)', level: 'Certified', logo: Icons.Java, desc: 'Object-Oriented, Collections, Multi-threading' },
      { name: 'Spring Framework', level: 'Certified', logo: Icons.Spring, desc: 'Enterprise Java, Dependency Injection, REST' },
      { name: 'PHP (PDO)', level: 'Advanced', logo: Icons.PHP, desc: 'Secure Prepared Statements, Auth, Custom CMS' },
      { name: 'Node.js & Express', level: 'Proficient', logo: Icons.NodeJS, desc: 'Microservices & High-Throughput REST APIs' },
    ],
  },
  {
    id: 'frontend',
    categoryName: 'Frontend & Mobile',
    tagline: 'Interactive React.js web apps and Flutter cross-platform mobile.',
    color: '#10b981',
    skills: [
      { name: 'React.js', level: 'Advanced', logo: Icons.React, desc: 'SPA, Hooks, Responsive State Management' },
      { name: 'Flutter & Dart', level: 'Advanced', logo: Icons.Flutter, desc: 'Cross-Platform iOS/Android & Offline Sync' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', logo: Icons.JavaScript, desc: 'Async/Await, DOM APIs, Event Loop' },
      { name: 'Tailwind & Bootstrap', level: 'Advanced', logo: Icons.Tailwind, desc: 'Responsive UI Design & Modern Tokens' },
    ],
  },
  {
    id: 'database',
    categoryName: 'Databases, Cloud & DevOps',
    tagline: 'Relational & NoSQL schemas, Hostinger VPS & Geo-fencing.',
    color: '#8b5cf6',
    skills: [
      { name: 'MySQL Database', level: 'Advanced', logo: Icons.MySQL, desc: 'Schema Design, Normalization, Query Indexing' },
      { name: 'MongoDB', level: 'Proficient', logo: Icons.MongoDB, desc: 'Document Models, Aggregations, CRUD' },
      { name: 'Python', level: 'Certified', logo: Icons.Python, desc: 'Scripting, Automation & Data Processing' },
      { name: 'Git & GitHub', level: 'Advanced', logo: Icons.Git, desc: 'Version Control, CI/CD, Team Collaboration' },
    ],
  },
];

const TOOLS = [
  'Hostinger VPS Deployment', 'Geo-Fencing (Haversine Formula)', 'RESTful APIs & AJAX', 
  'VS Code & IntelliJ', 'Postman API Testing', 'DataTables Integration', '.htaccess Routing', 
  'Figma UI Design', 'JSON Schemas & Auth Tokens', 'Linux Bash Scripts'
];

export default function Skills() {
  const [filter, setFilter] = useState('all');

  const filteredCategories = CATEGORIES.filter(cat => {
    if (filter === 'all') return true;
    return cat.id === filter;
  });

  return (
    <section id="skills" className="section skills-section">
      <div className="container">

        {/* Section Header */}
        <div className="skills-header">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="label-modern">Technical Arsenal</span>
            <h2 className="display-lg">
              Full-Stack <span className="animated-gradient-text">Competencies.</span>
            </h2>
          </motion.div>

          <motion.p className="skills-header-desc" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Comprehensive skillset spanning Java Enterprise, PHP/MySQL, MERN Stack, Flutter Mobile, and scalable database schemas.
          </motion.p>
        </div>

        {/* Category Filter Pills */}
        <div className="skills-filter-row">
          {[
            { id: 'all', label: 'All Disciplines' },
            { id: 'backend', label: 'Java & Backend' },
            { id: 'frontend', label: 'Frontend & Mobile' },
            { id: 'database', label: 'Databases & DevOps' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`skills-filter-btn ${filter === tab.id ? 'active' : ''}`}
            >
              {filter === tab.id && (
                <motion.div layoutId="skillFilterActive" className="skill-active-bg" />
              )}
              <span className="skill-btn-text">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <motion.div layout className="skills-bento-grid">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat, i) => (
              <motion.div
                key={cat.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="skill-bento-card glass"
              >
                {/* Card Top */}
                <div className="skill-card-top">
                  <div className="skill-indicator" style={{ background: cat.color, boxShadow: `0 0 14px ${cat.color}` }} />
                  <div>
                    <h3 className="skill-cat-title">{cat.categoryName}</h3>
                    <p className="skill-cat-tagline">{cat.tagline}</p>
                  </div>
                </div>

                {/* SVG Tile Grid */}
                <div className="skill-tiles-grid">
                  {cat.skills.map(skill => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.04, y: -4 }}
                      className="skill-tile"
                    >
                      <div className="skill-icon-box" style={{ background: `${cat.color}10`, border: `1px solid ${cat.color}25` }}>
                        {skill.logo}
                      </div>
                      <div className="skill-info">
                        <div className="skill-name-row">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-level-badge" style={{ color: cat.color }}>{skill.level}</span>
                        </div>
                        <span className="skill-desc-text">{skill.desc}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Workflow & Tooling Ticker */}
        <motion.div
          className="tools-ticker-card glass"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="ticker-label">Specialized Frameworks, APIs & Deployment</div>
          <div className="ticker-outer">
            <div className="fade-l" /><div className="fade-r" />
            <div className="ticker-scroll-track">
              <div className="ticker-scroll-inner">
                {[...TOOLS, ...TOOLS].map((tool, idx) => (
                  <span key={idx} className="tool-tag">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      <style>{`
        .skills-section {
          background: var(--bg);
          position: relative;
        }

        .skills-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 40px;
          gap: 30px;
        }
        .skills-header-desc {
          max-width: 460px;
          color: var(--text-2);
          font-size: 1.02rem;
          line-height: 1.7;
          text-align: right;
        }

        /* Filter Pills */
        .skills-filter-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 40px;
          background: var(--surface-2);
          padding: 6px;
          border-radius: 100px;
          border: 1px solid var(--border);
          width: max-content;
        }
        .skills-filter-btn {
          position: relative;
          padding: 8px 20px;
          border: none;
          background: transparent;
          color: var(--text-2);
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
          border-radius: 100px;
          transition: color 0.2s;
        }
        .skills-filter-btn.active {
          color: var(--btn-text);
        }
        .skill-active-bg {
          position: absolute;
          inset: 0;
          background: var(--cyan);
          border-radius: 100px;
          z-index: 0;
          box-shadow: 0 4px 14px var(--cyan-glow);
        }
        .skill-btn-text {
          position: relative;
          z-index: 1;
        }

        /* Bento Grid */
        .skills-bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 32px;
        }

        .skill-bento-card {
          border-radius: 28px;
          padding: 32px;
          border: 1px solid var(--border) !important;
          background: var(--surface) !important;
          display: flex;
          flex-direction: column;
          gap: 28px;
          transition: all 0.3s ease;
        }
        .skill-bento-card:hover {
          border-color: var(--border-cyan) !important;
          box-shadow: 0 20px 48px rgba(0, 0, 0, 0.3);
        }

        .skill-card-top {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }
        .skill-indicator {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin-top: 6px;
          flex-shrink: 0;
        }
        .skill-cat-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.45rem;
          font-weight: 800;
          color: var(--text-1);
          letter-spacing: -0.01em;
          margin-bottom: 4px;
        }
        .skill-cat-tagline {
          font-size: 0.85rem;
          color: var(--text-3);
          line-height: 1.5;
        }

        /* Tiles Grid */
        .skill-tiles-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: auto;
        }
        .skill-tile {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 16px;
          background: var(--surface-2);
          border-radius: 16px;
          border: 1px solid var(--border);
          transition: all 0.25s ease;
        }
        .skill-tile:hover {
          background: var(--surface-3);
          border-color: var(--border-2);
        }

        .skill-icon-box {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          flex-shrink: 0;
        }
        .skill-icon-box svg {
          width: 100%;
          height: 100%;
        }

        .skill-info {
          flex: 1;
          min-width: 0;
        }
        .skill-name-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3px;
        }
        .skill-name {
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--text-1);
        }
        .skill-level-badge {
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .skill-desc-text {
          font-size: 0.76rem;
          color: var(--text-3);
          display: block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Tools Ticker */
        .tools-ticker-card {
          border-radius: 20px;
          padding: 24px 32px;
          border: 1px solid var(--border) !important;
          background: var(--surface) !important;
          text-align: center;
        }
        .ticker-label {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--cyan);
          margin-bottom: 18px;
        }
        .ticker-outer { position: relative; overflow: hidden; }
        .fade-l, .fade-r {
          position: absolute; top: 0; bottom: 0; width: 60px; z-index: 2; pointer-events: none;
        }
        .fade-l { left: 0; background: linear-gradient(to right, var(--bg-card), transparent); }
        .fade-r { right: 0; background: linear-gradient(to left, var(--bg-card), transparent); }

        .ticker-scroll-track { overflow: hidden; }
        .ticker-scroll-inner {
          display: flex;
          gap: 12px;
          width: max-content;
          animation: ticker-scroll 32s linear infinite;
        }
        .tool-tag {
          padding: 8px 18px;
          border-radius: 10px;
          background: var(--surface-2);
          border: 1px solid var(--border);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-2);
          white-space: nowrap;
          transition: all 0.2s;
        }
        .tool-tag:hover {
          border-color: var(--cyan);
          color: var(--cyan);
        }

        @media (max-width: 1100px) {
          .skills-bento-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 800px) {
          .skills-header { flex-direction: column; align-items: flex-start; text-align: left; }
          .skills-header-desc { text-align: left; }
          .skills-bento-grid { grid-template-columns: 1fr; }
          .skills-filter-row { width: 100%; flex-wrap: wrap; border-radius: 16px; }
          .skills-filter-btn { flex: 1 1 calc(50% - 6px); text-align: center; }
        }
      `}</style>
    </section>
  );
}
