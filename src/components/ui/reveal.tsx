'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Decelerating stagger ramp (seconds): early items fire tightly, later items
 * fan out, then the ramp caps so long lists never take forever to finish.
 * Mirrors the cadence: 0, 70, 140, 205, 265, 320ms…
 */
export function staggerDelay(index: number): number {
  const delays = [0, 0.07, 0.14, 0.205, 0.265, 0.32, 0.36, 0.4];
  return delays[Math.min(index, delays.length - 1)];
}

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Stagger index; use with staggerDelay() for grouped children. */
  index?: number;
  /** Extra delay on top of the stagger slot. */
  delay?: number;
  /** Pre-state offset distance in px. Defaults to a soft rise. */
  offset?: number;
  /** Axis of the pre-state offset. */
  axis?: 'y' | 'x';
  /** Pre-state opacity — kept dim rather than invisible, so content stays legible. */
  dim?: number;
  duration?: number;
}

/**
 * Scroll-reveal wrapper: items enter dimmed + offset and settle to full
 * opacity/position once, when they cross into the viewport.
 */
export function Reveal({
  children,
  className,
  index,
  delay = 0,
  offset = 18,
  axis = 'y',
  dim = 0.2,
  duration = 0.62,
}: RevealProps) {
  const stagger = index !== undefined ? staggerDelay(index) : 0;
  const from = axis === 'y' ? { y: offset } : { x: offset };

  return (
    <motion.div
      initial={{ opacity: dim, ...from }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration, delay: stagger + delay, ease: EASE }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
