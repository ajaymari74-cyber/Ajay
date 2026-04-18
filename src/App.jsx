/**
 * App.jsx — 2026 Premium Portfolio Root
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

/* ─── Premium cursor glow (lime) ─── */
function CursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    const move = (e) => {
      if (ref.current) {
        ref.current.style.left = `${e.clientX}px`;
        ref.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);
  return (
    <div
      ref={ref}
      className="pointer-events-none fixed z-[9997] -translate-x-1/2 -translate-y-1/2 will-change-transform"
      style={{
        width: '600px', height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(204,255,0,0.028) 0%, transparent 60%)',
        transition: 'left 0.12s linear, top 0.12s linear',
      }}
    />
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
      className="fixed top-0 left-0 z-[100] h-[2px] transition-all duration-75"
      style={{
        width: `${pct}%`,
        background: 'linear-gradient(90deg, #CCFF00, #88ff00)',
        boxShadow: '0 0 10px rgba(204,255,0,0.6)',
      }}
    />
  );
}

/* ─── Page Loader ─── */
function PageLoader({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2000);
    return () => clearTimeout(t);
  }, [onDone]);
  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.03 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{ background: '#060608' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-8"
      >
        <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '2.4rem', fontWeight: 800, letterSpacing: '-0.04em' }}>
          <span style={{ color: '#CCFF00' }}>Ajay</span>
          <span style={{ color: 'rgba(255,255,255,0.9)' }}> M.</span>
        </div>
        <div style={{ width: '180px', height: '2px', background: 'rgba(255,255,255,0.06)', borderRadius: '2px', overflow: 'hidden' }}>
          <div className="loader-bar" style={{ width: '100%' }} />
        </div>
        <p style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', fontWeight: 600 }}>
          Loading
        </p>
      </motion.div>
    </motion.div>
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
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.4 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="scroll-top-btn"
          aria-label="Scroll to top"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="grain">
      <CursorGlow />
      <AnimatePresence>
        {loading && <PageLoader onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <ScrollProgress />
          <Navbar />
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
          <ScrollTop />
        </motion.div>
      )}
    </div>
  );
}
