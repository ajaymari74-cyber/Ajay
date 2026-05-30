/**
 * 2026 Premium Portfolio Navigation — Ajay M
 * Flawless Laptop Spacing · Floating Glass Dropdown · Premium CTA
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

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#hero');
  const { scrollY } = useScroll();

  // ── Refined Fluid Scroll Dynamics for Laptops ──
  // Widened the shrunk state from 800px to 960px so it doesn't feel cramped on 13" laptops
  const navWidth = useTransform(scrollY, [0, 150], ['100%', 'calc(100% - 48px)']);
  const navMaxWidth = useTransform(scrollY, [0, 150], ['1400px', '960px']);
  const navY = useTransform(scrollY, [0, 150], ['0px', '20px']);

  // Adjusted padding for better breathing room
  const navPadding = useTransform(scrollY, [0, 150], ['24px 48px', '14px 28px']);
  const navRadius = useTransform(scrollY, [0, 150], ['0px', '100px']);

  const blurValue = useTransform(scrollY, [0, 50], [0, 20]);
  const backdropFilter = useMotionTemplate`blur(${blurValue}px)`;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveLink('#' + e.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
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
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
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
          {/* Logo - Flex 1 to push links to dead center */}
          <div className="nav-left">
            <a href="#hero" onClick={(e) => navigate(e, '#hero')} className="nav-logo">
              <span className="logo-accent">Ajay</span>
              <span className="logo-text">.M</span>
            </a>
          </div>

          {/* Desktop Links - Flex None to stay exactly centered */}
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
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Actions - Flex 1 to balance the logo side */}
          <div className="nav-actions">
            <motion.button
              className="nav-btn theme-toggle hide-mobile"
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle Theme"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                  className="theme-icon-wrap"
                >
                  {theme === 'dark' ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
                  )}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            {/* Premium CTA - Updated Text */}
            <motion.a
              href="#contact"
              onClick={(e) => navigate(e, '#contact')}
              className="premium-cta desktop-cta"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <span className="cta-glow" />
              <span className="cta-text">Let's Collaborate</span>
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

        {/* ── Medium Floating Mobile Menu ── */}
        <AnimatePresence>
          {menuOpen && (
            <>
              <div className="mobile-backdrop" onClick={() => setMenuOpen(false)} />

              <motion.div
                className="mobile-dropdown glass-active"
                initial={{ opacity: 0, scale: 0.9, y: -10, filter: 'blur(8px)' }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.9, y: -10, filter: 'blur(8px)' }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: 'top right' }}
              >
                <nav className="mobile-nav-list">
                  {NAV_LINKS.map((link, i) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ delay: i * 0.04, duration: 0.3 }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => navigate(e, link.href)}
                        className={`mobile-link ${activeLink === link.href ? 'active' : ''}`}
                      >
                        {link.label}
                      </a>
                    </motion.div>
                  ))}
                </nav>

                <div className="mobile-footer-actions">
                  <div className="mobile-theme-row">
                    <span className="mobile-theme-label">Theme</span>
                    <button onClick={toggleTheme} className="mobile-theme-toggle">
                      {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
                    </button>
                  </div>

                  <a
                    href="#contact"
                    onClick={(e) => navigate(e, '#contact')}
                    className="premium-cta w-full"
                  >
                    <span className="cta-glow" />
                    <span className="cta-text">Let's Collaborate</span>
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>

      <style>{`
        /* Core Positioning */
        .navbar-root {
          position: fixed; top: 0; left: 0; width: 100%;
          display: flex; justify-content: center; z-index: 9000;
          pointer-events: none; padding-top: 16px;
        }

        /* Ambient Background Glow */
        .nav-ambient-glow {
          position: absolute; top: -50px; left: 50%; transform: translateX(-50%);
          width: 50%; height: 100px;
          background: radial-gradient(ellipse at center, var(--lime-glow) 0%, transparent 70%);
          filter: blur(40px); opacity: 0; transition: opacity 0.8s ease; pointer-events: none;
        }
        .nav-ambient-glow.visible { opacity: 0.6; }
        [data-theme='light'] .nav-ambient-glow { opacity: 0; }

        /* Main Container - Adjusted for Perfect Centering */
        .nav-container {
          pointer-events: auto; display: flex; align-items: center; justify-content: space-between;
          border: 1px solid transparent; transition: background 0.4s, border-color 0.4s, box-shadow 0.4s;
          margin: 0 auto; position: relative; z-index: 9001;
        }
        .glass-active {
          background: var(--glass-bg);
          border-color: var(--border);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.05);
          backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
        }

        /* Nav Layout Flex Distribution */
        .nav-left { flex: 1; display: flex; justify-content: flex-start; }
        .nav-links { flex: none; display: flex; gap: 6px; position: relative; }
        .nav-actions { flex: 1; display: flex; justify-content: flex-end; align-items: center; gap: 14px; }

        /* Logo */
        .nav-logo {
          font-family: 'Outfit', sans-serif; font-size: 1.5rem; font-weight: 900;
          text-decoration: none; display: flex; align-items: center; letter-spacing: -0.04em;
        }
        .logo-accent { color: var(--lime); text-shadow: 0 0 20px var(--lime-glow); }
        .logo-text { color: var(--text-1); }

        /* Desktop Nav Links */
        .nav-item {
          position: relative; padding: 10px 20px; font-size: 0.9rem; font-weight: 600;
          color: var(--text-3); text-decoration: none; border-radius: 100px;
          transition: color 0.3s; z-index: 1; outline: none;
        }
        .nav-item:hover, .nav-item:focus-visible { color: var(--text-1); }
        .nav-item.active { color: var(--bg); font-weight: 700; }
        [data-theme='light'] .nav-item.active { color: #fff; }
        
        .nav-indicator {
          position: absolute; inset: 0; background: var(--text-1);
          border-radius: 100px; z-index: -1;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        /* Icon Buttons */
        .nav-btn {
          width: 42px; height: 42px; border-radius: 50%;
          border: 1px solid var(--border); background: var(--surface-1);
          color: var(--text-2); cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.3s ease;
        }
        .nav-btn:hover { border-color: var(--lime); color: var(--lime); background: var(--surface-2); }
        .theme-icon-wrap { display: flex; width: 18px; height: 18px; }

        /* Premium Gradient CTA */
        .premium-cta {
          position: relative; padding: 11px 26px; border-radius: 100px;
          text-decoration: none; font-weight: 800; font-size: 0.9rem;
          color: #000; background: var(--lime); overflow: hidden;
          display: inline-flex; align-items: center; justify-content: center;
          border: 1px solid transparent; z-index: 1; white-space: nowrap;
        }
        .premium-cta::before {
          content: ''; position: absolute; inset: -2px; z-index: -1;
          background: conic-gradient(from 0deg, var(--lime), #fff, var(--lime));
          animation: spin-gradient 4s linear infinite; opacity: 0; transition: opacity 0.3s;
        }
        .premium-cta:hover::before { opacity: 1; }
        .cta-glow {
          position: absolute; inset: 1px; background: var(--lime);
          border-radius: 99px; z-index: -1; transition: background 0.3s;
        }
        .premium-cta:hover .cta-glow { background: #ffffffff; }
        .cta-text { position: relative; z-index: 2; letter-spacing: 0.02em; }
        
        @keyframes spin-gradient { 100% { transform: rotate(360deg); } }

        /* Hamburger Animation */
        .hamburger {
          display: none; padding: 8px; cursor: pointer; border: none; background: transparent;
        }
        .hamburger-box { width: 24px; height: 16px; position: relative; }
        .hamburger-inner {
          display: block; top: 50%; margin-top: -1px;
          width: 24px; height: 2px; background: var(--text-1);
          border-radius: 2px; position: absolute; transition: transform 0.3s, background 0.3s;
        }
        .hamburger-inner::before, .hamburger-inner::after {
          content: ''; display: block; width: 24px; height: 2px;
          background: var(--text-1); border-radius: 2px; position: absolute;
          transition: transform 0.3s, opacity 0.3s;
        }
        .hamburger-inner::before { top: -6px; }
        .hamburger-inner::after { bottom: -6px; }
        
        .hamburger-inner.active { transform: rotate(45deg); }
        .hamburger-inner.active::before { top: 0; opacity: 0; }
        .hamburger-inner.active::after { bottom: 0; transform: rotate(-90deg); }

        /* Floating Mobile Dropdown */
        .mobile-backdrop { position: fixed; inset: 0; z-index: 8900; pointer-events: auto; }
        
        .mobile-dropdown {
          position: absolute; top: 80px; right: 5%; width: 280px;
          padding: 24px; border-radius: 24px; z-index: 9000; pointer-events: auto;
          display: flex; flex-direction: column; gap: 20px;
        }

        .mobile-nav-list { display: flex; flex-direction: column; gap: 4px; }
        .mobile-link {
          display: block; padding: 12px 16px; border-radius: 12px;
          font-family: 'Inter', sans-serif; font-size: 1.05rem; font-weight: 600;
          color: var(--text-2); text-decoration: none;
          transition: all 0.2s ease;
        }
        .mobile-link:hover, .mobile-link:active {
          background: var(--surface-2); color: var(--text-1);
        }
        .mobile-link.active {
          background: var(--lime-soft); color: var(--lime); font-weight: 700;
        }

        .mobile-footer-actions {
          display: flex; flex-direction: column; gap: 16px;
          padding-top: 20px; border-top: 1px solid var(--border);
        }
        .mobile-theme-row { display: flex; justify-content: space-between; align-items: center; padding: 0 4px; }
        .mobile-theme-label { font-size: 0.85rem; font-weight: 600; color: var(--text-3); }
        .mobile-theme-toggle {
          padding: 8px 14px; border-radius: 100px; font-size: 0.8rem; font-weight: 700;
          color: var(--text-2); background: var(--surface-1); border: 1px solid var(--border); 
          cursor: pointer; transition: all 0.2s ease;
        }
        .mobile-theme-toggle:hover { background: var(--surface-2); color: var(--text-1); }
        .w-full { width: 100%; padding: 14px; font-size: 1rem; }

        /* Responsiveness */
        @media (max-width: 900px) {
          .nav-left { flex: none; }
          .nav-container { justify-content: space-between; }
          .nav-links, .desktop-cta { display: none; }
          .hide-mobile { display: none; }
          .hamburger { display: block; }
          .navbar-root { padding-top: 16px; }
          .nav-ambient-glow { display: none; }
        }
        
        @media (min-width: 901px) {
          .mobile-dropdown, .mobile-backdrop { display: none !important; }
        }
        @media (max-width: 400px) {
          .mobile-dropdown { right: 2.5%; width: 95%; top: 76px; }
        }
      `}</style>
    </>
  );
}