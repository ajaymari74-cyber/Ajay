/**
 * Footer — 2026 Premium Design
 */
import { motion } from 'framer-motion';

const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ajay-m-100628331/' },
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'Email', href: 'mailto:ajaymari74@gmail.com' },
];

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const go = (e, href) => { e.preventDefault(); document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }); };

  return (
    <footer style={{ borderTop: '1px solid var(--border)', paddingTop: '48px', paddingBottom: '40px' }}>
      <div className="container">
        {/* Top row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '24px', alignItems: 'start', marginBottom: '40px' }}>
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.3rem', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: '8px' }}>
              <span style={{ color: 'var(--lime)' }}>Ajay</span>
              <span style={{ color: 'rgba(255,255,255,0.85)' }}> M.</span>
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-3)', lineHeight: 1.6, maxWidth: '220px' }}>
              Full-Stack Web & Mobile Developer<br />
              Kanyakumari, Tamil Nadu · India
            </p>
          </motion.div>

          {/* Nav links */}
          <motion.nav
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}
          >
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => go(e, l.href)}
                style={{ fontSize: '0.8rem', color: 'var(--text-3)', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 500 }}
                onMouseEnter={(e) => e.target.style.color = 'var(--lime)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-3)'}
              >
                {l.label}
              </a>
            ))}
          </motion.nav>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                style={{ fontSize: '0.8rem', color: 'var(--text-3)', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 500 }}
                onMouseEnter={(e) => e.target.style.color = 'var(--lime)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-3)'}
              >
                {l.label} ↗
              </a>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'var(--border)', marginBottom: '20px' }} />

        {/* Bottom row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontSize: '0.72rem', color: 'var(--text-4)' }}>
            © {year} Ajay M · All rights reserved
          </p>
          <p style={{ fontSize: '0.72rem', color: 'var(--text-4)' }}>
            Built with React, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
