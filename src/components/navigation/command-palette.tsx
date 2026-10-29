'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Command } from 'cmdk';
import { Search, Code, Bot, Mail, X } from 'lucide-react';
import { PROJECTS, PERSONAL_INFO } from '@/lib/data';

const EASE = [0.16, 1, 0.3, 1] as const;

const itemClasses =
  'flex items-center gap-2.5 p-2.5 rounded-lg text-sm text-gray-300 cursor-pointer transition-colors duration-150 data-[selected=true]:bg-white/[0.07] data-[selected=true]:text-white';

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (event: KeyboardEvent) => {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-start justify-center p-4 pt-[15vh]"
        >
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.28, ease: EASE }}
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-xl rounded-2xl border border-white/10 bg-[#0A0A0F]/95 backdrop-blur-2xl shadow-[0_40px_120px_-40px_rgba(79,70,229,0.7)] overflow-hidden"
          >
            <Command className="w-full bg-transparent" loop>
              <div className="flex items-center px-4 border-b border-white/[0.08]">
                <Search className="w-4 h-4 text-gray-500 mr-3 shrink-0" />
                <Command.Input
                  autoFocus
                  placeholder="Search skills, projects, background..."
                  className="w-full py-4 bg-transparent text-sm text-white placeholder-gray-600 outline-none font-mono"
                />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close search"
                  className="shrink-0 p-1.5 text-gray-500 hover:text-white transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <Command.List className="max-h-80 overflow-y-auto p-2">
                <Command.Empty className="py-10 text-center text-xs text-gray-500 font-mono">
                  No matching records found.
                </Command.Empty>

                <Command.Group
                  heading="Quick Actions"
                  className="px-2 py-1.5 text-[10px] font-mono text-gray-500 uppercase tracking-[0.14em]"
                >
                  <Command.Item
                    onSelect={() => {
                      window.dispatchEvent(new CustomEvent('open-ai-drawer'));
                      setOpen(false);
                    }}
                    className={itemClasses}
                  >
                    <Bot className="w-4 h-4 text-indigo-400" />
                    <span>Launch Resume AI Assistant</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => {
                      window.open(`mailto:${PERSONAL_INFO.email}`);
                      setOpen(false);
                    }}
                    className={itemClasses}
                  >
                    <Mail className="w-4 h-4 text-emerald-400" />
                    <span>Contact Harshit Sinha Directly</span>
                  </Command.Item>
                </Command.Group>

                <Command.Group
                  heading="Projects"
                  className="px-2 py-1.5 mt-1 text-[10px] font-mono text-gray-500 uppercase tracking-[0.14em]"
                >
                  {PROJECTS.map((project) => (
                    <Command.Item
                      key={project.id}
                      onSelect={() => {
                        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                        setOpen(false);
                      }}
                      className={`${itemClasses} justify-between`}
                    >
                      <span className="flex items-center gap-2.5 min-w-0">
                        <Code className="w-4 h-4 text-purple-400 shrink-0" />
                        <span className="truncate">{project.title}</span>
                      </span>
                      <span className="text-[11px] font-mono text-gray-500 shrink-0 ml-3">
                        {project.category}
                      </span>
                    </Command.Item>
                  ))}
                </Command.Group>

                {['About', 'Skills', 'Experience', 'Contact'].map((section) => (
                  <Command.Item
                    key={section}
                    value={`${section} section navigate`}
                    onSelect={() => {
                      document
                        .getElementById(section.toLowerCase())
                        ?.scrollIntoView({ behavior: 'smooth' });
                      setOpen(false);
                    }}
                    className={itemClasses}
                  >
                    <Search className="w-3.5 h-3.5 text-gray-500" />
                    <span>Jump to {section}</span>
                  </Command.Item>
                ))}
              </Command.List>

              <div className="flex items-center justify-between gap-4 px-4 py-3 border-t border-white/[0.08] text-[10px] font-mono text-gray-600">
                <span>Tip: press ⌘K anywhere</span>
                <span className="flex items-center gap-3">
                  <span>↑↓ navigate</span>
                  <span>↵ select</span>
                  <span>esc close</span>
                </span>
              </div>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
