/**
 * Navbar.jsx — 2026 Premium Floating Glass Navigation
 * Sleek Typography Branding, Command Palette Launcher (Ctrl+K), Responsive Active Indicators
 */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionTemplate } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, toggleTheme, onOpenCommandPalette }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#hero');
  const { scrollY } = useScroll();

  const navWidth = useTransform(scrollY, [0, 140], ['100%', 'calc(100% - 48px)']);
  const navMaxWidth = useTransform(scrollY, [0, 140], ['1360px', '1080px']);
  const navY = useTransform(scrollY, [0, 140], ['0px', '16px']);
  const navPadding = useTransform(scrollY, [0, 140], ['20px 36px', '12px 24px']);
  const navRadius = useTransform(scrollY, [0, 140], ['0px', '100px']);

  const blurValue = useTransform(scrollY, [0, 60], [0, 24]);
  const backdropFilter = useMotionTemplate`blur(${blurValue}px)`;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
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
          {/* Sleek Typography Logo without image */}
          <div className="nav-left">
            <a href="#hero" onClick={(e) => navigate(e, '#hero')} className="nav-logo">
              <div className="nav-logo-text-group">
                <span className="logo-accent">Ajay</span>
                <span className="logo-text">.M</span>
              </div>
              <span className="logo-status-dot" />
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
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="nav-actions">
            {/* Quick Command Launcher (Ctrl+K) */}
            <motion.button
              className="nav-cmd-btn"
              onClick={onOpenCommandPalette}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Open Command Palette"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <span className="cmd-label">Search</span>
              <kbd className="cmd-shortcut">Ctrl K</kbd>
            </motion.button>

            {/* Dynamic Dark / Light Theme Toggle */}
            <motion.button
              className="nav-btn theme-toggle"
              onClick={toggleTheme}
              whileTap={{ scale: 0.88 }}
              whileHover={{ scale: 1.08 }}
              aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
              <span className="theme-icon-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {theme === 'dark' ? (
                  // Sun icon for switching to light mode
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
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
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="var(--cyan-soft)" />
                  </svg>
                )}
              </span>
            </motion.button>

            {/* Resume / CTA */}
            <motion.a
              href="/assets/Ajay%20M-Junior%20Software%20Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary nav-resume-btn hide-tablet"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              <span>Resume</span>
            </motion.a>

            <motion.a
              href="#contact"
              onClick={(e) => navigate(e, '#contact')}
              className="btn btn-primary nav-cta-btn hide-tablet"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <span>Let's Talk</span>
            </motion.a>

            {/* Mobile Hamburger */}
            <button
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label="Toggle Menu"
            >
              <div className="hamburger-box">
                <div className={`hamburger-inner ${menuOpen ? 'active' : ''}`} />
              </div>
            </button>
          </div>
        </motion.div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <>
              <div className="mobile-backdrop" onClick={() => setMenuOpen(false)} />
              <motion.div
                className="mobile-dropdown glass"
                initial={{ opacity: 0, scale: 0.92, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: -10 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <nav className="mobile-nav-list">
                  {NAV_LINKS.map(link => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => navigate(e, link.href)}
                      className={`mobile-link ${activeLink === link.href ? 'active' : ''}`}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>

                <div className="mobile-footer-actions">
                  <button
                    className="mobile-cmd-launch"
                    onClick={() => {
                      toggleTheme();
                    }}
                    style={{ justifyContent: 'space-between' }}
                  >
                    <span>🎨 {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</span>
                    <span>{theme === 'dark' ? '☀️' : '🌙'}</span>
                  </button>

                  <button
                    className="mobile-cmd-launch"
                    onClick={() => {
                      setMenuOpen(false);
                      onOpenCommandPalette();
                    }}
                  >
                    <span>⚡ Quick Search (Ctrl+K)</span>
                  </button>

                  <a
                    href="/assets/Ajay%20M-Junior%20Software%20Developer.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary w-full"
                    style={{ textAlign: 'center', justifyContent: 'center' }}
                  >
                    <span>Download Resume (PDF)</span>
                  </a>

                  <a
                    href="#contact"
                    onClick={(e) => navigate(e, '#contact')}
                    className="btn btn-primary w-full"
                  >
                    <span>Get in Touch</span>
                  </a>
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
          padding-top: 14px;
        }

        .nav-ambient-glow {
          position: absolute;
          top: -40px;
          left: 50%;
          transform: translateX(-50%);
          width: 50%;
          height: 90px;
          background: radial-gradient(ellipse at center, var(--cyan-glow) 0%, transparent 70%);
          filter: blur(35px);
          opacity: 0;
          transition: opacity 0.6s ease;
          pointer-events: none;
        }
        .nav-ambient-glow.visible { opacity: 0.8; }
        [data-theme='light'] .nav-ambient-glow { opacity: 0.3; }

        .nav-container {
          pointer-events: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 1px solid transparent;
          transition: background 0.35s, border-color 0.35s, box-shadow 0.35s;
          margin: 0 auto;
          position: relative;
          z-index: 9001;
        }

        .glass-active {
          background: var(--glass-bg);
          border-color: var(--border);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        .nav-left { flex: 1; display: flex; justify-content: flex-start; }
        .nav-links { flex: none; display: flex; gap: 4px; position: relative; }
        .nav-actions { flex: 1; display: flex; justify-content: flex-end; align-items: center; gap: 10px; }

        /* Sleek Text Logo */
        .nav-logo {
          font-family: 'Outfit', sans-serif;
          font-size: 1.55rem;
          font-weight: 900;
          text-decoration: none;
          display: flex;
          align-items: center;
          letter-spacing: -0.04em;
          gap: 6px;
        }
        .nav-logo-text-group {
          display: flex;
          align-items: baseline;
        }
        .logo-accent { color: var(--cyan); text-shadow: 0 0 20px var(--cyan-glow); }
        .logo-text { color: var(--text-1); }
        .logo-status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--emerald);
          margin-left: 2px;
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
          transition: color 0.25s;
          z-index: 1;
        }
        .nav-item:hover { color: var(--text-1); }
        .nav-item.active { color: var(--btn-text); font-weight: 700; }
        [data-theme='light'] .nav-item.active { color: #ffffff; }

        .nav-indicator {
          position: absolute;
          inset: 0;
          background: var(--cyan);
          border-radius: 100px;
          z-index: -1;
          box-shadow: 0 4px 14px var(--cyan-glow);
        }

        /* Command Palette Launcher */
        .nav-cmd-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 100px;
          background: var(--surface-2);
          border: 1px solid var(--border);
          color: var(--text-2);
          font-size: 0.78rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s;
          font-family: 'Inter', sans-serif;
        }
        .nav-cmd-btn:hover {
          border-color: var(--cyan);
          color: var(--cyan);
          background: var(--surface-3);
        }
        .cmd-shortcut {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--text-3);
          background: var(--surface-3);
          padding: 2px 6px;
          border-radius: 4px;
          border: 1px solid var(--border);
        }

        /* Nav Action Buttons */
        .nav-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid var(--border);
          background: var(--surface-2);
          color: var(--text-2);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s;
        }
        .nav-btn:hover {
          border-color: var(--cyan);
          color: var(--cyan);
          background: var(--surface-3);
        }
        .theme-icon-wrap { display: flex; width: 17px; height: 17px; }

        .nav-resume-btn {
          padding: 8px 16px !important;
          border-radius: 100px !important;
          font-size: 0.85rem !important;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .nav-cta-btn {
          padding: 8px 18px !important;
          border-radius: 100px !important;
          font-size: 0.85rem !important;
          font-weight: 800 !important;
        }

        /* Hamburger */
        .hamburger {
          display: none;
          padding: 6px;
          cursor: pointer;
          border: none;
          background: transparent;
        }
        .hamburger-box { width: 22px; height: 16px; position: relative; }
        .hamburger-inner {
          display: block; top: 50%; margin-top: -1px;
          width: 22px; height: 2px; background: var(--text-1);
          border-radius: 2px; position: absolute; transition: transform 0.3s, background 0.3s;
        }
        .hamburger-inner::before, .hamburger-inner::after {
          content: ''; display: block; width: 22px; height: 2px;
          background: var(--text-1); border-radius: 2px; position: absolute;
          transition: transform 0.3s, opacity 0.3s;
        }
        .hamburger-inner::before { top: -6px; }
        .hamburger-inner::after { bottom: -6px; }

        .hamburger-inner.active { transform: rotate(45deg); }
        .hamburger-inner.active::before { top: 0; opacity: 0; }
        .hamburger-inner.active::after { bottom: 0; transform: rotate(-90deg); }

        /* Mobile Dropdown */
        .mobile-backdrop { position: fixed; inset: 0; z-index: 8900; pointer-events: auto; }
        .mobile-dropdown {
          position: absolute;
          top: 76px;
          right: 5%;
          width: 290px;
          padding: 20px;
          border-radius: 20px;
          z-index: 9000;
          pointer-events: auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
          border: 1px solid var(--border-cyan) !important;
        }

        .mobile-nav-list { display: flex; flex-direction: column; gap: 4px; }
        .mobile-link {
          display: block;
          padding: 10px 14px;
          border-radius: 10px;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-2);
          text-decoration: none;
          transition: all 0.2s;
        }
        .mobile-link:hover { background: var(--surface-2); color: var(--text-1); }
        .mobile-link.active { background: var(--cyan-soft); color: var(--cyan); font-weight: 700; }

        .mobile-footer-actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding-top: 14px;
          border-top: 1px solid var(--border);
        }

        .mobile-cmd-launch {
          padding: 10px;
          border-radius: 10px;
          background: var(--surface-2);
          border: 1px solid var(--border);
          color: var(--cyan);
          font-size: 0.82rem;
          font-weight: 700;
          cursor: pointer;
        }
        .w-full { width: 100%; }

        @media (max-width: 980px) {
          .nav-links, .nav-cmd-btn, .hide-tablet { display: none; }
          .hamburger { display: block; }
          .nav-left { flex: none; }
        }
      `}</style>
    </>
  );
}