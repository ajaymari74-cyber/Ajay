/**
 * Skills Section — 2026 Bento Grid + Marquee Ticker
 * - 4 glassmorphism category cards with animated bars
 * - Bottom marquee ticker showing all technologies
 */
import { motion } from 'framer-motion';

const cats = [
  {
    id: 'frontend',
    icon: '🎨',
    title: 'Frontend & UI',
    color: '#CCFF00',
    skills: [
      { name: 'React.js',         level: 88 },
      { name: 'HTML5 / CSS3',     level: 95 },
      { name: 'JavaScript ES6+',  level: 87 },
      { name: 'Bootstrap 5',      level: 85 },
    ],
  },
  {
    id: 'backend',
    icon: '⚙️',
    title: 'Backend & Databases',
    color: '#7C3AED',
    skills: [
      { name: 'Node.js / Express',level: 85 },
      { name: 'PHP (PDO)',        level: 88 },
      { name: 'MySQL',            level: 87 },
      { name: 'MongoDB',          level: 78 },
      { name: 'REST APIs',        level: 90 },
    ],
  },
  {
    id: 'mobile',
    icon: '📱',
    title: 'Mobile & Languages',
    color: '#3B82F6',
    skills: [
      { name: 'Flutter / Dart',   level: 82 },
      { name: 'Python',           level: 72 },
      { name: 'Java',             level: 70 },
      { name: 'C / C++',         level: 68 },
    ],
  },
  {
    id: 'devops',
    icon: '🏗️',
    title: 'Architecture & DevOps',
    color: '#22c55e',
    skills: [
      { name: 'Database Normalization', level: 85 },
      { name: 'MVC Architecture',       level: 82 },
      { name: 'Cloud Deployment',       level: 80 },
      { name: 'Haversine Geo-fencing',  level: 75 },
      { name: 'Git',                    level: 80 },
    ],
  },
];

const allTech = [
  'React.js', 'Node.js', 'Express.js', 'MongoDB', 'PHP', 'MySQL',
  'Flutter', 'Dart', 'JavaScript', 'Bootstrap 5', 'REST APIs', 'Git',
  'Python', 'Java', 'C++', 'Hostinger', 'DataTables', 'AJAX', 'Tailwind CSS',
  'React.js', 'Node.js', 'Express.js', 'MongoDB', 'PHP', 'MySQL',
  'Flutter', 'Dart', 'JavaScript', 'Bootstrap 5', 'REST APIs', 'Git',
];

function SkillBar({ name, level, color, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '7px' }}>
        <span style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--text-2)' }}>{name}</span>
        <span style={{ fontSize: '0.76rem', fontWeight: 700, color }}>{level}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          style={{ background: `linear-gradient(90deg, ${color}cc, ${color})`, boxShadow: `0 0 8px ${color}40` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
}

function CatCard({ cat, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.012 }}
      className="glass"
      style={{ padding: '28px', position: 'relative', overflow: 'hidden', transition: 'border-color 0.3s' }}
    >
      {/* Top accent line */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${cat.color}cc, transparent)` }} />

      {/* Blob glow */}
      <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '120px', height: '120px', background: `radial-gradient(circle, ${cat.color}14, transparent)`, borderRadius: '50%', pointerEvents: 'none' }} />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '22px' }}>
        <div className="skill-icon" style={{ background: `${cat.color}14`, border: `1px solid ${cat.color}28` }}>
          {cat.icon}
        </div>
        <div>
          <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-1)', fontFamily: 'Syne, sans-serif' }}>
            {cat.title}
          </h3>
          <p style={{ fontSize: '0.7rem', color: 'var(--text-3)' }}>{cat.skills.length} technologies</p>
        </div>
      </div>

      {/* Skills */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {cat.skills.map((s, i) => (
          <SkillBar key={s.name} name={s.name} level={s.level} color={cat.color} delay={delay + i * 0.07} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ overflow: 'hidden', position: 'relative' }}>
      <div style={{ position: 'absolute', bottom: '-100px', left: '-100px', width: '450px', height: '450px', background: 'radial-gradient(circle, rgba(204,255,0,0.04) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none' }} />

      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '56px' }}
        >
          <p className="label-sm" style={{ marginBottom: '12px' }}>Technical Arsenal</p>
          <h2 className="display-lg">
            Skills &{' '}
            <span className="gradient-text">expertise</span>
          </h2>
          <p className="body-lg" style={{ marginTop: '12px', maxWidth: '500px' }}>
            A curated set of technologies I use to build world-class products — from frontend to backend to mobile.
          </p>
        </motion.div>

        {/* Bento 2x2 grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
          {cats.map((cat, i) => (
            <CatCard key={cat.id} cat={cat} delay={i * 0.08} />
          ))}
        </div>

        {/* Full toolkit marquee */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="glass"
          style={{ padding: '20px 0', overflow: 'hidden', position: 'relative', marginTop: '4px' }}
        >
          <p className="label-sm" style={{ textAlign: 'center', marginBottom: '14px', color: 'var(--text-3)' }}>
            Full Toolkit
          </p>
          <div style={{ overflowX: 'hidden' }}>
            <div className="marquee-track">
              {allTech.map((t, i) => (
                <span key={i} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '7px 18px', background: 'var(--surface-2)',
                  border: '1px solid var(--border)', borderRadius: '100px',
                  fontSize: '0.78rem', fontWeight: 500, color: 'var(--text-2)',
                  whiteSpace: 'nowrap', flexShrink: 0,
                }}>
                  <span style={{ width: '5px', height: '5px', background: 'var(--lime)', borderRadius: '50%' }} />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #skills .container > div:nth-child(3) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
