/**
 * Experience & Certifications — 2026 Professional Portfolio
 * Clean timeline · 3D tilt cards · Certification grid
 */
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const EXPERIENCE = [
  {
    role: 'Lead Web Developer',
    org: 'GASCKK.ORG.IN',
    orgFull: 'Govt. Arts & Science College, Kanyakumari',
    period: '2023 – Present',
    type: 'Full-Stack Lead',
    accent: 'var(--exp-accent-1)',
    metrics: [{ label: 'Performance', value: '+45%' }, { label: 'Users Served', value: '5K+' }],
    stack: ['PHP', 'MySQL', 'React.js', 'REST API'],
    highlights: [
      'Led full SDLC operations for the official institutional web portal',
      'Engineered high-concurrency backend architecture handling traffic spikes',
      'Architected a year-wise media management and archive system',
      'Improved overall site performance by 45% through caching strategies',
    ],
    description: 'Directing end-to-end digital operations for the Government Arts & Science College portal, serving 5,000+ users with scalable, fault-tolerant infrastructure.',
  },
  {
    role: 'Lead System Architect',
    org: 'Astra Association',
    orgFull: 'Astra Association Management Platform',
    period: '2024 – Present',
    type: 'Cloud Architect',
    accent: 'var(--exp-accent-2)',
    metrics: [{ label: 'Uptime', value: '99.9%' }, { label: 'Modules', value: '12+' }],
    stack: ['PHP/PDO', 'React', 'Linux VPS', 'MySQL'],
    highlights: [
      'Architected a multi-module Association Management System from scratch',
      'Designed the Astra relational schema with optimised query performance',
      'Deployed and managed cloud infrastructure on Linux VPS',
      'Built a secure RESTful API layer serving multiple client applications',
    ],
    description: 'Engineering the Astra Ecosystem — a high-performance, cloud-deployed CMS with microservice architecture and RESTful APIs serving institutional management workflows.',
  },
  {
    role: 'Technical Mentor',
    org: 'GASC College',
    orgFull: 'Govt. Arts & Science College',
    period: '2024 – Present',
    type: 'Tech Leadership',
    accent: 'var(--exp-accent-3)',
    metrics: [{ label: 'Developers Trained', value: '30+' }, { label: 'Live Projects', value: '8+' }],
    stack: ['MERN Stack', 'Agile', 'Code Review', 'API Design'],
    highlights: [
      'Mentoring next-generation developers in modern full-stack development',
      'Conducting workshops on API security, database design, and clean code',
      'Guiding student teams through production-level SDLC processes',
      'Reviewing and approving code for 8+ student-built live projects',
    ],
    description: 'Empowering the next wave of software engineers through hands-on mentorship, code reviews, and real-world project guidance — bridging the gap between academic learning and industry standards.',
  },
];

const CERTIFICATIONS = [
  {
    title: 'Oracle App Development',
    issuer: 'Oracle Academy',
    year: '2024',
    color: '#F59E0B',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
        <rect width="32" height="32" rx="6" fill="#F59E0B" opacity="0.15"/>
        <text x="16" y="21" textAnchor="middle" fill="#F59E0B" fontSize="12" fontWeight="bold" fontFamily="sans-serif">ORA</text>
      </svg>
    ),
  },
  {
    title: 'Spring Framework & Java',
    issuer: 'Spring Ecosystem',
    year: '2024',
    color: '#22C55E',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
        <rect width="32" height="32" rx="6" fill="#22C55E" opacity="0.15"/>
        <path d="M22 8c-2 5-9 3-10 10-1 4 3 7 7 6 5-1 8-7 6-12" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <circle cx="9" cy="24" r="2" fill="#22C55E"/>
      </svg>
    ),
  },
  {
    title: 'Python Programming',
    issuer: 'Infosys Springboard',
    year: '2023',
    color: '#3B82F6',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
        <rect width="32" height="32" rx="6" fill="#3B82F6" opacity="0.15"/>
        <path d="M16 4c-5 0-7 2-7 5v2h7v2H8C5 13 3 15 3 18s2 6 5 6.5L11 25v-3c0-2 2-3.5 5-3.5H21c3 0 5-2 5-5v-5c0-4-2-7-5-7h-5z" fill="#3B82F6" opacity="0.8"/>
        <path d="M16 28c5 0 7-2 7-5v-2h-7v-2h8c3 0 5-2 5-5s-2-6-5-6.5L21 7v3c0 2-2 3.5-5 3.5H11c-3 0-5 2-5 5v5c0 4 2 7 5 7h5z" fill="#FFD43B" opacity="0.8"/>
      </svg>
    ),
  },
  {
    title: 'Google Cloud Foundations',
    issuer: 'Google Cloud',
    year: '2024',
    color: '#4285F4',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
        <rect width="32" height="32" rx="6" fill="#4285F4" opacity="0.15"/>
        <path d="M22 19.5A5.5 5.5 0 0 0 16.5 14c-.8 0-1.5.2-2.2.5A4 4 0 0 0 8 18c0 2.2 1.8 4 4 4h9.5a3 3 0 0 0 .5-5.5z" fill="#4285F4" opacity="0.85"/>
      </svg>
    ),
  },
];

/* ── Experience Card ── */
function ExpCard({ item, index }) {
  const ref = useRef(null);
  const mx  = useMotionValue(0);
  const my  = useMotionValue(0);
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [4, -4]), { stiffness: 150, damping: 22 });
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-4,  4]), { stiffness: 150, damping: 22 });

  const onMove = e => {
    if (window.innerWidth < 768) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width  - 0.5);
    my.set((e.clientY - r.top)  / r.height - 0.5);
  };

  return (
    <motion.div className="exp-timeline-item"
      initial={{ opacity: 0, y: 48 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ delay: index * 0.14, duration: 0.75 }}>

      {/* Timeline node */}
      <div className="timeline-gutter">
        <div className="timeline-node" style={{ background: item.accent, boxShadow: `0 0 14px color-mix(in srgb, ${item.accent} 60%, transparent)` }} />
        {index < EXPERIENCE.length - 1 && <div className="timeline-wire" style={{ background: `linear-gradient(to bottom, color-mix(in srgb, ${item.accent} 40%, transparent), transparent)` }} />}
      </div>

      {/* Card */}
      <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={() => { mx.set(0); my.set(0); }}
        style={{ rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d', paddingBottom: '40px' }}>
        <div className="exp-card glass">
          {/* Card Header */}
          <div className="exp-card-head">
            <div className="exp-icon-box" style={{ background: `color-mix(in srgb, ${item.accent} 14%, transparent)`, color: item.accent }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
              </svg>
            </div>
            <div className="exp-title-group">
              <h3 className="exp-role">{item.role}</h3>
              <div className="exp-org-row">
                <span className="exp-org">{item.org}</span>
                <span className="exp-period">{item.period}</span>
              </div>
            </div>
            <span className="exp-type" style={{ color: item.accent, borderColor: `color-mix(in srgb, ${item.accent} 35%, transparent)` }}>{item.type}</span>
          </div>

          <p className="exp-desc">{item.description}</p>

          {/* Metrics */}
          <div className="exp-metrics">
            {item.metrics.map(m => (
              <div key={m.label} className="exp-metric-pill">
                <strong style={{ color: item.accent }}>{m.value}</strong>
                <span>{m.label}</span>
              </div>
            ))}
          </div>

          {/* Stack */}
          <div className="exp-stack">
            {item.stack.map(s => (
              <span key={s} className="stack-chip" style={{ borderColor: `color-mix(in srgb, ${item.accent} 30%, transparent)`, color: item.accent }}>{s}</span>
            ))}
          </div>

          {/* Highlights */}
          <div className="exp-highlights">
            {item.highlights.map((h, i) => (
              <div key={i} className="exp-hl">
                <div className="hl-dot" style={{ background: item.accent }} />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section exp-section">
      {/* Background */}
      <div className="exp-bg">
        <div className="exp-orb exp-orb-a" />
        <div className="exp-orb exp-orb-b" />
      </div>

      <div className="container">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="exp-section-header">
          <div className="label-modern">Career & Education</div>
          <h2 className="display-lg">
            Professional <span className="animated-gradient-text">Experience</span><br />
            & Credentials.
          </h2>
          <p className="exp-section-sub">
            Building impactful digital systems, leading engineering teams, and mentoring the next generation.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="exp-layout">

          {/* Timeline */}
          <div className="timeline-column">
            {EXPERIENCE.map((item, i) => <ExpCard key={i} item={item} index={i} />)}
          </div>

          {/* Right Column */}
          <div className="credentials-column">
            {/* Education */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} className="edu-card glass">
              <div className="edu-badge">Currently Enrolled</div>
              <h4 className="edu-degree">Bachelor of Computer Applications (Hons.)</h4>
              <p className="edu-inst">Govt. Arts & Science College, Kanyakumari<br />Affiliated to Manonmaniam Sundaranar University</p>
              <div className="edu-stats">
                <div className="edu-stat">
                  <span className="edu-stat-val">9.2</span>
                  <span className="edu-stat-label">CGPA</span>
                </div>
                <div className="edu-stat">
                  <span className="edu-stat-val">2026</span>
                  <span className="edu-stat-label">Graduating</span>
                </div>
                <div className="edu-stat">
                  <span className="edu-stat-val">BCA</span>
                  <span className="edu-stat-label">Degree</span>
                </div>
              </div>
            </motion.div>

            {/* Certifications */}
            <h4 className="certs-heading">Certifications</h4>
            <div className="certs-grid">
              {CERTIFICATIONS.map((c, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="cert-card glass premium-hover">
                  <div className="cert-header">
                    <div className="cert-icon">{c.icon}</div>
                    <span className="cert-year">{c.year}</span>
                  </div>
                  <h5 className="cert-title">{c.title}</h5>
                  <p className="cert-issuer">{c.issuer}</p>
                  <div className="cert-progress-bar">
                    <motion.div className="cert-progress-fill"
                      style={{ background: `linear-gradient(90deg, ${c.color}, ${c.color}80)` }}
                      initial={{ width: 0 }} whileInView={{ width: '100%' }}
                      transition={{ duration: 1.1, delay: i * 0.1 }} viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .exp-section { padding: 120px 0; background: var(--bg); position: relative; overflow: hidden; }
        .exp-bg { position: absolute; inset: 0; pointer-events: none; }
        .exp-orb { position: absolute; border-radius: 50%; filter: blur(110px); }
        .exp-orb-a { width: 600px; height: 600px; top: -100px; right: -100px; background: radial-gradient(circle, rgba(204,255,0,0.08), transparent 70%); }
        .exp-orb-b { width: 400px; height: 400px; bottom: -80px; left: -80px;  background: radial-gradient(circle, rgba(124,58,237,0.10), transparent 70%); }

        /* Header */
        .exp-section-header { margin-bottom: 80px; }
        .exp-section-header .display-lg { margin: 16px 0 20px; }
        .exp-section-sub { font-size: 1.05rem; color: var(--text-2); max-width: 620px; line-height: 1.7; }

        /* Layout */
        .exp-layout {
          display: grid; grid-template-columns: 1.1fr 0.9fr;
          gap: 80px; position: relative; z-index: 1;
        }

        /* Timeline */
        .exp-timeline-item { display: grid; grid-template-columns: 28px 1fr; gap: 24px; }
        .timeline-gutter   { display: flex; flex-direction: column; align-items: center; padding-top: 8px; }
        .timeline-node     { width: 12px; height: 12px; border-radius: 50%; border: 2px solid var(--bg); z-index: 1; flex-shrink: 0; }
        .timeline-wire     { width: 2px; flex: 1; margin: 6px 0; min-height: 40px; }

        /* Experience Card */
        .exp-card { padding: 28px; border-radius: 22px; border: 1px solid var(--border) !important; transition: border-color 0.3s; }
        .exp-card:hover { border-color: var(--border-lime) !important; }
        .exp-card-head { display: flex; align-items: center; gap: 16px; margin-bottom: 18px; flex-wrap: wrap; }
        .exp-icon-box {
          width: 48px; height: 48px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .exp-title-group { flex: 1; min-width: 0; }
        .exp-role {
          font-family: 'Outfit', sans-serif;
          font-size: 1.3rem; font-weight: 900;
          color: var(--text-1); line-height: 1.2;
        }
        .exp-org-row { display: flex; gap: 10px; align-items: center; margin-top: 4px; flex-wrap: wrap; }
        .exp-org     { font-size: 0.85rem; color: var(--text-2); font-weight: 700; }
        .exp-period  {
          font-size: 0.68rem; font-weight: 800;
          padding: 3px 10px; background: var(--surface-2);
          border: 1px solid var(--border); border-radius: 100px;
          color: var(--text-3);
        }
        .exp-type {
          font-size: 0.65rem; font-weight: 900; padding: 4px 12px;
          border-radius: 100px; border: 1px solid;
          letter-spacing: 0.08em; white-space: nowrap;
        }

        .exp-desc { font-size: 0.9rem; color: var(--text-2); line-height: 1.65; margin-bottom: 20px; }

        .exp-metrics { display: flex; gap: 12px; margin-bottom: 18px; flex-wrap: wrap; }
        .exp-metric-pill {
          display: flex; flex-direction: column; gap: 3px;
          padding: 10px 16px; background: var(--surface-2);
          border: 1px solid var(--border); border-radius: 12px;
        }
        .exp-metric-pill strong { font-size: 1.1rem; font-weight: 900; }
        .exp-metric-pill span   { font-size: 0.62rem; color: var(--text-4); font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; }

        .exp-stack { display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 18px; }
        .stack-chip {
          font-size: 0.7rem; font-weight: 800; padding: 4px 12px;
          border-radius: 100px; border: 1px solid;
        }

        .exp-highlights { display: flex; flex-direction: column; gap: 8px; }
        .exp-hl { display: flex; align-items: flex-start; gap: 10px; font-size: 0.85rem; color: var(--text-3); line-height: 1.5; }
        .hl-dot { width: 5px; height: 5px; border-radius: 50%; margin-top: 7px; flex-shrink: 0; }

        /* Education Card */
        .edu-card { padding: 32px; border-radius: 24px; border: 1px solid var(--border) !important; margin-bottom: 32px; }
        .edu-badge {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 0.68rem; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--lime); padding: 6px 14px;
          border: 1px solid var(--border-lime); border-radius: 100px; margin-bottom: 20px;
        }
        .edu-degree {
          font-family: 'Outfit', sans-serif;
          font-size: 1.35rem; font-weight: 900; color: var(--text-1);
          margin-bottom: 10px; line-height: 1.3;
        }
        .edu-inst { font-size: 0.88rem; color: var(--text-3); line-height: 1.5; margin-bottom: 24px; }
        .edu-stats { display: flex; gap: 28px; }
        .edu-stat  { display: flex; flex-direction: column; gap: 3px; }
        .edu-stat-val {
          font-family: 'Outfit', sans-serif;
          font-size: 1.5rem; font-weight: 900; color: var(--lime);
        }
        .edu-stat-label { font-size: 0.65rem; font-weight: 800; color: var(--text-4); text-transform: uppercase; letter-spacing: 0.1em; }

        /* Certifications */
        .certs-heading {
          font-family: 'Outfit', sans-serif;
          font-size: 1rem; font-weight: 800;
          color: var(--text-3); margin-bottom: 18px;
          text-transform: uppercase; letter-spacing: 0.1em;
        }
        .certs-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .cert-card  { padding: 22px; border-radius: 20px; border: 1px solid var(--border) !important; }
        .cert-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 14px; }
        .cert-icon   { width: 32px; height: 32px; }
        .cert-year   {
          font-size: 0.65rem; font-weight: 800; color: var(--text-4);
          padding: 3px 8px; background: var(--surface-2);
          border: 1px solid var(--border); border-radius: 6px;
        }
        .cert-title  { font-size: 0.88rem; font-weight: 800; color: var(--text-1); margin-bottom: 5px; line-height: 1.3; }
        .cert-issuer { font-size: 0.74rem; color: var(--text-3); margin-bottom: 16px; font-weight: 600; }
        .cert-progress-bar  { height: 3px; background: var(--surface-2); border-radius: 2px; overflow: hidden; }
        .cert-progress-fill { height: 100%; border-radius: 2px; }

        /* Responsive */
        @media (max-width: 1100px) {
          .exp-layout { grid-template-columns: 1fr; gap: 60px; }
        }
        @media (max-width: 768px) {
          .exp-section { padding: 80px 0; }
          .certs-grid { grid-template-columns: 1fr; }
          .exp-card-head { flex-wrap: wrap; }
          .exp-type { display: none; }
        }
      `}</style>
    </section>
  );
}
