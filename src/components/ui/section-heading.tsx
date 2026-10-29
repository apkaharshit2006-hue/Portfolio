'use client';

import React from 'react';
import { Badge, BadgeProps } from '@/components/ui/badge';
import { Reveal } from '@/components/ui/reveal';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow: string;
  badgeVariant?: BadgeProps['variant'];
  title: React.ReactNode;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
}

/**
 * Consistent eyebrow + headline + subcopy block with a soft glow behind the type.
 */
export function SectionHeading({
  eyebrow,
  badgeVariant = 'default',
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'relative mb-14 sm:mb-16',
        align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl',
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 h-40 w-[420px] max-w-full rounded-full bg-indigo-500/10 blur-[90px]"
      />

      <Reveal index={0} offset={18} className="relative">
        <Badge variant={badgeVariant} dot className="mb-5">
          {eyebrow}
        </Badge>
      </Reveal>

      <Reveal index={1} offset={18} className="relative">
        <h2 className="relative text-balance text-3xl sm:text-4xl font-semibold leading-[1.15] text-white tracking-tight">
          {title}
        </h2>
      </Reveal>

      {description && (
        <Reveal index={2} offset={18} className="relative">
          <p
            className={cn(
              'relative mt-4 text-sm sm:text-[15px] leading-relaxed text-gray-400 text-pretty',
              align === 'center' && 'mx-auto'
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
