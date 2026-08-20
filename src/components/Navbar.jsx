/**
 * Navbar.jsx — 2026 Ultra-Modern Glass Pill Navigation & UX Overhaul
 * Sleek Typography Branding, Live Availability Pill, Spring Active Tabs,
 * Smooth Theme Switcher & Full Mobile Glass Sheet Drawer
 */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionTemplate } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Home', href: '#hero', icon: '🏠' },
  { label: 'About', href: '#about', icon: '👤' },
  { label: 'Skills', href: '#skills', icon: '⚡' },
  { label: 'Projects', href: '#projects', icon: '🚀' },
  { label: 'Experience', href: '#experience', icon: '💼' },
  { label: 'Contact', href: '#contact', icon: '📬' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#hero');
  const { scrollY } = useScroll();

  const navWidth = useTransform(scrollY, [0, 140], ['100%', 'calc(100% - 32px)']);
  const navMaxWidth = useTransform(scrollY, [0, 140], ['1320px', '1100px']);
  const navY = useTransform(scrollY, [0, 140], ['0px', '14px']);
  const navPadding = useTransform(scrollY, [0, 140], ['18px 32px', '10px 20px']);
  const navRadius = useTransform(scrollY, [0, 140], ['0px', '100px']);

  const blurValue = useTransform(scrollY, [0, 60], [0, 24]);
  const backdropFilter = useMotionTemplate`blur(${blurValue}px)`;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveLink('#' + e.target.id);
        });
      },
      { rootMargin: '-30% 0px -40% 0px' }
    );

    document.querySelectorAll('section[id]').forEach(s => observer.observe(s));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navigate = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        className="navbar-root"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={`nav-ambient-glow ${scrolled ? 'visible' : ''}`} />

        <motion.div
          className={`nav-container ${scrolled ? 'glass-active' : ''}`}
          style={{
            width: navWidth,
            maxWidth: navMaxWidth,
            y: navY,
            padding: navPadding,
            borderRadius: navRadius,
            backdropFilter
          }}
        >
          {/* Brand Logo & Availability Pill */}
          <div className="nav-left">
            <a href="#hero" onClick={(e) => navigate(e, '#hero')} className="nav-logo">
              <div className="nav-logo-text-group">
                <span className="logo-accent">Ajay</span>
                <span className="logo-text">.M</span>
              </div>
              <div className="nav-hire-badge hide-mobile-sm">
                <span className="status-dot" />
                <span className="hire-text">Available</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="nav-links">
            {NAV_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => navigate(e, link.href)}
                className={`nav-item ${activeLink === link.href ? 'active' : ''}`}
              >
                <span className="nav-item-text">{link.label}</span>
                {activeLink === link.href && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="nav-indicator"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="nav-actions">
            {/* Dynamic Dark / Light Theme Toggle */}
            <motion.button
              className="nav-btn theme-toggle"
              onClick={toggleTheme}
              whileTap={{ scale: 0.88, rotate: 45 }}
              whileHover={{ scale: 1.08 }}
              aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
              <span className="theme-icon-wrap">
                {theme === 'dark' ? (
                  // Sun icon for switching to light mode
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="19" height="19">
                    <circle cx="12" cy="12" r="5" fill="var(--cyan-soft)" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                ) : (
                  // Moon icon for switching to dark mode
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="19" height="19">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="var(--cyan-soft)" />
                  </svg>
                )}
              </span>
            </motion.button>

            {/* Resume Button */}
            <motion.a
              href="/assets/Ajay%20M-Junior%20Software%20Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary nav-resume-btn hide-tablet"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              <span>Resume</span>
            </motion.a>

            {/* Let's Talk CTA */}
            <motion.a
              href="#contact"
              onClick={(e) => navigate(e, '#contact')}
              className="btn btn-primary nav-cta-btn hide-tablet"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Let's Talk</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>

            {/* Mobile Hamburger Toggle */}
            <button
              className={`hamburger ${menuOpen ? 'active' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label="Toggle Navigation Menu"
            >
              <div className="hamburger-box">
                <span className="line line-top" />
                <span className="line line-mid" />
                <span className="line line-bot" />
              </div>
            </button>
          </div>
        </motion.div>

        {/* Mobile Modern Overlay Drawer */}
        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.div
                className="mobile-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => setMenuOpen(false)}
              />
              <motion.div
                className="mobile-drawer"
                initial={{ opacity: 0, y: -20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="mobile-drawer-header">
                  <div className="nav-logo">
                    <span className="logo-accent">Ajay</span>
                    <span className="logo-text">.M</span>
                  </div>
                  <span className="mobile-drawer-subtitle">Software Developer</span>
                </div>

                <nav className="mobile-nav-list">
                  {NAV_LINKS.map((link, idx) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => navigate(e, link.href)}
                      className={`mobile-link ${activeLink === link.href ? 'active' : ''}`}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04 + 0.05, duration: 0.25 }}
                    >
                      <span className="mobile-link-icon">{link.icon}</span>
                      <span className="mobile-link-text">{link.label}</span>
                      {activeLink === link.href && <span className="mobile-active-dot" />}
                    </motion.a>
                  ))}
                </nav>

                <div className="mobile-footer-actions">
                  <button
                    className="mobile-action-btn theme-action"
                    onClick={toggleTheme}
                  >
                    <span>🎨 {theme === 'dark' ? 'Light Theme' : 'Dark Theme'}</span>
                    <span className="theme-emoji">{theme === 'dark' ? '☀️' : '🌙'}</span>
                  </button>

                  <div className="mobile-cta-group">
                    <a
                      href="/assets/Ajay%20M-Junior%20Software%20Developer.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary w-full mobile-cta"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                      </svg>
                      <span>Resume PDF</span>
                    </a>

                    <a
                      href="#contact"
                      onClick={(e) => navigate(e, '#contact')}
                      className="btn btn-primary w-full mobile-cta"
                    >
                      <span>Let's Talk</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>

      <style>{`
        .navbar-root {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: center;
          z-index: 9000;
          pointer-events: none;
          padding-top: 12px;
        }

        .nav-ambient-glow {
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 80px;
          background: radial-gradient(ellipse at center, var(--cyan-glow) 0%, transparent 70%);
          filter: blur(40px);
          opacity: 0;
          transition: opacity 0.6s ease;
          pointer-events: none;
        }
        .nav-ambient-glow.visible { opacity: 0.85; }
        [data-theme='light'] .nav-ambient-glow { opacity: 0.35; }

        .nav-container {
          pointer-events: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 1px solid transparent;
          transition: background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
          margin: 0 auto;
          position: relative;
          z-index: 9001;
        }

        .glass-active {
          background: var(--glass-bg);
          border-color: var(--border-cyan);
          box-shadow: 0 16px 45px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .nav-left { flex: 1; display: flex; align-items: center; justify-content: flex-start; gap: 12px; }
        .nav-links { flex: none; display: flex; gap: 4px; position: relative; }
        .nav-actions { flex: 1; display: flex; justify-content: flex-end; align-items: center; gap: 10px; }

        /* Sleek Text Logo & Status Pill */
        .nav-logo {
          font-family: 'Outfit', sans-serif;
          font-size: 1.5rem;
          font-weight: 900;
          text-decoration: none;
          display: flex;
          align-items: center;
          letter-spacing: -0.04em;
          gap: 10px;
        }
        .nav-logo-text-group {
          display: flex;
          align-items: baseline;
        }
        .logo-accent { color: var(--cyan); text-shadow: 0 0 18px var(--cyan-glow); }
        .logo-text { color: var(--text-1); }

        .nav-hire-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          border-radius: 100px;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.25);
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--emerald);
          letter-spacing: 0.02em;
        }
        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--emerald);
          box-shadow: 0 0 10px var(--emerald);
          animation: pulse-glow 2s infinite;
        }

        /* Nav Links */
        .nav-item {
          position: relative;
          padding: 8px 18px;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-3);
          text-decoration: none;
          border-radius: 100px;
          transition: color 0.25s ease;
          z-index: 1;
        }
        .nav-item:hover { color: var(--text-1); }
        .nav-item.active { color: #ffffff; font-weight: 700; }
        [data-theme='light'] .nav-item.active { color: #ffffff; }

        .nav-indicator {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--cyan) 0%, #2563eb 100%);
          border-radius: 100px;
          z-index: -1;
          box-shadow: 0 4px 16px var(--cyan-glow);
        }

        /* Nav Action Buttons */
        .nav-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid var(--border);
          background: var(--surface-2);
          color: var(--text-2);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
        }
        .nav-btn:hover {
          border-color: var(--cyan);
          color: var(--cyan);
          background: var(--surface-3);
          box-shadow: 0 0 15px var(--cyan-glow);
        }
        .theme-icon-wrap { display: flex; width: 19px; height: 19px; align-items: center; justify-content: center; }

        .nav-resume-btn {
          padding: 8px 16px !important;
          border-radius: 100px !important;
          font-size: 0.84rem !important;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .nav-cta-btn {
          padding: 8px 18px !important;
          border-radius: 100px !important;
          font-size: 0.84rem !important;
          font-weight: 800 !important;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        /* Modern Hamburger Toggle */
        .hamburger {
          display: none;
          padding: 8px;
          cursor: pointer;
          border: 1px solid var(--border);
          background: var(--surface-2);
          border-radius: 12px;
          transition: all 0.25s ease;
        }
        .hamburger:hover {
          border-color: var(--cyan);
          background: var(--surface-3);
        }
        .hamburger-box { width: 20px; height: 14px; position: relative; display: flex; flex-direction: column; justify-content: space-between; }
        .line {
          display: block;
          width: 100%;
          height: 2px;
          background: var(--text-1);
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .hamburger.active .line-top { transform: translateY(6px) rotate(45deg); }
        .hamburger.active .line-mid { opacity: 0; }
        .hamburger.active .line-bot { transform: translateY(-6px) rotate(-45deg); }

        /* Mobile Drawer & Backdrop */
        .mobile-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.65);
          backdrop-filter: blur(8px);
          z-index: 8999;
          pointer-events: auto;
        }

        .mobile-drawer {
          position: fixed;
          top: 76px;
          left: 16px;
          right: 16px;
          max-width: 480px;
          margin: 0 auto;
          padding: 22px;
          border-radius: 24px;
          background: var(--surface-1);
          border: 1px solid var(--border-cyan);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.5), 0 0 30px var(--cyan-glow);
          z-index: 9000;
          pointer-events: auto;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .mobile-drawer-header {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border);
        }
        .mobile-drawer-subtitle {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--cyan);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .mobile-nav-list { display: flex; flex-direction: column; gap: 6px; }
        .mobile-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 14px;
          font-size: 0.98rem;
          font-weight: 600;
          color: var(--text-2);
          text-decoration: none;
          background: var(--surface-2);
          border: 1px solid transparent;
          transition: all 0.2s ease;
        }
        .mobile-link-icon { font-size: 1.1rem; }
        .mobile-link-text { flex: 1; }
        .mobile-active-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--cyan);
          box-shadow: 0 0 10px var(--cyan);
        }
        .mobile-link:hover, .mobile-link.active {
          background: var(--surface-3);
          border-color: var(--border-cyan);
          color: var(--text-1);
        }
        .mobile-link.active {
          font-weight: 700;
          color: var(--cyan);
        }

        .mobile-footer-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding-top: 14px;
          border-top: 1px solid var(--border);
        }

        .mobile-action-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          border-radius: 14px;
          background: var(--surface-2);
          border: 1px solid var(--border);
          color: var(--text-1);
          font-size: 0.88rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .mobile-action-btn:hover {
          border-color: var(--cyan);
          background: var(--surface-3);
        }

        .mobile-cta-group {
          display: flex;
          gap: 10px;
        }
        .mobile-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px !important;
          border-radius: 14px !important;
          font-size: 0.88rem !important;
          font-weight: 700 !important;
        }

        .w-full { width: 100%; }

        @media (max-width: 980px) {
          .nav-links, .hide-tablet { display: none; }
          .hamburger { display: flex; }
          .nav-left { flex: 1; }
        }

        @media (max-width: 480px) {
          .hide-mobile-sm { display: none !important; }
          .navbar-root { padding-top: 8px; }
          .mobile-drawer { top: 68px; left: 12px; right: 12px; padding: 16px; }
          .mobile-cta-group { flex-direction: column; }
        }
      `}</style>
    </>
  );
}