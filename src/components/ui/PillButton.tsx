import React from 'react';
import { motion, MotionStyle } from 'framer-motion';

interface PillButtonProps {
  children: React.ReactNode;
  href?: string;
  download?: boolean | string;
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

export const PillButton: React.FC<PillButtonProps> = ({
  children,
  href,
  download,
  variant = 'primary',
  icon,
  onClick,
  className = '',
  ariaLabel,
}) => {
  const isPrimary = variant === 'primary';

  const baseStyles: MotionStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '0.85rem',
    borderRadius: '999px',
    padding: '0.65rem 0.65rem 0.65rem 1.6rem',
    fontSize: '0.98rem',
    fontFamily: 'var(--font-ui)',
    fontWeight: 600,
    textDecoration: 'none',
    cursor: 'pointer',
    minHeight: 48,
    backgroundColor: isPrimary ? 'var(--c-lime)' : 'transparent',
    color: isPrimary ? 'var(--text-on-lime)' : 'var(--text-heading)',
    border: isPrimary ? 'none' : '1px solid var(--hairline-strong)',
  };

  const content = (
    <>
      <span style={{ letterSpacing: '0.2px' }}>{children}</span>
      {icon && (
        <span
          className="pill-icon-circle"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 34,
            height: 34,
            borderRadius: '50%',
            backgroundColor: isPrimary ? '#111111' : 'transparent',
            color: isPrimary ? 'var(--c-lime)' : '#FFFFFF',
            border: isPrimary ? 'none' : '1px solid var(--hairline-strong)',
            transition: 'transform var(--transition-fast), background-color var(--transition-fast)',
          }}
        >
          {icon}
        </span>
      )}
    </>
  );

  const hoverAnimation = {
    scale: 1.03,
    boxShadow: isPrimary
      ? '0 0 25px rgba(204, 255, 0, 0.45)'
      : '0 0 20px rgba(255, 255, 255, 0.12)',
  };

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        onClick={onClick}
        aria-label={ariaLabel}
        className={`pill-btn pill-btn-${variant} ${className}`}
        style={baseStyles}
        whileHover={hoverAnimation}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={`pill-btn pill-btn-${variant} ${className}`}
      style={baseStyles}
      whileHover={hoverAnimation}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
};

export default PillButton;
