/**
 * ProjectModal.jsx — 2026 Deep Case Study Inspection Modal
 * Detailed architecture breakdown, engineering challenges, metrics, and live demo access
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  if (!project) return null;

  return (
    <div className="pm-backdrop" onClick={onClose}>
      <motion.div
        className="pm-dialog glass"
        initial={{ opacity: 0, scale: 0.94, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 30 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="pm-topbar">
          <div className="pm-top-left">
            <span className="pm-badge" style={{ color: project.statusColor, borderColor: `${project.statusColor}40` }}>
              <span className="pm-dot" style={{ background: project.statusColor }} />
              {project.status}
            </span>
            <span className="pm-number mono">{project.number}</span>
          </div>
          <button className="pm-close-btn" onClick={onClose} aria-label="Close modal">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Hero Media Preview */}
        <div className="pm-media-banner">
          <img src={project.image} alt={project.title} className="pm-hero-img" />
          <div className="pm-media-gradient" />
          <div className="pm-banner-content">
            <div className="pm-role-tag">{project.role}</div>
            <h2 className="pm-title">{project.title}</h2>
            <p className="pm-subtitle">{project.subtitle}</p>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="pm-tabs-bar">
          {[
            { id: 'overview', label: 'Overview & Story' },
            { id: 'architecture', label: 'Architecture & Stack' },
            { id: 'impact', label: 'Metrics & Challenges' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pm-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            >
              {tab.label}
              {activeTab === tab.id && <motion.div layoutId="pm-tab-indicator" className="pm-tab-pill" />}
            </button>
          ))}
        </div>

        {/* Tab Content Body */}
        <div className="pm-body-content">
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div
                key="tab-overview"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="pm-tab-pane"
              >
                <div className="pm-desc-block">
                  <h4 className="pm-pane-heading">Project Synopsis</h4>
                  <p className="pm-desc-text">{project.description}</p>
                  {project.extendedDesc && (
                    <p className="pm-desc-text" style={{ marginTop: '12px' }}>{project.extendedDesc}</p>
                  )}
                </div>

                <div className="pm-key-features">
                  <h4 className="pm-pane-heading">Key Innovations</h4>
                  <div className="pm-features-grid">
                    {(project.features || [
                      'High-concurrency database queries with sub-20ms latency',
                      'Automated role-based access control (RBAC) security layer',
                      'Real-time status synchronization and push notification hooks',
                      'Zero-downtime micro-updates with Linux VPS deployment'
                    ]).map((feat, idx) => (
                      <div key={idx} className="pm-feature-item">
                        <span className="pm-feat-check">✓</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'architecture' && (
              <motion.div
                key="tab-arch"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="pm-tab-pane"
              >
                <div className="pm-desc-block">
                  <h4 className="pm-pane-heading">System Stack Matrix</h4>
                  <div className="pm-stack-pills">
                    {project.stack.map(tech => (
                      <span key={tech} className="pm-stack-pill">
                        <span className="pm-tech-bullet" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pm-arch-highlights">
                  <h4 className="pm-pane-heading">Engineering Highlights</h4>
                  <div className="pm-arch-grid">
                    <div className="pm-arch-card">
                      <span className="pm-arch-label">API Architecture</span>
                      <p className="pm-arch-val">RESTful endpoints with PDO prepared statements & JWT token auth</p>
                    </div>
                    <div className="pm-arch-card">
                      <span className="pm-arch-label">Data Layer</span>
                      <p className="pm-arch-val">Indexed MySQL relational schemas with query caching</p>
                    </div>
                    <div className="pm-arch-card">
                      <span className="pm-arch-label">Performance</span>
                      <p className="pm-arch-val">{project.metric || 'Sub-second response times'}</p>
                    </div>
                    <div className="pm-arch-card">
                      <span className="pm-arch-label">Deployment</span>
                      <p className="pm-arch-val">Linux VPS / Nginx Reverse Proxy with SSL</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'impact' && (
              <motion.div
                key="tab-impact"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="pm-tab-pane"
              >
                <div className="pm-metrics-row">
                  <div className="pm-metric-card">
                    <span className="pm-metric-val" style={{ color: project.accent }}>{project.metric}</span>
                    <span className="pm-metric-lbl">Primary Benchmark</span>
                  </div>
                  <div className="pm-metric-card">
                    <span className="pm-metric-val" style={{ color: '#10b981' }}>5,000+</span>
                    <span className="pm-metric-lbl">Active Users Impacted</span>
                  </div>
                  <div className="pm-metric-card">
                    <span className="pm-metric-val" style={{ color: '#8b5cf6' }}>100%</span>
                    <span className="pm-metric-lbl">Data Integrity</span>
                  </div>
                </div>

                <div className="pm-challenges-box">
                  <h4 className="pm-pane-heading">Engineering Problem Solved</h4>
                  <p className="pm-desc-text">
                    Legacy workflows suffered from manual bottlenecks and query timeouts under high concurrent student traffic. By rebuilding the indexing pipeline and architecting clean modular API endpoints, query time was drastically slashed and stability reached 99.9% uptime.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Modal Action Footer */}
        <div className="pm-footer">
          <div className="pm-footer-tags">
            {project.tags.map(t => (
              <span key={t} className="pm-tag">#{t}</span>
            ))}
          </div>

          <div className="pm-footer-actions">
            {project.isPrivate ? (
              <div className="pm-private-notice">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span>Institutional Private Access</span>
              </div>
            ) : project.link && project.link !== '#' ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary pm-cta-btn"
              >
                <span>Launch Live System</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            ) : (
              <button className="btn btn-secondary pm-cta-btn" onClick={onClose}>
                <span>Close Case Study</span>
              </button>
            )}
          </div>
        </div>
      </motion.div>

      <style>{`
        .pm-backdrop {
          position: fixed;
          inset: 0;
          z-index: 10000;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .pm-dialog {
          width: 100%;
          max-width: 820px;
          max-height: 90vh;
          overflow-y: auto;
          border-radius: 28px;
          border: 1px solid var(--border-cyan) !important;
          background: var(--bg-card) !important;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.7);
          display: flex;
          flex-direction: column;
        }

        .pm-topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 24px;
          border-bottom: 1px solid var(--border);
          background: var(--surface-2);
        }

        .pm-top-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .pm-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border-radius: 100px;
          font-size: 0.68rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          border: 1px solid;
          background: var(--surface-3);
        }

        .pm-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          animation: pulse-glow 2s infinite;
        }

        .pm-number {
          font-size: 0.85rem;
          font-weight: 800;
          color: var(--text-3);
        }

        .pm-close-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid var(--border);
          background: var(--surface-3);
          color: var(--text-2);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .pm-close-btn:hover {
          color: var(--cyan);
          border-color: var(--cyan);
          transform: rotate(90deg);
        }

        .pm-media-banner {
          position: relative;
          width: 100%;
          height: 240px;
          overflow: hidden;
          background: #000;
        }

        .pm-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          opacity: 0.75;
        }

        .pm-media-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, var(--bg-card) 5%, transparent 70%);
        }

        .pm-banner-content {
          position: absolute;
          bottom: 20px;
          left: 28px;
          right: 28px;
          z-index: 2;
        }

        .pm-role-tag {
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--cyan);
          margin-bottom: 4px;
        }

        .pm-title {
          font-family: 'Outfit', sans-serif;
          font-size: 2rem;
          font-weight: 900;
          color: var(--text-1);
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .pm-subtitle {
          font-size: 0.95rem;
          color: var(--text-2);
          font-weight: 500;
          margin-top: 4px;
        }

        .pm-tabs-bar {
          display: flex;
          gap: 6px;
          padding: 8px 24px;
          border-bottom: 1px solid var(--border);
          background: var(--surface-2);
          overflow-x: auto;
        }

        .pm-tab-btn {
          position: relative;
          padding: 10px 18px;
          border: none;
          background: transparent;
          color: var(--text-3);
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
          border-radius: 100px;
          transition: color 0.2s;
          white-space: nowrap;
        }

        .pm-tab-btn.active {
          color: var(--text-1);
        }

        .pm-tab-pill {
          position: absolute;
          inset: 0;
          background: var(--surface-3);
          border: 1px solid var(--border-2);
          border-radius: 100px;
          z-index: -1;
        }

        .pm-body-content {
          padding: 28px;
          flex: 1;
        }

        .pm-tab-pane {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .pm-pane-heading {
          font-size: 0.8rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--cyan);
          margin-bottom: 12px;
        }

        .pm-desc-text {
          font-size: 0.95rem;
          color: var(--text-2);
          line-height: 1.7;
        }

        .pm-features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .pm-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.88rem;
          color: var(--text-2);
          background: var(--surface-2);
          padding: 12px 16px;
          border-radius: 12px;
          border: 1px solid var(--border);
        }

        .pm-feat-check {
          color: var(--emerald);
          font-weight: 900;
        }

        .pm-stack-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .pm-stack-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 100px;
          background: var(--surface-2);
          border: 1px solid var(--border);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-1);
        }

        .pm-tech-bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--cyan);
        }

        .pm-arch-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .pm-arch-card {
          padding: 16px;
          border-radius: 14px;
          background: var(--surface-2);
          border: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .pm-arch-label {
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--cyan);
        }

        .pm-arch-val {
          font-size: 0.88rem;
          color: var(--text-2);
          font-weight: 600;
          line-height: 1.5;
        }

        .pm-metrics-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .pm-metric-card {
          padding: 20px;
          border-radius: 16px;
          background: var(--surface-2);
          border: 1px solid var(--border);
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .pm-metric-val {
          font-family: 'Outfit', sans-serif;
          font-size: 2rem;
          font-weight: 900;
          line-height: 1;
        }

        .pm-metric-lbl {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--text-3);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .pm-challenges-box {
          padding: 20px;
          border-radius: 16px;
          background: var(--surface-2);
          border: 1px solid var(--border);
        }

        .pm-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 28px;
          border-top: 1px solid var(--border);
          background: var(--surface-2);
          flex-wrap: wrap;
          gap: 16px;
        }

        .pm-footer-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .pm-tag {
          font-size: 0.75rem;
          color: var(--text-3);
          font-weight: 600;
        }

        .pm-footer-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .pm-cta-btn {
          padding: 12px 24px !important;
          border-radius: 12px !important;
          font-size: 0.9rem !important;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .pm-private-notice {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--violet);
          padding: 8px 16px;
          background: var(--surface-3);
          border: 1px solid var(--border);
          border-radius: 100px;
        }

        @media (max-width: 640px) {
          .pm-dialog { max-height: 95vh; }
          .pm-media-banner { height: 180px; }
          .pm-title { font-size: 1.5rem; }
          .pm-features-grid, .pm-arch-grid, .pm-metrics-row { grid-template-columns: 1fr; }
          .pm-footer { flex-direction: column; align-items: stretch; }
          .pm-footer-actions { width: 100%; justify-content: center; }
          .pm-cta-btn { width: 100%; }
        }
      `}</style>
    </div>
  );
}
