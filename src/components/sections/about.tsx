'use client';

import { Reveal } from '@/components/ui/reveal';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SectionHeading } from '@/components/ui/section-heading';
import { PERSONAL_INFO } from '@/lib/data';
import { Database, Cpu, BarChart3, GraduationCap } from 'lucide-react';

const ACCENTS = {
  indigo: {
    tile: 'from-indigo-500/25 text-indigo-300 border-indigo-400/20',
    glow: 'group-hover:shadow-glow',
  },
  purple: {
    tile: 'from-purple-500/25 text-purple-300 border-purple-400/20',
    glow: 'group-hover:shadow-glow',
  },
  emerald: {
    tile: 'from-emerald-500/25 text-emerald-300 border-emerald-400/20',
    glow: 'group-hover:shadow-glow-mint',
  },
  cyan: {
    tile: 'from-cyan-500/25 text-cyan-300 border-cyan-400/20',
    glow: 'group-hover:shadow-glow',
  },
} as const;

const PILLARS = [
  {
    icon: Database,
    accent: 'indigo' as const,
    title: 'SQL & Relational Warehousing',
    description:
      'Crafting optimized MySQL queries, complex joins, subqueries, and aggregated datasets for fast executive reporting.',
    badge: 'MySQL / SQL',
  },
  {
    icon: Cpu,
    accent: 'purple' as const,
    title: 'AI Systems & Generative GANs',
    description:
      'Building deep learning conditional GAN models that translate digital text vectors into realistic human handwriting.',
    badge: 'Deep Learning',
  },
  {
    icon: BarChart3,
    accent: 'emerald' as const,
    title: 'Quantitative Research & DEI BI',
    description:
      'Analyzing large-scale qualitative and quantitative data at Drazyashakti / Dryzyashakti Trust for workplace disability inclusion.',
    badge: 'Analytics',
  },
  {
    icon: GraduationCap,
    accent: 'cyan' as const,
    title: 'BBA Business Analytics',
    description:
      'Enrolled at ITM Skills University, combining business decision frameworks with hands-on technical execution.',
    badge: 'ITM University',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-28 px-6 hairline-top">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Core Philosophy"
          badgeVariant="emerald"
          title={
            <>
              Data Engineering Meets{' '}
              <span className="text-gradient">Business Strategy</span>
            </>
          }
          description="I don't just process numbers — I construct clear analytical narratives that allow leaders to act with speed and high precision."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            const accent = ACCENTS[pillar.accent];
            return (
              <Reveal key={pillar.title} index={idx} dim={0.22} offset={22} className="h-full">
                <Card className="group h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-5">
                      <div
                        className={`w-11 h-11 rounded-xl bg-gradient-to-br to-transparent border flex items-center justify-center transition-shadow duration-500 ${accent.tile} ${accent.glow}`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <Badge variant="outline">{pillar.badge}</Badge>
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">{pillar.description}</p>
                  </div>

                  <div className="mt-6 h-px w-full bg-gradient-to-r from-white/10 to-transparent" />
                </Card>
              </Reveal>
            );
          })}
        </div>

        {/* Highlight strip */}
        <Reveal
          dim={0.2}
          offset={20}
          className="mt-6 rounded-2xl glass-panel p-6 sm:p-8 flex flex-col md:flex-row md:items-center gap-6 justify-between"
        >
          <div className="max-w-2xl">
            <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-indigo-300/70 mb-2">
              Current Focus
            </div>
            <p className="text-sm text-gray-300 leading-relaxed text-pretty">
              {PERSONAL_INFO.summary}
            </p>
          </div>
          <div className="flex items-center gap-6 shrink-0">
            <div className="text-center">
              <div className="text-xl font-semibold font-mono text-white">
                {PERSONAL_INFO.education.period}
              </div>
              <div className="text-[11px] text-gray-500 mt-1">{PERSONAL_INFO.education.institution}</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
