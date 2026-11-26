import React from 'react';
import { motion, HTMLMotionProps, MotionStyle } from 'framer-motion';

export interface BrutalCardProps extends Omit<HTMLMotionProps<'div'>, 'style'> {
  children: React.ReactNode;
  variant?: 'default' | 'dark';
  className?: string;
  style?: MotionStyle;
}

export const BrutalCard: React.FC<BrutalCardProps> = ({
  children,
  variant = 'default',
  className = '',
  style,
  ...motionProps
}) => {
  const variantClass = variant === 'dark' ? 'brutal-card--dark' : '';

  return (
    <motion.div
      className={`brutal-card ${variantClass} ${className}`.trim()}
      style={style}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export default BrutalCard;
