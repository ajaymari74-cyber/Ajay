/**
 * Experience & Certifications — 2026 Premium Design
 * Vertical timeline with glowing dots, glass cards, side-by-side layout
 */
import { motion } from 'framer-motion';

const experience = [
  {
    role: 'Web Developer',
    org: 'GASCKK.ORG.IN',
    period: '2023 – Present',
    type: 'Part-Time / Freelance',
    icon: '🌐',
    highlights: [
      'Full ownership of the official college portal (PHP-MySQL backend)',
      'Built and deployed multiple live module updates to production',
      'Optimized SQL queries and page-load performance',
      'Implemented year-wise media management for academic content',
      'CSS-animated scrolling announcement ticker',
    ],
    description: 'Full ownership of the Government Arts and Science College, Kanyakumari portal. Designing, developing, and maintaining the PHP-MySQL backend, implementing new features and optimizing workflows for staff and students.',
  },
  {
    role: 'Full-Stack Developer & System Architect',
    org: 'Astra Association (Academic)',
    period: '2024 – Present',
    type: 'Lead Developer',
    icon: '🏛️',
    highlights: [
      'Architected custom ASTRA_YY_XXXX primary key system',
      'Built PHP/PDO REST API powering Flutter mobile app',
      'Managed full deployment lifecycle on Hostinger VPS',
      'Engineered Bootstrap 5 admin panel with DataTables integration',
    ],
    description: 'Architected and built the complete Astra Association Management System — a multi-module CMS with 12+ database tables, custom primary key design, REST APIs, and a Flutter mobile app — from scratch to production deployment.',
  },
  {
    role: 'MERN Stack Mentor',
    org: 'Government Arts & Science College',
    period: '2024 – Present',
    type: 'Academic Mentor',
    icon: '🎓',
    highlights: [
      'Mentored 30+ junior developers in MERN stack fundamentals',
      'Led hands-on workshops in MongoDB, Express, React & Node.js',
      'Guided juniors through their first full-stack end-to-end projects',
      'Sessions on deployment, responsive design & best practices',
    ],
    description: 'Actively leads and mentors 1st and 2nd-year juniors in MERN stack fundamentals through hands-on workshops, code reviews, and project guidance.',
  },
];

const certs = [
  { title: 'Oracle App Development', issuer: 'Oracle / ADROIT', icon: '🏅', year: '2024–2026' },
  { title: 'Java Spring Network', issuer: 'Spring Ecosystem / ADROIT', icon: '🍃', year: '2024–2026' },
  { title: 'Python Coding Foundations', issuer: 'Infosys Springboard', icon: '🐍', year: '2024–2026' },
];

function TimelineCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ display: 'flex', gap: '18px', position: 'relative' }}
    >
      {/* Dot + line */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '4px', flexShrink: 0 }}>
        <div className="tl-dot" />
        {index < experience.length - 1 && <div className="tl-line" />}
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ scale: 1.006, x: 4 }}
        className="glass"
        style={{ flex: 1, padding: '24px', marginBottom: index < experience.length - 1 ? '16px' : 0, transition: 'border-color 0.3s' }}
      >
        {/* Top row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px', marginBottom: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
            <div>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>{item.role}</h3>
              <p style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--lime)', marginTop: '1px' }}>{item.org}</p>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '0.74rem', color: 'var(--text-3)', fontWeight: 500 }}>{item.period}</p>
            <p style={{ fontSize: '0.68rem', color: 'var(--text-4)', fontWeight: 500, marginTop: '1px' }}>{item.type}</p>
          </div>
        </div>

        <p style={{ fontSize: '0.82rem', color: 'var(--text-2)', lineHeight: 1.65, marginBottom: '12px' }}>
          {item.description}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          {item.highlights.map((h, i) => (
            <div key={i} style={{ display: 'flex', gap: '7px', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--lime)', flexShrink: 0, fontSize: '0.75rem', marginTop: '2px' }}>→</span>
              <span style={{ fontSize: '0.76rem', color: 'var(--text-3)' }}>{h}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: '-100px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none' }} />

      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '56px' }}
        >
          <p className="label-sm" style={{ marginBottom: '12px' }}>Journey</p>
          <h2 className="display-lg">
            Experience &{' '}
            <span className="gradient-text">certifications</span>
          </h2>
          <p className="body-lg" style={{ marginTop: '12px', maxWidth: '500px' }}>
            Building and maintaining real production systems since 2023.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '20px', alignItems: 'start' }}>
          {/* LEFT — Timeline */}
          <div>
            <p className="label-sm" style={{ marginBottom: '20px', color: 'var(--text-3)' }}>Work Experience</p>
            {experience.map((item, i) => (
              <TimelineCard key={item.role} item={item} index={i} />
            ))}
          </div>

          {/* RIGHT — Certs + Education */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <p className="label-sm" style={{ marginBottom: '4px', color: 'var(--text-3)' }}>Certifications</p>

            {certs.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02, x: -3 }}
                className="glass"
                style={{ padding: '18px 20px' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '1.6rem' }}>{c.icon}</span>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '0.84rem', fontWeight: 700, color: '#fff' }}>{c.title}</h4>
                    <p style={{ fontSize: '0.7rem', color: 'var(--text-3)', marginTop: '2px' }}>{c.issuer}</p>
                    <span className="cert-badge" style={{ marginTop: '8px', display: 'inline-flex' }}>
                      ✓ Certified · {c.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Education */}
            <p className="label-sm" style={{ marginBottom: '4px', marginTop: '8px', color: 'var(--text-3)' }}>Education</p>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="glass"
              style={{ padding: '22px 20px', borderColor: 'rgba(204,255,0,0.15)' }}
            >
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.6rem', marginTop: '2px' }}>🏛️</span>
                <div>
                  <h4 style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.88rem', fontWeight: 700, color: '#fff' }}>
                    Bachelor of Computer Applications
                  </h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--lime)', fontWeight: 600, marginTop: '3px' }}>
                    Graduating 2026
                  </p>
                  <p style={{ fontSize: '0.72rem', color: 'var(--text-3)', marginTop: '6px', lineHeight: 1.55 }}>
                    Government Arts & Science College<br />
                    Kanyakumari — 629401<br />
                    Affiliated: Manonmaniam Sundaranar University
                  </p>
                  <p style={{ fontSize: '0.7rem', color: 'var(--text-4)', marginTop: '8px' }}>
                    Major: Programming · Data Structures · OS · DBMS · Networks · Web Dev
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #experience .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
