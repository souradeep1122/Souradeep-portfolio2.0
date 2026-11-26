import React from 'react';
import { motion, useScroll, useTransform, MotionStyle } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface BlobProps {
  colors: string;
  style?: MotionStyle;
  range?: [number, number];
}

export const Blob: React.FC<BlobProps> = ({
  colors,
  style,
  range = [100, -100],
}) => {
  const { scrollYProgress } = useScroll();
  const prefersReduced = useReducedMotion();
  const y = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : range);

  const baseStyle: MotionStyle = {
    position: 'absolute',
    width: '50vw',
    height: '50vw',
    maxWidth: '650px',
    maxHeight: '650px',
    background: colors,
    borderRadius: '50%',
    filter: 'blur(100px)',
    zIndex: 0,
    opacity: 0.65,
    pointerEvents: 'none',
    y,
    ...style,
  };

  return <motion.div aria-hidden="true" style={baseStyle} />;
};

export default Blob;
