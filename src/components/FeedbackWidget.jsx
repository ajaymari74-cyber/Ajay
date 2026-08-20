/**
 * FeedbackWidget.jsx — 2026 Portfolio Diagnostic Assessment Widget
 * Interactive Star Rating, User Feedback Submission & Toast Confirmation
 */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FeedbackWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle');
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

      await fetch('https://firestore.googleapis.com/v1/projects/ajay-portfolio-a80aa/databases/(default)/documents/portfolio_feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      setStatus('success');
      setTimeout(() => {
        setIsOpen(false);
        setTimeout(() => {
          setStatus('idle');
          setRating(0);
          setMessage('');
          setName('');
          setEmail('');
        }, 400);
      }, 2000);
    } catch (error) {
      console.error(error);
      alert('Failed to submit feedback. Please try again.');
      setStatus('idle');
    }
  };

  const ratingLabels = ['', 'Poor', 'Fair', 'Good', 'Great', 'Exceptional'];

  return (
    <>
      {/* Floating Trigger Tab */}
      <AnimatePresence>
        {visible && (
          <motion.button
            className="fw-trigger glass"
            onClick={() => setIsOpen(true)}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            whileHover={{ x: -6 }}
            aria-label="Give Portfolio Feedback"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
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
            <motion.div
              className="fw-panel glass"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ type: 'spring', damping: 28, stiffness: 350 }}
              onClick={e => e.stopPropagation()}
            >
              {/* Header */}
              <div className="fw-header">
                <div className="fw-header-left">
                  <span className="status-dot live" />
                  <span className="fw-title">Portfolio Assessment</span>
                </div>
                <button className="fw-close" onClick={() => setIsOpen(false)}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </button>
              </div>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    className="fw-success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="fw-success-icon">✨</div>
                    <h3>Thank You!</h3>
                    <p>Your feedback has been received and is deeply appreciated.</p>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="fw-form">
                    <div className="fw-row">
                      <div className="fw-field">
                        <label className="fw-label">Your Name *</label>
                        <input
                          type="text"
                          placeholder="John Doe"
                          value={name}
                          onChange={e => setName(e.target.value)}
                          required
                          className="input"
                        />
                      </div>
                      <div className="fw-field">
                        <label className="fw-label">Email (optional)</label>
                        <input
                          type="email"
                          placeholder="you@email.com"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          className="input"
                        />
                      </div>
                    </div>

                    <div className="fw-rating-section">
                      <label className="fw-label">Portfolio Experience Rating *</label>
                      <div className="fw-stars">
                        {[1, 2, 3, 4, 5].map(i => (
                          <button
                            key={i}
                            type="button"
                            className={`fw-star ${(hovered || rating) >= i ? 'active' : ''}`}
                            onMouseEnter={() => setHovered(i)}
                            onMouseLeave={() => setHovered(0)}
                            onClick={() => setRating(i)}
                          >
                            ★
                          </button>
                        ))}
                      </div>
                      {(hovered || rating) > 0 && (
                        <span className="fw-rating-label">{ratingLabels[hovered || rating]}</span>
                      )}
                    </div>

                    <div className="fw-field">
                      <label className="fw-label">Your Thoughts & Feedback</label>
                      <textarea
                        rows={4}
                        placeholder="What stood out to you? Any design or architectural suggestions?"
                        value={message}
                        onChange={e => setMessage(e.target.value.slice(0, 500))}
                        className="input"
                        style={{ resize: 'none' }}
                      />
                      <span className="fw-char-count">{message.length}/500</span>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary fw-submit"
                      disabled={!name || rating === 0 || status === 'submitting'}
                    >
                      {status === 'submitting' ? 'Submitting...' : 'Transmit Feedback'}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .fw-trigger {
          position: fixed;
          right: 0;
          bottom: 110px;
          z-index: 999;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 100px 0 0 100px;
          background: var(--surface-2);
          color: var(--text-2);
          border: 1px solid var(--border);
          border-right: none;
          cursor: pointer;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          transition: all 0.25s ease;
        }
        .fw-trigger:hover {
          background: var(--cyan);
          color: var(--btn-text);
          border-color: var(--cyan);
        }
        .fw-trigger-text { white-space: nowrap; }

        .fw-overlay {
          position: fixed;
          inset: 0;
          z-index: 10000;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .fw-panel {
          width: 100%;
          max-width: 480px;
          border-radius: 24px;
          border: 1px solid var(--border-cyan) !important;
          background: var(--bg-card) !important;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6);
          overflow: hidden;
        }

        .fw-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 24px;
          border-bottom: 1px solid var(--border);
          background: var(--surface-2);
        }
        .fw-header-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .fw-title {
          font-size: 0.85rem;
          font-weight: 800;
          color: var(--text-1);
        }
        .fw-close {
          background: none;
          border: none;
          color: var(--text-3);
          cursor: pointer;
          padding: 4px;
          display: flex;
          transition: color 0.2s;
        }
        .fw-close:hover { color: var(--cyan); }

        .fw-form {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .fw-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .fw-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .fw-label {
          font-size: 0.74rem;
          font-weight: 700;
          color: var(--text-3);
        }
        .fw-char-count {
          font-size: 0.65rem;
          color: var(--text-4);
          text-align: right;
          margin-top: 2px;
        }

        .fw-rating-section {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .fw-stars {
          display: flex;
          gap: 6px;
        }
        .fw-star {
          font-size: 1.8rem;
          background: none;
          border: none;
          color: var(--border-2);
          cursor: pointer;
          transition: all 0.15s;
          padding: 0;
          line-height: 1;
        }
        .fw-star.active {
          color: var(--cyan);
          text-shadow: 0 0 14px var(--cyan-glow);
          transform: scale(1.1);
        }
        .fw-rating-label {
          font-size: 0.78rem;
          font-weight: 800;
          color: var(--cyan);
        }

        .fw-submit {
          width: 100%;
          padding: 14px !important;
          border-radius: 12px !important;
          font-size: 0.92rem !important;
        }
        .fw-submit:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .fw-success {
          padding: 50px 24px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .fw-success-icon { font-size: 3rem; }
        .fw-success h3 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.6rem;
          font-weight: 900;
          color: var(--text-1);
        }
        .fw-success p {
          font-size: 0.9rem;
          color: var(--text-2);
          max-width: 280px;
        }

        @media (max-width: 480px) {
          .fw-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
