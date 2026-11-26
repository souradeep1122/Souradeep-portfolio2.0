import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 52 }) => {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a
      href="#top"
      onClick={scrollToTop}
      aria-label="Souradeep Saha - Scroll to top"
      className={`logo-signature ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        minWidth: 44,
        minHeight: 44,
        textDecoration: 'none',
      }}
    >
      <svg
        width={size}
        height={size * 0.75}
        viewBox="0 0 100 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible', filter: 'drop-shadow(0 0 10px rgba(204, 255, 0, 0.2))' }}
      >
        <defs>
          <linearGradient id="ss-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ADE80" />
            <stop offset="100%" stopColor="#CCFF00" />
          </linearGradient>
        </defs>
        {/* Stylized cursive/signature SS */}
        <path
          d="M32 18 C26 8, 12 10, 8 22 C4 34, 26 38, 24 50 C22 62, 10 65, 4 58 M14 44 C24 40, 36 34, 46 22 M64 18 C58 8, 44 10, 40 22 C36 34, 58 38, 56 50 C54 62, 42 65, 36 58 M46 44 C56 40, 68 34, 78 22"
          stroke="url(#ss-gradient)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 20 C28 14, 38 24, 48 38 C56 50, 72 44, 82 28"
          stroke="url(#ss-gradient)"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.85"
        />
      </svg>
    </a>
  );
};

export default Logo;

