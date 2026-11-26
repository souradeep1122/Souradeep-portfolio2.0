import React from 'react';
import { motion } from 'framer-motion';

interface IconButtonProps {
  href: string;
  children: React.ReactNode;
  ariaLabel: string;
  size?: number;
  className?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  href,
  children,
  ariaLabel,
  size = 48,
  className = '',
}) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      className={`icon-button-circle ${className}`}
      whileHover={{
        scale: 1.1,
        borderColor: 'var(--c-lime)',
        boxShadow: '0 0 18px rgba(204, 255, 0, 0.4)',
        color: 'var(--c-lime)',
      }}
      whileTap={{ scale: 0.95 }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        minWidth: 44,
        minHeight: 44,
        borderRadius: '50%',
        border: '1px solid var(--hairline-strong)',
        backgroundColor: 'rgba(24, 24, 24, 0.6)',
        backdropFilter: 'blur(4px)',
        color: '#FFFFFF',
        textDecoration: 'none',
        transition: 'border-color var(--transition-fast), color var(--transition-fast)',
      }}
    >
      {children}
    </motion.a>
  );
};

export default IconButton;

