/**
 * FeedbackWidget — 2026 Professional Portfolio
 * Diagnostic assessment panel · Rating system · Smooth animations
 */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FeedbackWidget() {
  const [isOpen,  setIsOpen]  = useState(false);
  const [name,    setName]    = useState('');
  const [email,   setEmail]   = useState('');
  const [rating,  setRating]  = useState(0);
  const [hovered, setHovered] = useState(0);
  const [message, setMessage] = useState('');
  const [status,  setStatus]  = useState('idle');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { threshold: 0.1 }
    );
    const footer = document.querySelector('.footer-root');
    if (footer) observer.observe(footer);
    return () => { if (footer) observer.unobserve(footer); };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('feedback-open');
    } else {
      document.body.classList.remove('feedback-open');
    }
    return () => document.body.classList.remove('feedback-open');
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || rating === 0) return;
    setStatus('submitting');
    
    try {
      const payload = {
        fields: {
          name: { stringValue: name || "" },
          email: { stringValue: email || "" },
          rating: { stringValue: ratingLabels[rating] || "" },
          thoughts: { stringValue: message || "" },
          createdAt: { timestampValue: new Date().toISOString() }
        }
      };

      const res = await fetch('https://firestore.googleapis.com/v1/projects/ajay-portfolio-a80aa/databases/(default)/documents/portfolio_feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error('Failed to send');

      setStatus('success');
      setTimeout(() => {
        setIsOpen(false);
        setTimeout(() => {
          setStatus('idle'); setRating(0); setMessage(''); setName(''); setEmail('');
        }, 400);
      }, 2200);
    } catch (error) {
      console.error(error);
      alert('Failed to submit feedback. Please try again later.');
      setStatus('idle');
    }
  };

  const ratingLabels = ['', 'Poor', 'Fair', 'Good', 'Great', 'Excellent'];

  return (
    <>
      {/* Trigger Tab */}
      <AnimatePresence>
        {visible && (
          <motion.button className="fw-trigger" onClick={() => setIsOpen(true)}
            initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            whileHover={{ x: -6, background: 'var(--lime)', color: '#000' }}
            aria-label="Give Feedback">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            <span className="fw-trigger-text">Feedback</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fw-overlay" onClick={() => setIsOpen(false)}>
            <motion.div className="fw-panel glass"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ type: 'spring', damping: 28, stiffness: 350 }}
              onClick={e => e.stopPropagation()}>

              {/* Panel Header */}
              <div className="fw-header">
                <div className="fw-header-left">
                  <span className="fw-live-dot" />
                  <span className="fw-title">Portfolio Assessment</span>
                </div>
                <button className="fw-close" onClick={() => setIsOpen(false)}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" width="20" height="20"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </button>
              </div>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div key="success" className="fw-success"
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                    <div className="fw-success-icon">✨</div>
                    <h3>Thank You!</h3>
                    <p>Your feedback has been received and means a lot.</p>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="fw-form">
                    <div className="fw-row">
                      <div className="fw-field">
                        <label className="fw-label">Your Name</label>
                        <input type="text" placeholder="John Doe" value={name} onChange={e => setName(e.target.value)} required className="fw-input" />
                      </div>
                      <div className="fw-field">
                        <label className="fw-label">Email (optional)</label>
                        <input type="email" placeholder="you@email.com" value={email} onChange={e => setEmail(e.target.value)} className="fw-input" />
                      </div>
                    </div>

                    <div className="fw-rating-section">
                      <label className="fw-label">Overall Experience</label>
                      <div className="fw-stars">
                        {[1,2,3,4,5].map(i => (
                          <button key={i} type="button"
                            className={`fw-star ${(hovered || rating) >= i ? 'active' : ''}`}
                            onMouseEnter={() => setHovered(i)}
                            onMouseLeave={() => setHovered(0)}
                            onClick={() => setRating(i)}>
                            ★
                          </button>
                        ))}
                      </div>
                      {(hovered || rating) > 0 && (
                        <span className="fw-rating-label">{ratingLabels[hovered || rating]}</span>
                      )}
                    </div>

                    <div className="fw-field">
                      <label className="fw-label">Your Thoughts</label>
                      <textarea rows={4} placeholder="What did you think of this portfolio? Any suggestions?"
                        value={message} onChange={e => setMessage(e.target.value.slice(0, 500))}
                        className="fw-textarea fw-input" />
                      <span className="fw-char-count">{message.length}/500</span>
                    </div>

                    <button type="submit" className="fw-submit"
                      disabled={!name || rating === 0 || status === 'submitting'}>
                      {status === 'submitting' ? 'Submitting...' : 'Submit Feedback'}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        /* Trigger */
        .fw-trigger {
          position: fixed; right: 0; bottom: 120px; z-index: 999;
          display: flex; align-items: center; gap: 8px;
          padding: 10px 18px; border-radius: 100px 0 0 100px;
          background: var(--surface-2); color: var(--text-2);
          border: 1px solid var(--border); border-right: none;
          cursor: pointer; font-size: 0.78rem; font-weight: 800;
          backdrop-filter: blur(16px); letter-spacing: 0.04em;
          transition: all 0.35s cubic-bezier(0.23,1,0.32,1);
        }
        .fw-trigger-text { white-space: nowrap; }

        /* Modal */
        body.feedback-open .custom-cursor-container { display: none !important; }
        
        .fw-overlay {
          position: fixed; inset: 0; z-index: 9000;
          background: rgba(0,0,0,0.65); backdrop-filter: blur(8px);
          display: flex; align-items: center; justify-content: center; padding: 20px;
        }
        .fw-panel {
          width: 100%; max-width: 460px; border-radius: 28px;
          border: 1px solid var(--border) !important;
          box-shadow: 0 40px 100px rgba(0,0,0,0.5);
          overflow: hidden;
        }
        [data-theme='light'] .fw-panel { background: rgba(255,255,255,0.97) !important; }

        .fw-header {
          display: flex; justify-content: space-between; align-items: center;
          padding: 20px 24px; border-bottom: 1px solid var(--border);
        }
        .fw-header-left { display: flex; align-items: center; gap: 10px; }
        .fw-live-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--lime); box-shadow: 0 0 8px var(--lime);
          animation: pulse-glow 2s infinite;
        }
        .fw-title { font-size: 0.85rem; font-weight: 800; color: var(--text-1); letter-spacing: 0.04em; }
        .fw-close {
          background: none; border: none; color: var(--text-3);
          cursor: pointer; padding: 4px; display: flex; transition: color 0.2s;
        }
        .fw-close:hover { color: var(--text-1); }

        .fw-form { padding: 28px; display: flex; flex-direction: column; gap: 20px; }
        .fw-row  { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .fw-field { display: flex; flex-direction: column; gap: 7px; position: relative; }
        .fw-label { font-size: 0.72rem; font-weight: 700; color: var(--text-3); }
        .fw-input {
          width: 100%; box-sizing: border-box;
          background: var(--surface-2); border: 1.5px solid var(--border);
          border-radius: 12px; padding: 13px 16px;
          color: var(--text-1); font-size: 0.88rem; font-family: 'Inter', sans-serif;
          outline: none; transition: 0.3s;
        }
        .fw-input::placeholder { color: var(--text-4); }
        .fw-input:focus { border-color: var(--lime); box-shadow: 0 0 0 3px var(--lime-soft); }
        .fw-textarea { resize: none; min-height: 100px; }
        .fw-char-count { font-size: 0.65rem; color: var(--text-4); text-align: right; margin-top: 2px; }

        .fw-rating-section { display: flex; flex-direction: column; gap: 12px; }
        .fw-stars { display: flex; gap: 8px; }
        .fw-star {
          font-size: 2rem; background: none; border: none;
          color: var(--border-2); cursor: pointer; transition: all 0.2s; padding: 0;
          line-height: 1;
        }
        .fw-star.active { color: var(--lime); text-shadow: 0 0 16px var(--lime-glow); transform: scale(1.1); }
        .fw-rating-label { font-size: 0.75rem; font-weight: 800; color: var(--lime); }

        .fw-submit {
          padding: 16px; border: none; border-radius: 14px;
          background: var(--lime); color: var(--btn-text);
          font-size: 0.9rem; font-weight: 800; cursor: pointer;
          transition: all 0.3s; font-family: 'Inter', sans-serif;
          box-shadow: 0 6px 24px var(--lime-glow);
        }
        .fw-submit:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 12px 32px var(--lime-glow); }
        .fw-submit:disabled { opacity: 0.4; cursor: not-allowed; filter: grayscale(0.5); }

        .fw-success {
          padding: 60px 28px; text-align: center;
          display: flex; flex-direction: column; align-items: center; gap: 14px;
        }
        .fw-success-icon { font-size: 3.5rem; }
        .fw-success h3 { font-family: 'Outfit', sans-serif; font-size: 1.6rem; font-weight: 900; color: var(--text-1); }
        .fw-success p  { font-size: 0.92rem; color: var(--text-2); max-width: 280px; }

        @media (max-width: 480px) {
          .fw-row   { grid-template-columns: 1fr; }
          .fw-stars { gap: 6px; }
          .fw-star  { font-size: 1.7rem; }
        }
      `}</style>
    </>
  );
}
