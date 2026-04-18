/**
 * Contact Section — 2026 Premium Design
 * Left: big CTA text + contact link cards
 * Right: frosted glass contact form
 */
import { useState } from 'react';
import { motion } from 'framer-motion';

const contactLinks = [
  {
    id: 'email',
    icon: '✉️',
    label: 'Email',
    value: 'ajaymari74@gmail.com',
    sub: 'Usually reply within 24 hours',
    href: 'mailto:ajaymari74@gmail.com',
  },
  {
    id: 'linkedin',
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/ajay-m-100628331',
    sub: "Let's connect professionally",
    href: 'https://www.linkedin.com/in/ajay-m-100628331/',
  },
  {
    id: 'whatsapp',
    icon: '📱',
    label: 'WhatsApp',
    value: '+91 9487434031',
    sub: 'Quick chat — available daily',
    href: 'https://wa.me/919487434031?text=Hi%20Ajay,%20I%20saw%20your%20portfolio!',
  },
  {
    id: 'location',
    icon: '📍',
    label: 'Location',
    value: 'Kanyakumari, Tamil Nadu',
    sub: 'Open to Remote & Relocation',
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); setForm({ name: '', email: '', subject: '', message: '' }); }, 1800);
  };

  return (
    <section id="contact" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Aurora orbs */}
      <div style={{ position: 'absolute', bottom: '-100px', right: '-100px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(204,255,0,0.05) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '20%', left: '-100px', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none' }} />

      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '56px' }}
        >
          <p className="label-sm" style={{ marginBottom: '12px' }}>Get in touch</p>
          <h2 className="display-lg">
            Let's build something{' '}
            <span className="gradient-text">great together.</span>
          </h2>
          <p className="body-lg" style={{ marginTop: '12px', maxWidth: '520px' }}>
            I'm open to new projects, collaborations, and opportunities. Whether it's a startup MVP
            or an enterprise system — let's talk.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '20px', alignItems: 'start' }}>
          {/* LEFT — Contact links */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            {contactLinks.map((link, i) => {
              const inner = (
                <>
                  {/* Icon */}
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '13px', flexShrink: 0,
                    background: 'rgba(204,255,0,0.08)', border: '1px solid rgba(204,255,0,0.14)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem',
                  }}>
                    {link.icon}
                  </div>
                  {/* Text */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: '0.66rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-4)', marginBottom: '3px' }}>
                      {link.label}
                    </p>
                    <p style={{ fontSize: '0.84rem', fontWeight: 600, color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {link.value}
                    </p>
                    <p style={{ fontSize: '0.72rem', color: 'var(--text-3)', marginTop: '2px' }}>{link.sub}</p>
                  </div>
                </>
              );

              return (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.55 }}
                >
                  {link.href ? (
                    <motion.a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      {inner}
                    </motion.a>
                  ) : (
                    <div className="contact-link" style={{ cursor: 'default' }}>{inner}</div>
                  )}
                </motion.div>
              );
            })}

            {/* Availability chip */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              style={{ padding: '16px 20px', borderRadius: 'var(--r-lg)', background: 'rgba(204,255,0,0.05)', border: '1px solid rgba(204,255,0,0.18)', display: 'flex', alignItems: 'center', gap: '12px' }}
            >
              <div className="pulse-dot" />
              <div>
                <p style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--lime)' }}>Available for Work</p>
                <p style={{ fontSize: '0.72rem', color: 'var(--text-3)', marginTop: '2px' }}>Open to freelance, remote & full-time opportunities</p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass"
            style={{ padding: '36px' }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '48px 0' }}
              >
                <div style={{ fontSize: '3.5rem', marginBottom: '16px' }}>🎉</div>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
                  Message Sent!
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-2)', marginBottom: '28px', maxWidth: '280px', margin: '0 auto 28px' }}>
                  Thanks for reaching out — I'll get back to you within 24 hours.
                </p>
                <button onClick={() => setSent(false)} className="btn btn-primary">
                  Send Another →
                </button>
              </motion.div>
            ) : (
              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>
                  Send a message
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div>
                    <label className="input-label" htmlFor="c-name">Your Name *</label>
                    <input id="c-name" type="text" name="name" value={form.name} onChange={handle} required placeholder="John Doe" className="input" />
                  </div>
                  <div>
                    <label className="input-label" htmlFor="c-email">Email Address *</label>
                    <input id="c-email" type="email" name="email" value={form.email} onChange={handle} required placeholder="you@example.com" className="input" />
                  </div>
                </div>

                <div>
                  <label className="input-label" htmlFor="c-subject">Subject *</label>
                  <input id="c-subject" type="text" name="subject" value={form.subject} onChange={handle} required placeholder="Project collaboration, freelance work..." className="input" />
                </div>

                <div>
                  <label className="input-label" htmlFor="c-message">Message *</label>
                  <textarea
                    id="c-message" name="message" value={form.message} onChange={handle}
                    required rows={5} placeholder="Tell me about your project, timeline, and goals..."
                    className="input" style={{ resize: 'none', lineHeight: '1.6' }}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', opacity: sending ? 0.75 : 1, cursor: sending ? 'not-allowed' : 'pointer', borderRadius: 'var(--r-md)' }}
                >
                  {sending ? (
                    <>
                      <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>
                        ⏳
                      </motion.span>
                      Sending...
                    </>
                  ) : 'Send Message →'}
                </motion.button>

                <p style={{ fontSize: '0.72rem', textAlign: 'center', color: 'var(--text-4)' }}>
                  I typically respond within 24 hours. Your information is never shared.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact .container > div:last-child { grid-template-columns: 1fr !important; }
          #contact .container > div:last-child > div:last-child { padding: 24px !important; }
        }
      `}</style>
    </section>
  );
}
