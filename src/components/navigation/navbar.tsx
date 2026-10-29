'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Bot, Command as CommandIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PERSONAL_INFO } from '@/lib/data';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Analytics', href: '#dashboards' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>('');

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    NAV_LINKS.forEach(({ href }) => {
      const el = document.getElementById(href.slice(1));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out',
        scrolled
          ? 'bg-black/60 backdrop-blur-2xl border-b border-white/10 py-3'
          : 'bg-transparent py-5 border-b border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-2.5 group shrink-0">
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 via-indigo-400 to-emerald-400 p-px shadow-glow transition-transform duration-500 group-hover:rotate-6">
            <div className="w-full h-full bg-black rounded-[7px] flex items-center justify-center font-bold text-[11px] tracking-tight text-white">
              HS
            </div>
          </div>
          <span className="font-semibold text-sm tracking-tight text-white/90 group-hover:text-white transition-colors">
            {PERSONAL_INFO.name}
          </span>
        </a>

        {/* Links */}
        <nav className="hidden lg:flex items-center gap-1 text-xs font-medium text-gray-400">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                aria-current={isActive ? 'true' : undefined}
                className={cn(
                  'relative px-3 py-1.5 rounded-full transition-colors duration-300',
                  isActive ? 'text-white' : 'hover:text-white'
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-white/[0.07] border border-white/10"
                  />
                )}
                <span className="relative">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-gray-400 hover:text-white hover:bg-white/[0.08] text-xs font-mono transition-all duration-300"
          >
            <CommandIcon className="w-3.5 h-3.5" />
            <span>Search</span>
            <kbd className="px-1.5 py-0.5 text-[10px] bg-white/10 rounded text-gray-300 border border-white/5">
              ⌘K
            </kbd>
          </button>

          <Button
            size="sm"
            className="flex items-center gap-1.5 text-xs"
            onClick={() => window.dispatchEvent(new CustomEvent('open-ai-drawer'))}
          >
            <Bot className="w-3.5 h-3.5" />
            <span>Ask AI</span>
          </Button>
        </div>
      </div>

      {/* Reading progress */}
      <motion.div
        style={{ scaleX: progress }}
        className={cn(
          'absolute bottom-0 left-0 right-0 h-px origin-left bg-gradient-to-r from-indigo-500 via-purple-400 to-emerald-400 transition-opacity duration-500',
          scrolled ? 'opacity-100' : 'opacity-0'
        )}
      />
    </header>
  );
}
