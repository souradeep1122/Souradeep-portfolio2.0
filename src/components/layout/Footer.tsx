import React from 'react';
import { ArrowUp } from 'lucide-react';
import PillButton from '../ui/PillButton';
import { PORTFOLIO_DATA } from '../../data/portfolio';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 2,
        padding: '2rem clamp(1.2rem, 5vw, 3rem) 3.5rem',
        borderTop: '1px solid var(--hairline)',
        backgroundColor: '#0a0a0a',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--container-max-width)',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
        }}
      >
        {/* Copyright */}
        <p
          style={{
            margin: 0,
            fontFamily: 'var(--font-ui)',
            fontSize: '0.88rem',
            color: 'var(--text-muted)',
          }}
        >
          © {currentYear} {PORTFOLIO_DATA.personal.nameFirst} {PORTFOLIO_DATA.personal.nameLast}.
          Built with React, TypeScript &amp; Framer Motion.
        </p>

        {/* Back to top pill */}
        <PillButton
          variant="secondary"
          onClick={scrollToTop}
          icon={<ArrowUp size={16} />}
          ariaLabel="Back to top of page"
        >
          Back to top
        </PillButton>
      </div>
    </footer>
  );
};

export default Footer;
