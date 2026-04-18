/**
 * About Section — 2026 Premium Bento Grid Layout
 * Left column: bold heading + bio
 * Right: bento grid of highlight cards, quote, what-I-build tags
 */
import { motion } from 'framer-motion';

const highlights = [
  { icon: '🎓', title: 'BCA Graduate 2026', sub: 'Govt. Arts & Science College, Kanyakumari · MSU Affiliated' },
  { icon: '🌐', title: 'Web Dev · GASCKK.ORG.IN', sub: '2023–Present · Live production systems owned solo' },
  { icon: '🏛️', title: 'Full-Stack · Astra System', sub: '12+ DB modules, custom APIs, Hostinger deployed' },
  { icon: '📱', title: 'Flutter Mobile Developer', sub: 'Cross-platform iOS/Android from single codebase' },
  { icon: '🧑‍🏫', title: 'MERN Stack Mentor', sub: '30+ junior devs trained · hands-on workshops' },
];

const buildTags = [
  'REST APIs', 'Admin Dashboards', 'Mobile Apps', 'CMS Systems',
  'GPS Geo-fencing', 'Database Architecture', 'College Portals', 'Cloud Deployments',
];

const slideIn = (direction = 'up', delay = 0) => ({
  hidden: { opacity: 0, y: direction === 'up' ? 30 : -30, x: direction === 'left' ? -30 : direction === 'right' ? 30 : 0 },
  visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] } },
});

export default function About() {
  return (
    <section id="about" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Subtle orb */}
      <div style={{ position: 'absolute', top: 0, right: '-100px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none', filter: 'blur(60px)' }} />

      <div className="container">
        {/* ── Section header ── */}
        <motion.div
          variants={slideIn('up', 0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ marginBottom: '56px' }}
        >
          <p className="label-sm" style={{ marginBottom: '12px' }}>About me</p>
          <h2 className="display-lg" style={{ maxWidth: '700px' }}>
            A developer who{' '}
            <span className="gradient-text">ships real products</span>{' '}
            for real users.
          </h2>
        </motion.div>

        {/* ── Main Grid ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', alignItems: 'start' }}>
          {/* LEFT COLUMN */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* Bio card */}
            <motion.div
              variants={slideIn('left', 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass"
              style={{ padding: '32px' }}
            >
              {/* Avatar row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                <div style={{
                  width: '56px', height: '56px', borderRadius: '18px',
                  background: 'linear-gradient(135deg, rgba(204,255,0,0.2), rgba(124,58,237,0.2))',
                  border: '1px solid rgba(204,255,0,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.6rem', position: 'relative',
                }}>
                  👨‍💻
                  <span style={{ position: 'absolute', bottom: '-3px', right: '-3px', width: '12px', height: '12px', background: '#22c55e', borderRadius: '50%', border: '2px solid #060608' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', fontFamily: 'Syne, sans-serif' }}>Ajay M</h3>
                  <p style={{ fontSize: '0.78rem', color: 'var(--lime)', fontWeight: 600 }}>Full-Stack Developer</p>
                  <p style={{ fontSize: '0.72rem', color: 'var(--text-3)', marginTop: '1px' }}>Kanyakumari, Tamil Nadu</p>
                </div>
              </div>

              <p className="body-md" style={{ marginBottom: '16px' }}>
                I'm an aspiring full-stack developer in my final year of BCA at Government Arts and Science
                College, Kanyakumari. Since <span style={{ color: '#fff', fontWeight: 600 }}>2023</span>,
                I've been contributing to real production systems — not just side projects.
              </p>
              <p className="body-md">
                My core strengths: building{' '}
                <span style={{ color: 'var(--lime)', fontWeight: 600 }}>secure PHP/PDO APIs</span>,
                architecting{' '}
                <span style={{ color: 'var(--lime)', fontWeight: 600 }}>normalized databases</span>, and
                crafting{' '}
                <span style={{ color: 'var(--lime)', fontWeight: 600 }}>cross-platform Flutter apps</span>.
                I also actively mentor junior developers in MERN stack.
              </p>
            </motion.div>

            {/* Quote card */}
            <motion.div
              variants={slideIn('left', 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass"
              style={{ padding: '28px 28px 28px 32px', borderLeft: '3px solid var(--lime)', borderRadius: 'var(--r-lg)' }}
            >
              <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.15rem', fontWeight: 600, color: 'rgba(255,255,255,0.9)', lineHeight: '1.5', fontStyle: 'italic' }}>
                "Turning complex requirements into elegant, scalable digital systems."
              </p>
            </motion.div>

            {/* Currently exploring */}
            <motion.div
              variants={slideIn('left', 0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ padding: '18px 22px', borderRadius: 'var(--r-md)', background: 'rgba(204,255,0,0.05)', border: '1px solid rgba(204,255,0,0.15)' }}
            >
              <p className="body-sm">
                <span style={{ color: 'var(--lime)', fontWeight: 700, fontSize: '0.82rem' }}>Currently exploring →</span>{' '}
                Cloud infrastructure, microservices architecture, and React Native.
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* Highlights */}
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                variants={slideIn('right', 0.05 * i + 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.01, x: 4 }}
                className="glass glass-hover"
                style={{ padding: '16px 18px', cursor: 'default' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div className="skill-icon" style={{ fontSize: '1rem' }}>{h.icon}</div>
                  <div>
                    <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-1)' }}>{h.title}</p>
                    <p style={{ fontSize: '0.74rem', color: 'var(--text-3)', marginTop: '2px' }}>{h.sub}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* What I build */}
            <motion.div
              variants={slideIn('right', 0.35)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass"
              style={{ padding: '20px' }}
            >
              <p className="label-sm" style={{ marginBottom: '12px', color: 'var(--text-3)' }}>What I build</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {buildTags.map((t) => (
                  <span key={t} className="tag" style={{ fontSize: '0.72rem', padding: '5px 12px' }}>{t}</span>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              variants={slideIn('right', 0.42)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass"
              style={{ padding: '18px 20px', display: 'flex', gap: '32px' }}
            >
              {[{ lang: 'Tamil', level: 'Native' }, { lang: 'English', level: 'Intermediate' }].map((l) => (
                <div key={l.lang}>
                  <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-1)' }}>{l.lang}</p>
                  <p style={{ fontSize: '0.72rem', color: l.level === 'Native' ? 'var(--lime)' : 'var(--text-3)', fontWeight: 600 }}>{l.level}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
