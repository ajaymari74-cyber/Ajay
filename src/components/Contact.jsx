/**
 * Contact.jsx — 2026 Smart Contact & Collaboration Hub
 * Tenkasi, Tamil Nadu Location, Quick Message Templates, 1-Click Clipboard Copiers
 */
import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

const SOCIAL_LINKS = [
  {
    id: 'email',
    label: 'Direct Email',
    value: 'ajaymari74@gmail.com',
    href: 'mailto:ajaymari74@gmail.com',
    accent: '#ea4335',
    copyable: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="22" height="22">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp Chat',
    value: '+91 94874 34031',
    href: 'https://wa.me/919487434031',
    accent: '#25D366',
    copyable: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
    ),
  },
  {
    id: 'linkedin',
    label: 'LinkedIn Profile',
    value: 'ajay-m-100628331',
    href: 'https://www.linkedin.com/in/ajay-m-100628331/',
    accent: '#0a66c2',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    id: 'github',
    label: 'GitHub Repositories',
    value: 'ajaymari74-cyber',
    href: 'https://github.com/ajaymari74-cyber',
    accent: 'var(--cyan)',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

const PRESET_TEMPLATES = [
  { label: '💼 Junior Dev Role', text: "Hi Ajay, we have an exciting Junior Software Developer / Java Full Stack opening." },
  { label: '🚀 Web/Mobile Project', text: "Hi Ajay, I would like to hire you for a full-stack web or Flutter mobile app project." },
  { label: '🛠️ Tech Consultation', text: "Hi Ajay, looking for architectural guidance on database design and RESTful APIs." },
  { label: '☕ General Greeting', text: "Hi Ajay, impressed by your portfolio and wanted to connect!" },
];

export default function Contact() {
  const formRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [4, -4]), { stiffness: 130, damping: 24 });
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-4, 4]), { stiffness: 130, damping: 24 });

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [toast, setToast] = useState(null);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2800);
  };

  const handleCopy = (e, text, label) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    showToast(`Copied ${label} to clipboard!`);
  };

  const handleApplyTemplate = (text) => {
    setForm(prev => ({
      ...prev,
      message: text
    }));
  };

  const onMouseMove = e => {
    if (window.innerWidth < 768) return;
    const r = formRef.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');

    try {
      const payload = {
        fields: {
          name: { stringValue: form.name || "" },
          email: { stringValue: form.email || "" },
          message: { stringValue: form.message || "" },
          createdAt: { timestampValue: new Date().toISOString() }
        }
      };

      const res = await fetch('https://firestore.googleapis.com/v1/projects/ajay-portfolio-a80aa/databases/(default)/documents/contact_messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error('Failed to send to Firestore');

      const web3Key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      if (web3Key && web3Key !== 'YOUR_ACCESS_KEY_HERE' && web3Key.trim() !== '') {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            access_key: web3Key,
            subject: `New Portfolio Message from ${form.name}`,
            from_name: "Portfolio Contact Form",
            name: form.name,
            email: form.email,
            message: form.message
          })
        }).catch(err => console.warn('Web3Forms optional trigger failed:', err));
      }

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      alert('Unable to send message. Please reach out directly via ajaymari74@gmail.com');
      setStatus('idle');
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-main-grid">

          {/* Left Column: Intro & 1-Click Cards */}
          <div className="contact-info-col">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="contact-intro"
            >
              <span className="label-modern">Get In Touch</span>
              <h2 className="display-lg">
                Let's Build<br />
                <span className="animated-gradient-text">Exceptional</span> Systems.
              </h2>
              <p className="contact-lead-text">
                Currently open for <strong>Junior Software Developer</strong> and <strong>Java Full Stack</strong> roles, as well as freelance web and mobile projects.
              </p>
            </motion.div>

            {/* 1-Click Direct Action Cards */}
            <div className="contact-cards-grid">
              {SOCIAL_LINKS.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="direct-contact-card glass"
                  style={{ '--card-accent': item.accent }}
                >
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="card-link-wrap">
                    <div className="contact-icon-box" style={{ color: item.accent, background: `${item.accent}15` }}>
                      {item.icon}
                    </div>
                    <div className="contact-detail-text">
                      <span className="contact-card-label">{item.label}</span>
                      <span className="contact-card-value">{item.value}</span>
                    </div>
                  </a>

                  {item.copyable && (
                    <button
                      className="copy-quick-btn"
                      onClick={(e) => handleCopy(e, item.value.replace(/\s+/g, ''), item.label)}
                      title={`Copy ${item.label}`}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                      </svg>
                    </button>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Location & Live Availability Card */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="availability-status-card glass"
            >
              <div className="avail-head">
                <span className="status-dot live" />
                <strong className="avail-title">Tenkasi, Tamil Nadu, India · Remote & On-Site</strong>
              </div>
              <p className="avail-desc">
                Immediate joiner for junior software engineering positions. Prepared for remote, hybrid, or on-site roles with full dedication.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Smart Interactive Form */}
          <motion.div
            ref={formRef}
            onMouseMove={onMouseMove}
            onMouseLeave={() => { mx.set(0); my.set(0); }}
            style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 1200 }}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="contact-form-col"
          >
            <div className="form-glass-panel glass">
              <div className="form-top-strip">
                <div className="form-dots">
                  <span /><span /><span />
                </div>
                <span className="form-strip-title mono">TRANSMIT_MESSAGE_TO_AJAY.SYS</span>
              </div>

              {/* Message Preset Chips */}
              <div className="preset-templates-bar">
                <span className="presets-label">Select Quick Message Template:</span>
                <div className="preset-chips-list">
                  {PRESET_TEMPLATES.map((tmpl, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className="preset-chip"
                      onClick={() => handleApplyTemplate(tmpl.text)}
                    >
                      {tmpl.label}
                    </button>
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success-box"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="form-success-state"
                  >
                    <div className="success-badge-icon">
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="success-title">Message Transmitted!</h3>
                    <p className="success-desc">
                      Thank you for getting in touch. Your message has been safely received, and Ajay will reply to your email shortly.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="btn btn-secondary"
                      style={{ marginTop: '12px' }}
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form key="active-form" onSubmit={handleSubmit} className="actual-contact-form">
                    <div className="form-input-group">
                      <label className="form-label">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Hiring Manager / Client"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="input"
                      />
                    </div>

                    <div className="form-input-group">
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className="input"
                      />
                    </div>

                    <div className="form-input-group">
                      <label className="form-label">Message / Requirement *</label>
                      <textarea
                        rows={5}
                        required
                        placeholder="Discuss job opportunity, project scope, or tech consultation..."
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        className="input"
                        style={{ resize: 'vertical', minHeight: '120px' }}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={status === 'sending'}
                      className="btn btn-primary form-submit-button"
                      whileHover={status !== 'sending' ? { scale: 1.02 } : {}}
                      whileTap={status !== 'sending' ? { scale: 0.98 } : {}}
                    >
                      {status === 'sending' ? (
                        <>
                          <svg className="spin-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                          </svg>
                          <span>Sending to Ajay...</span>
                        </>
                      ) : (
                        <>
                          <span>Transmit Message</span>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                          </svg>
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Global Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            className="contact-toast glass"
            initial={{ opacity: 0, y: 30, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 30, x: '-50%' }}
          >
            <span>✓</span> {toast}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .contact-section {
          background: var(--bg);
          position: relative;
        }

        .contact-main-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .contact-lead-text {
          font-size: 1.05rem;
          color: var(--text-2);
          line-height: 1.75;
          max-width: 500px;
          margin-top: 14px;
          margin-bottom: 32px;
        }

        /* 1-Click Cards */
        .contact-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 28px;
        }

        .direct-contact-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px;
          border-radius: 18px;
          border: 1px solid var(--border) !important;
          background: var(--surface) !important;
          transition: all 0.25s ease;
        }
        .direct-contact-card:hover {
          border-color: var(--card-accent, var(--cyan)) !important;
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2);
        }

        .card-link-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          flex: 1;
          min-width: 0;
        }

        .contact-icon-box {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-detail-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
        }
        .contact-card-label {
          font-size: 0.68rem;
          font-weight: 800;
          color: var(--text-4);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .contact-card-value {
          font-size: 0.86rem;
          font-weight: 700;
          color: var(--text-1);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .copy-quick-btn {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: var(--surface-2);
          border: 1px solid var(--border);
          color: var(--text-3);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          flex-shrink: 0;
          margin-left: 8px;
        }
        .copy-quick-btn:hover {
          color: var(--cyan);
          border-color: var(--cyan);
        }

        /* Availability Card */
        .availability-status-card {
          padding: 20px 24px;
          border-radius: 18px;
          border: 1px solid var(--border) !important;
          background: var(--surface) !important;
        }
        .avail-head {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
        }
        .avail-title {
          font-size: 0.88rem;
          font-weight: 800;
          color: var(--text-1);
        }
        .avail-desc {
          font-size: 0.82rem;
          color: var(--text-3);
          line-height: 1.55;
        }

        /* Form Column */
        .form-glass-panel {
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid var(--border-cyan) !important;
          background: var(--surface) !important;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);
        }

        .form-top-strip {
          padding: 16px 24px;
          border-bottom: 1px solid var(--border);
          background: var(--surface-2);
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .form-dots {
          display: flex;
          gap: 6px;
        }
        .form-dots span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #ff5f57;
        }
        .form-dots span:nth-child(2) { background: #febc2e; }
        .form-dots span:nth-child(3) { background: #28c840; }

        .form-strip-title {
          font-size: 0.68rem;
          font-weight: 800;
          color: var(--text-3);
          letter-spacing: 0.12em;
        }

        /* Presets Bar */
        .preset-templates-bar {
          padding: 16px 28px;
          border-bottom: 1px solid var(--border);
          background: var(--surface-2);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .presets-label {
          font-size: 0.68rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--cyan);
        }
        .preset-chips-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .preset-chip {
          padding: 6px 12px;
          border-radius: 8px;
          background: var(--surface-3);
          border: 1px solid var(--border);
          color: var(--text-2);
          font-size: 0.76rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        .preset-chip:hover {
          border-color: var(--cyan);
          color: var(--cyan);
          background: var(--cyan-soft);
        }

        .actual-contact-form {
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-input-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .form-label {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--text-3);
          letter-spacing: 0.04em;
        }

        .form-submit-button {
          width: 100%;
          padding: 16px !important;
          border-radius: 14px !important;
          font-size: 0.95rem !important;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .spin-icon {
          animation: rotate-slow 1s linear infinite;
        }

        /* Success State */
        .form-success-state {
          padding: 60px 32px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
        }
        .success-badge-icon {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          background: var(--cyan-soft);
          border: 1.5px solid var(--border-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 6px;
        }
        .success-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.8rem;
          font-weight: 900;
          color: var(--text-1);
        }
        .success-desc {
          font-size: 0.92rem;
          color: var(--text-2);
          max-width: 320px;
          line-height: 1.6;
        }

        /* Global Toast */
        .contact-toast {
          position: fixed;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--cyan);
          color: var(--btn-text);
          padding: 10px 24px;
          border-radius: 100px;
          font-size: 0.85rem;
          font-weight: 800;
          box-shadow: 0 10px 30px var(--cyan-glow);
          z-index: 9999;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        @media (max-width: 1024px) {
          .contact-main-grid { grid-template-columns: 1fr; gap: 48px; }
          .contact-cards-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 600px) {
          .contact-cards-grid { grid-template-columns: 1fr; }
          .actual-contact-form { padding: 22px; }
          .preset-templates-bar { padding: 14px 22px; }
        }
      `}</style>
    </section>
  );
}
