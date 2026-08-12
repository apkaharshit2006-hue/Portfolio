'use client';

import { useState, useEffect, useRef } from 'react';
import { useChat } from 'ai/react';
import { Bot, Send, X, User, Sparkles, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ResumeAssistantDrawer() {
  const [open, setOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
    initialMessages: [
      {
        id: '1',
        role: 'assistant',
        content: `Hello! I'm Harshit's AI Assistant. Ask me anything about his Python automation experience, MySQL database work, GAN handwriting project, or his internship at Drazyashakti Trust.`,
      },
    ],
  });

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener('open-ai-drawer', handleOpen);
    return () => window.removeEventListener('open-ai-drawer', handleOpen);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-lg bg-zinc-950 border-l border-white/10 h-full flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between bg-zinc-900/50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Harshit's Resume AI</h3>
              <p className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Vercel AI Edge Stream
              </p>
            </div>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Message Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 font-sans text-xs leading-relaxed">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex gap-3 ${
                m.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {m.role === 'assistant' && (
                <div className="w-6 h-6 rounded-full bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-300 shrink-0 mt-0.5">
                  <Bot className="w-3 h-3" />
                </div>
              )}

              <div
                className={`max-w-[82%] p-3 rounded-2xl ${
                  m.role === 'user'
                    ? 'bg-indigo-600 text-white rounded-br-none'
                    : 'bg-white/5 border border-white/10 text-gray-200 rounded-bl-none'
                }`}
              >
                {m.content}
              </div>

              {m.role === 'user' && (
                <div className="w-6 h-6 rounded-full bg-emerald-600/30 border border-emerald-500/40 flex items-center justify-center text-emerald-300 shrink-0 mt-0.5">
                  <User className="w-3 h-3" />
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex items-center gap-2 text-gray-500 font-mono text-[10px] pl-9">
              <RefreshCw className="w-3 h-3 animate-spin text-indigo-400" />
              <span>Analyzing resume vectors...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Prompt Input Form */}
        <form
          onSubmit={handleSubmit}
          className="p-4 border-t border-white/10 bg-zinc-900/50 flex items-center gap-2"
        >
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask about skills, projects, or background..."
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
          />
          <Button
            type="submit"
            disabled={isLoading || !input.trim()}
            size="icon"
            className="w-9 h-9 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shrink-0"
          >
            <Send className="w-3.5 h-3.5" />
          </Button>
        </form>
      </div>
    </div>
  );
}
