import React from 'react';

interface PillProps {
  children: React.ReactNode;
  hot?: boolean;
  variant?: 'default' | 'dark';
  className?: string;
}

export const Pill: React.FC<PillProps> = ({
  children,
  hot = false,
  variant = 'default',
  className = '',
}) => {
  const variantClass = variant === 'dark' ? 'brutal-pill--dark' : '';
  const hotClass = hot ? 'brutal-pill--hot' : '';

  return (
    <span className={`brutal-pill ${variantClass} ${hotClass} ${className}`.trim()}>
      {children}
    </span>
  );
};

export default Pill;

