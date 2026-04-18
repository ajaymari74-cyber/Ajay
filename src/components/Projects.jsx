/**
 * Projects Section — 2026 Premium Design
 * Featured large card (project #1) + 3-col grid
 * Each card: 3D tilt, accent line reveal on hover, spotlight glow
 */
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

const projects = [
  {
    id: 1,
    num: '01',
    title: 'Astra Association Management System',
    subtitle: 'Full-Stack CMS & Admin Portal',
    emoji: '🏛️',
    description: 'A comprehensive PHP/PDO full-stack application managing 12+ database modules for an academic association. Features a custom ASTRA_YY_XXXX primary key architecture, secure REST API layer, and a modern Bootstrap 5 admin interface — deployed on Hostinger.',
    highlights: [
      '12+ relational DB modules with fully normalized schema',
      'Custom ASTRA_YY_XXXX non-colliding primary key architecture',
      'Secure PHP/PDO REST API with parameterized queries (SQL injection proof)',
      'Bootstrap 5 admin UI with DataTables & AJAX file/image handling',
      'Live at astraapp.gasckk.org.in on Hostinger VPS',
    ],
    stack: ['PHP', 'PDO', 'MySQL', 'Bootstrap 5', 'JavaScript', 'REST API', 'Hostinger'],
    link: '#',
    status: 'Live',
    featured: true,
  },
  {
    id: 2,
    num: '02',
    title: 'GPS-Based Shop Visit Attendance',
    subtitle: 'Real-Time Geo-Fencing System',
    emoji: '📍',
    description: 'Production-grade attendance system using Haversine formula geo-fencing for field employees. Node.js/PHP backend, real-time location capture, admin dashboard with reporting analytics.',
    highlights: [
      'Haversine formula geo-fencing & distance validation',
      'Real-time Geolocation API integration',
      'Node.js/PHP REST endpoints for visit logging',
    ],
    stack: ['Node.js', 'PHP', 'MySQL', 'Haversine', 'Geolocation API'],
    link: '#',
    status: 'Live',
    featured: false,
  },
  {
    id: 3,
    num: '03',
    title: 'Astra Association Mobile App',
    subtitle: 'Cross-Platform Flutter · Final Year Project',
    emoji: '📱',
    description: 'Flutter & Dart cross-platform mobile app. Members access activities, committees, awards, and galleries via a polished UI consuming a live REST API backend.',
    highlights: [
      'Flutter & Dart — Android/iOS from single codebase',
      'Secure image/document upload with fallback handling',
      'Fast search via unique Association IDs',
    ],
    stack: ['Flutter', 'Dart', 'PHP Backend', 'REST API', 'MySQL'],
    link: '#',
    status: 'Final Year Project',
    featured: false,
  },
  {
    id: 4,
    num: '04',
    title: 'GASCKK College Website',
    subtitle: 'Official Institutional Portal',
    emoji: '🏫',
    description: 'Full ownership of the official Govt. Arts & Science College, Kanyakumari portal. PHP-MySQL backend, departmental content, ranklists, and academic updates.',
    highlights: [
      'PHP-MySQL backend with optimized query performance',
      'Year-wise media management for academic content',
      'CSS-animated scrolling announcement ticker',
    ],
    stack: ['PHP', 'MySQL', 'Bootstrap 5', 'JavaScript', 'SEO'],
    link: 'https://gasckk.org.in',
    status: 'Live · 2023–Present',
    featured: false,
  },
];

function ProjectCard({ project, index, isFeatured }) {
  const cardRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), { stiffness: 180, damping: 22 });
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), { stiffness: 180, damping: 22 });
  const [gPos, setGPos] = useState({ x: 50, y: 50 });

  const onMove = (e) => {
    const r = cardRef.current?.getBoundingClientRect();
    if (!r) return;
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    mx.set(x - 0.5);
    my.set(y - 0.5);
    setGPos({ x: x * 100, y: y * 100 });
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 1200, position: 'relative' }}
      className="proj-card"
    >
      {/* Accent top bar (slides in on hover via CSS) */}
      <div className="proj-accent" />

      {/* Spotlight gradient */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 'inherit', pointerEvents: 'none',
        background: `radial-gradient(circle at ${gPos.x}% ${gPos.y}%, rgba(204,255,0,0.055) 0%, transparent 55%)`,
        opacity: 0, transition: 'opacity 0.3s',
      }} className="proj-spotlight" />

      <div style={{ padding: isFeatured ? '36px' : '26px', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: isFeatured ? '52px' : '42px',
              height: isFeatured ? '52px' : '42px',
              borderRadius: '14px',
              background: 'rgba(204,255,0,0.08)',
              border: '1px solid rgba(204,255,0,0.14)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: isFeatured ? '1.5rem' : '1.2rem',
              flexShrink: 0,
            }}>
              {project.emoji}
            </div>
            <div>
              <h3 style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: isFeatured ? '1.08rem' : '0.9rem',
                fontWeight: 700, color: '#fff', lineHeight: 1.3,
              }}>
                {project.title}
              </h3>
              <p style={{ fontSize: '0.7rem', color: 'var(--text-3)', marginTop: '3px' }}>{project.subtitle}</p>
            </div>
          </div>
          <span style={{
            flexShrink: 0, fontSize: '0.62rem', fontWeight: 700, padding: '4px 11px',
            borderRadius: '100px', color: 'var(--lime)',
            border: '1px solid rgba(204,255,0,0.22)',
            background: 'rgba(204,255,0,0.05)',
            letterSpacing: '0.03em', textTransform: 'uppercase', whiteSpace: 'nowrap',
          }}>
            ● {project.status}
          </span>
        </div>

        {/* Description */}
        <p style={{ fontSize: '0.84rem', color: 'var(--text-2)', lineHeight: 1.65, marginBottom: '14px' }}>
          {project.description}
        </p>

        {/* Highlights — full list only on featured */}
        {isFeatured && (
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
            {project.highlights.map((h, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.78rem', color: 'var(--text-2)' }}>
                <span style={{ color: 'var(--lime)', flexShrink: 0, marginTop: '1px' }}>→</span>
                {h}
              </li>
            ))}
          </ul>
        )}

        {/* Stack pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '16px' }}>
          {project.stack.map((t) => (
            <motion.span
              key={t}
              whileHover={{ scale: 1.08, y: -1 }}
              style={{
                fontSize: '0.66rem', fontWeight: 600, padding: '4px 11px',
                borderRadius: '100px', color: 'var(--text-3)',
                border: '1px solid var(--border)', background: 'var(--surface)',
              }}
            >
              {t}
            </motion.span>
          ))}
        </div>

        {/* CTA link */}
        <motion.a
          href={project.link}
          target={project.link !== '#' ? '_blank' : undefined}
          rel="noopener noreferrer"
          whileHover={{ x: 5 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            fontSize: '0.78rem', fontWeight: 600, color: 'var(--lime)',
            textDecoration: 'none', transition: 'gap 0.2s',
          }}
        >
          {project.link !== '#' ? 'Visit Live Site' : 'View Project'} →
        </motion.a>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '5%', right: '-120px', width: '450px', height: '450px', background: 'radial-gradient(circle, rgba(204,255,0,0.04) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }} />

      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '56px' }}
        >
          <p className="label-sm" style={{ marginBottom: '12px' }}>What I've built</p>
          <h2 className="display-lg">
            Selected{' '}
            <span className="gradient-text">projects</span>
          </h2>
          <p className="body-lg" style={{ marginTop: '12px', maxWidth: '540px' }}>
            Real-world systems powering actual institutions and businesses — not just side projects.
          </p>
        </motion.div>

        {/* Featured project — full width */}
        {featured && <ProjectCard project={featured} index={0} isFeatured />}

        <div style={{ height: '12px' }} />

        {/* 3-col grid for the rest */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
          {rest.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i + 1} isFeatured={false} />
          ))}
        </div>
      </div>

      {/* Enable spotlight on hover via global CSS */}
      <style>{`
        .proj-card:hover .proj-spotlight { opacity: 1 !important; }
        @media (max-width: 768px) {
          #projects .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
