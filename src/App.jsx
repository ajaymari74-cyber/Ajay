/**
 * App.jsx — 2026 Premium Portfolio Root
 * Features: Dual-layer cursor glow, particle field, Command Palette (Ctrl+K), theme toggle
 */
import './index.css';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FeedbackWidget from './components/FeedbackWidget';
import CommandPalette from './components/CommandPalette';

/* ─── Premium Antigravity Dual Cursor Glow ─── */
function CursorGlow() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const trailRef = useRef(null);
  const glowRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const trailPos = useRef({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`;
      }
    };

    let raf;
    const lerp = (a, b, t) => a + (b - a) * t;

    const loop = () => {
      ringPos.current.x = lerp(ringPos.current.x, pos.current.x, 0.16);
      ringPos.current.y = lerp(ringPos.current.y, pos.current.y, 0.16);
      trailPos.current.x = lerp(trailPos.current.x, pos.current.x, 0.08);
      trailPos.current.y = lerp(trailPos.current.y, pos.current.y, 0.08);

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x - (isHovering ? 28 : 18)}px, ${ringPos.current.y - (isHovering ? 28 : 18)}px)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${trailPos.current.x - 10}px, ${trailPos.current.y - 10}px)`;
      }
      raf = requestAnimationFrame(loop);
    };
    loop();
    window.addEventListener('mousemove', move);

    const addHover = () => {
      const targets = document.querySelectorAll('a, button, input, textarea, [class*="btn"], [class*="card"], [class*="chip"]');
      targets.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          setIsHovering(true);
          if (ringRef.current) {
            ringRef.current.style.width = '56px';
            ringRef.current.style.height = '56px';
            ringRef.current.style.borderColor = 'var(--cyan)';
            ringRef.current.style.background = 'var(--cyan-soft)';
          }
        });
        el.addEventListener('mouseleave', () => {
          setIsHovering(false);
          if (ringRef.current) {
            ringRef.current.style.width = '36px';
            ringRef.current.style.height = '36px';
            ringRef.current.style.borderColor = 'var(--cyan)';
            ringRef.current.style.background = 'transparent';
          }
        });
      });
    };

    const interval = setInterval(addHover, 2000);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('resize', checkMobile);
      clearInterval(interval);
      cancelAnimationFrame(raf);
    };
  }, [isHovering]);

  if (isMobile) return null;

  return (
    <div className="custom-cursor-container" style={{ pointerEvents: 'none' }}>
      {/* Ambient Cursor Glow */}
      <div
        ref={glowRef}
        style={{
          position: 'fixed',
          zIndex: 20000,
          pointerEvents: 'none',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--cyan-glow) 0%, transparent 65%)',
          willChange: 'transform',
          opacity: 0.45,
        }}
      />
      {/* Secondary Orbit Trail */}
      <div
        ref={trailRef}
        style={{
          position: 'fixed',
          zIndex: 20001,
          pointerEvents: 'none',
          width: '20px',
          height: '20px',
          border: '1px solid var(--cyan)',
          borderRadius: '50%',
          opacity: 0.25,
          willChange: 'transform',
        }}
      />
      {/* Main Interactive Ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          zIndex: 20002,
          pointerEvents: 'none',
          width: '36px',
          height: '36px',
          border: '1.5px solid var(--cyan)',
          borderRadius: '50%',
          opacity: 0.7,
          willChange: 'transform',
          transition: 'width 0.25s ease, height 0.25s ease, background 0.25s ease',
          mixBlendMode: 'difference',
        }}
      />
      {/* Precision Dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          zIndex: 20003,
          pointerEvents: 'none',
          width: '8px',
          height: '8px',
          background: 'var(--cyan)',
          borderRadius: '50%',
          willChange: 'transform',
          boxShadow: '0 0 12px var(--cyan)',
        }}
      />
    </div>
  );
}

/* ─── Floating Ambient Particles Background ─── */
function FloatingParticles() {
  const particles = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 14 + 10,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.25 + 0.08,
  }));

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: 'var(--cyan)',
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -70, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [p.opacity, p.opacity * 2.2, p.opacity],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

/* ─── Top Gradient Scroll Progress Bar ─── */
function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setPct(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        height: '3px',
        width: `${pct}%`,
        background: 'linear-gradient(90deg, var(--cyan), var(--violet), var(--emerald), var(--cyan))',
        backgroundSize: '200% auto',
        boxShadow: '0 0 14px var(--cyan-glow)',
        transition: 'width 0.06s linear',
        animation: 'shimmer 3s linear infinite',
      }}
    />
  );
}

/* ─── Floating Scroll Navigator (Up/Down) ─── */
function ScrollNavigator() {
  const [showUp, setShowUp] = useState(false);
  const [showDown, setShowDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const innerHeight = window.innerHeight;

      setShowUp(scrollY > 280);
      setShowDown(scrollY + innerHeight < scrollHeight - 280);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  if (!showUp && !showDown) return null;

  return (
    <motion.div
      className="scroll-navigator glass"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
    >
      <button
        onClick={scrollToTop}
        className={`scroll-nav-btn ${!showUp ? 'disabled' : ''}`}
        disabled={!showUp}
        aria-label="Scroll to top"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>

      <div className="scroll-nav-divider" />

      <button
        onClick={scrollToBottom}
        className={`scroll-nav-btn ${!showDown ? 'disabled' : ''}`}
        disabled={!showDown}
        aria-label="Scroll to bottom"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div>
      <CursorGlow />
      <FloatingParticles />

      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 10000,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--bg)',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '36px' }}
            >
              {/* Orbital Loader HUD */}
              <div style={{ position: 'relative', width: '150px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <motion.svg width="150" height="150" viewBox="0 0 150 150" style={{ position: 'absolute' }}>
                  <motion.circle
                    cx="75" cy="75" r="72"
                    stroke="var(--border-cyan)" strokeWidth="0.8" fill="none" strokeDasharray="4 12"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                    style={{ transformOrigin: 'center' }}
                  />
                  <motion.circle
                    cx="75" cy="75" r="58"
                    stroke="var(--cyan)" strokeWidth="1.8" fill="none"
                    strokeDasharray="90 140" strokeLinecap="round"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
                    style={{ transformOrigin: 'center' }}
                  />
                  <motion.circle
                    cx="75" cy="75" r="44"
                    stroke="var(--violet)" strokeWidth="1.2" fill="none"
                    strokeDasharray="50 90" strokeLinecap="round"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                    style={{ transformOrigin: 'center' }}
                  />
                </motion.svg>
                <motion.div
                  style={{ width: '24px', height: '24px', background: 'var(--cyan)', borderRadius: '50%', filter: 'blur(10px)', position: 'absolute' }}
                  animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>

              {/* Kinetic Logo Text */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{
                  fontFamily: 'Outfit',
                  fontSize: '2.6rem',
                  fontWeight: 900,
                  letterSpacing: '-0.04em',
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center',
                }}
              >
                <span style={{ color: 'var(--cyan)', textShadow: '0 0 25px var(--cyan-glow)' }}>Ajay</span>
                <span style={{ color: 'var(--text-1)' }}>M</span>
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.9, repeat: Infinity }}
                  style={{
                    width: '3px',
                    height: '2.2rem',
                    background: 'var(--cyan)',
                    borderRadius: '2px',
                    boxShadow: '0 0 10px var(--cyan-glow)',
                  }}
                />
              </motion.div>

              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', opacity: 0.7 }}>
                <span className="status-dot live" />
                <p style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--text-3)', fontWeight: 800, margin: 0 }}>
                  Initializing Architecture...
                </p>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <ScrollProgress />
            <Navbar
              theme={theme}
              toggleTheme={toggleTheme}
              onOpenCommandPalette={() => setCommandPaletteOpen(true)}
            />
            <main>
              <Hero />
              <div className="divider" />
              <About />
              <div className="divider" />
              <Skills />
              <div className="divider" />
              <Projects />
              <div className="divider" />
              <Experience />
              <div className="divider" />
              <Contact />
            </main>
            <Footer />
            <FeedbackWidget />
            <ScrollNavigator />

            {/* Global Command Palette */}
            <CommandPalette
              isOpen={commandPaletteOpen}
              onClose={() => setCommandPaletteOpen(false)}
              theme={theme}
              toggleTheme={toggleTheme}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
