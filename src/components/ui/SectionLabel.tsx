import React from 'react';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ children, className = '', id }) => {
  return (
    <div
      id={id}
      className={`section-eyebrow ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '1rem',
        textTransform: 'uppercase',
        letterSpacing: '0.3em',
        fontSize: '14px',
        fontWeight: 600,
        color: 'var(--text-muted)',
        marginBottom: '1.25rem',
      }}
    >
      <span>{children}</span>
      <span
        aria-hidden="true"
        style={{
          display: 'inline-block',
          width: '45px',
          height: '1px',
          backgroundColor: 'var(--hairline-strong)',
        }}
      />
    </div>
  );
};

export default SectionLabel;

