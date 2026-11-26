import { useReducedMotion as useFramerReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function useReducedMotion(): boolean {
  const framerReduced = useFramerReducedMotion();
  const [prefersReduced, setPrefersReduced] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (event: MediaQueryListEvent) => {
      setPrefersReduced(event.matches);
    };

    mediaQuery.addEventListener('change', onChange);
    return () => mediaQuery.removeEventListener('change', onChange);
  }, []);

  return Boolean(framerReduced || prefersReduced);
}

export default useReducedMotion;

