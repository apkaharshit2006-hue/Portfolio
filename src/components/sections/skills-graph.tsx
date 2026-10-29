'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CountUp } from '@/components/ui/count-up';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { SKILL_NODES } from '@/lib/data';
import { Check } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1] as const;

export function SkillsGraphSection() {
  const categories = Array.from(new Set(SKILL_NODES.map((skill) => skill.category)));

  return (
    <section id="skills" className="relative py-24 sm:py-28 px-6 hairline-top">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Technical Stack & Capabilities"
          badgeVariant="emerald"
          title={
            <>
              Skill Architecture &amp;{' '}
              <span className="text-gradient">Proficiency Matrix</span>
            </>
          }
          description="Quantified evaluation across core languages, relational databases, neural AI frameworks, and executive presentation tools."
        />

        {/* Category legend */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category, i) => (
            <Reveal key={category} index={i} offset={10} dim={0.22} duration={0.4}>
              <Badge variant="outline" className="px-3 py-1.5">
                {category}
                <span className="text-gray-600">
                  {SKILL_NODES.filter((s) => s.category === category).length}
                </span>
              </Badge>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_NODES.map((skill, idx) => (
            <Reveal key={skill.id} index={idx} dim={0.22} offset={20} className="h-full">
              <Card className="group h-full p-5">
                <div className="flex items-baseline justify-between mb-4 gap-3">
                  <span className="text-sm font-semibold text-white leading-snug">
                    {skill.name}
                  </span>
                  <span className="text-xs font-mono font-bold text-indigo-300 tabular-nums shrink-0">
                    <CountUp value={`${skill.level}%`} duration={1100} />
                  </span>
                </div>

                <div className="relative w-full h-1.5 rounded-full bg-white/[0.06] overflow-hidden mb-4">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 1.1, delay: 0.1 + idx * 0.06, ease: EASE }}
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-indigo-400 to-emerald-400 shadow-[0_0_12px_rgba(99,102,241,0.5)]"
                  />
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-gray-500">
                  <span className="uppercase tracking-[0.12em]">{skill.category}</span>
                  <span className="flex items-center gap-1 text-emerald-400/80">
                    <Check className="w-3 h-3" />
                    Validated
                  </span>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
