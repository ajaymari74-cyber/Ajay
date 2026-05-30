/**
 * Contact Section — 2026 Professional Portfolio
 * 3D tilt form · Social links · Live status
 */
import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

const SOCIAL_LINKS = [
  {
    id: 'email',
    label: 'Email',
    value: 'ajaymari74@gmail.com',
    href: 'mailto:ajaymari74@gmail.com',
    accent: '#EA4335',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'Ajay M',
    href: 'https://www.linkedin.com/in/ajay-m-100628331/',
    accent: '#0A66C2',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: '+91 9487434031',
    href: 'https://wa.me/919487434031',
    accent: '#25D366',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
    ),
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/ajaymari74-cyber',
    accent: 'var(--text-1)',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

export default function Contact() {
  const formRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 26 });
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 120, damping: 26 });

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const onMouseMove = e => {
    if (window.innerWidth < 768) return;
    const r = formRef.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const payload = {
        fields: {
          name: { stringValue: form.name || "" },
          email: { stringValue: form.email || "" },
          message: { stringValue: form.message || "" },
          createAt: { timestampValue: new Date().toISOString() }
        }
      };

      const res = await fetch('https://firestore.googleapis.com/v1/projects/ajay-portfolio-a80aa/databases/(default)/documents/contact_messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error('Failed to send');
      
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      alert('Failed to send message. Please try again later.');
      setStatus('idle');
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-bg-orb" />
      <div className="container">
        <div className="contact-grid">

          {/* ── Left Column ── */}
          <div className="contact-left">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} className="contact-intro">
              <div className="label-modern">Get in Touch</div>
              <h2 className="display-lg">
                Let's Build<br />
                Something <span className="animated-gradient-text">Together.</span>
              </h2>
              <p className="contact-bio">
                I'm always open to discussing new projects, collaborations, or opportunities
                to create exceptional digital products. Let's connect.
              </p>
            </motion.div>

            {/* Social Links */}
            <div className="social-links">
              {SOCIAL_LINKS.map((link, i) => (
                <motion.a key={link.id} href={link.href} target="_blank" rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="social-card glass premium-hover"
                  style={{ '--card-accent': link.accent }}>
                  <div className="social-icon" style={{ color: link.accent, background: `color-mix(in srgb, ${link.accent} 12%, transparent)` }}>
                    {link.icon}
                  </div>
                  <div className="social-info">
                    <span className="social-label">{link.label}</span>
                    <span className="social-value">{link.value}</span>
                  </div>
                  <svg className="social-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="16" height="16">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </motion.a>
              ))}
            </div>

            {/* Status */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} className="availability-card glass">
              <div className="avail-status">
                <span className="status-dot live" style={{ width: '9px', height: '9px' }} />
                <strong>Available for new projects</strong>
              </div>
              <p>Based in Kanyakumari, Tamil Nadu, India — open to remote and on-site collaborations worldwide.</p>
            </motion.div>
          </div>

          {/* ── Right Column — Form ── */}
          <motion.div ref={formRef} onMouseMove={onMouseMove}
            onMouseLeave={() => { mx.set(0); my.set(0); }}
            style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 1500 }}
            initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} className="form-wrapper">

            <div className="contact-form-panel glass">
              {/* Panel Header */}
              <div className="form-panel-header">
                <div className="panel-dots"><span /><span /><span /></div>
                <span className="panel-title">Send a Message</span>
              </div>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div key="success" className="form-success"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <div className="success-check">
                      <svg viewBox="0 0 24 24" fill="none" stroke="var(--lime)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="40" height="40">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3>Message Sent!</h3>
                    <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
                    <button onClick={() => setStatus('idle')} className="btn btn-secondary form-reset-btn">
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                      <label className="form-label">Your Name</label>
                      <input type="text" required placeholder="Ajay M"
                        value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                        className="form-input input" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input type="email" required placeholder="you@company.com"
                        value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                        className="form-input input" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Message</label>
                      <textarea rows={5} required placeholder="Tell me about your project or opportunity..."
                        value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                        className="form-input form-textarea input" />
                    </div>
                    <motion.button type="submit" className="form-submit-btn"
                      disabled={status === 'sending'}
                      whileHover={status !== 'sending' ? { scale: 1.02, y: -2 } : {}}
                      whileTap={status !== 'sending' ? { scale: 0.98 } : {}}>
                      {status === 'sending' ? (
                        <>
                          <svg className="spin-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" width="18" height="18"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
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

      <style>{`
        .contact-section { padding: 120px 0; background: var(--bg); position: relative; overflow: hidden; }
        .contact-bg-orb {
          position: absolute; bottom: -5%; left: -10%;
          width: 700px; height: 700px; border-radius: 50%;
          background: radial-gradient(circle, rgba(124,58,237,0.08), transparent 70%);
          filter: blur(100px); pointer-events: none;
        }

        .contact-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 80px; align-items: start;
        }

        /* Left */
        .contact-intro .display-lg { margin: 16px 0 20px; }
        .contact-bio { font-size: 1.05rem; color: var(--text-2); line-height: 1.75; max-width: 460px; }

        /* Social Links */
        .social-links { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 40px 0; }
        .social-card {
          display: flex; align-items: center; gap: 16px;
          padding: 18px 22px; border-radius: 18px; text-decoration: none;
          border: 1px solid var(--border) !important; transition: all 0.3s;
        }
        .social-card:hover { border-color: var(--card-accent, var(--lime)) !important; transform: translateX(4px); }
        .social-icon {
          width: 44px; height: 44px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .social-info { flex: 1; min-width: 0; }
        .social-label { display: block; font-size: 0.68rem; font-weight: 700; color: var(--text-4); text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 2px; }
        .social-value { display: block; font-size: 0.92rem; font-weight: 700; color: var(--text-1); }
        .social-arrow  { color: var(--text-4); flex-shrink: 0; }

        /* Availability */
        .availability-card { padding: 20px 24px; border-radius: 18px; border: 1px solid var(--border) !important; }
        .avail-status { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
        .avail-status strong { font-size: 0.88rem; font-weight: 800; color: var(--text-1); }
        .availability-card p { font-size: 0.82rem; color: var(--text-3); line-height: 1.55; }

        /* Form */
        .form-wrapper { position: relative; }
        .contact-form-panel {
          border-radius: 28px; overflow: hidden;
          border: 1px solid var(--border) !important;
          box-shadow: 0 40px 80px rgba(0,0,0,0.3);
        }
        .form-panel-header {
          padding: 16px 24px; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: 12px;
        }
        .panel-dots { display: flex; gap: 7px; }
        .panel-dots span { width: 10px; height: 10px; border-radius: 50%; background: #ff5f57; }
        .panel-dots span:nth-child(2) { background: #febc2e; }
        .panel-dots span:nth-child(3) { background: #28c840; }
        .panel-title { font-size: 0.72rem; font-weight: 700; color: var(--text-4); letter-spacing: 0.1em; }

        .contact-form { padding: 36px; display: flex; flex-direction: column; gap: 22px; }
        .form-group   { display: flex; flex-direction: column; gap: 8px; }
        .form-label   { font-size: 0.78rem; font-weight: 700; color: var(--text-3); letter-spacing: 0.04em; }
        .form-input   { font-family: 'Inter', sans-serif; }
        .form-textarea { resize: vertical; min-height: 130px; }

        .form-submit-btn {
          padding: 18px 24px; border: none; border-radius: 14px;
          background: var(--lime); color: var(--btn-text);
          font-size: 0.95rem; font-weight: 800; cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 10px;
          transition: all 0.3s; letter-spacing: 0.02em;
          box-shadow: 0 8px 32px var(--lime-glow);
          font-family: 'Inter', sans-serif;
        }
        .form-submit-btn:disabled { opacity: 0.65; cursor: not-allowed; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .spin-icon { animation: spin 0.9s linear infinite; }

        /* Success */
        .form-success {
          padding: 60px 36px; text-align: center;
          display: flex; flex-direction: column; align-items: center; gap: 16px;
        }
        .success-check {
          width: 72px; height: 72px; border-radius: 50%;
          background: var(--lime-soft); border: 1px solid var(--border-lime);
          display: flex; align-items: center; justify-content: center;
        }
        .form-success h3 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.8rem; font-weight: 900; color: var(--text-1);
        }
        .form-success p  { font-size: 0.95rem; color: var(--text-2); max-width: 320px; line-height: 1.6; }
        .form-reset-btn  { margin-top: 8px; }

        /* Responsive */
        @media (max-width: 1100px) {
          .contact-grid { grid-template-columns: 1fr; gap: 60px; }
          .contact-bio  { max-width: 100%; }
        }
        @media (max-width: 768px) {
          .contact-section { padding: 80px 0; }
          .contact-form     { padding: 24px; }
          .social-card      { padding: 14px 18px; }
          .form-wrapper     { transform: none !important; } /* Disable 3D tilt on mobile */
        }
        @media (max-width: 480px) {
          .contact-section  { padding: 60px 0; }
          .social-links     { grid-template-columns: 1fr; gap: 12px; margin: 30px 0; }
          .social-card      { padding: 14px 16px; gap: 12px; }
          .social-icon      { width: 40px; height: 40px; }
          .social-value     { font-size: 0.85rem; }
          .contact-intro .display-lg { font-size: 2.4rem; }
          .availability-card { padding: 16px; }
          .contact-form     { padding: 20px; gap: 16px; }
          .form-submit-btn  { padding: 14px 20px; font-size: 0.9rem; }
        }
      `}</style>
    </section>
  );
}
