'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ImageOff } from 'lucide-react';
import { cn } from '@/lib/utils';

const FALLBACK_FRAME =
  'absolute inset-0 bg-black/40 overflow-hidden';

/**
 * Renders a screenshot, or a designed placeholder when the file has not been
 * added to `public/` yet. Images are served straight from disk (the project
 * runs `images.unoptimized`), so a missing file simply triggers `onError`.
 */
function ScreenshotSurface({
  src,
  alt,
  sizes,
  imageClassName,
  compact = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  imageClassName?: string;
  compact?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // A 404 can resolve before hydration, in which case onError never fires.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) {
    if (compact) {
      return (
        <span className={cn(FALLBACK_FRAME, 'flex items-center justify-center')}>
          <ImageOff className="w-3.5 h-3.5 text-gray-600" />
        </span>
      );
    }

    return (
      <span className={cn(FALLBACK_FRAME, 'block')}>
        <span
          aria-hidden
          className="absolute inset-0 grid-backdrop opacity-30 [mask-image:radial-gradient(ellipse_at_center,#000,transparent_80%)]"
        />
        <span
          aria-hidden
          className="absolute inset-2.5 rounded-lg border border-dashed border-white/[0.09]"
        />
        <span className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 px-4 text-center">
          <span className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-gray-500">
            <ImageOff className="w-4 h-4" />
          </span>
          <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-gray-500">
            Screenshot pending
          </span>
          <span className="max-w-[85%] truncate text-[10px] font-mono text-gray-600">{src}</span>
        </span>
      </span>
    );
  }

  return (
    <Image
      ref={imgRef}
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      onError={() => setFailed(true)}
      className={cn(
        'object-cover object-top transition-transform duration-700 ease-out',
        imageClassName
      )}
    />
  );
}

interface ProjectScreenshotProps {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  /** Applied to the <img> so callers can add hover zoom etc. */
  imageClassName?: string;
}

/** Fixed-ratio screenshot frame used on cards and in the case study modal. */
export function ProjectScreenshot({
  src,
  alt,
  sizes = '(max-width: 1024px) 100vw, 50vw',
  className,
  imageClassName,
}: ProjectScreenshotProps) {
  return (
    <div
      className={cn(
        'relative w-full aspect-[16/10] overflow-hidden rounded-xl border border-white/[0.07] bg-black/40',
        className
      )}
    >
      <ScreenshotSurface src={src} alt={alt} sizes={sizes} imageClassName={imageClassName} />
    </div>
  );
}

interface ProjectGalleryProps {
  screenshots: string[];
  title: string;
  className?: string;
}

/** Main capture with a thumbnail strip, used inside the case study modal. */
export function ProjectGallery({ screenshots, title, className }: ProjectGalleryProps) {
  const [active, setActive] = useState(0);

  if (!screenshots.length) return null;

  const safeIndex = Math.min(active, screenshots.length - 1);
  const current = screenshots[safeIndex];

  return (
    <div className={cn('space-y-3', className)}>
      <ProjectScreenshot
        key={current}
        src={current}
        alt={`${title} — interface capture ${safeIndex + 1}`}
        sizes="(max-width: 768px) 100vw, 720px"
      />

      <div className="flex items-center justify-between gap-4">
        <span className="truncate text-[10px] font-mono text-gray-600">{current}</span>
        {screenshots.length > 1 && (
          <span className="shrink-0 text-[10px] font-mono text-gray-500 tabular-nums">
            {safeIndex + 1} / {screenshots.length}
          </span>
        )}
      </div>

      {screenshots.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {screenshots.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`View capture ${index + 1}`}
              aria-current={index === safeIndex}
              className={cn(
                'relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border transition-all duration-300',
                index === safeIndex
                  ? 'border-indigo-400/60 ring-2 ring-indigo-500/20'
                  : 'border-white/10 opacity-60 hover:opacity-100'
              )}
            >
              <ScreenshotSurface
                src={src}
                alt=""
                sizes="96px"
                compact
                imageClassName="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
