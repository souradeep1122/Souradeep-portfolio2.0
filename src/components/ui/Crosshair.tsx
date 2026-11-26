import React from 'react';

interface CrosshairProps {
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Crosshair: React.FC<CrosshairProps> = ({
  size = 20,
  color = 'rgba(255, 255, 255, 0.25)',
  className = '',
  style,
}) => {
  return (
    <div
      aria-hidden="true"
      className={`crosshair-mark ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        position: 'relative',
        pointerEvents: 'none',
        ...style,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      >
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
      </svg>
    </div>
  );
};

export default Crosshair;

