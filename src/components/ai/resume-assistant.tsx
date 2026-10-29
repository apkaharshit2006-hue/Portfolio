'use client';

import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useChat } from 'ai/react';
import { Bot, Send, X, User, RefreshCw, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EASE = [0.16, 1, 0.3, 1] as const;

const SUGGESTIONS = [
  'What is his GAN project about?',
  'Summarize his MySQL experience',
  'What roles is he targeting?',
];

export function ResumeAssistantDrawer() {
  const [open, setOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading, append } = useChat({
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

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex justify-end"
        >
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.45, ease: EASE }}
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-lg h-full flex flex-col bg-[#0A0A0F]/95 backdrop-blur-2xl border-l border-white/10 shadow-[-40px_0_120px_-40px_rgba(79,70,229,0.6)]"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500/30 to-transparent border border-indigo-400/30 flex items-center justify-center text-indigo-300">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white tracking-tight">
                    Harshit&apos;s Resume AI
                  </h3>
                  <p className="text-[10px] font-mono text-emerald-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-soft" />
                    Vercel AI Edge Stream
                  </p>
                </div>
              </div>

              <button
                onClick={() => setOpen(false)}
                aria-label="Close assistant"
                className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs leading-relaxed">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.role === 'assistant' && (
                    <div className="w-6 h-6 rounded-lg bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 shrink-0 mt-0.5">
                      <Bot className="w-3 h-3" />
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl whitespace-pre-wrap ${
                      message.role === 'user'
                        ? 'bg-gradient-to-b from-indigo-500 to-indigo-600 text-white rounded-br-md shadow-[0_10px_30px_-14px_rgba(79,70,229,0.9)]'
                        : 'bg-white/[0.04] border border-white/10 text-gray-200 rounded-bl-md'
                    }`}
                  >
                    {message.content}
                  </div>

                  {message.role === 'user' && (
                    <div className="w-6 h-6 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 shrink-0 mt-0.5">
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

            {/* Suggestions */}
            {messages.length <= 1 && (
              <div className="px-4 pb-3 flex flex-wrap gap-2">
                {SUGGESTIONS.map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => append({ role: 'user', content: suggestion })}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[10px] font-mono text-gray-400 bg-white/[0.03] border border-white/10 hover:text-white hover:border-indigo-400/40 transition-colors"
                  >
                    <Sparkles className="w-3 h-3 text-indigo-400" />
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            {/* Composer */}
            <form
              onSubmit={handleSubmit}
              className="p-4 border-t border-white/[0.08] flex items-center gap-2"
            >
              <input
                value={input}
                onChange={handleInputChange}
                placeholder="Ask about skills, projects, or background..."
                className="flex-1 bg-white/[0.03] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-600 outline-none transition-all duration-300 focus:border-indigo-400/60 focus:shadow-[0_0_0_4px_rgba(99,102,241,0.12)]"
              />
              <Button
                type="submit"
                disabled={isLoading || !input.trim()}
                size="icon"
                className="w-9 h-9 shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
              </Button>
            </form>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
