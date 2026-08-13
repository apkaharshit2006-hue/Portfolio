'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Bot, Sparkles, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PERSONAL_INFO } from '@/lib/data';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden bg-black">
      {/* Micro Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[200px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs text-gray-300 mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Available for BI & AI Analytics Roles</span>
          <span className="text-gray-500">|</span>
          <span className="text-indigo-400 font-mono">BBA Business Analytics</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.08]"
        >
          Architecting Intelligence. <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-300 to-emerald-400">
            Decoding Business Impact.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          I am <strong className="text-white">{PERSONAL_INFO.name}</strong>. I transform raw database queries, Python analytics pipelines, and Generative GAN models into strategic enterprise decision assets.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-3 text-xs sm:text-sm font-mono text-indigo-400/80 tracking-tight"
        >
          {PERSONAL_INFO.tagline}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-full px-7 h-12 text-sm shadow-[0_0_25px_rgba(99,102,241,0.4)] transition-all flex items-center gap-2 group"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-white/10 bg-white/5 hover:bg-white/10 text-gray-200 rounded-full px-7 h-12 text-sm backdrop-blur-md flex items-center gap-2"
            onClick={() => window.dispatchEvent(new CustomEvent('open-ai-drawer'))}
          >
            <Bot className="w-4 h-4 text-indigo-400" />
            <span>Ask Resume AI Bot</span>
          </Button>
        </motion.div>

        {/* Quick Metric Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto p-4 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl"
        >
          <div className="p-3 text-center">
            <div className="text-2xl font-bold font-mono text-white">94.2%</div>
            <div className="text-xs text-gray-400 mt-1">GAN Authenticity</div>
          </div>
          <div className="p-3 text-center border-l border-white/5">
            <div className="text-2xl font-bold font-mono text-emerald-400">50+</div>
            <div className="text-xs text-gray-400 mt-1">DEI Profiles Analyzed</div>
          </div>
          <div className="p-3 text-center border-l border-white/5">
            <div className="text-2xl font-bold font-mono text-indigo-400">MySQL</div>
            <div className="text-xs text-gray-400 mt-1">Data Querying</div>
          </div>
          <div className="p-3 text-center border-l border-white/5">
            <div className="text-2xl font-bold font-mono text-purple-400">Python</div>
            <div className="text-xs text-gray-400 mt-1">Data & Automation</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
