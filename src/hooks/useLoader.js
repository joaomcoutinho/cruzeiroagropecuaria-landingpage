import { useState, useEffect } from 'react';

export function useLoader(duration = 2600) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let start = null;
    const ease = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
    const tick = (ts) => {
      if (!start) start = ts;
      const raw = Math.min((ts - start) / duration, 1);
      setProgress(Math.round(ease(raw) * 100));
      if (raw < 1) requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 180);
    };
    requestAnimationFrame(tick);
  }, [duration]);

  return { progress, done };
}
