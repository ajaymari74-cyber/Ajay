/**
 * Hero Section — 2026 Professional Portfolio
 * Typing animation · Live clock · Scroll parallax · Stats counter
 */
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

/* ── Typing Effect ── */
const ROLES = ['Full-Stack Developer', 'System Architect', 'Mobile Engineer', 'Cloud Builder'];

function useTyping(words, speed = 72, pause = 2400) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    let t;
    if (!deleting && charIdx < word.length)
      t = setTimeout(() => setCharIdx(c => c + 1), speed);
    else if (!deleting && charIdx === word.length)
      t = setTimeout(() => setDeleting(true), pause);
    else if (deleting && charIdx > 0)
      t = setTimeout(() => setCharIdx(c => c - 1), speed / 2.2);
    else {
      setDeleting(false);
      setWordIdx(w => (w + 1) % words.length);
    }
    setDisplay(word.slice(0, charIdx));
    return () => clearTimeout(t);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

/* ── Count-Up ── */
function useCountUp(target, duration = 1500) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  const start = () => {
    if (started.current) return;
    started.current = true;
    const step = target / (duration / 16);
    let cur = 0;
    const iv = setInterval(() => {
      cur += step;
      if (cur >= target) { setCount(target); clearInterval(iv); }
      else setCount(Math.floor(cur));
    }, 16);
  };
  return [count, start];
}

/* ── Live IST Clock ── */
function LiveClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const iv = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(iv);
  }, []);
  const fmt = n => String(n).padStart(2, '0');
  return (
    <div className="clock-chip glass">
      <span className="status-dot live" />
      <span className="mono" style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-2)', letterSpacing: '0.05em' }}>
        {fmt(time.getHours())}:{fmt(time.getMinutes())}:{fmt(time.getSeconds())}
      </span>
      <span style={{ fontSize: '0.65rem', color: 'var(--text-4)', fontWeight: 700 }}>IST</span>
    </div>
  );
}

/* ── Stat Card ── */
const STATS = [
  { num: 3, suffix: '+', label: 'Years of Experience', desc: 'Full-stack architecture & design', color: '#CCFF00' },
  { num: 4, suffix: '+', label: 'Production Applications', desc: 'Live enterprise-grade systems', color: '#3B82F6' },
  { num: 30, suffix: '+', label: 'Developers Mentored', desc: 'Code reviews & team leadership', color: '#7C3AED' },
  { num: 12, suffix: '+', label: 'System Modules Built', desc: 'APIs, databases & cloud pipelines', color: '#10B981' },
];

function StatCard({ stat, index }) {
  const [count, start] = useCountUp(stat.num);
  const [done, setDone] = useState(false);
  return (
    <motion.div whileHover={{ y: -6 }} className="stat-tile glass"
      onViewportEnter={() => { if (!done) { setDone(true); setTimeout(start, index * 120); } }}>
      <div className="stat-number" style={{ color: stat.color }}>
        {done ? count : 0}<span className="stat-suffix">{stat.suffix}</span>
      </div>
      <div className="stat-label">{stat.label}</div>
      <div className="stat-desc">{stat.desc}</div>
      <div className="stat-accent-bar" style={{ background: stat.color }} />
    </motion.div>
  );
}

export default function Hero() {
  const role = useTyping(ROLES);
  const secRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: secRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-18%']);
  const op = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="hero" ref={secRef} className="hero-section">
      {/* Ambient background */}
      <div className="hero-bg">
        <div className="bg-orb orb-lime" />
        <div className="bg-orb orb-violet" />
        <div className="hero-grid-pattern" />
      </div>

      <motion.div style={{ y, opacity: op }} className="container hero-wrap">

        {/* ── Top Status Strip ── */}
        <div className="hero-status-bar">
          <div className="status-chip glass">
            <span className="status-dot live" />
            <span>Open to Work</span>
          </div>
          <LiveClock />
          <div className="location-chip glass">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" /><circle cx="12" cy="10" r="3" /></svg>
            Kanyakumari, India · Remote
          </div>
        </div>

        {/* ── Main Grid ── */}
        <div className="hero-main-grid">
          {/* Content */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }} className="hero-content">

            <div className="hero-eyebrow">
              <div className="eyebrow-line" />
              System Architect · Full-Stack Developer
            </div>

            <h1 className="hero-heading display-xl">
              Building Digital<br />
              <span className="animated-gradient-text">Systems</span> That<br />
              <span className="text-glow">Scale.</span>
            </h1>

            <div className="hero-terminal mono">
              <span className="terminal-prompt">~/ajay</span>
              <span className="terminal-arrow"> $ </span>
              <span className="terminal-role">{role}</span>
              <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.9, repeat: Infinity }} className="cursor-bar">|</motion.span>
            </div>

            <p className="hero-bio">
              Senior engineer specializing in high-availability, cloud-native web and mobile ecosystems.
              I build zero-downtime, production-grade platforms that handle real institutional scale.
            </p>

            <div className="hero-actions">
              <motion.a href="#projects" className="btn btn-primary hero-btn-primary"
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
                View My Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </motion.a>
              <motion.a href="/assets/ajay%20resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary"
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                Resume
              </motion.a>
            </div>

            <div className="hero-trust">
              <div className="trust-item">
                <span className="trust-key">Core Stack</span>
                <span className="trust-val">React · Node.js · PHP · MySQL</span>
              </div>
              <div className="trust-sep" />
              <div className="trust-item">
                <span className="trust-key">Uptime</span>
                <span className="trust-val trust-lime">99.9%</span>
              </div>
            </div>
          </motion.div>

          {/* Visual Panel */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="hero-visual">
            <div className="visual-frame glass">
              <div className="frame-topbar">
                <div className="frame-dots"><span /><span /><span /></div>
                <span className="frame-label mono">profile.sys</span>
              </div>
              <div className="portrait-wrap">
                <div className="portrait-container">
                  <img src="/assets/ajay_pro.png" alt="Ajay M — Full-Stack Developer" className="portrait-img" />
                  <div className="scanner-line" />
                  <div className="corner-bracket tl" /><div className="corner-bracket tr" />
                  <div className="corner-bracket bl" /><div className="corner-bracket br" />
                </div>
                <div className="portrait-badge glass">
                  <span className="status-dot live" />
                  <span>Available for Projects</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Stats Grid ── */}
        <div className="hero-stats-grid">
          {STATS.map((s, i) => <StatCard key={i} stat={s} index={i} />)}
        </div>

      </motion.div>

      <style>{`
        .hero-section {
          position: relative; min-height: 100vh;
          padding: 170px 0 100px; overflow: hidden;
          display: flex; align-items: flex-start;
        }

        /* Background */
        .hero-bg { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
        .bg-orb {
          position: absolute; border-radius: 50%;
          filter: blur(100px); animation: aurora-drift 14s ease-in-out infinite;
        }
        .orb-lime   { width: 700px; height: 700px; top: -15%; right: -10%;
          background: radial-gradient(circle, rgba(204,255,0,0.15), transparent 70%); }
        .orb-violet { width: 500px; height: 500px; bottom: -10%; left: -10%;
          background: radial-gradient(circle, rgba(124,58,237,0.12), transparent 70%);
          animation-delay: -6s; animation-duration: 18s; }
        .hero-grid-pattern {
          position: absolute; inset: 0;
          background-image: radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        [data-theme='light'] .hero-grid-pattern {
          background-image: radial-gradient(rgba(0,0,0,0.06) 1px, transparent 1px);
        }
        @keyframes aurora-drift {
          0%,100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(40px,-30px) scale(1.06); }
          66% { transform: translate(-25px,40px) scale(0.95); }
        }

        .hero-wrap { position: relative; z-index: 1; width: 100%; }

        /* Status Bar */
        .hero-status-bar {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 64px; flex-wrap: wrap;
        }
        .status-chip, .clock-chip, .location-chip {
          padding: 8px 16px; border-radius: 100px;
          font-size: 0.78rem; font-weight: 700;
          display: flex; align-items: center; gap: 8px;
          color: var(--text-2);
        }
        .location-chip { color: var(--text-3); }
        .status-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #22c55e; flex-shrink: 0;
        }
        .status-dot.live {
          box-shadow: 0 0 8px #22c55e;
          animation: pulse-glow 2s infinite;
        }

        /* Main Grid */
        .hero-main-grid {
          display: grid; grid-template-columns: 1.1fr 0.9fr;
          gap: 80px; align-items: center; margin-bottom: 80px;
        }

        /* Content */
        .hero-eyebrow {
          display: flex; align-items: center; gap: 14px;
          font-size: 0.78rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--lime); margin-bottom: 28px;
        }
        .eyebrow-line {
          width: 36px; height: 2px;
          background: linear-gradient(90deg, var(--lime), transparent);
          border-radius: 2px;
        }

        .hero-heading {
          font-size: clamp(3rem, 7.5vw, 6.8rem) !important;
          line-height: 0.88 !important;
          margin-bottom: 28px;
        }

        .hero-terminal {
          display: flex; align-items: center; flex-wrap: wrap;
          gap: 0; margin-bottom: 32px;
          font-size: clamp(1rem, 2.2vw, 1.4rem);
          font-weight: 500; color: var(--text-3);
          min-height: 38px;
        }
        .terminal-prompt { color: var(--lime); opacity: 0.8; }
        .terminal-arrow  { color: var(--text-4); }
        .terminal-role   { color: var(--text-2); font-weight: 600; }
        .cursor-bar      { color: var(--lime); margin-left: 2px; }

        .hero-bio {
          font-size: 1.1rem; line-height: 1.8;
          color: var(--text-2); max-width: 580px; margin-bottom: 48px;
        }
        [data-theme='light'] .hero-bio { color: var(--text-2); }

        .hero-actions { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 48px; }
        .hero-btn-primary { border-radius: 12px !important; font-size: 0.95rem !important; padding: 16px 32px !important; }

        .hero-trust {
          display: flex; align-items: center; gap: 20px;
          flex-wrap: wrap;
        }
        .trust-item { display: flex; flex-direction: column; gap: 3px; }
        .trust-key  { font-size: 0.65rem; font-weight: 700; color: var(--text-4); text-transform: uppercase; letter-spacing: 0.1em; }
        .trust-val  { font-size: 0.85rem; font-weight: 700; color: var(--text-2); }
        .trust-lime { color: var(--lime) !important; }
        .trust-sep  { width: 1px; height: 32px; background: var(--border-2); }

        /* Visual Frame */
        .visual-frame {
          border-radius: 28px; overflow: hidden;
          border: 1px solid var(--border) !important;
          box-shadow: 0 48px 100px rgba(0,0,0,0.4);
          background: rgba(10,10,16,0.6) !important;
        }
        [data-theme='light'] .visual-frame { background: rgba(255,255,255,0.7) !important; }
        .frame-topbar {
          padding: 14px 20px; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: 12px;
        }
        .frame-dots { display: flex; gap: 7px; }
        .frame-dots span { width: 10px; height: 10px; border-radius: 50%; background: #ff5f57; }
        .frame-dots span:nth-child(2) { background: #febc2e; }
        .frame-dots span:nth-child(3) { background: #28c840; }
        .frame-label { font-size: 0.7rem; font-weight: 600; color: var(--text-4); letter-spacing: 0.1em; }

        .portrait-wrap { padding: 32px; display: flex; flex-direction: column; align-items: center; gap: 20px; }
        .portrait-container {
          position: relative; width: 300px; height: 400px;
          border-radius: 24px; overflow: hidden;
          border: 1.5px solid var(--border-lime);
          background: rgba(204, 255, 0, 0.02);
          display: flex; align-items: center; justifyContent: center;
        }
        .portrait-img { 
          width: 100%; height: 100%; 
          object-fit: contain; 
          transition: transform 0.5s ease;
        }
        .portrait-container:hover .portrait-img { transform: scale(1.02); }
        .scanner-line {
          position: absolute; top: 0; left: 0; right: 0;
          height: 2px; background: var(--lime); opacity: 0.7;
          box-shadow: 0 0 12px var(--lime);
          animation: scan-line 4s linear infinite;
        }
        .corner-bracket {
          position: absolute; width: 14px; height: 14px;
          border: 2px solid var(--lime);
        }
        .corner-bracket.tl { top: 12px; left: 12px; border-right: none; border-bottom: none; }
        .corner-bracket.tr { top: 12px; right: 12px; border-left: none; border-bottom: none; }
        .corner-bracket.bl { bottom: 12px; left: 12px; border-right: none; border-top: none; }
        .corner-bracket.br { bottom: 12px; right: 12px; border-left: none; border-top: none; }

        .portrait-badge {
          display: flex; align-items: center; gap: 8px;
          padding: 10px 20px; border-radius: 100px;
          font-size: 0.78rem; font-weight: 700; color: var(--text-2);
        }

        /* Stats */
        .hero-stats-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;
        }
        .stat-tile {
          padding: 28px 24px; border-radius: 22px;
          position: relative; overflow: hidden;
          border: 1px solid var(--border) !important;
          transition: border-color 0.3s, transform 0.3s;
        }
        .stat-tile:hover { border-color: var(--border-lime) !important; }
        .stat-number {
          font-family: 'Outfit', sans-serif;
          font-size: 2.8rem; font-weight: 900; line-height: 1;
          margin-bottom: 8px;
        }
        .stat-suffix { font-size: 1.4rem; font-weight: 700; }
        .stat-label {
          font-size: 0.85rem; font-weight: 700;
          color: var(--text-1); margin-bottom: 4px;
        }
        .stat-desc { font-size: 0.72rem; color: var(--text-3); line-height: 1.5; }
        .stat-accent-bar {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 3px; opacity: 0.6;
        }

        /* Responsive */
        @media (max-width: 1100px) {
          .hero-main-grid { grid-template-columns: 1fr; gap: 60px; }
          .hero-content { text-align: center; }
          .hero-eyebrow, .hero-actions, .hero-trust, .hero-terminal, .hero-status-bar { justify-content: center; }
          .hero-bio { margin: 0 auto 48px; }
          .portrait-wrap { align-items: center; }
          .hero-stats-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .hero-section { padding: 120px 0 20px; }
          .hero-status-bar { margin-bottom: 40px; }
          .hero-stats-grid { gap: 14px; }
          .stat-tile { padding: 22px 18px; }
          .stat-number { font-size: 2.2rem; }
        }
        @media (max-width: 480px) {
          .hero-stats-grid { grid-template-columns: repeat(2, 1fr); }
          .portrait-container { width: 260px; height: 350px; }
        }
      `}</style>
    </section>
  );
}
