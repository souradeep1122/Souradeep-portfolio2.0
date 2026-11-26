import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolio';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  activeSection,
}) => {
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Focus trap and Escape to close
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab' && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: '#111111',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '2rem 1.8rem',
          }}
        >
          {/* Header row with Close button */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '0.85rem',
                letterSpacing: '0.25em',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
              }}
            >
              MENU
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 48,
                height: 48,
                borderRadius: '50%',
                border: '1px solid var(--hairline-strong)',
                color: '#FFFFFF',
                backgroundColor: 'var(--surface)',
              }}
            >
              <X size={24} aria-hidden="true" />
            </button>
          </div>

          {/* Links list */}
          <nav
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              margin: 'auto 0',
            }}
          >
            {PORTFOLIO_DATA.navLinks.map((link, index) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.35 }}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2.2rem, 8vw, 3.5rem)',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    color: isActive ? 'var(--c-lime)' : '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textDecoration: 'none',
                    lineHeight: 1,
                  }}
                >
                  <span>{link.name}</span>
                  {isActive && <ArrowRight size={28} color="var(--c-lime)" />}
                </motion.a>
              );
            })}
          </nav>

          {/* Footer in mobile drawer */}
          <div
            style={{
              borderTop: '1px solid var(--hairline)',
              paddingTop: '1.25rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontFamily: 'var(--font-ui)',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
            }}
          >
            <span>{PORTFOLIO_DATA.personal.location}</span>
            <span style={{ color: 'var(--c-lime)' }}>● OPEN TO WORK</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;

