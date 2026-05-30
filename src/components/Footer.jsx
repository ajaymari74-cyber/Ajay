/**
 * Footer — 2026 Professional Portfolio
 * Clean layout · Official SVG social icons · Kinetic headline
 */
import { motion } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const SOCIAL = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ajay-m-100628331/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ajaymari74-cyber',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:ajaymari74@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/919487434031',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer-root">
      <div className="footer-glow" />
      <div className="container">

        {/* ── Hero Headline ── */}
        <motion.div className="footer-headline-wrap"
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          <h2 className="footer-headline">
            Ready to <span className="footer-headline-outline">Collaborate?</span>
          </h2>
        </motion.div>

        {/* ── Divider ── */}
        <div className="footer-rule" />

        {/* ── Footer Grid ── */}
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <span className="logo-accent">Ajay</span>
              <span className="logo-rest"> M</span>
            </div>
            <p className="footer-tagline">
              Engineering high-performance digital ecosystems with precision and craftsmanship.
            </p>
            <div className="footer-availability">
              <span className="avail-dot-sm" />
              Available for freelance & full-time roles
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-nav-col">
            <h4 className="footer-col-head">Navigation</h4>
            <nav className="footer-nav">
              {NAV_LINKS.map(l => (
                <a key={l.label} href={l.href} onClick={e => scrollTo(e, l.href)} className="footer-link">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="footer-contact-col">
            <h4 className="footer-col-head">Contact</h4>
            <div className="footer-contact-info">
              <div className="contact-row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" style={{ color: 'var(--text-4)', flexShrink: 0 }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:ajaymari74@gmail.com" className="footer-contact-link">ajaymari74@gmail.com</a>
              </div>
              <div className="contact-row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" style={{ color: 'var(--text-4)', flexShrink: 0 }}>
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span className="footer-contact-text">Kanyakumari, Tamil Nadu, India</span>
              </div>
              <div className="contact-row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" style={{ color: 'var(--text-4)', flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="footer-contact-text">Response within 24 hours</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="footer-socials">
              {SOCIAL.map(s => (
                <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  aria-label={s.label} className="footer-social-btn glass"
                  whileHover={{ y: -4, scale: 1.1 }} whileTap={{ scale: 0.92 }}>
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 Ajay M | All rights reserved.
          </p>
          <div className="footer-tech-credit">
            <span>Built with</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="#EA4335" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
            <span>in India using React & Framer Motion</span>
          </div>
        </div>

      </div>

      <style>{`
        .footer-root {
          position: relative; overflow: hidden;
          background: var(--bg); border-top: 1px solid var(--border);
          padding: 100px 0 48px;
        }
        .footer-glow {
          position: absolute; bottom: 0; left: 50%; transform: translateX(-50%);
          width: 80%; height: 360px;
          background: radial-gradient(ellipse at 50% 100%, var(--lime-soft) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Hero Headline */
        .footer-headline-wrap {
          display: flex; justify-content: space-between; align-items: center;
          margin-bottom: 80px; gap: 40px; flex-wrap: wrap;
        }
        .footer-headline {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(3rem, 7vw, 7.5rem);
          font-weight: 900; line-height: 1.1;
          letter-spacing: -0.05em; color: var(--text-1);
          word-break: break-word;
        }
        .footer-headline-outline {
          color: transparent;
          -webkit-text-stroke: 1.5px var(--text-4);
          transition: all 0.4s;
        }
        .footer-headline:hover .footer-headline-outline {
          color: var(--lime);
          -webkit-text-stroke: 1px var(--lime);
          text-shadow: 0 0 50px var(--lime-glow);
        }
        [data-theme='light'] .footer-headline-outline {
          -webkit-text-stroke: 1.5px var(--text-3);
        }
        .footer-cta-btn {
          display: inline-flex; align-items: center; gap: 12px;
          padding: 18px 36px; background: var(--lime); color: var(--btn-text);
          font-weight: 800; font-size: 1rem; border-radius: 14px;
          text-decoration: none; white-space: nowrap;
          box-shadow: 0 8px 32px var(--lime-glow); transition: all 0.3s;
        }

        /* Rule */
        .footer-rule { height: 1px; background: linear-gradient(90deg, transparent, var(--border-2), transparent); margin-bottom: 64px; }

        /* Grid */
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 0.8fr 1.2fr;
          gap: 60px; margin-bottom: 64px;
        }

        /* Brand */
        .footer-logo {
          font-family: 'Outfit', sans-serif;
          font-size: 2rem; font-weight: 900;
          letter-spacing: -0.04em; margin-bottom: 16px;
        }
        .logo-accent { color: var(--lime); }
        .logo-rest   { color: var(--text-1); }
        .footer-tagline {
          font-size: 0.92rem; color: var(--text-3);
          line-height: 1.65; max-width: 300px; margin-bottom: 20px;
        }
        .footer-availability {
          display: flex; align-items: center; gap: 9px;
          font-size: 0.78rem; font-weight: 700; color: var(--text-3);
        }
        .avail-dot-sm {
          width: 7px; height: 7px; border-radius: 50%;
          background: #22c55e; box-shadow: 0 0 8px #22c55e;
          animation: pulse-glow 2s infinite; flex-shrink: 0;
        }

        /* Nav Col */
        .footer-col-head {
          font-size: 0.68rem; font-weight: 800; color: var(--text-4);
          text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 24px;
        }
        .footer-nav { display: flex; flex-direction: column; gap: 12px; }
        .footer-link {
          font-size: 0.92rem; font-weight: 600;
          color: var(--text-2); text-decoration: none; transition: all 0.25s;
          display: flex; align-items: center; gap: 8px;
        }
        .footer-link:hover { color: var(--lime); transform: translateX(4px); }

        /* Contact Col */
        .footer-contact-info { display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px; }
        .contact-row { display: flex; align-items: center; gap: 10px; }
        .footer-contact-link {
          font-size: 0.88rem; font-weight: 700; color: var(--lime);
          text-decoration: none; transition: 0.25s;
        }
        .footer-contact-link:hover { opacity: 0.8; }
        .footer-contact-text { font-size: 0.85rem; color: var(--text-3); font-weight: 600; }

        /* Socials */
        .footer-socials { display: flex; gap: 10px; }
        .footer-social-btn {
          width: 40px; height: 40px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          color: var(--text-3); border: 1px solid var(--border) !important;
          transition: all 0.3s; text-decoration: none;
        }
        .footer-social-btn:hover { color: var(--lime); border-color: var(--border-lime) !important; }

        /* Bottom */
        .footer-bottom {
          display: flex; justify-content: space-between; align-items: center;
          padding-top: 28px; border-top: 1px solid var(--border); flex-wrap: wrap; gap: 16px;
        }
        .footer-copyright { font-size: 0.8rem; color: var(--text-4); font-weight: 700; }
        .footer-tech-credit {
          display: flex; align-items: center; gap: 6px;
          font-size: 0.8rem; color: var(--text-4); font-weight: 600;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
          .footer-brand-col { grid-column: span 2; }
        }
        @media (max-width: 768px) {
          .footer-root { padding: 80px 0 40px; }
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
          .footer-brand-col { grid-column: span 2; }
          .footer-headline-wrap { flex-direction: column; align-items: center; margin-bottom: 56px; }
          .footer-headline { font-size: clamp(2.4rem, 10vw, 4rem); text-align: center; }
          .footer-bottom { flex-direction: column; align-items: center; gap: 12px; text-align: center; }
        }
        @media (max-width: 480px) {
          .footer-grid { gap: 20px; }
          .footer-contact-link { font-size: 0.75rem; word-break: break-word; }
          .footer-contact-text { font-size: 0.75rem; }
          .footer-link { font-size: 0.85rem; }
          .contact-row { align-items: flex-start; gap: 6px; }
          .contact-row svg { margin-top: 3px; }
        }
      `}</style>
    </footer>
  );
}
