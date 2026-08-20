/**
 * Hero.jsx — 2026 Executive Developer Hero
 * Features: Interactive HUD Terminal, 3D Holographic Portrait, Live IST Clock & Production Metrics
 */
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const ROLES = [
  'Junior Software Developer',
  'Java Full Stack Engineer',
  'Full-Stack Web & Mobile Developer',
  'PHP (PDO), MERN & Flutter Specialist'
];

function useTyping(words, speed = 60, pause = 2000) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    let t;
    if (!deleting && charIdx < word.length) {
      t = setTimeout(() => setCharIdx(c => c + 1), speed);
    } else if (!deleting && charIdx === word.length) {
      t = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      t = setTimeout(() => setCharIdx(c => c - 1), speed / 2.2);
    } else {
      setDeleting(false);
      setWordIdx(w => (w + 1) % words.length);
    }
    setDisplay(word.slice(0, charIdx));
    return () => clearTimeout(t);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

function useCountUp(target, duration = 1200) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  const start = () => {
    if (started.current) return;
    started.current = true;
    const step = target / (duration / 16);
    let cur = 0;
    const iv = setInterval(() => {
      cur += step;
      if (cur >= target) {
        setCount(target);
        clearInterval(iv);
      } else {
        setCount(Math.floor(cur));
      }
    }, 16);
  };
  return [count, start];
}

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
      <span className="mono clock-digits">
        {fmt(time.getHours())}:{fmt(time.getMinutes())}:{fmt(time.getSeconds())}
      </span>
      <span className="clock-zone">IST</span>
    </div>
  );
}

const STATS = [
  { num: 2, suffix: '+', label: 'Years Experience', desc: 'Production web & mobile platforms', color: 'var(--cyan)' },
  { num: 4, suffix: '+', label: 'Production Systems', desc: 'GASCKK, Astra AMS, GeoTrack', color: '#10b981' },
  { num: 30, suffix: '+', label: 'Students Mentored', desc: 'MERN stack & SDLC workshops', color: '#8b5cf6' },
  { num: 40, suffix: '%', label: 'Latency Cut', desc: 'Optimized schema & indexing', color: '#f59e0b' },
];

function StatCard({ stat, index }) {
  const [count, start] = useCountUp(stat.num);
  const [done, setDone] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      className="stat-tile glass"
      onViewportEnter={() => {
        if (!done) {
          setDone(true);
          setTimeout(start, index * 100);
        }
      }}
    >
      <div className="stat-top-row">
        <div className="stat-number" style={{ color: stat.color }}>
          {done ? count : 0}<span className="stat-suffix">{stat.suffix}</span>
        </div>
        <div className="stat-spark-dot" style={{ background: stat.color, boxShadow: `0 0 12px ${stat.color}` }} />
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
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-14%']);
  const op = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const [activeCliCommand, setActiveCliCommand] = useState(null);
  const [cliOutput, setCliOutput] = useState(null);

  const handleChipClick = (cmd, label) => {
    setActiveCliCommand(label);
    setCliOutput(`[SYS] Executing: ${label} ...`);
    setTimeout(() => {
      if (cmd === 'projects') {
        setCliOutput('✓ Success: Navigating to Featured Productions');
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
      } else if (cmd === 'skills') {
        setCliOutput('✓ Loaded: Java, PHP, Spring, MERN & Flutter Stack');
        document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' });
      } else if (cmd === 'hire') {
        setCliOutput('⚡ Opening Collaboration & Contact Form');
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
      }
      setTimeout(() => {
        setActiveCliCommand(null);
        setCliOutput(null);
      }, 2400);
    }, 400);
  };

  return (
    <section id="hero" ref={secRef} className="hero-section">
      {/* Dynamic Ambient Background Flare */}
      <div className="hero-bg">
        <div className="bg-orb orb-cyan" />
        <div className="bg-orb orb-violet" />
      </div>

      <motion.div style={{ y, opacity: op }} className="container hero-wrap">
        {/* Top Status Strip */}
        <div className="hero-status-bar">
          <div className="status-chip glass">
            <span className="status-dot live" />
            <span className="status-text">Available for Junior Software Developer Roles</span>
          </div>
          <LiveClock />
          <div className="location-chip glass">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Tenkasi, Tamil Nadu · Remote & Onsite</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="hero-main-grid">
          {/* Left: Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="hero-content"
          >
            <div className="hero-eyebrow">
              <div className="eyebrow-line" />
              <span>Junior Software Developer · Java Full Stack</span>
            </div>

            <h1 className="hero-heading display-xl">
              Building<br />
              <span className="animated-gradient-text">Full-Stack</span> Systems<br />
              That Scale.
            </h1>

            {/* Interactive Terminal */}
            <div className="hero-terminal glass mono">
              <div className="terminal-prompt-line">
                <span className="terminal-user">ajay@developer</span>
                <span className="terminal-colon">:</span>
                <span className="terminal-path">~</span>
                <span className="terminal-arrow">$</span>
                <span className="terminal-typing">{activeCliCommand || role}</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="terminal-cursor"
                >
                  _
                </motion.span>
              </div>

              {cliOutput && (
                <div className="terminal-output-line">
                  {cliOutput}
                </div>
              )}

              {/* Action Chips */}
              <div className="terminal-quick-chips">
                <span className="chips-label">Quick Run:</span>
                <button className="cli-chip" onClick={() => handleChipClick('projects', 'open projects')}>
                  $ open projects
                </button>
                <button className="cli-chip" onClick={() => handleChipClick('skills', 'cat skills.txt')}>
                  $ cat skills.txt
                </button>
                <button className="cli-chip cli-chip-highlight" onClick={() => handleChipClick('hire', 'npm run hire')}>
                  $ npm run hire
                </button>
              </div>
            </div>

            <p className="hero-bio">
              Full-Stack Developer & BCA (2026) graduate with <strong>2+ years of production experience</strong> architecting resilient web platforms and mobile apps using <strong>Java, Spring, PHP (PDO), MySQL, and Flutter</strong>.
            </p>

            <div className="hero-actions">
              <motion.a
                href="#projects"
                className="btn btn-primary hero-btn-main"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={e => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Explore Featured Works</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.a>

              <motion.a
                href="/assets/Ajay%20M-Junior%20Software%20Developer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary hero-btn-sec"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                <span>Download Resume (PDF)</span>
              </motion.a>
            </div>

            {/* Clean Core Stack Strip */}
            <div className="hero-trust">
              <div className="trust-item">
                <span className="trust-key">Primary Stack</span>
                <span className="trust-val">Java · Spring · PHP (PDO) · MySQL · Flutter · React</span>
              </div>
              <div className="trust-sep" />
              <div className="trust-item">
                <span className="trust-key">Location</span>
                <span className="trust-val trust-cyan">Tenkasi, Tamil Nadu</span>
              </div>
            </div>
          </motion.div>

          {/* Right: 3D Holographic Portrait Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="hero-visual"
          >
            <div className="visual-frame glass">
              <div className="frame-topbar">
                <div className="frame-dots">
                  <span /><span /><span />
                </div>
                <span className="frame-label mono">AJAY_M_PROFILE.SYS</span>
                <span className="frame-status-tag">ONLINE</span>
              </div>

              <div className="portrait-wrap">
                <div className="portrait-container">
                  <img
                    src="/assets/ajay_pro.png"
                    alt="Ajay M — Junior Software Developer"
                    className="portrait-img"
                  />
                  <div className="scanner-laser" />
                  
                  <div className="hud-bracket tl" />
                  <div className="hud-bracket tr" />
                  <div className="hud-bracket bl" />
                  <div className="hud-bracket br" />

                  <div className="hud-coords mono">TENKASI · 8.9594° N, 77.3149° E</div>
                </div>

                <div className="portrait-badge glass">
                  <span className="status-dot live" />
                  <span>Open for Software Developer Roles</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="hero-stats-grid">
          {STATS.map((s, i) => (
            <StatCard key={i} stat={s} index={i} />
          ))}
        </div>
      </motion.div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          padding: 150px 0 80px;
          overflow: hidden;
          display: flex;
          align-items: flex-start;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }
        .bg-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          animation: aurora-drift 18s ease-in-out infinite;
        }
        .orb-cyan {
          width: 600px;
          height: 600px;
          top: -10%;
          right: -5%;
          background: radial-gradient(circle, var(--cyan-glow) 0%, transparent 70%);
        }
        .orb-violet {
          width: 500px;
          height: 500px;
          bottom: -10%;
          left: -8%;
          background: radial-gradient(circle, var(--violet-glow) 0%, transparent 70%);
          animation-delay: -8s;
        }

        .hero-wrap {
          position: relative;
          z-index: 1;
          width: 100%;
        }

        .hero-status-bar {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 44px;
          flex-wrap: wrap;
        }
        .status-chip, .clock-chip, .location-chip {
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 0.78rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-2);
        }
        .status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--emerald);
          flex-shrink: 0;
        }
        .status-dot.live {
          box-shadow: 0 0 10px var(--emerald);
          animation: pulse-glow 2s infinite;
        }
        .clock-digits {
          color: var(--cyan);
          font-weight: 700;
        }
        .clock-zone {
          font-size: 0.65rem;
          color: var(--text-4);
          font-weight: 800;
        }

        .hero-main-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 50px;
          align-items: center;
          margin-bottom: 60px;
        }

        .hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--cyan);
          margin-bottom: 20px;
        }
        .eyebrow-line {
          width: 28px;
          height: 2px;
          background: linear-gradient(90deg, var(--cyan), transparent);
        }

        .hero-heading {
          margin-bottom: 22px;
        }

        .hero-terminal {
          padding: 16px 20px;
          border-radius: 16px;
          border: 1px solid var(--border-cyan) !important;
          background: var(--surface-2) !important;
          margin-bottom: 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        .terminal-prompt-line {
          display: flex;
          align-items: center;
          font-size: 0.92rem;
          flex-wrap: wrap;
          gap: 4px;
        }
        .terminal-user { color: var(--cyan); font-weight: 700; }
        .terminal-colon { color: var(--text-4); }
        .terminal-path { color: var(--violet); font-weight: 700; }
        .terminal-arrow { color: var(--emerald); font-weight: 800; margin-right: 4px; }
        .terminal-typing { color: var(--text-1); font-weight: 600; }
        .terminal-cursor { color: var(--cyan); font-weight: 900; }

        .terminal-output-line {
          font-size: 0.74rem;
          color: var(--cyan);
          padding-top: 2px;
          font-weight: 700;
        }

        .terminal-quick-chips {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          padding-top: 8px;
          border-top: 1px solid var(--border);
        }
        .chips-label {
          font-size: 0.68rem;
          color: var(--text-4);
          font-weight: 700;
          text-transform: uppercase;
        }
        .cli-chip {
          background: var(--surface-3);
          border: 1px solid var(--border);
          color: var(--text-2);
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .cli-chip:hover {
          border-color: var(--cyan);
          color: var(--cyan);
          background: var(--cyan-soft);
        }
        .cli-chip-highlight {
          color: var(--emerald);
          border-color: var(--emerald-soft);
        }
        .cli-chip-highlight:hover {
          border-color: var(--emerald);
          color: var(--emerald);
          background: var(--emerald-soft);
        }

        .hero-bio {
          font-size: 1.05rem;
          line-height: 1.75;
          color: var(--text-2);
          max-width: 560px;
          margin-bottom: 32px;
        }
        .hero-bio strong {
          color: var(--cyan);
          font-weight: 700;
        }

        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }
        .hero-btn-main {
          padding: 15px 30px !important;
          border-radius: 12px !important;
        }
        .hero-btn-sec {
          padding: 15px 26px !important;
          border-radius: 12px !important;
        }

        .hero-trust {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
          padding-top: 18px;
          border-top: 1px solid var(--border);
        }
        .trust-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .trust-key {
          font-size: 0.65rem;
          font-weight: 800;
          color: var(--text-4);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .trust-val {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-2);
        }
        .trust-cyan { color: var(--cyan) !important; font-weight: 800; }
        .trust-sep {
          width: 1px;
          height: 28px;
          background: var(--border-2);
        }

        /* 3D Visual Panel */
        .visual-frame {
          border-radius: 26px;
          overflow: hidden;
          border: 1px solid var(--border-cyan) !important;
          box-shadow: 0 35px 80px rgba(0, 0, 0, 0.45);
          background: var(--surface) !important;
        }
        .frame-topbar {
          padding: 12px 18px;
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--surface-2);
        }
        .frame-dots { display: flex; gap: 6px; }
        .frame-dots span { width: 9px; height: 9px; border-radius: 50%; background: #ff5f57; }
        .frame-dots span:nth-child(2) { background: #febc2e; }
        .frame-dots span:nth-child(3) { background: #28c840; }
        .frame-label {
          font-size: 0.68rem;
          font-weight: 800;
          color: var(--text-3);
          letter-spacing: 0.12em;
        }
        .frame-status-tag {
          font-size: 0.6rem;
          font-weight: 900;
          color: var(--emerald);
          background: var(--emerald-soft);
          padding: 2px 8px;
          border-radius: 4px;
          border: 1px solid var(--emerald-glow);
        }

        .portrait-wrap {
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .portrait-container {
          position: relative;
          width: 280px;
          height: 360px;
          border-radius: 18px;
          overflow: hidden;
          border: 1.5px solid var(--border-cyan);
          background: var(--surface-2);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .portrait-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.5s ease;
        }
        .portrait-container:hover .portrait-img {
          transform: scale(1.04);
        }

        .scanner-laser {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--cyan);
          box-shadow: 0 0 14px var(--cyan);
          animation: scan-line 3.5s linear infinite;
        }

        .hud-bracket {
          position: absolute;
          width: 12px;
          height: 12px;
          border: 2px solid var(--cyan);
        }
        .hud-bracket.tl { top: 8px; left: 8px; border-right: none; border-bottom: none; }
        .hud-bracket.tr { top: 8px; right: 8px; border-left: none; border-bottom: none; }
        .hud-bracket.bl { bottom: 8px; left: 8px; border-right: none; border-top: none; }
        .hud-bracket.br { bottom: 8px; right: 8px; border-left: none; border-top: none; }

        .hud-coords {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.6rem;
          color: var(--text-3);
          background: rgba(0, 0, 0, 0.7);
          padding: 2px 8px;
          border-radius: 4px;
          white-space: nowrap;
          border: 1px solid var(--border);
        }

        .portrait-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 100px;
          font-size: 0.76rem;
          font-weight: 700;
          color: var(--text-2);
        }

        /* Stats Grid */
        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }
        .stat-tile {
          padding: 22px 18px;
          border-radius: 18px;
          position: relative;
          overflow: hidden;
          border: 1px solid var(--border) !important;
          background: var(--surface) !important;
          transition: all 0.3s ease;
        }
        .stat-tile:hover {
          border-color: var(--border-cyan) !important;
          background: var(--surface-2) !important;
        }
        .stat-top-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 6px;
        }
        .stat-number {
          font-family: 'Outfit', sans-serif;
          font-size: 2.4rem;
          font-weight: 900;
          line-height: 1;
        }
        .stat-suffix { font-size: 1.2rem; font-weight: 700; }
        .stat-spark-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          margin-top: 6px;
        }
        .stat-label {
          font-size: 0.86rem;
          font-weight: 800;
          color: var(--text-1);
          margin-bottom: 3px;
        }
        .stat-desc {
          font-size: 0.74rem;
          color: var(--text-3);
          line-height: 1.45;
        }
        .stat-accent-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          opacity: 0.8;
        }

        @media (max-width: 1080px) {
          .hero-main-grid { grid-template-columns: 1fr; gap: 40px; }
          .hero-content { text-align: center; }
          .hero-eyebrow, .hero-actions, .hero-trust, .terminal-prompt-line, .terminal-quick-chips, .hero-status-bar {
            justify-content: center;
          }
          .hero-bio { margin: 0 auto 32px; }
          .portrait-wrap { align-items: center; }
          .hero-stats-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .hero-section { padding: 120px 0 40px; }
          .portrait-container { width: 240px; height: 320px; }
          .hero-stats-grid { grid-template-columns: 1fr 1fr; gap: 10px; }
          .stat-tile { padding: 16px 14px; }
          .stat-number { font-size: 1.9rem; }
        }
      `}</style>
    </section>
  );
}
