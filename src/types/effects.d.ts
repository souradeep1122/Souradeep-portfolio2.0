import React from 'react';

declare module '../components/effects/SplashCursor' {
  interface SplashCursorProps {
    SIM_RESOLUTION?: number;
    DYE_RESOLUTION?: number;
    CAPTURE_RESOLUTION?: number;
    DENSITY_DISSIPATION?: number;
    VELOCITY_DISSIPATION?: number;
    PRESSURE?: number;
    PRESSURE_ITERATIONS?: number;
    CURL?: number;
    SPLAT_RADIUS?: number;
    SPLAT_FORCE?: number;
    SHADING?: boolean;
    COLOR_UPDATE_SPEED?: number;
    BACK_COLOR?: { r: number; g: number; b: number };
    TRANSPARENT?: boolean;
    RAINBOW_MODE?: boolean;
    COLOR?: string;
  }
  const SplashCursor: React.FC<SplashCursorProps>;
  export default SplashCursor;
}

declare module '../components/effects/CurvedLoop' {
  interface CurvedLoopProps {
    marqueeText?: string;
    speed?: number;
    className?: string;
    curveAmount?: number;
    direction?: 'left' | 'right';
    interactive?: boolean;
  }
  const CurvedLoop: React.FC<CurvedLoopProps>;
  export default CurvedLoop;
}

declare module '../components/effects/ShapeGrid' {
  interface ShapeGridProps {
    direction?: string;
    speed?: number;
    borderColor?: string;
    squareSize?: number;
    hoverFillColor?: string;
    shape?: 'square' | 'hexagon' | 'triangle';
    hoverTrailAmount?: number;
    className?: string;
  }
  const ShapeGrid: React.FC<ShapeGridProps>;
  export default ShapeGrid;
}

