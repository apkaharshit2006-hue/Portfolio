'use client';

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

/** Normalizer so ease-out-expo lands exactly on 1 at t = 1. */
const EXPO_NORM = 1 - Math.pow(2, -10);

interface CountUpProps {
  /** Full display string, e.g. "94.2%" or "3+". Non-numeric parts are kept. */
  value: string;
  duration?: number;
  className?: string;
}

/**
 * Odometer-style count-up: the numeric prefix rolls from 0 to its target when
 * the element scrolls into view; any suffix ("%", "+") stays in place.
 * Strings without a leading number render statically.
 */
export function CountUp({ value, duration = 1400, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const target = match ? parseFloat(match[1]) : null;
  const suffix = match ? match[2] : '';
  const decimals = match && match[1].includes('.') ? match[1].split('.')[1].length : 0;

  const [display, setDisplay] = useState(value);

  // Reset to zero in the same paint that inView flips, so the roll starts
  // from 0 without flashing the final value first.
  useLayoutEffect(() => {
    if (target !== null && inView) setDisplay(`${(0).toFixed(decimals)}${suffix}`);
  }, [inView, target, suffix, decimals]);

  useEffect(() => {
    if (target === null || !inView) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setDisplay(`${target.toFixed(decimals)}${suffix}`);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = (1 - Math.pow(2, -10 * t)) / EXPO_NORM;
      setDisplay(`${(target * eased).toFixed(decimals)}${suffix}`);
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, suffix, decimals, duration]);

  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      {display}
    </span>
  );
}
