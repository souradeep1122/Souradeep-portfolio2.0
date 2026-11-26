import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  width?: 'fit-content' | '100%';
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  width = 'fit-content',
}) => {
  const prefersReduced = useReducedMotion();

  const getInitialPosition = () => {
    if (prefersReduced) return { x: 0, y: 0 };
    switch (direction) {
      case 'up':
        return { y: 40, x: 0 };
      case 'down':
        return { y: -40, x: 0 };
      case 'left':
        return { x: 40, y: 0 };
      case 'right':
        return { x: -40, y: 0 };
    }
  };

  return (
    <div style={{ position: 'relative', width, overflow: 'hidden' }} className={className}>
      <motion.div
        initial={{ opacity: 0, ...getInitialPosition() }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: prefersReduced ? 0.01 : 0.7,
          delay: prefersReduced ? 0 : delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;

