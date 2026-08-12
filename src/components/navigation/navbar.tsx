'use client';

import { useState, useEffect } from 'react';
import { Bot, Command as CommandIcon, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PERSONAL_INFO } from '@/lib/data';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Analytics', href: '#dashboards' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-black/70 backdrop-blur-xl border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-emerald-400 p-0.5 shadow-lg shadow-indigo-500/20">
            <div className="w-full h-full bg-black rounded-[7px] flex items-center justify-center font-bold text-xs text-white group-hover:bg-transparent transition-colors">
              HS
            </div>
          </div>
          <span className="font-semibold text-sm tracking-tight text-white group-hover:text-indigo-400 transition-colors">
            {PERSONAL_INFO.name}
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-gray-400">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Cmd+K Launcher */}
          <button
            onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 text-xs font-mono transition-all"
          >
            <CommandIcon className="w-3.5 h-3.5" />
            <span>Search</span>
            <kbd className="px-1.5 py-0.5 text-[10px] bg-white/10 rounded text-gray-300">⌘K</kbd>
          </button>

          {/* AI Drawer Trigger */}
          <Button
            size="sm"
            className="bg-indigo-600/90 hover:bg-indigo-500 text-white rounded-lg flex items-center gap-1.5 text-xs shadow-md shadow-indigo-600/20"
            onClick={() => window.dispatchEvent(new CustomEvent('open-ai-drawer'))}
          >
            <Bot className="w-3.5 h-3.5" />
            <span>Ask AI</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
