import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import IconButton from '../ui/IconButton';
import { PORTFOLIO_DATA } from '../../data/portfolio';

export const Contact: React.FC = () => {
  const { personal, socialLinks } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState<boolean>(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="contact" aria-label="Contact Section" style={{ padding: '4rem clamp(1rem, 4vw, 3rem) 2rem' }}>
      <div style={{ maxWidth: 'var(--container-max-width)', margin: '0 auto' }}>
        {/* Giant Neon-Lime Banner (Matching Uploaded Screenshot) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          style={{
            backgroundColor: 'var(--c-lime)',
            color: '#111111',
            borderRadius: 'clamp(28px, 5vw, 48px)',
            padding: 'clamp(3rem, 7vw, 5.5rem) clamp(2rem, 5vw, 4.5rem)',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(204, 255, 0, 0.25)',
          }}
        >
          {/* Eyebrow: HAVE A GOOD IDEA? */}
          <p
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: 'clamp(0.85rem, 1.4vw, 1rem)',
              fontWeight: 800,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(17, 17, 17, 0.85)',
              margin: '0 0 1.5rem',
            }}
          >
            HAVE A GOOD IDEA?
          </p>

          {/* Large Headline: Let's build something together */}
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.8rem, 6.8vw, 6.2rem)',
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: '-0.03em',
              color: '#111111',
              textTransform: 'none',
              margin: '0 0 clamp(2.5rem, 5vw, 4rem)',
              maxWidth: '920px',
            }}
          >
            Let's build something <br />
            together
          </h2>

          {/* Underlined Interactive Email Link */}
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <motion.a
              href={`mailto:${personal.email}`}
              onClick={(e) => {
                // Also trigger copy for convenience
                if (e.altKey || e.shiftKey) {
                  e.preventDefault();
                }
                copyEmail();
              }}
              whileHover={{ x: 6 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.8rem',
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.2rem, 3.2vw, 2.5rem)',
                fontWeight: 700,
                color: '#111111',
                textDecoration: 'none',
                borderBottom: '3px solid #111111',
                paddingBottom: '0.35rem',
                cursor: 'pointer',
              }}
              title="Click to send email (copies to clipboard)"
            >
              <span>{personal.email}</span>
              <span style={{ fontSize: '1.2em', transform: 'translateY(-2px)' }}>→</span>
            </motion.a>

            {/* Quick Action Button for Copy / Compose */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginTop: '1.8rem',
                flexWrap: 'wrap',
              }}
            >
              <button
                type="button"
                onClick={copyEmail}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#111111',
                  color: 'var(--c-lime)',
                  padding: '0.55rem 1.25rem',
                  borderRadius: '999px',
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  border: 'none',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.25)',
                }}
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span>{copied ? 'Copied to clipboard!' : 'Copy email'}</span>
              </button>

              <span
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.85rem',
                  color: 'rgba(17, 17, 17, 0.75)',
                  fontWeight: 600,
                }}
              >
                Based in Kolkata, India • Open for full-time &amp; freelance opportunities
              </span>
            </div>

            {/* Toast Feedback */}
            <AnimatePresence>
              {copied && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  style={{
                    position: 'absolute',
                    top: '-45px',
                    left: 0,
                    backgroundColor: '#111111',
                    color: 'var(--c-lime)',
                    padding: '0.4rem 1.1rem',
                    borderRadius: '999px',
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                    pointerEvents: 'none',
                  }}
                >
                  Email copied to clipboard! 📋
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Social Icons row below the green banner */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            padding: '2.5rem 0.5rem 1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              CONNECT:
            </span>
            {socialLinks
              .filter((s) => s.type !== 'email')
              .map((social) => (
                <IconButton
                  key={social.name}
                  href={social.href}
                  ariaLabel={social.ariaLabel}
                  size={46}
                >
                  {social.type === 'github' ? (
                    <FaGithub size={18} aria-hidden="true" />
                  ) : (
                    <FaLinkedin size={18} aria-hidden="true" />
                  )}
                </IconButton>
              ))}
          </div>

          <a
            href={`mailto:${personal.email}`}
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '0.92rem',
              fontWeight: 600,
              color: '#FFFFFF',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              textDecoration: 'underline',
              textUnderlineOffset: '5px',
            }}
          >
            <span>Direct Gmail Compose</span>
            <ArrowUpRight size={16} color="var(--c-lime)" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
