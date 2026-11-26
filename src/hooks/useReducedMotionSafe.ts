import { useReducedMotion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function useReducedMotionSafe(): boolean {
  const framerPrefersReduced = useReducedMotion();
  const [browserPrefersReduced, setBrowserPrefersReduced] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const listener = (e: MediaQueryListEvent) => setBrowserPrefersReduced(e.matches);

    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  return Boolean(framerPrefersReduced || browserPrefersReduced);
}

export default useReducedMotionSafe;

