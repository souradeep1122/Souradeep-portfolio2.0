import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotionSafe } from '../../hooks/useReducedMotionSafe';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReduced = useReducedMotionSafe();
  const isPointerFine = useMediaQuery('(pointer: fine)');

  useEffect(() => {
    if (prefersReduced || !isPointerFine) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = target.closest('a, button, input, textarea, select, [role="button"], .clickable');
      setIsHovered(Boolean(isInteractive));
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [prefersReduced, isPointerFine, isVisible]);

  if (prefersReduced || !isPointerFine || !isVisible) {
    return null;
  }

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: '50%',
          backgroundColor: 'var(--c-lime)',
          pointerEvents: 'none',
          zIndex: 99999,
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 450, mass: 0.1 }}
      />

      {/* Trailing Ring */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          borderRadius: '50%',
          border: '1.2px solid var(--c-lime)',
          pointerEvents: 'none',
          zIndex: 99998,
        }}
        animate={{
          x: mousePosition.x - (isHovered ? 26 : 18),
          y: mousePosition.y - (isHovered ? 26 : 18),
          width: isHovered ? 52 : 36,
          height: isHovered ? 52 : 36,
          backgroundColor: isHovered ? 'rgba(204, 255, 0, 0.12)' : 'transparent',
          boxShadow: isHovered ? '0 0 16px rgba(204, 255, 0, 0.35)' : 'none',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 280, mass: 0.2 }}
      />
    </>
  );
};

export default CustomCursor;

