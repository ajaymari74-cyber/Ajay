/**
 * Footer.jsx — 2026 Cinematic Executive Footer
 * Kinetic Headline, Social Vector Links, Quick Sitemap, Smooth Scroll-to-Top
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
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ajaymari74-cyber',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/919487434031',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:ajaymari74@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="18" height="18">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-root">
      <div className="footer-glow" />
      <div className="container">

        {/* Kinetic Hero Headline */}
        <motion.div
          className="footer-hero-headline-wrap"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="footer-headline">
            Ready to <span className="footer-headline-outline">Collaborate?</span>
          </h2>
          <motion.a
            href="#contact"
            onClick={e => scrollTo(e, '#contact')}
            className="btn btn-primary footer-cta-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Initiate Contact</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div>

        <div className="footer-rule" />

        {/* 3-Column Footer Grid */}
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <span className="logo-accent">Ajay</span>
              <span className="logo-rest"> M</span>
              <span className="logo-dot" />
            </div>
            <p className="footer-tagline">
              Junior Software Developer & Java Full Stack Engineer. Architecting resilient web and cross-platform mobile systems.
            </p>
            <div className="footer-status-pill">
              <span className="status-dot live" />
              <span>Available for Full-Time Junior Software Developer Roles</span>
            </div>
          </div>

          {/* Quick Navigation Col */}
          <div className="footer-nav-col">
            <h4 className="footer-col-head">Navigation</h4>
            <nav className="footer-nav">
              {NAV_LINKS.map(l => (
                <a key={l.label} href={l.href} onClick={e => scrollTo(e, l.href)} className="footer-link">
                  <span>{l.label}</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & Socials Col */}
          <div className="footer-contact-col">
            <h4 className="footer-col-head">Connect Directly</h4>
            <div className="footer-contact-list">
              <a href="mailto:ajaymari74@gmail.com" className="footer-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>ajaymari74@gmail.com</span>
              </a>

              <a href="https://wa.me/919487434031" target="_blank" rel="noopener noreferrer" className="footer-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+91 94874 34031</span>
              </a>

              <div className="footer-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Tenkasi, Tamil Nadu, India</span>
              </div>
            </div>

            <div className="footer-socials-row">
              {SOCIAL.map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="footer-social-btn glass"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.92 }}
                >
                  {s.icon}
                </motion.a>
              ))}

              <motion.button
                onClick={scrollToTop}
                className="footer-top-btn glass"
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                title="Scroll to top"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="18 15 12 9 6 15" />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {year} Ajay M · Tenkasi, Tamil Nadu. All rights reserved.
          </p>
          <div className="footer-meta">
            <span>Portfolio: <a href="https://ajay-eta.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--cyan)', textDecoration: 'none' }}>ajay-eta.vercel.app</a></span>
          </div>
        </div>

      </div>

      <style>{`
        .footer-root {
          position: relative;
          overflow: hidden;
          background: var(--bg);
          border-top: 1px solid var(--border);
          padding: 100px 0 40px;
        }

        .footer-glow {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
          height: 300px;
          background: radial-gradient(ellipse at 50% 100%, var(--cyan-glow) 0%, transparent 70%);
          pointer-events: none;
          opacity: 0.5;
        }

        .footer-hero-headline-wrap {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 60px;
          gap: 30px;
          flex-wrap: wrap;
        }
        .footer-headline {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2.5rem, 6.5vw, 5.8rem);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.04em;
          color: var(--text-1);
        }
        .footer-headline-outline {
          color: transparent;
          -webkit-text-stroke: 1.5px var(--text-3);
          transition: all 0.3s;
        }
        .footer-headline:hover .footer-headline-outline {
          color: var(--cyan);
          -webkit-text-stroke: 1px var(--cyan);
          text-shadow: 0 0 40px var(--cyan-glow);
        }

        .footer-cta-btn {
          padding: 16px 32px !important;
          border-radius: 14px !important;
          font-size: 0.95rem !important;
        }

        .footer-rule {
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--border-2), transparent);
          margin-bottom: 50px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 0.8fr 1.2fr;
          gap: 50px;
          margin-bottom: 60px;
        }

        .footer-logo {
          font-family: 'Outfit', sans-serif;
          font-size: 1.8rem;
          font-weight: 900;
          letter-spacing: -0.04em;
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .logo-accent { color: var(--cyan); }
        .logo-rest { color: var(--text-1); }
        .logo-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--emerald);
          margin-left: 4px;
        }

        .footer-tagline {
          font-size: 0.92rem;
          color: var(--text-3);
          line-height: 1.65;
          max-width: 340px;
          margin-bottom: 18px;
        }

        .footer-status-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.76rem;
          font-weight: 700;
          color: var(--text-3);
        }

        .footer-col-head {
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--cyan);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 20px;
        }

        .footer-nav {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-link {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-2);
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 140px;
          transition: all 0.2s;
        }
        .footer-link:hover {
          color: var(--cyan);
          transform: translateX(4px);
        }

        .footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 20px;
        }
        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.88rem;
          color: var(--text-2);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-contact-item:hover {
          color: var(--cyan);
        }

        .footer-socials-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .footer-social-btn, .footer-top-btn {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-2);
          border: 1px solid var(--border) !important;
          background: var(--surface-2) !important;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.2s;
        }
        .footer-social-btn:hover, .footer-top-btn:hover {
          color: var(--cyan);
          border-color: var(--border-cyan) !important;
        }

        .footer-bottom-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 24px;
          border-top: 1px solid var(--border);
          flex-wrap: wrap;
          gap: 14px;
        }
        .footer-copyright {
          font-size: 0.8rem;
          color: var(--text-4);
          font-weight: 600;
        }
        .footer-meta {
          font-size: 0.78rem;
          color: var(--text-4);
          font-weight: 500;
        }

        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 36px; }
          .footer-brand-col { grid-column: span 2; }
          .footer-hero-headline-wrap { flex-direction: column; align-items: flex-start; }
        }

        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr; }
          .footer-brand-col { grid-column: span 1; }
          .footer-bottom-bar { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </footer>
  );
}
