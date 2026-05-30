/**
 * App.jsx — 2026 Premium Portfolio Root
 * Features: Dual cursor glow, floating particles, scroll progress, theme toggle
 */
import './index.css';
import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FeedbackWidget from './components/FeedbackWidget';
/* ─── Premium Google Antigravity Cursor ─── */
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
    // Detect mobile/touch devices
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
        glowRef.current.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
      }
    };
    let raf;
    const lerp = (a, b, t) => a + (b - a) * t;
    const loop = () => {
      // Main ring lag
      ringPos.current.x = lerp(ringPos.current.x, pos.current.x, 0.15);
      ringPos.current.y = lerp(ringPos.current.y, pos.current.y, 0.15);
      // Secondary trail lag (antigravity feel)
      trailPos.current.x = lerp(trailPos.current.x, pos.current.x, 0.08);
      trailPos.current.y = lerp(trailPos.current.y, pos.current.y, 0.08);
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x - (isHovering ? 30 : 20)}px, ${ringPos.current.y - (isHovering ? 30 : 20)}px)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${trailPos.current.x - 10}px, ${trailPos.current.y - 10}px)`;
      }
      raf = requestAnimationFrame(loop);
    };
    loop();
    window.addEventListener('mousemove', move);
    const addHover = () => {
      const targets = document.querySelectorAll('a, button, input, textarea, [class*="btn"], [class*="card"], [class*="proj"], .proj-img-container');
      targets.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          setIsHovering(true);
          if (ringRef.current) {
            ringRef.current.style.width = '60px';
            ringRef.current.style.height = '60px';
            ringRef.current.style.background = 'rgba(204, 255, 0, 0.1)';
            ringRef.current.style.borderColor = 'var(--lime)';
            ringRef.current.style.borderWidth = '1px';
          }
        });
        el.addEventListener('mouseleave', () => {
          setIsHovering(false);
          if (ringRef.current) {
            ringRef.current.style.width = '40px';
            ringRef.current.style.height = '40px';
            ringRef.current.style.background = 'transparent';
            ringRef.current.style.borderColor = 'var(--lime)';
            ringRef.current.style.borderWidth = '1.5px';
          }
        });
      });
    };

    // Use an interval to catch dynamically added elements
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
    <div className="custom-cursor-container">
      {/* Big ambient glow */}
      <div
        ref={glowRef}
        style={{
          position: 'fixed', zIndex: 20000, pointerEvents: 'none',
          width: '600px', height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--lime-glow) 0%, transparent 60%)',
          willChange: 'transform',
          opacity: 0.4,
        }}
      />
      {/* Antigravity Trail */}
      <div
        ref={trailRef}
        style={{
          position: 'fixed', zIndex: 20001, pointerEvents: 'none',
          width: '20px', height: '20px',
          border: '1px solid var(--lime)',
          borderRadius: '50%',
          opacity: 0.2,
          willChange: 'transform',
        }}
      />
      {/* Main interactive ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed', zIndex: 20002, pointerEvents: 'none',
          width: '40px', height: '40px',
          border: '1.5px solid var(--lime)',
          borderRadius: '50%',
          opacity: 0.6,
          willChange: 'transform',
          transition: 'width 0.3s cubic-bezier(0.23, 1, 0.32, 1), height 0.3s cubic-bezier(0.23, 1, 0.32, 1), background 0.3s ease',
          mixBlendMode: 'difference',
        }}
      />
      {/* Precision dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed', zIndex: 20003, pointerEvents: 'none',
          width: '8px', height: '8px',
          background: 'var(--lime)',
          borderRadius: '50%',
          willChange: 'transform',
          boxShadow: '0 0 10px var(--lime-glow)',
        }}
      />
    </div>
  );
}
/* ─── Floating Particles Background ─── */
function FloatingParticles() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 12 + 8,
    delay: Math.random() * 6,
    opacity: Math.random() * 0.3 + 0.1,
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
            background: 'var(--lime)',
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [p.opacity, p.opacity * 2, p.opacity],
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
/* ─── Scroll progress bar at top ─── */
function ScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const fn = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setPct(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <div
      style={{
        position: 'fixed', top: 0, left: 0, zIndex: 9999,
        height: '3px',
        width: `${pct}%`,
        background: 'linear-gradient(90deg, var(--lime), var(--violet), var(--lime))',
        backgroundSize: '200% auto',
        boxShadow: '0 0 12px var(--lime-glow)',
        transition: 'width 0.05s linear',
        animation: 'shimmer 2s linear infinite',
      }}
    />
  );
}
/* ─── Scroll-to-top ─── */
function ScrollTop() {
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const fn = () => setVis(window.scrollY > 500);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <AnimatePresence>
      {vis && (
        <motion.button
          initial={{ opacity: 0, scale: 0.4, rotate: -90 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.4, rotate: 90 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="scroll-top-btn"
          aria-label="Scroll to top"
          whileHover={{ scale: 1.15, rotate: -10 }}
          whileTap={{ scale: 0.9 }}
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}
export default function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
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
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed', inset: 0, zIndex: 10000,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              background: 'var(--bg)',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px' }}
            >
              {/* Premium 2026 Orbital Loader */}
              <div style={{ position: 'relative', width: '160px', height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <motion.svg width="160" height="160" viewBox="0 0 160 160" style={{ position: 'absolute' }}>
                  <motion.circle cx="80" cy="80" r="78" stroke="var(--border-lime)" strokeWidth="0.5" fill="none" strokeDasharray="4 12"
                    animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "center" }}
                  />
                  <motion.circle cx="80" cy="80" r="65" stroke="var(--lime)" strokeWidth="1.5" fill="none"
                    strokeDasharray="100 150" strokeLinecap="round"
                    animate={{ rotate: -360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "center" }}
                  />
                  <motion.circle cx="80" cy="80" r="50" stroke="var(--violet)" strokeWidth="1" fill="none"
                    strokeDasharray="60 100" strokeLinecap="round"
                    animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "center" }}
                  />
                </motion.svg>
                <motion.div
                  style={{ width: '30px', height: '30px', background: 'var(--lime)', borderRadius: '50%', filter: 'blur(12px)', position: 'absolute' }}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>

              {/* Logo with kinetic cursor */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{ 
                  fontFamily: 'Outfit, sans-serif', fontSize: '3rem', fontWeight: 900, 
                  letterSpacing: '-0.05em', display: 'flex', gap: '12px', alignItems: 'center' 
                }}
              >
                <span style={{ color: 'var(--lime)', textShadow: '0 0 30px var(--lime-glow)' }}>Ajay</span>
                <span style={{ color: 'var(--text-1)' }}>M</span>
                <motion.div
                  animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  style={{ 
                    width: '4px', height: '2.5rem', background: 'var(--lime)', 
                    borderRadius: '2px', boxShadow: '0 0 10px var(--lime-glow)' 
                  }}
                />
              </motion.div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', opacity: 0.6 }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--lime)', boxShadow: '0 0 8px var(--lime)' }} />
                <p style={{ fontSize: '0.65rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--text-3)', fontWeight: 800, margin: 0 }}>
                  Portfolio Loading...
                </p>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ScrollProgress />
            <Navbar theme={theme} toggleTheme={toggleTheme} />
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
            <ScrollTop />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
