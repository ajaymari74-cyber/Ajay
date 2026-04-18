/**
 * Navbar — 2026 floating pill nav with frosted glass on scroll
 */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'Home',       href: '#hero' },
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState('#hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    setActive(href);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 50,
          padding: scrolled ? '12px 0' : '20px 0',
          transition: 'padding 0.4s ease',
          background: scrolled ? 'rgba(6,6,8,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => go(e, '#hero')}
            whileHover={{ scale: 1.04 }}
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: '2px' }}
          >
            <span style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.25rem', fontWeight: 800, color: '#CCFF00', letterSpacing: '-0.03em' }}>
              Ajay
            </span>
            <span style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.25rem', fontWeight: 800, color: 'rgba(255,255,255,0.85)', letterSpacing: '-0.03em' }}>
              M.
            </span>
          </motion.a>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="hide-mobile">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => go(e, l.href)}
                className={`nav-pill${active === l.href ? ' active' : ''}`}
                style={{ position: 'relative' }}
              >
                {l.label}
                {active === l.href && <span className="nav-dot" />}
              </a>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href="#contact"
              onClick={(e) => go(e, '#contact')}
              className="btn btn-primary hide-mobile"
              style={{ padding: '10px 24px', fontSize: '0.82rem', borderRadius: '999px' }}
            >
              Hire Me ↗
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'none' }}
              className="mobile-menu-btn"
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    animate={{
                      rotate: open && i === 0 ? 45 : open && i === 2 ? -45 : 0,
                      y: open && i === 0 ? 11 : open && i === 2 ? -11 : 0,
                      opacity: open && i === 1 ? 0 : 1,
                    }}
                    style={{ display: 'block', width: '22px', height: '2px', background: open ? '#CCFF00' : 'rgba(255,255,255,0.85)', borderRadius: '2px' }}
                  />
                ))}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              style={{ overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(6,6,8,0.97)', backdropFilter: 'blur(24px)' }}
            >
              <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '16px 20px' }}>
                {links.map((l) => (
                  <a key={l.label} href={l.href} onClick={(e) => go(e, l.href)}
                    style={{ padding: '12px 16px', borderRadius: '10px', color: active === l.href ? '#CCFF00' : 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, background: active === l.href ? 'rgba(204,255,0,0.07)' : 'transparent', transition: 'all 0.2s' }}
                  >
                    {l.label}
                  </a>
                ))}
                <a href="#contact" onClick={(e) => go(e, '#contact')} className="btn btn-primary" style={{ marginTop: '8px', borderRadius: '12px' }}>
                  Hire Me ↗
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <style>{`.mobile-menu-btn { display: none !important; } @media (max-width: 768px) { .mobile-menu-btn { display: flex !important; } }`}</style>
    </>
  );
}
