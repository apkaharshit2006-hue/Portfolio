'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CountUp } from '@/components/ui/count-up';
import { PERSONAL_INFO } from '@/lib/data';

const METRICS = [
  { value: '94.2%', label: 'GAN Authenticity', accent: 'text-white' },
  { value: '3+', label: 'Trading Strategies', accent: 'text-emerald-400' },
  { value: 'MySQL', label: 'Data Querying', accent: 'text-indigo-400' },
  { value: 'Python', label: 'Data & Automation', accent: 'text-purple-400' },
];

const TOOLBELT = [
  'Python',
  'Pandas',
  'NumPy',
  'MySQL',
  'Generative Adversarial Networks',
  'Machine Learning',
  'ETL Pipelines',
  'Advanced Excel',
  'Data Storytelling',
  'Backtesting',
  'Matplotlib',
  'Business Intelligence',
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-28 px-6 overflow-hidden"
    >
      {/* Grid + radial mask */}
      <div
        aria-hidden
        className="absolute inset-0 grid-backdrop [mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,#000_60%,transparent_100%)]"
      />

      {/* Aurora lighting */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[880px] max-w-[130vw] rounded-full bg-indigo-600/12 blur-[150px]" />
        <div className="absolute top-1/4 left-[12%] h-[300px] w-[300px] rounded-full bg-emerald-500/[0.07] blur-[120px] animate-float-slow" />
        <div className="absolute top-[45%] right-[10%] h-[280px] w-[280px] rounded-full bg-purple-500/[0.08] blur-[120px] animate-float" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050507] to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl text-xs text-gray-300 mb-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          <span>Available for BI &amp; AI Analytics Roles</span>
          <span className="h-3 w-px bg-white/10" />
          <span className="text-indigo-300 font-mono">BBA Business Analytics</span>
        </motion.div>

        {/* Headline — each line masked, then blurs/rises/rotates into place */}
        <h1 className="text-4xl sm:text-6xl md:text-[4.4rem] font-semibold tracking-tighter text-white max-w-4xl mx-auto leading-[1.05] text-balance">
          <span className="hero-line">
            <span className="hero-line__inner">Architecting Intelligence.</span>
          </span>
          <span className="hero-line">
            <span className="hero-line__inner">
              Decoding{' '}
              <span className="marker-highlight">
                <span className="text-gradient">Business Impact.</span>
              </span>
            </span>
          </span>
        </h1>

        {/* Subcopy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
          className="mt-7 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed text-pretty"
        >
          I am <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>. I transform
          raw database queries, Python analytics pipelines, and Generative GAN models into strategic
          enterprise decision assets.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="mt-4 text-[11px] sm:text-xs font-mono uppercase tracking-[0.18em] text-indigo-300/70 caret-blink"
        >
          {PERSONAL_INFO.tagline}
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: EASE }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Button
            size="lg"
            className="group"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => window.dispatchEvent(new CustomEvent('open-ai-drawer'))}
          >
            <Bot className="w-4 h-4 mr-2 text-indigo-400" />
            <span>Ask Resume AI Bot</span>
          </Button>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.38, ease: EASE }}
          className="mt-14 rounded-2xl glass-panel overflow-hidden"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.06]">
            {METRICS.map((metric) => (
              <div
                key={metric.label}
                className="group px-4 py-5 text-center bg-black/40 backdrop-blur-xl transition-colors duration-300 hover:bg-indigo-500/[0.07]"
              >
                <div
                  className={`text-xl sm:text-2xl font-semibold font-mono tracking-tight ${metric.accent} transition-transform duration-300 group-hover:scale-105`}
                >
                  <CountUp value={metric.value} />
                </div>
                <div className="text-[11px] text-gray-500 mt-1.5">{metric.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Toolbelt marquee — pauses on hover/focus */}
      <div className="absolute bottom-0 inset-x-0 z-10 border-t border-white/[0.06] bg-black/30 backdrop-blur-sm py-4 marquee-marquee">
        <div className="marquee-mask overflow-hidden" tabIndex={0}>
          <div className="flex w-max animate-marquee marquee-track gap-10">
            {[...TOOLBELT, ...TOOLBELT].map((tool, i) => (
              <div key={`${tool}-${i}`} className="flex items-center gap-10">
                <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-gray-500 whitespace-nowrap">
                  {tool}
                </span>
                <span className="h-1 w-1 rounded-full bg-indigo-500/50 shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
