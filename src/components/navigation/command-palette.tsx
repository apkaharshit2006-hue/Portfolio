'use client';

import { useState, useEffect } from 'react';
import { Command } from 'cmdk';
import { Search, FileText, Code, Bot, Mail, X } from 'lucide-react';
import { PROJECTS, PERSONAL_INFO } from '@/lib/data';

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden relative">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-300"
        >
          <X className="w-4 h-4" />
        </button>
        <Command className="w-full bg-transparent">
          <div className="flex items-center px-4 border-b border-zinc-800">
            <Search className="w-4 h-4 text-zinc-400 mr-2" />
            <Command.Input
              placeholder="Search skills, projects, background..."
              className="w-full py-4 bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none font-mono"
            />
          </div>
          <Command.List className="max-h-80 overflow-y-auto p-2">
            <Command.Empty className="py-6 text-center text-xs text-zinc-500 font-mono">
              No matching records found.
            </Command.Empty>

            <Command.Group heading="Quick Actions" className="px-2 text-[10px] font-mono text-zinc-500 uppercase">
              <Command.Item
                onSelect={() => {
                  window.dispatchEvent(new CustomEvent('open-ai-drawer'));
                  setOpen(false);
                }}
                className="flex items-center gap-2 p-2 rounded-lg text-sm text-zinc-200 hover:bg-zinc-800 cursor-pointer"
              >
                <Bot className="w-4 h-4 text-indigo-400" />
                <span>Launch Resume AI Assistant</span>
              </Command.Item>
              <Command.Item
                onSelect={() => {
                  window.open(`mailto:${PERSONAL_INFO.email}`);
                  setOpen(false);
                }}
                className="flex items-center gap-2 p-2 rounded-lg text-sm text-zinc-200 hover:bg-zinc-800 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Contact Harshit Sinha Directly</span>
              </Command.Item>
            </Command.Group>

            <Command.Group heading="Projects" className="px-2 mt-2 text-[10px] font-mono text-zinc-500 uppercase">
              {PROJECTS.map((project) => (
                <Command.Item
                  key={project.id}
                  onSelect={() => {
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                    setOpen(false);
                  }}
                  className="flex items-center justify-between p-2 rounded-lg text-sm text-zinc-200 hover:bg-zinc-800 cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-purple-400" />
                    <span>{project.title}</span>
                  </div>
                  <span className="text-xs font-mono text-zinc-500">{project.category}</span>
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
}
