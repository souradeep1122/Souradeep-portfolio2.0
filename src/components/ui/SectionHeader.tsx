import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ children, id, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`section-header-wrapper ${className}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '2.5rem',
        position: 'relative',
      }}
    >
      {/* 40px circle with red dot and connector line */}
      <div
        aria-hidden="true"
        style={{
          position: 'relative',
          width: 40,
          height: 40,
          minWidth: 40,
          borderRadius: '50%',
          border: '1.5px solid rgba(228, 61, 18, 0.45)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Red center dot */}
        <div
          style={{
            width: 6,
            height: 6,
            backgroundColor: 'var(--c-red)',
            borderRadius: '50%',
          }}
        />
        {/* Connector line */}
        <div
          style={{
            position: 'absolute',
            left: '100%',
            top: '50%',
            width: 40,
            height: 1.5,
            backgroundColor: 'rgba(228, 61, 18, 0.45)',
            transform: 'translateY(-50%)',
          }}
        />
      </div>

      {/* Red, uppercase, 5px letter-spaced title */}
      <h2
        id={id}
        style={{
          color: 'var(--c-red)',
          letterSpacing: '5px',
          fontSize: 'var(--header-font-size)',
          textTransform: 'uppercase',
          fontWeight: 900,
          marginLeft: '45px',
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          lineHeight: 1.1,
        }}
      >
        {children}
      </h2>
    </motion.div>
  );
};

export default SectionHeader;

