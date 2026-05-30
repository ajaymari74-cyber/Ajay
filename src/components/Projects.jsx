/**
 * Projects Section — 2026 Professional Portfolio
 * 3D-tilt cards · Official status badges · Tech stack tags
 */
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

const PROJECTS = [
  {
    id: 1,
    number: '01',
    title: 'Astra Web DBMS Portal',
    subtitle: 'Institutional Database Management System',
    role: 'System Architect',
    metric: '99.9% Uptime',
    image: '/assets/AstraDBweb.png',
    accent: '#CCFF00',
    description: 'A high-performance database management portal built for institutional use, featuring secure RESTful endpoints, real-time analytics dashboard, and a custom indexing algorithm that reduced query time by 40%.',
    tags: ['REST API', 'Analytics', 'Enterprise UI'],
    stack: ['PHP', 'MySQL', 'React'],
    link: 'https://astraapp.gasckk.org.in/',
    status: 'Live',
    statusColor: '#22c55e',
  },
  {
    id: 2,
    number: '02',
    title: 'GeoTrack Field System',
    subtitle: 'Real-Time Geospatial Intelligence Suite',
    role: 'Lead Developer',
    metric: '12ms Latency',
    image: '/assets/geotrackSystem.png',
    accent: '#3B82F6',
    description: 'A geospatial intelligence platform for workforce management, leveraging Haversine formula for distance calculations, real-time GPS telemetry, and automated geo-fencing alerts for field operations.',
    tags: ['GPS Telemetry', 'Geo-fencing', 'Real-time Data'],
    stack: ['Node.js', 'GeoAPI', 'MySQL'],
    link: '#',
    status: 'In Development',
    statusColor: '#F59E0B',
  },
  {
    id: 3,
    number: '03',
    title: 'Astra Mobile App',
    subtitle: 'Institutional Mobile Ecosystem',
    role: 'Mobile Lead',
    metric: '60 FPS Fluid',
    image: '/assets/Astra_app_project.png',
    accent: '#7C3AED',
    description: 'A flagship institutional mobile application built with Flutter for true cross-platform performance. Features seamless cloud synchronization, offline-first architecture, and real-time push notifications.',
    tags: ['Flutter Engine', 'Cloud Sync', 'Offline First'],
    stack: ['Flutter', 'Dart', 'Firebase'],
    link: '#',
    status: 'Private',
    statusColor: '#7C3AED',
    isPrivate: true,
  },
  {
    id: 4,
    number: '04',
    title: 'GASCKK Academic Portal',
    subtitle: 'Official Government College Web Platform',
    role: 'Full-Stack Engineer',
    metric: 'SEO Optimized',
    image: '/assets/gasckkWebProject.png',
    accent: '#10B981',
    description: 'The core academic web platform for Govt. Arts & Science College, Kanyakumari. Built for massive student engagement with automated departmental workflows, media management, and secure staff authentication.',
    tags: ['CMS Architecture', 'Workflow Automation', 'Secure Auth'],
    stack: ['PHP', 'MySQL', 'JavaScript'],
    link: 'https://gasckk.org.in',
    status: 'Live',
    statusColor: '#22c55e',
  },
];

function ProjectCard({ project, onPrivateClick }) {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 130, damping: 24 });
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), { stiffness: 130, damping: 24 });

  const onMove = e => {
    if (window.innerWidth < 768) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const handleClick = () => {
    if (project.isPrivate) { onPrivateClick(project.title); return; }
    if (project.link && project.link !== '#') window.open(project.link, '_blank', 'noopener');
  };

  return (
    <motion.article ref={ref} onMouseMove={onMove}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
      style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 1400 }}
      initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.7 }}
      className="project-card glass">

      {/* Image */}
      <div className="project-media" onClick={handleClick} style={{ cursor: project.link !== '#' || project.isPrivate ? 'pointer' : 'default' }}>
        <img src={project.image} alt={project.title} className="project-img" loading="lazy" />
        <div className="project-overlay">
          <div className="project-status-badge" style={{ color: project.statusColor, borderColor: `${project.statusColor}50` }}>
            <span className="status-dot-sm" style={{ background: project.statusColor }} />
            {project.status}
          </div>
        </div>
        <div className="scan-anim" />
        <div className="project-number-overlay">{project.number}</div>
      </div>

      {/* Content */}
      <div className="project-content">
        <div className="project-meta-row">
          <span className="project-role">{project.role}</span>
          <span className="project-metric" style={{ color: project.accent }}>{project.metric}</span>
        </div>

        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        <div className="project-stack">
          {project.stack.map(s => (
            <span key={s} className="stack-tag">{s}</span>
          ))}
        </div>

        <div className="project-footer">
          <div className="project-tags">
            {project.tags.map(t => (
              <span key={t} className="arch-tag">#{t}</span>
            ))}
          </div>
          <motion.button className="project-cta" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.94 }}
            onClick={handleClick} style={{ background: project.accent }}>
            {project.isPrivate
              ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
              : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
            }
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [toast, setToast] = useState(null);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">

        {/* Header */}
        <div className="projects-header">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="label-modern">Portfolio</div>
            <h2 className="display-lg">
              Architecting<br />
              <span className="animated-gradient-text">Digital Eras.</span>
            </h2>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="projects-desc">
            Production-ready systems, distributed architectures, and high-performance platforms
            built for real institutional scale.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {PROJECTS.map(p => <ProjectCard key={p.id} project={p} onPrivateClick={setToast} />)}
        </div>

      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div className="project-toast glass"
            initial={{ opacity: 0, y: 60, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 60, x: '-50%' }}>
            <span className="toast-icon">🔐</span>
            <div className="toast-text">
              <strong>{toast}</strong>
              <span>This is a private institutional system. Access restricted.</span>
            </div>
            <button className="toast-dismiss" onClick={() => setToast(null)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .projects-section { padding: 140px 0; background: var(--bg); position: relative; overflow: hidden; }
        
        /* Ambient Glow */
        .projects-section::before {
          content: ''; position: absolute; top: 20%; right: -10%;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%);
          filter: blur(80px); z-index: 0; pointer-events: none;
        }

        .projects-header {
          display: flex; justify-content: space-between;
          align-items: flex-end; margin-bottom: 80px; gap: 40px; position: relative; z-index: 1;
        }
        .projects-header .display-lg { margin-top: 14px; font-size: clamp(2.8rem, 7vw, 4.5rem) !important; letter-spacing: -0.02em; line-height: 1.1; }
        .projects-desc {
          font-size: 1.1rem; color: var(--text-2);
          max-width: 440px; line-height: 1.8; text-align: right;
        }

        /* 4-Column Horizontal Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          position: relative; z-index: 1;
        }

        /* 2026 Premium Card */
        .project-card {
          border-radius: 28px; overflow: hidden;
          border: 1px solid rgba(255,255,255,0.06) !important;
          display: flex; flex-direction: column;
          background: linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%) !important;
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
          position: relative;
        }
        .project-card:hover { 
          border-color: rgba(255,255,255,0.15) !important;
          transform: translateY(-12px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2);
        }

        /* Modern Media Container */
        .project-media {
          position: relative; 
          width: 100%;
          aspect-ratio: 16 / 11;
          overflow: hidden;
          background: #000;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          cursor: pointer;
        }
        
        .project-img {
          width: 100%; height: 100%; 
          object-fit: cover;
          object-position: top;
          transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          opacity: 0.85;
        }
        .project-card:hover .project-img { transform: scale(1.08); opacity: 1; }

        .project-media::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%, rgba(0,0,0,0.3) 100%);
          pointer-events: none;
        }
        
        .project-overlay {
          position: absolute; inset: 0; padding: 20px;
          display: flex; align-items: flex-start; justify-content: flex-end;
          z-index: 5;
        }
        
        .project-status-badge {
          display: flex; align-items: center; gap: 6px;
          padding: 6px 14px; border-radius: 100px;
          font-size: 0.6rem; font-weight: 800; letter-spacing: 0.15em;
          text-transform: uppercase;
          background: rgba(0,0,0,0.6); backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }
        .status-dot-sm {
          width: 6px; height: 6px; border-radius: 50%;
          animation: pulse-glow 2s infinite;
        }

        .scan-anim {
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
          animation: scan-line 4s linear infinite;
        }
        .project-number-overlay {
          position: absolute; bottom: 12px; left: 16px;
          font-family: 'Outfit', sans-serif;
          font-size: 3.5rem; font-weight: 900; line-height: 1;
          color: rgba(255,255,255,0.05); pointer-events: none;
          letter-spacing: -0.05em; transition: color 0.4s;
        }
        .project-card:hover .project-number-overlay { color: rgba(255,255,255,0.15); }

        /* Content */
        .project-content { padding: 24px; display: flex; flex-direction: column; gap: 12px; flex: 1; }
        .project-meta-row { display: flex; justify-content: space-between; align-items: center; }
        .project-role {
          font-size: 0.65rem; font-weight: 800; text-transform: uppercase;
          letter-spacing: 0.2em; color: var(--text-4);
        }
        .project-metric { font-size: 0.75rem; font-weight: 900; }
        .project-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.4rem; font-weight: 800;
          color: var(--text-1); letter-spacing: -0.02em;
          line-height: 1.2;
        }
        .project-desc {
          font-size: 0.85rem; color: var(--text-3); line-height: 1.6;
          display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
        }

        .project-stack { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px; }
        .stack-tag {
          font-size: 0.65rem; font-weight: 700;
          padding: 4px 10px; border-radius: 8px;
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05);
          color: var(--text-2); transition: all 0.3s;
        }
        .project-card:hover .stack-tag { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.1); }

        .project-footer {
          display: flex; justify-content: space-between; align-items: center;
          padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.05); margin-top: auto;
        }
        .project-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .arch-tag { font-size: 0.6rem; font-weight: 700; color: var(--text-4); }
        .project-cta {
          width: 40px; height: 40px; border-radius: 50%; border: none;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: 0.3s; flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }
        .project-cta:hover { transform: scale(1.1); box-shadow: 0 6px 16px rgba(0,0,0,0.3); }

        /* Toast */
        .project-toast {
          position: fixed; bottom: 40px; left: 50%; z-index: 9999;
          display: flex; align-items: center; gap: 20px;
          padding: 20px 28px; border-radius: 20px;
          border: 1px solid var(--border-lime) !important;
          background: rgba(10, 10, 10, 0.9);
          backdrop-filter: blur(20px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.4);
          max-width: 90vw;
        }
        .toast-icon { font-size: 1.6rem; }
        .toast-text { display: flex; flex-direction: column; gap: 3px; }
        .toast-text strong { font-size: 0.9rem; color: var(--text-1); font-weight: 800; }
        .toast-text span   { font-size: 0.82rem; color: var(--text-3); }
        .toast-dismiss {
          background: none; border: none; color: var(--text-3);
          cursor: pointer; display: flex; padding: 4px; margin-left: 8px;
          transition: color 0.2s;
        }
        .toast-dismiss:hover { color: var(--text-1); }

        /* Responsive */
        @media (max-width: 1400px) { .projects-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; } }
        @media (max-width: 992px) {
          .projects-header { flex-direction: column; align-items: flex-start; gap: 24px; }
          .projects-desc { text-align: left; max-width: 100%; }
        }
        @media (max-width: 768px) {
          .projects-section { padding: 100px 0; }
          .projects-grid { grid-template-columns: 1fr; }
          .projects-header { margin-bottom: 48px; }
          .project-content { padding: 24px; }
          .project-title { font-size: 1.5rem; }
        }
      `}</style>
    </section>
  );
}
