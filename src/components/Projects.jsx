/**
 * Projects.jsx — 2026 Next-Gen 3D Coverflow & Album Showcase
 * Features: True 3D Perspective Coverflow, Left/Center/Right Album Deck, Drag/Swipe,
 * Dynamic Ambient Aura, Track Scrubber, Live Telemetry Equalizer, and Deep Case Study Modal.
 */
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectModal from './ProjectModal';

const PROJECTS = [
  {
    id: 1,
    number: '01',
    title: 'GASCKK Official College Portal',
    subtitle: 'Institutional Public & Academic Web Platform',
    role: 'Lead Web Developer',
    period: '2023 – Present',
    metric: '5,000+ Active Users',
    image: '/assets/gasckkWebProject.png',
    accent: '#00f0ff',
    accentRgb: '0, 240, 255',
    category: 'Full-Stack Web',
    description: 'Designed and engineered the primary institutional portal serving 5,000+ students and faculty with real-time academic circulars, dynamic admission rank lists, and departmental workflows.',
    features: [
      'High-concurrency architecture with zero downtime during peak admission surges',
      'Dynamic departmental publishing & automated rank-list generation',
      'Optimized server caching, secure PDO prepared statements, and SEO pipelines',
      'Staff committee governance portal with role-based permissions'
    ],
    architecture: {
      backend: 'PHP 8.x (PDO)',
      database: 'MySQL Relational Schema (Normalized & Indexed)',
      frontend: 'Bootstrap 5, Vanilla JS, CSS3 Design Tokens',
      deployment: 'Hostinger Linux VPS with Nginx & SSL'
    },
    tags: ['PHP (PDO)', 'MySQL', 'Bootstrap 5', 'REST APIs', 'Hostinger VPS'],
    link: 'https://gasckk.org.in',
    status: 'Live Production',
    statusColor: '#10b981',
  },
  {
    id: 2,
    number: '02',
    title: 'Astra Association Management System',
    subtitle: 'Unified Web & Mobile Institutional Ecosystem',
    role: 'Full-Stack & Mobile Architect',
    period: '2024 – 2025',
    metric: '99.9% Uptime SLA',
    image: '/assets/AstraDBweb.png',
    accent: '#8b5cf6',
    accentRgb: '139, 92, 246',
    category: 'Web & Mobile Suite',
    description: 'Comprehensive institutional operations platform uniting a PHP/MySQL management hub with cross-platform Flutter mobile applications for member coordination and media archives.',
    features: [
      'Cross-platform synchronization between Web dashboards and Flutter mobile clients',
      'Engineered custom database indexes cutting analytical query latency by 40%',
      'Member registration, fee ledger management, and secure media repository',
      'Granular Role-Based Access Control (RBAC) with detailed audit logs'
    ],
    architecture: {
      backend: 'PHP (PDO Prepared Statements)',
      mobile: 'Flutter & Dart (iOS / Android Native Engine)',
      database: 'MySQL with Custom Indexing & Foreign Key Constraints',
      deployment: 'Hostinger Cloud Server with Encrypted API Endpoints'
    },
    tags: ['PHP (PDO)', 'MySQL', 'Flutter', 'Dart', 'REST APIs'],
    link: 'https://astraapp.gasckk.org.in/',
    status: 'Live Portal',
    statusColor: '#10b981',
  },
  {
    id: 3,
    number: '03',
    title: 'GPS-Based Shop Visit Attendance System',
    subtitle: 'Real-Time Geo-Fencing Workforce Telemetry',
    role: 'Full-Stack Developer',
    period: '2025',
    metric: 'Haversine Telemetry',
    image: '/assets/geotrackSystem.png',
    accent: '#06b6d4',
    accentRgb: '6, 182, 212',
    category: 'Enterprise IoT & Web',
    description: 'Field workforce verification suite utilizing real-time GPS coordinate telemetry and geodesic distance calculations using the Haversine formula to eliminate proxy check-ins.',
    features: [
      'Haversine geodesic distance validation preventing GPS spoofing & proxy check-ins',
      'Real-time GPS coordinate telemetry with dynamic geo-fencing radius triggers',
      'Offline-first synchronization for field agents in low-connectivity areas',
      'Administrative executive dashboard with merchant route summaries and exportable reports'
    ],
    architecture: {
      backend: 'Node.js & PHP (PDO)',
      geoEngine: 'Haversine Mathematical Geodesic Formula',
      database: 'MySQL Spatial / Coordinates Log Schema',
      features: 'Offline Local Storage & Background Sync Queue'
    },
    tags: ['Node.js', 'PHP (PDO)', 'MySQL', 'Geo-Fencing', 'REST APIs'],
    link: '#',
    status: 'Enterprise Suite',
    statusColor: '#f59e0b',
  },
  {
    id: 4,
    number: '04',
    title: 'Astra Cross-Platform Mobile Application',
    subtitle: 'High-Performance Flutter iOS & Android Client',
    role: 'Mobile Lead',
    period: '2024 – 2025',
    metric: '60 FPS Fluid UI',
    image: '/assets/Astra_app_project.png',
    accent: '#ec4899',
    accentRgb: '236, 72, 153',
    category: 'Mobile Application',
    description: 'Native performance mobile client engineered with Flutter and Dart, featuring offline Hive caching, biometric authentication, circular broadcasts, and event tracking.',
    features: [
      'Offline-first Hive local storage with automatic background cloud sync',
      'Push notification dispatch via Firebase Cloud Messaging (FCM)',
      'Biometric authentication support (Fingerprint & Face ID integration)',
      'Ultra-fluid 60 FPS transitions with responsive haptic feedback'
    ],
    architecture: {
      framework: 'Flutter 3.x with Dart',
      stateManagement: 'Provider / Bloc Pattern',
      caching: 'Hive NoSQL Local Engine',
      cloud: 'Firebase Cloud Messaging & Encrypted REST Endpoints'
    },
    tags: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'Cross-Platform'],
    link: '#',
    status: 'Restricted App',
    statusColor: '#8b5cf6',
    isPrivate: true,
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState('coverflow'); // 'coverflow' or 'gallery'
  const [consoleTab, setConsoleTab] = useState('highlights'); // 'highlights' | 'architecture' | 'stack'
  const [selectedProject, setSelectedProject] = useState(null);
  const [autoplay, setAutoplay] = useState(false);
  const [toast, setToast] = useState(null);

  const activeProject = PROJECTS[currentIndex];

  const nextProject = () => {
    setCurrentIndex(prev => (prev + 1) % PROJECTS.length);
  };

  const prevProject = () => {
    setCurrentIndex(prev => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  // Keyboard navigation (Left / Right arrow keys)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedProject) return;
      if (e.key === 'ArrowRight') nextProject();
      if (e.key === 'ArrowLeft') prevProject();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, currentIndex]);

  // Autoplay handler
  useEffect(() => {
    if (!autoplay || selectedProject) return;
    const t = setInterval(nextProject, 4500);
    return () => clearInterval(t);
  }, [autoplay, selectedProject, currentIndex]);

  const showToast = (title) => {
    setToast(title);
    setTimeout(() => setToast(null), 3000);
  };

  // Calculate 3D card layout properties based on offset from currentIndex
  const getCardStyle = (index) => {
    const total = PROJECTS.length;
    let diff = (index - currentIndex + total) % total;
    if (diff > total / 2) diff -= total; // Wrap around to -1, 0, 1

    if (diff === 0) {
      // Active Center Card
      return {
        zIndex: 10,
        x: '0%',
        scale: 1,
        rotateY: 0,
        opacity: 1,
        filter: 'blur(0px)',
        pointerEvents: 'auto',
      };
    } else if (diff === -1 || (diff === total - 1 && total === 2)) {
      // Left Preview Card
      return {
        zIndex: 5,
        x: '-65%',
        scale: 0.8,
        rotateY: 28,
        opacity: 0.45,
        filter: 'blur(2px)',
        pointerEvents: 'auto',
      };
    } else if (diff === 1 || (diff === -(total - 1) && total === 2)) {
      // Right Preview Card
      return {
        zIndex: 5,
        x: '65%',
        scale: 0.8,
        rotateY: -28,
        opacity: 0.45,
        filter: 'blur(2px)',
        pointerEvents: 'auto',
      };
    } else {
      // Hidden Cards behind
      return {
        zIndex: 1,
        x: diff > 0 ? '120%' : '-120%',
        scale: 0.6,
        rotateY: diff > 0 ? -45 : 45,
        opacity: 0,
        filter: 'blur(8px)',
        pointerEvents: 'none',
      };
    }
  };

  return (
    <section id="projects" className="section projects-root-3d">
      {/* Dynamic Ambient Aurora Flare that morphs with the active project color */}
      <div
        className="projects-dynamic-backdrop"
        style={{
          background: `radial-gradient(ellipse at 50% 35%, rgba(${activeProject.accentRgb}, 0.22) 0%, transparent 68%)`
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── TOP CONTROLLER HUD BAR ── */}
        <div className="projects-hud-header">
          <div className="hud-title-group">
            <div className="hud-label-pill">
              <span className="hud-pulse" style={{ background: activeProject.accent, boxShadow: `0 0 10px ${activeProject.accent}` }} />
              <span>2026 Production Showcase · 3D Deck</span>
            </div>
            <h2 className="display-lg">
              Featured <span className="animated-gradient-text">Productions.</span>
            </h2>
            <p className="hud-lead-text">
              High-impact institutional architectures, scalable databases, and native mobile clients built for real-world reliability.
            </p>
          </div>

          {/* Right Action Cluster */}
          <div className="hud-control-cluster">
            {/* Live Audio-Visual Telemetry Equalizer */}
            <div className="hud-equalizer-box glass" title="Live System Telemetry Active">
              <div className="eq-bar eq-1" style={{ background: activeProject.accent }} />
              <div className="eq-bar eq-2" style={{ background: activeProject.accent }} />
              <div className="eq-bar eq-3" style={{ background: activeProject.accent }} />
              <div className="eq-bar eq-4" style={{ background: activeProject.accent }} />
              <span className="eq-text mono">SYSTEM_{activeProject.number}</span>
            </div>

            {/* Autoplay Walkthrough Button */}
            {viewMode === 'coverflow' && (
              <button
                className={`hud-btn-toggle glass ${autoplay ? 'active' : ''}`}
                onClick={() => setAutoplay(!autoplay)}
                title={autoplay ? 'Pause automatic walkthrough' : 'Start automatic walkthrough'}
              >
                <span>{autoplay ? '⏸ Pause' : '▶ Auto-Tour'}</span>
              </button>
            )}

            {/* View Mode Switcher */}
            <div className="hud-view-toggle glass">
              <button
                className={`hud-tab-btn ${viewMode === 'coverflow' ? 'active' : ''}`}
                onClick={() => setViewMode('coverflow')}
                title="3D Coverflow Album Deck"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="2" y="3" width="20" height="18" rx="2" />
                  <line x1="8" y1="21" x2="8" y2="3" />
                  <line x1="16" y1="21" x2="16" y2="3" />
                </svg>
                <span>3D Album Deck</span>
              </button>
              <button
                className={`hud-tab-btn ${viewMode === 'gallery' ? 'active' : ''}`}
                onClick={() => setViewMode('gallery')}
                title="2-Column Matrix Gallery"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" />
                </svg>
                <span>Matrix View</span>
              </button>
            </div>
          </div>
        </div>

        {/* ── VIEW MODE 1: 3D COVERFLOW & ALBUM STUDIO DECK ── */}
        {viewMode === 'coverflow' ? (
          <div className="coverflow-studio-stage">

            {/* 3D Viewport Deck */}
            <div className="coverflow-viewport">
              {/* Left Stage Arrow */}
              <button
                className="stage-nav-arrow left glass"
                onClick={prevProject}
                aria-label="Previous project"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              {/* 3D Card Stage */}
              <div className="coverflow-3d-track">
                {PROJECTS.map((project, idx) => {
                  const style = getCardStyle(idx);
                  const isCurrent = idx === currentIndex;

                  return (
                    <motion.div
                      key={project.id}
                      className={`coverflow-card-3d ${isCurrent ? 'is-active' : ''}`}
                      animate={style}
                      transition={{ type: 'spring', stiffness: 260, damping: 28 }}
                      onClick={() => {
                        if (!isCurrent) setCurrentIndex(idx);
                        else setSelectedProject(project);
                      }}
                    >
                      <div className="card-3d-inner glass">
                        {/* Artwork Frame */}
                        <div className="card-art-wrap">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="card-art-img"
                            loading="lazy"
                          />
                          <div className="card-art-gloss" />

                          {/* Giant Watermark Track Number */}
                          <div className="card-watermark-num mono">
                            {project.number}
                          </div>

                          {/* Live Status Badge */}
                          <div
                            className="card-status-pill"
                            style={{
                              borderColor: `${project.statusColor}60`,
                              color: project.statusColor,
                            }}
                          >
                            <span className="status-dot live" style={{ background: project.statusColor }} />
                            <span>{project.status}</span>
                          </div>

                          {/* Quick Inspect Hover Cue */}
                          <div className="card-inspect-hint">
                            <span>Inspect Deep Architecture ↗</span>
                          </div>
                        </div>

                        {/* Card Sub-Banner */}
                        <div className="card-sub-banner">
                          <div className="sub-banner-left">
                            <span className="sub-role" style={{ color: project.accent }}>{project.category}</span>
                            <h4 className="sub-title">{project.title}</h4>
                          </div>
                          <span
                            className="sub-metric-badge mono"
                            style={{ color: project.accent, borderColor: `${project.accent}40`, background: `${project.accent}15` }}
                          >
                            {project.metric}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Right Stage Arrow */}
              <button
                className="stage-nav-arrow right glass"
                onClick={nextProject}
                aria-label="Next project"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

            {/* ── EXPANDED INTERACTIVE CONSOLE DECK ── */}
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="album-console-deck glass"
              style={{ '--active-accent': activeProject.accent }}
            >
              {/* Console Topbar */}
              <div className="console-top-strip">
                <div className="console-meta-left">
                  <span className="console-num-tag mono" style={{ color: activeProject.accent }}>
                    TRACK {activeProject.number} OF 04
                  </span>
                  <span className="console-role-pill">{activeProject.role}</span>
                  <span className="console-period mono">{activeProject.period}</span>
                </div>

                {/* Console Navigation Tabs */}
                <div className="console-tab-pill-group">
                  <button
                    className={`console-tab ${consoleTab === 'highlights' ? 'active' : ''}`}
                    onClick={() => setConsoleTab('highlights')}
                  >
                    Key Innovations
                  </button>
                  <button
                    className={`console-tab ${consoleTab === 'architecture' ? 'active' : ''}`}
                    onClick={() => setConsoleTab('architecture')}
                  >
                    Architecture Specs
                  </button>
                  <button
                    className={`console-tab ${consoleTab === 'stack' ? 'active' : ''}`}
                    onClick={() => setConsoleTab('stack')}
                  >
                    Tech Arsenal
                  </button>
                </div>
              </div>

              {/* Console Body Area */}
              <div className="console-body-grid">
                {/* Left: Overview Column */}
                <div className="console-overview-col">
                  <h3 className="console-heading">{activeProject.title}</h3>
                  <p className="console-sub">{activeProject.subtitle}</p>
                  <p className="console-desc">{activeProject.description}</p>
                </div>

                {/* Right: Dynamic Tab Pane */}
                <div className="console-pane-col">
                  {consoleTab === 'highlights' && (
                    <div className="console-features-list">
                      {activeProject.features.map((feat, i) => (
                        <div key={i} className="console-feat-row">
                          <span className="feat-bullet" style={{ color: activeProject.accent }}>✦</span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {consoleTab === 'architecture' && (
                    <div className="console-arch-grid">
                      {Object.entries(activeProject.architecture).map(([key, val]) => (
                        <div key={key} className="arch-item-box">
                          <span className="arch-key-label">{key.toUpperCase()}</span>
                          <span className="arch-val-text">{val}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {consoleTab === 'stack' && (
                    <div className="console-stack-wrap">
                      {activeProject.tags.map(t => (
                        <span key={t} className="console-tech-chip">
                          <span className="chip-dot" style={{ background: activeProject.accent }} />
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Console Bottom Action Bar */}
              <div className="console-action-bar">
                <div className="console-actions-left">
                  <motion.button
                    className="btn btn-primary console-inspect-btn"
                    onClick={() => setSelectedProject(activeProject)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span>Inspect Deep Architecture</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </motion.button>

                  {activeProject.isPrivate ? (
                    <button
                      className="btn btn-secondary console-link-btn restricted"
                      onClick={() => showToast(activeProject.title)}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                      <span>Institutional Restricted</span>
                    </button>
                  ) : activeProject.link && activeProject.link !== '#' ? (
                    <a
                      href={activeProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary console-link-btn"
                    >
                      <span>Launch Live Production</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                    </a>
                  ) : null}
                </div>

                {/* Scrubber Gauge */}
                <div className="console-gauge-track">
                  {PROJECTS.map((p, idx) => (
                    <button
                      key={p.id}
                      className={`gauge-pill ${idx === currentIndex ? 'active' : ''}`}
                      onClick={() => setCurrentIndex(idx)}
                      style={{
                        background: idx === currentIndex ? activeProject.accent : 'var(--border-2)',
                        boxShadow: idx === currentIndex ? `0 0 14px ${activeProject.accent}` : 'none'
                      }}
                    >
                      <span className="gauge-num mono">{p.number}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ── MINI VINYL ALBUM THUMBNAIL DECK ── */}
            <div className="mini-album-tracklist">
              {PROJECTS.map((p, idx) => {
                const isSelected = idx === currentIndex;
                return (
                  <motion.div
                    key={p.id}
                    className={`mini-track-card glass ${isSelected ? 'selected' : ''}`}
                    onClick={() => setCurrentIndex(idx)}
                    whileHover={{ y: -4 }}
                  >
                    <div className="mini-art-box">
                      <img src={p.image} alt={p.title} className="mini-art-img" />
                      <span className="mini-num mono">{p.number}</span>
                    </div>
                    <div className="mini-text-box">
                      <span className="mini-title">{p.title}</span>
                      <span className="mini-metric mono" style={{ color: p.accent }}>{p.metric}</span>
                    </div>
                    {isSelected && (
                      <motion.div
                        layoutId="activeMiniGlow"
                        className="mini-active-indicator"
                        style={{ background: p.accent }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>

          </div>
        ) : (
          /* ── VIEW MODE 2: 2-COLUMN MATRIX GALLERY ── */
          <div className="matrix-gallery-grid">
            {PROJECTS.map(project => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="matrix-card glass"
              >
                <div
                  className="matrix-art-wrap"
                  onClick={() => setSelectedProject(project)}
                >
                  <img src={project.image} alt={project.title} className="matrix-art-img" />
                  <div className="matrix-num-watermark mono">{project.number}</div>
                  <div className="matrix-status-badge" style={{ color: project.statusColor, borderColor: `${project.statusColor}50` }}>
                    <span className="status-dot live" style={{ background: project.statusColor }} />
                    <span>{project.status}</span>
                  </div>
                </div>

                <div className="matrix-card-body">
                  <div className="matrix-top-meta">
                    <span className="matrix-role" style={{ color: project.accent }}>{project.role}</span>
                    <span className="matrix-metric mono">{project.metric}</span>
                  </div>

                  <h4 className="matrix-title" onClick={() => setSelectedProject(project)}>
                    {project.title}
                  </h4>
                  <p className="matrix-desc">{project.description}</p>

                  <div className="matrix-tech-row">
                    {project.tags.map(t => (
                      <span key={t} className="matrix-chip">{t}</span>
                    ))}
                  </div>

                  <div className="matrix-footer-actions">
                    <button
                      className="matrix-inspect-btn"
                      onClick={() => setSelectedProject(project)}
                    >
                      Inspect Architecture ↗
                    </button>

                    {project.isPrivate ? (
                      <span className="matrix-private-badge">Restricted</span>
                    ) : project.link && project.link !== '#' ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="matrix-launch-link">
                        Launch Live ↗
                      </a>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      {/* Restricted Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            className="project-toast glass"
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
          >
            <span className="toast-icon">🔐</span>
            <div className="toast-text">
              <strong>{toast}</strong>
              <span>Internal production architecture with restricted institutional access.</span>
            </div>
            <button className="toast-dismiss" onClick={() => setToast(null)}>✕</button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .projects-root-3d {
          background: var(--bg);
          position: relative;
          min-height: 100vh;
          overflow: hidden;
        }

        .projects-dynamic-backdrop {
          position: absolute;
          inset: 0;
          pointer-events: none;
          filter: blur(120px);
          transition: background 0.7s ease;
          opacity: 0.9;
          z-index: 0;
        }

        /* ── HUD Header ── */
        .projects-hud-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 40px;
          gap: 30px;
          flex-wrap: wrap;
        }

        .hud-label-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 100px;
          background: var(--surface-2);
          border: 1px solid var(--border-cyan);
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--cyan);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .hud-pulse {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          animation: pulse-glow 2s infinite;
        }

        .hud-lead-text {
          font-size: 1.02rem;
          color: var(--text-2);
          max-width: 560px;
          line-height: 1.7;
          margin-top: 10px;
        }

        .hud-control-cluster {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        /* Live Equalizer */
        .hud-equalizer-box {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 8px 16px;
          border-radius: 100px;
          border: 1px solid var(--border);
        }
        .eq-bar {
          width: 3px;
          border-radius: 2px;
          animation: eq-bounce 1.2s ease-in-out infinite alternate;
        }
        .eq-1 { height: 14px; animation-delay: 0.1s; }
        .eq-2 { height: 8px;  animation-delay: 0.3s; }
        .eq-3 { height: 18px; animation-delay: 0.2s; }
        .eq-4 { height: 10px; animation-delay: 0.4s; }
        @keyframes eq-bounce {
          0%   { transform: scaleY(0.4); }
          100% { transform: scaleY(1.3); }
        }
        .eq-text {
          font-size: 0.68rem;
          font-weight: 800;
          color: var(--text-3);
          margin-left: 6px;
        }

        .hud-btn-toggle {
          padding: 8px 18px;
          border-radius: 100px;
          border: 1px solid var(--border) !important;
          color: var(--text-2);
          font-size: 0.8rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
        }
        .hud-btn-toggle.active {
          color: var(--cyan);
          border-color: var(--border-cyan) !important;
          background: var(--surface-3) !important;
        }

        .hud-view-toggle {
          display: flex;
          padding: 4px;
          border-radius: 100px;
          border: 1px solid var(--border) !important;
          gap: 4px;
        }
        .hud-tab-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 7px 16px;
          border-radius: 100px;
          border: none;
          background: transparent;
          color: var(--text-3);
          font-size: 0.78rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
        }
        .hud-tab-btn.active {
          background: var(--surface-3);
          color: var(--cyan);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        /* ── 3D COVERFLOW STAGE ── */
        .coverflow-studio-stage {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .coverflow-viewport {
          position: relative;
          height: 440px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1400px;
          overflow: visible;
        }

        .stage-nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 54px;
          height: 54px;
          border-radius: 50%;
          border: 1px solid var(--border) !important;
          color: var(--text-2);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 20;
          transition: all 0.25s;
        }
        .stage-nav-arrow.left { left: -10px; }
        .stage-nav-arrow.right { right: -10px; }
        .stage-nav-arrow:hover {
          border-color: var(--border-cyan) !important;
          color: var(--cyan);
          background: var(--surface-3) !important;
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 0 20px var(--cyan-glow);
        }

        .coverflow-3d-track {
          position: relative;
          width: 100%;
          max-width: 680px;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
        }

        .coverflow-card-3d {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 26px;
          cursor: pointer;
          transform-style: preserve-3d;
        }

        .card-3d-inner {
          width: 100%;
          height: 100%;
          border-radius: 26px;
          overflow: hidden;
          border: 1px solid var(--border) !important;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 240, 255, 0.1);
          display: flex;
          flex-direction: column;
        }
        .coverflow-card-3d.is-active .card-3d-inner {
          border-color: var(--border-cyan) !important;
          box-shadow: 0 35px 90px rgba(0, 0, 0, 0.7), 0 0 50px rgba(0, 240, 255, 0.2);
        }

        .card-art-wrap {
          position: relative;
          flex: 1;
          background: #000;
          overflow: hidden;
        }
        .card-art-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .coverflow-card-3d.is-active:hover .card-art-img {
          transform: scale(1.05);
        }

        .card-art-gloss {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, transparent 60%);
          pointer-events: none;
        }

        .card-watermark-num {
          position: absolute;
          bottom: 12px;
          left: 18px;
          font-size: 4rem;
          font-weight: 900;
          line-height: 1;
          color: rgba(255, 255, 255, 0.14);
        }

        .card-status-pill {
          position: absolute;
          top: 16px;
          left: 16px;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 100px;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          font-size: 0.68rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          border: 1px solid;
          z-index: 2;
        }

        .card-inspect-hint {
          position: absolute;
          bottom: 16px;
          right: 16px;
          padding: 8px 16px;
          border-radius: 100px;
          background: rgba(0, 0, 0, 0.85);
          border: 1px solid var(--border-cyan);
          color: var(--cyan);
          font-size: 0.74rem;
          font-weight: 800;
          backdrop-filter: blur(10px);
          opacity: 0;
          transform: translateY(6px);
          transition: all 0.25s ease;
        }
        .coverflow-card-3d.is-active:hover .card-inspect-hint {
          opacity: 1;
          transform: translateY(0);
        }

        .card-sub-banner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 24px;
          background: var(--surface-2);
          border-top: 1px solid var(--border);
        }
        .sub-role {
          font-size: 0.68rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          display: block;
        }
        .sub-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--text-1);
        }
        .sub-metric-badge {
          font-size: 0.72rem;
          font-weight: 800;
          padding: 4px 12px;
          border-radius: 100px;
          border: 1px solid;
        }

        /* ── CONSOLE DECK ── */
        .album-console-deck {
          border-radius: 24px;
          padding: 28px;
          border: 1px solid var(--border-cyan) !important;
          background: var(--surface) !important;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .console-top-strip {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border);
          flex-wrap: wrap;
          gap: 14px;
        }
        .console-meta-left {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .console-num-tag {
          font-size: 0.76rem;
          font-weight: 900;
          letter-spacing: 0.15em;
        }
        .console-role-pill {
          font-size: 0.74rem;
          font-weight: 800;
          color: var(--text-1);
          background: var(--surface-2);
          padding: 3px 10px;
          border-radius: 6px;
          border: 1px solid var(--border);
        }
        .console-period {
          font-size: 0.72rem;
          color: var(--text-4);
          font-weight: 700;
        }

        .console-tab-pill-group {
          display: flex;
          gap: 6px;
          background: var(--surface-2);
          padding: 4px;
          border-radius: 100px;
          border: 1px solid var(--border);
        }
        .console-tab {
          padding: 6px 14px;
          border-radius: 100px;
          border: none;
          background: transparent;
          color: var(--text-3);
          font-size: 0.76rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
        }
        .console-tab.active {
          background: var(--cyan);
          color: var(--btn-text);
          box-shadow: 0 2px 10px var(--cyan-glow);
        }

        .console-body-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 30px;
          align-items: start;
        }

        .console-heading {
          font-family: 'Outfit', sans-serif;
          font-size: 1.65rem;
          font-weight: 900;
          color: var(--text-1);
          line-height: 1.2;
          margin-bottom: 4px;
        }
        .console-sub {
          font-size: 0.9rem;
          color: var(--text-3);
          font-weight: 600;
          margin-bottom: 12px;
        }
        .console-desc {
          font-size: 0.94rem;
          color: var(--text-2);
          line-height: 1.65;
        }

        .console-features-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .console-feat-row {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.86rem;
          color: var(--text-2);
          line-height: 1.5;
        }
        .feat-bullet { font-size: 0.8rem; font-weight: 900; }

        .console-arch-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .arch-item-box {
          padding: 10px 14px;
          border-radius: 12px;
          background: var(--surface-2);
          border: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .arch-key-label {
          font-size: 0.64rem;
          font-weight: 800;
          color: var(--cyan);
          letter-spacing: 0.1em;
        }
        .arch-val-text {
          font-size: 0.8rem;
          color: var(--text-1);
          font-weight: 600;
        }

        .console-stack-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .console-tech-chip {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 7px 14px;
          border-radius: 100px;
          background: var(--surface-2);
          border: 1px solid var(--border);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-1);
        }
        .chip-dot { width: 6px; height: 6px; border-radius: 50%; }

        .console-action-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 18px;
          border-top: 1px solid var(--border);
          flex-wrap: wrap;
          gap: 16px;
        }
        .console-actions-left {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .console-inspect-btn {
          padding: 12px 24px !important;
          border-radius: 12px !important;
          font-size: 0.88rem !important;
        }
        .console-link-btn {
          padding: 12px 20px !important;
          border-radius: 12px !important;
          font-size: 0.88rem !important;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .console-link-btn.restricted { color: var(--violet); }

        .console-gauge-track {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .gauge-pill {
          width: 38px;
          height: 28px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        .gauge-pill.active { width: 48px; }
        .gauge-num {
          font-size: 0.72rem;
          font-weight: 900;
          color: var(--btn-text);
        }
        .gauge-pill:not(.active) .gauge-num {
          color: var(--text-4);
        }

        /* ── MINI VINYL TRACKLIST ── */
        .mini-album-tracklist {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .mini-track-card {
          padding: 12px 14px;
          border-radius: 16px;
          border: 1px solid var(--border) !important;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.25s ease;
        }
        .mini-track-card:hover {
          border-color: var(--border-cyan) !important;
          background: var(--surface-2) !important;
        }
        .mini-track-card.selected {
          border-color: var(--border-cyan) !important;
          background: var(--surface-2) !important;
        }
        .mini-art-box {
          position: relative;
          width: 44px;
          height: 44px;
          border-radius: 10px;
          overflow: hidden;
          flex-shrink: 0;
          background: #000;
        }
        .mini-art-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .mini-num {
          position: absolute;
          bottom: 2px;
          right: 4px;
          font-size: 0.6rem;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.7);
        }
        .mini-text-box {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
        }
        .mini-title {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-1);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .mini-metric {
          font-size: 0.68rem;
          font-weight: 700;
        }
        .mini-active-indicator {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
        }

        /* ── MATRIX GALLERY GRID ── */
        .matrix-gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }
        .matrix-card {
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid var(--border) !important;
          background: var(--surface) !important;
          display: flex;
          flex-direction: column;
          transition: all 0.3s;
        }
        .matrix-card:hover {
          border-color: var(--border-cyan) !important;
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.4);
        }
        .matrix-art-wrap {
          position: relative;
          height: 240px;
          background: #000;
          cursor: pointer;
          overflow: hidden;
        }
        .matrix-art-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          transition: transform 0.6s;
        }
        .matrix-card:hover .matrix-art-img {
          transform: scale(1.06);
        }
        .matrix-num-watermark {
          position: absolute;
          bottom: 10px;
          left: 14px;
          font-size: 3.2rem;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.12);
        }
        .matrix-status-badge {
          position: absolute;
          top: 14px;
          right: 14px;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border-radius: 100px;
          background: rgba(0, 0, 0, 0.8);
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          border: 1px solid;
        }
        .matrix-card-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
        }
        .matrix-top-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .matrix-role {
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
        }
        .matrix-metric {
          font-size: 0.74rem;
          color: var(--emerald);
          font-weight: 700;
        }
        .matrix-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--text-1);
          cursor: pointer;
        }
        .matrix-title:hover { color: var(--cyan); }
        .matrix-desc {
          font-size: 0.88rem;
          color: var(--text-3);
          line-height: 1.6;
        }
        .matrix-tech-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 4px;
        }
        .matrix-chip {
          font-size: 0.7rem;
          padding: 3px 8px;
          border-radius: 6px;
          background: var(--surface-2);
          border: 1px solid var(--border);
          color: var(--text-2);
        }
        .matrix-footer-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 16px;
          border-top: 1px solid var(--border);
          margin-top: auto;
        }
        .matrix-inspect-btn {
          background: none;
          border: none;
          color: var(--cyan);
          font-size: 0.82rem;
          font-weight: 800;
          cursor: pointer;
        }
        .matrix-launch-link {
          font-size: 0.8rem;
          font-weight: 800;
          color: var(--emerald);
          text-decoration: none;
        }
        .matrix-private-badge {
          font-size: 0.8rem;
          font-weight: 800;
          color: var(--violet);
        }

        /* Toast */
        .project-toast {
          position: fixed;
          bottom: 36px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 9999;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 22px;
          border-radius: 16px;
          border: 1px solid var(--border-cyan) !important;
          background: var(--bg-card);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
          max-width: 90vw;
        }
        .toast-icon { font-size: 1.4rem; }
        .toast-text { display: flex; flex-direction: column; gap: 2px; }
        .toast-text strong { font-size: 0.88rem; color: var(--text-1); }
        .toast-text span { font-size: 0.78rem; color: var(--text-3); }
        .toast-dismiss {
          background: none;
          border: none;
          color: var(--text-3);
          cursor: pointer;
          margin-left: 8px;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1080px) {
          .mini-album-tracklist { grid-template-columns: repeat(2, 1fr); }
          .console-body-grid { grid-template-columns: 1fr; }
          .matrix-gallery-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
          .coverflow-viewport { height: 320px; }
          .coverflow-3d-track { height: 300px; max-width: 320px; }
          .stage-nav-arrow { width: 42px; height: 42px; }
          .mini-album-tracklist { display: none; }
          .console-tab-pill-group { width: 100%; justify-content: space-between; }
        }
      `}</style>
    </section>
  );
}
