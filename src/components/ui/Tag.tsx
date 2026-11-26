import React from 'react';

interface TagProps {
  children: React.ReactNode;
  hot?: boolean;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({ children, hot = false, className = '' }) => {
  return (
    <span
      className={`tech-tag ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.4rem',
        padding: '0.35rem 0.85rem',
        borderRadius: '999px',
        fontSize: '0.82rem',
        fontFamily: 'var(--font-ui)',
        fontWeight: 500,
        backgroundColor: hot ? 'rgba(204, 255, 0, 0.1)' : 'rgba(255, 255, 255, 0.04)',
        border: `1px solid ${hot ? 'var(--c-lime)' : 'var(--hairline)'}`,
        color: hot ? 'var(--c-lime)' : 'var(--text-body)',
        transition: 'all var(--transition-fast)',
      }}
    >
      {hot && (
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            backgroundColor: 'var(--c-lime)',
            boxShadow: '0 0 6px var(--c-lime)',
          }}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
};

export default Tag;

