import { useState, useEffect, useRef } from 'react';

export function useScrollTimer(threshold: number = 20) {
  const hasScrolled = useRef(false);
  const [shouldTrigger, setShouldTrigger] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      if (!hasScrolled.current && window.scrollY > 100) {
        hasScrolled.current = true;
        timeoutId = setTimeout(() => {
          setShouldTrigger(true);
        }, threshold * 1000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return { shouldTrigger, setShouldTrigger };
}
