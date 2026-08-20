/**
 * Experience.jsx — 2026 Interactive Career & Credentials Hub
 * Work Experience, Education, Mentorship Leadership & Verified Certifications
 */
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const EXPERIENCE = [
  {
    role: 'College Web Development Team Lead',
    org: 'Govt. Arts & Science College, Palkulam',
    orgFull: 'Department of Computer Applications',
    period: '2024 – Present',
    type: 'Leadership & Mentorship',
    accent: 'var(--cyan)',
    metrics: [{ label: 'Students Mentored', value: '30+' }, { label: 'Live Deployments', value: '8+' }],
    stack: ['MERN Stack', 'PHP / MySQL', 'Agile Workflows', 'Git & GitHub'],
    highlights: [
      'Mentor 1st- and 2nd-year students in MERN stack fundamentals and real-world project workflows',
      'Conduct hands-on technical sessions on backend integration, responsive design, and cloud deployment',
      'Lead code reviews and guide student teams through production-grade SDLC processes',
      'Supervise testing, schema normalisation, and deployment for student-built live applications',
    ],
    description: 'Directing technical mentorship and sprint operations for student engineering cohorts, bridging academic theory with industry-grade full-stack delivery.',
  },
  {
    role: 'Web Developer — Official College Portal',
    org: 'GASCKK.ORG.IN',
    orgFull: 'Govt. Arts & Science College, Palkulam',
    period: '2023 – Present',
    type: 'Production Web Lead',
    accent: '#10b981',
    metrics: [{ label: 'Active Users', value: '5,000+' }, { label: 'Performance', value: '+45%' }],
    stack: ['PHP (PDO)', 'MySQL', 'Bootstrap 5', 'REST APIs', 'Hostinger'],
    highlights: [
      'Designed and maintain a responsive public-facing PHP/MySQL site serving students, faculty, and visitors',
      'Engineered modules for departmental activities, admission rank lists, exam updates, and committees',
      'Streamlined real-time content publishing for academic events, circulars, and educational resources',
      'Optimised page load times and SEO during peak admission traffic surges',
    ],
    description: 'Leading full-stack engineering and server administration for the college portal, serving over 5,000+ daily visitors with high reliability.',
  },
  {
    role: 'Full-Stack Developer — Association Management System',
    org: 'Astra AMS Ecosystem',
    orgFull: 'Final Year Engineering Project',
    period: '2024 – 2025',
    type: 'Full-Stack & Mobile',
    accent: '#8b5cf6',
    metrics: [{ label: 'Uptime SLA', value: '99.9%' }, { label: 'Latency Cut', value: '40%' }],
    stack: ['PHP (PDO)', 'MySQL', 'Flutter', 'Dart', 'REST APIs', 'Hostinger'],
    highlights: [
      'Developed a full-stack Association Management System using PHP (PDO), MySQL, Bootstrap 5, and Flutter',
      'Built secure authentication, member and event management, media uploads, and admin dashboards',
      'Integrated cross-platform mobile and web applications with optimized search and database schemas',
      'Engineered secure API communication and deployed the platform on Hostinger',
    ],
    description: 'Architecting a unified web and mobile platform for institutional association workflows with real-time data sync and responsive admin tools.',
  },
];

const CERTIFICATIONS = [
  {
    title: 'Java Full Stack Developer Training',
    issuer: 'Vinsys IT Services India Ltd & Generation India',
    year: '2026',
    color: 'var(--cyan)',
    code: 'JAVA-GEN-2026',
    badge: 'PURSUING',
  },
  {
    title: 'Python Coding Foundations',
    issuer: 'Infosys Springboard',
    year: '2025',
    color: '#10b981',
    code: 'INF-PY-2025',
    badge: 'VERIFIED',
  },
  {
    title: 'Java Spring Network',
    issuer: 'ADROIT',
    year: '2024',
    color: '#8b5cf6',
    code: 'ADR-SPR-2024',
    badge: 'CERTIFIED',
  },
  {
    title: 'Oracle App Development',
    issuer: 'ADROIT',
    year: '2024',
    color: '#f59e0b',
    code: 'ADR-ORA-2024',
    badge: 'VERIFIED',
  },
];

function ExpTimelineCard({ item, index }) {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [4, -4]), { stiffness: 150, damping: 24 });
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-4, 4]), { stiffness: 150, damping: 24 });

  const onMove = e => {
    if (window.innerWidth < 768) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <motion.div
      className="exp-item-wrapper"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.6 }}
    >
      {/* Timeline Gutter */}
      <div className="exp-gutter">
        <div
          className="exp-node"
          style={{ background: item.accent, boxShadow: `0 0 16px ${item.accent}` }}
        />
        {index < EXPERIENCE.length - 1 && (
          <div
            className="exp-wire"
            style={{ background: `linear-gradient(to bottom, ${item.accent}, transparent)` }}
          />
        )}
      </div>

      {/* Card */}
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={() => { mx.set(0); my.set(0); }}
        style={{ rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d', paddingBottom: '36px' }}
      >
        <div className="exp-card glass">
          <div className="exp-card-header">
            <div className="exp-icon-tag" style={{ background: `${item.accent}15`, color: item.accent, border: `1px solid ${item.accent}30` }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="20" height="20">
                <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
              </svg>
            </div>

            <div className="exp-title-area">
              <h3 className="exp-role-title">{item.role}</h3>
              <div className="exp-subrow">
                <span className="exp-org-name">{item.org}</span>
                <span className="exp-period-pill mono">{item.period}</span>
              </div>
            </div>

            <span className="exp-type-badge" style={{ color: item.accent, borderColor: `${item.accent}40` }}>
              {item.type}
            </span>
          </div>

          <p className="exp-desc-text">{item.description}</p>

          {/* Metrics */}
          <div className="exp-metrics-strip">
            {item.metrics.map(m => (
              <div key={m.label} className="exp-metric-pill">
                <strong style={{ color: item.accent }}>{m.value}</strong>
                <span>{m.label}</span>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <div className="exp-highlights-list">
            {item.highlights.map((h, i) => (
              <div key={i} className="exp-hl-row">
                <span className="exp-hl-dot" style={{ background: item.accent }} />
                <span>{h}</span>
              </div>
            ))}
          </div>

          {/* Stack Chips */}
          <div className="exp-stack-chips">
            {item.stack.map(s => (
              <span key={s} className="exp-stack-chip">{s}</span>
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
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="exp-header"
        >
          <span className="label-modern">Experience & Credentials</span>
          <h2 className="display-lg">
            Career Track & <span className="animated-gradient-text">Education.</span>
          </h2>
          <p className="exp-header-desc">
            Directing institutional portals, mentoring engineering students in MERN workflows, and pursuing advanced Java Full Stack training.
          </p>
        </motion.div>

        {/* 2-Column Layout */}
        <div className="exp-main-grid">

          {/* Timeline Column */}
          <div className="exp-timeline-col">
            {EXPERIENCE.map((item, i) => (
              <ExpTimelineCard key={i} item={item} index={i} />
            ))}
          </div>

          {/* Credentials Column */}
          <div className="exp-credentials-col">
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="edu-card glass"
            >
              <div className="edu-badge-row">
                <span className="edu-status-pill">Expected 2026</span>
                <span className="edu-cgpa-pill mono">BCA Graduate</span>
              </div>

              <h4 className="edu-degree-title">Bachelor of Computer Applications (BCA)</h4>
              <p className="edu-institution">
                Govt. Arts and Science College, Palkulam, Kanyakumari<br />
                Affiliated to Manonmaniam Sundaranar University
              </p>

              <div className="edu-coursework-box">
                <span className="coursework-label">Core Coursework:</span>
                <p className="coursework-text">
                  Object-Oriented Programming, Data Structures & Algorithms, Operating Systems, Relational DBMS & SQL, Computer Networks, Modern Web Development.
                </p>
              </div>

              <div className="edu-metrics-grid">
                <div className="edu-metric-item">
                  <span className="edu-m-val">2023 – 2026</span>
                  <span className="edu-m-lbl">Timeline</span>
                </div>
                <div className="edu-metric-item">
                  <span className="edu-m-val">Tenkasi / KK</span>
                  <span className="edu-m-lbl">Location</span>
                </div>
                <div className="edu-metric-item">
                  <span className="edu-m-val">BCA</span>
                  <span className="edu-m-lbl">Degree</span>
                </div>
              </div>
            </motion.div>

            {/* Certifications Grid */}
            <div className="certs-section">
              <h4 className="certs-title">Certifications & Specialized Training</h4>
              <div className="certs-grid">
                {CERTIFICATIONS.map((cert, idx) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, scale: 0.94 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="cert-tile glass"
                  >
                    <div className="cert-tile-top">
                      <span className="cert-badge" style={{ color: cert.color, borderColor: `${cert.color}40` }}>
                        {cert.badge}
                      </span>
                      <span className="cert-year-tag mono">{cert.year}</span>
                    </div>

                    <h5 className="cert-name">{cert.title}</h5>
                    <p className="cert-issuer-name">{cert.issuer}</p>

                    <div className="cert-bar-track">
                      <motion.div
                        className="cert-bar-fill"
                        style={{ background: cert.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 0.9, delay: idx * 0.08 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        .exp-section {
          background: var(--bg);
          position: relative;
        }

        .exp-header {
          margin-bottom: 60px;
        }
        .exp-header-desc {
          font-size: 1.05rem;
          color: var(--text-2);
          max-width: 600px;
          line-height: 1.75;
          margin-top: 14px;
        }

        .exp-main-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 60px;
          align-items: start;
        }

        /* Timeline Items */
        .exp-item-wrapper {
          display: grid;
          grid-template-columns: 28px 1fr;
          gap: 20px;
        }
        .exp-gutter {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 8px;
        }
        .exp-node {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid var(--bg);
          z-index: 2;
          flex-shrink: 0;
        }
        .exp-wire {
          width: 2px;
          flex: 1;
          margin: 6px 0;
          min-height: 50px;
        }

        .exp-card {
          padding: 28px;
          border-radius: 22px;
          border: 1px solid var(--border) !important;
          background: var(--surface) !important;
          transition: all 0.3s ease;
        }
        .exp-card:hover {
          border-color: var(--border-cyan) !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
        }

        .exp-card-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }
        .exp-icon-tag {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .exp-title-area {
          flex: 1;
          min-width: 0;
        }
        .exp-role-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--text-1);
          line-height: 1.2;
        }
        .exp-subrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 4px;
          flex-wrap: wrap;
        }
        .exp-org-name {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-2);
        }
        .exp-period-pill {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--cyan);
          background: var(--surface-2);
          padding: 2px 8px;
          border-radius: 6px;
          border: 1px solid var(--border);
        }

        .exp-type-badge {
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 4px 12px;
          border-radius: 100px;
          border: 1px solid;
        }

        .exp-desc-text {
          font-size: 0.92rem;
          color: var(--text-2);
          line-height: 1.65;
          margin-bottom: 18px;
        }

        .exp-metrics-strip {
          display: flex;
          gap: 10px;
          margin-bottom: 18px;
          flex-wrap: wrap;
        }
        .exp-metric-pill {
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding: 8px 14px;
          background: var(--surface-2);
          border: 1px solid var(--border);
          border-radius: 10px;
        }
        .exp-metric-pill strong {
          font-size: 1.1rem;
          font-weight: 900;
          line-height: 1;
        }
        .exp-metric-pill span {
          font-size: 0.62rem;
          font-weight: 700;
          color: var(--text-4);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .exp-highlights-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 18px;
        }
        .exp-hl-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.86rem;
          color: var(--text-3);
          line-height: 1.5;
        }
        .exp-hl-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          margin-top: 7px;
          flex-shrink: 0;
        }

        .exp-stack-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .exp-stack-chip {
          font-size: 0.68rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 6px;
          background: var(--surface-2);
          border: 1px solid var(--border);
          color: var(--text-2);
        }

        /* Education Card */
        .edu-card {
          padding: 32px;
          border-radius: 24px;
          border: 1px solid var(--border) !important;
          background: var(--surface) !important;
          margin-bottom: 32px;
        }
        .edu-badge-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
        }
        .edu-status-pill {
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--cyan);
          background: var(--cyan-soft);
          border: 1px solid var(--border-cyan);
          padding: 4px 12px;
          border-radius: 100px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .edu-cgpa-pill {
          font-size: 0.85rem;
          font-weight: 900;
          color: var(--emerald);
          background: var(--emerald-soft);
          border: 1px solid var(--emerald-glow);
          padding: 4px 10px;
          border-radius: 8px;
        }

        .edu-degree-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-1);
          line-height: 1.25;
          margin-bottom: 8px;
        }
        .edu-institution {
          font-size: 0.88rem;
          color: var(--text-3);
          line-height: 1.5;
          margin-bottom: 16px;
        }

        .edu-coursework-box {
          background: var(--surface-2);
          border: 1px solid var(--border);
          padding: 14px;
          border-radius: 12px;
          margin-bottom: 20px;
        }
        .coursework-label {
          font-size: 0.68rem;
          font-weight: 800;
          color: var(--cyan);
          text-transform: uppercase;
          display: block;
          margin-bottom: 4px;
        }
        .coursework-text {
          font-size: 0.82rem;
          color: var(--text-2);
          line-height: 1.5;
        }

        .edu-metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          padding-top: 18px;
          border-top: 1px solid var(--border);
        }
        .edu-metric-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .edu-m-val {
          font-family: 'Outfit', sans-serif;
          font-size: 1.1rem;
          font-weight: 900;
          color: var(--cyan);
        }
        .edu-m-lbl {
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--text-4);
          text-transform: uppercase;
        }

        /* Certs */
        .certs-title {
          font-size: 0.8rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--cyan);
          margin-bottom: 16px;
        }
        .certs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .cert-tile {
          padding: 20px;
          border-radius: 18px;
          border: 1px solid var(--border) !important;
          background: var(--surface) !important;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .cert-tile:hover {
          border-color: var(--border-cyan) !important;
        }
        .cert-tile-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .cert-badge {
          font-size: 0.6rem;
          font-weight: 800;
          padding: 2px 8px;
          border-radius: 6px;
          border: 1px solid;
          text-transform: uppercase;
        }
        .cert-year-tag {
          font-size: 0.7rem;
          color: var(--text-4);
        }
        .cert-name {
          font-family: 'Outfit', sans-serif;
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--text-1);
          line-height: 1.3;
        }
        .cert-issuer-name {
          font-size: 0.76rem;
          color: var(--text-3);
          margin-bottom: 6px;
        }
        .cert-bar-track {
          height: 3px;
          background: var(--surface-3);
          border-radius: 2px;
          overflow: hidden;
          margin-top: auto;
        }
        .cert-bar-fill {
          height: 100%;
          border-radius: 2px;
        }

        @media (max-width: 1024px) {
          .exp-main-grid { grid-template-columns: 1fr; gap: 48px; }
        }
        @media (max-width: 600px) {
          .certs-grid { grid-template-columns: 1fr; }
          .edu-card { padding: 22px; }
          .exp-card { padding: 20px; }
        }
      `}</style>
    </section>
  );
}
