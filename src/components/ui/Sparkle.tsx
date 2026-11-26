import React from 'react';
import { motion, MotionStyle } from 'framer-motion';
import { useReducedMotionSafe } from '../../hooks/useReducedMotionSafe';

interface SparkleProps {
  size?: number;
  color?: string;
  className?: string;
  style?: MotionStyle;
}

export const Sparkle: React.FC<SparkleProps> = ({
  size = 32,
  color = '#8A8A8A',
  className = '',
  style,
}) => {
  const prefersReduced = useReducedMotionSafe();

  const baseStyle: MotionStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: size,
    height: size,
    pointerEvents: 'none',
    ...style,
  };

  return (
    <motion.div
      aria-hidden="true"
      className={`sparkle-star ${className}`}
      animate={prefersReduced ? undefined : { rotate: 360 }}
      transition={{
        duration: 22,
        repeat: Infinity,
        ease: 'linear',
      }}
      style={baseStyle}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Four-point star with smooth curved arms */}
        <path
          d="M20 0 C20 12, 12 20, 0 20 C12 20, 20 28, 20 40 C20 28, 28 20, 40 20 C28 20, 20 12, 20 0 Z"
          fill={color}
          opacity="0.75"
        />
      </svg>
    </motion.div>
  );
};

export default Sparkle;
