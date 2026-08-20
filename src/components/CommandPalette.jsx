/**
 * CommandPalette.jsx — 2026 Global Quick-Action Modal (Ctrl + K)
 * Keyboard-driven navigation, section shortcuts, instant actions & live search
 */
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const COMMANDS = [
  {
    category: 'Navigation',
    items: [
      { id: 'nav-hero', title: 'Home / Top', icon: '⚡', action: () => scrollToSection('#hero'), shortcut: 'H' },
      { id: 'nav-about', title: 'About Ajay & Background', icon: '👤', action: () => scrollToSection('#about'), shortcut: 'A' },
      { id: 'nav-skills', title: 'Technical Arsenal & Java Stack', icon: '🛠️', action: () => scrollToSection('#skills'), shortcut: 'S' },
      { id: 'nav-projects', title: 'Featured Projects & Case Studies', icon: '🚀', action: () => scrollToSection('#projects'), shortcut: 'P' },
      { id: 'nav-experience', title: 'Experience, Mentorship & Credentials', icon: '💼', action: () => scrollToSection('#experience'), shortcut: 'E' },
      { id: 'nav-contact', title: 'Get in Touch / Contact Hub', icon: '📬', action: () => scrollToSection('#contact'), shortcut: 'C' },
    ]
  },
  {
    category: 'Projects',
    items: [
      { id: 'proj-gasckk', title: 'GASCKK Official College Portal (Live)', icon: '🏛️', action: () => window.open('https://gasckk.org.in', '_blank') },
      { id: 'proj-astra-web', title: 'Astra Association Management System (Live)', icon: '🌐', action: () => window.open('https://astraapp.gasckk.org.in/', '_blank') },
      { id: 'proj-geotrack', title: 'GPS-Based Attendance System (Haversine)', icon: '📍', action: () => scrollToSection('#projects') },
      { id: 'proj-astra-app', title: 'Astra Cross-Platform Mobile App (Flutter)', icon: '📱', action: () => scrollToSection('#projects') },
    ]
  },
  {
      { id: 'act-theme', title: 'Toggle Theme (Dark / Light)', icon: '🎨', action: (notify, toggleTheme, theme) => { if (toggleTheme) toggleTheme(); if (notify) notify(`Switched to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`); }, shortcut: 'T' },
      { id: 'act-resume', title: 'Download Resume (PDF)', icon: '📄', action: () => window.open('/assets/Ajay%20M-Junior%20Software%20Developer.pdf', '_blank') },
      { id: 'act-email', title: 'Copy Email (ajaymari74@gmail.com)', icon: '✉️', action: (notify) => copyToClipboard('ajaymari74@gmail.com', 'Email copied to clipboard!', notify) },
      { id: 'act-phone', title: 'Copy WhatsApp / Phone (+91 94874 34031)', icon: '📞', action: (notify) => copyToClipboard('+919487434031', 'Phone number copied to clipboard!', notify) },
      { id: 'act-github', title: 'Open GitHub Profile', icon: '🐙', action: () => window.open('https://github.com/ajaymari74-cyber', '_blank') },
      { id: 'act-linkedin', title: 'Open LinkedIn Profile', icon: '🔗', action: () => window.open('https://www.linkedin.com/in/ajay-m-100628331/', '_blank') },
    ]
  }
];

function scrollToSection(selector) {
  const el = document.querySelector(selector);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

function copyToClipboard(text, msg, notify) {
  navigator.clipboard.writeText(text);
  if (notify) notify(msg);
}

export default function CommandPalette({ isOpen, onClose, theme, toggleTheme }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [toast, setToast] = useState(null);
  const inputRef = useRef(null);

  const allFilteredItems = COMMANDS.flatMap(cat => 
    cat.items.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      cat.category.toLowerCase().includes(query.toLowerCase())
    )
  );

  const notify = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 2500);
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }

      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % (allFilteredItems.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + allFilteredItems.length) % (allFilteredItems.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (allFilteredItems[selectedIndex]) {
          allFilteredItems[selectedIndex].action(notify, toggleTheme, theme);
          if (!allFilteredItems[selectedIndex].id.includes('email') && !allFilteredItems[selectedIndex].id.includes('phone') && !allFilteredItems[selectedIndex].id.includes('theme')) {
            onClose();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, allFilteredItems, onClose, theme, toggleTheme]);

  if (!isOpen) return null;

  return (
    <div className="cmd-backdrop" onClick={onClose}>
      <motion.div
        className="cmd-modal glass"
        initial={{ opacity: 0, scale: 0.95, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -20 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        onClick={e => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="cmd-search-bar">
          <svg className="cmd-search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            className="cmd-input"
            placeholder="Search projects, jump to section, or run action..."
            value={query}
            onChange={e => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
          />
          <kbd className="cmd-esc-badge" onClick={onClose}>ESC</kbd>
        </div>

        {/* Action List */}
        <div className="cmd-list-container">
          {allFilteredItems.length === 0 ? (
            <div className="cmd-empty-state">
              <p>No matching commands found for "{query}"</p>
            </div>
          ) : (
            COMMANDS.map(cat => {
              const matchedItems = cat.items.filter(item => 
                item.title.toLowerCase().includes(query.toLowerCase()) ||
                cat.category.toLowerCase().includes(query.toLowerCase())
              );
              if (matchedItems.length === 0) return null;

              return (
                <div key={cat.category} className="cmd-group">
                  <div className="cmd-category-title">{cat.category}</div>
                  {matchedItems.map(item => {
                    const itemGlobalIndex = allFilteredItems.findIndex(i => i.id === item.id);
                    const isSelected = itemGlobalIndex === selectedIndex;

                    return (
                      <div
                        key={item.id}
                        className={`cmd-item ${isSelected ? 'selected' : ''}`}
                        onClick={() => {
                          item.action(notify, toggleTheme, theme);
                          if (!item.id.includes('email') && !item.id.includes('phone') && !item.id.includes('theme')) {
                            onClose();
                          }
                        }}
                        onMouseEnter={() => setSelectedIndex(itemGlobalIndex)}
                      >
                        <div className="cmd-item-left">
                          <span className="cmd-item-icon">{item.icon}</span>
                          <span className="cmd-item-title">{item.title}</span>
                        </div>
                        {item.shortcut && (
                          <kbd className="cmd-key-badge">{item.shortcut}</kbd>
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            })
          )}
        </div>

        {/* Footer Navigation Hints */}
        <div className="cmd-footer">
          <div className="cmd-hints">
            <span><kbd className="cmd-key">↑</kbd><kbd className="cmd-key">↓</kbd> to navigate</span>
            <span><kbd className="cmd-key">↵</kbd> to select</span>
            <span><kbd className="cmd-key">esc</kbd> to close</span>
          </div>
          <button
            className="cmd-theme-quick-btn"
            onClick={() => {
              toggleTheme();
              notify(`Switched to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`);
            }}
          >
            {theme === 'dark' ? '☀️ Switch to Light Mode' : '🌙 Switch to Dark Mode'}
          </button>
        </div>

        {/* Toast */}
        <AnimatePresence>
          {toast && (
            <motion.div
              className="cmd-toast"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
            >
              <span>✓</span> {toast}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <style>{`
        .cmd-backdrop {
          position: fixed;
          inset: 0;
          z-index: 10000;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 100px 16px 20px;
        }

        .cmd-dialog {
          width: 100%;
          max-width: 640px;
          border-radius: 20px;
          border: 1px solid var(--border-cyan) !important;
          background: var(--bg-card) !important;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6), 0 0 0 1px var(--border);
          overflow: hidden;
          position: relative;
        }

        .cmd-search-bar {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px 24px;
          border-bottom: 1px solid var(--border);
          background: var(--surface-2);
        }

        .cmd-search-icon {
          color: var(--cyan);
          flex-shrink: 0;
        }

        .cmd-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-1);
          font-family: 'Inter', sans-serif;
          font-size: 1.05rem;
          font-weight: 500;
        }

        .cmd-input::placeholder { color: var(--text-4); }

        .cmd-esc-badge {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--text-3);
          background: var(--surface-3);
          border: 1px solid var(--border);
          padding: 3px 8px;
          border-radius: 6px;
          cursor: pointer;
        }

        .cmd-list-container {
          max-height: 380px;
          overflow-y: auto;
          padding: 12px;
        }

        .cmd-group { margin-bottom: 12px; }

        .cmd-group-heading {
          font-size: 0.68rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: var(--cyan);
          padding: 8px 12px 6px;
        }

        .cmd-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.15s ease;
          border: 1px solid transparent;
        }

        .cmd-item.selected {
          background: var(--cyan-soft);
          border-color: var(--border-cyan);
        }

        .cmd-item-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .cmd-item-icon { font-size: 1.1rem; }

        .cmd-item-title {
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--text-1);
        }

        .cmd-key-badge {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--text-3);
          background: var(--surface-2);
          border: 1px solid var(--border);
          padding: 2px 7px;
          border-radius: 5px;
        }

        .cmd-empty-state {
          padding: 32px 16px;
          text-align: center;
          color: var(--text-3);
          font-size: 0.9rem;
        }

        .cmd-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 20px;
          background: var(--surface-2);
          border-top: 1px solid var(--border);
          font-size: 0.75rem;
          color: var(--text-3);
        }

        .cmd-hints {
          display: flex;
          gap: 14px;
          align-items: center;
        }

        .cmd-key {
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
          color: var(--text-2);
          background: var(--surface-3);
          border: 1px solid var(--border);
          padding: 1px 5px;
          border-radius: 4px;
          margin-right: 4px;
        }

        .cmd-theme-quick-btn {
          background: transparent;
          border: 1px solid var(--border);
          color: var(--text-2);
          padding: 4px 10px;
          border-radius: 8px;
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .cmd-theme-quick-btn:hover {
          color: var(--cyan);
          border-color: var(--cyan);
        }

        .cmd-toast {
          position: absolute;
          bottom: 60px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--cyan);
          color: var(--btn-text);
          padding: 8px 18px;
          border-radius: 100px;
          font-size: 0.82rem;
          font-weight: 800;
          box-shadow: 0 8px 24px var(--cyan-glow);
          display: flex;
          align-items: center;
          gap: 6px;
          z-index: 10;
        }

        @media (max-width: 600px) {
          .cmd-backdrop { padding-top: 40px; }
          .cmd-hints { display: none; }
        }
      `}</style>
    </div>
  );
}
