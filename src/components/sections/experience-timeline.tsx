'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { EXPERIENCES } from '@/lib/data';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

export function ExperienceTimelineSection() {
  return (
    <section id="experience" className="relative py-24 sm:py-28 px-6 hairline-top">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="Career & Academic Trajectory"
          badgeVariant="purple"
          title={
            <>
              Professional Experience &amp;{' '}
              <span className="text-gradient">Education</span>
            </>
          }
          description="Hands-on work in non-profit data research combined with rigorous Business Analytics academics."
        />

        <div className="relative pl-6 sm:pl-12 space-y-10">
          {/* Rail */}
          <div
            aria-hidden
            className="absolute left-[11px] sm:left-[23px] top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/60 via-purple-500/30 to-transparent"
          />

          {EXPERIENCES.map((exp, idx) => {
            const Icon = exp.type === 'Education' ? GraduationCap : Briefcase;
            return (
              <Reveal key={exp.id} index={idx} axis="x" offset={-18} dim={0.22} duration={0.6} className="relative">
                {/* Node */}
                <div className="absolute -left-6 sm:-left-12 top-1 flex items-center justify-center">
                  <div className="relative flex h-6 w-6 items-center justify-center">
                    <span className="absolute h-6 w-6 rounded-full bg-indigo-500/20 blur-[6px]" />
                    <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-black border border-indigo-400/50 text-indigo-300 shadow-[0_0_18px_-2px_rgba(99,102,241,0.8)]">
                      <Icon className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </div>

                <Card className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
                        {exp.role}
                      </h3>
                      <div className="text-xs text-indigo-300/90 font-medium mt-1">
                        {exp.organization}
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="outline" className="gap-1.5">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </Badge>
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-gray-500">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-300/90 mb-5 leading-relaxed text-pretty">
                    {exp.description}
                  </p>

                  <div className="space-y-2.5 mb-5">
                    {exp.highlights.map((highlight, i) => (
                      <div key={i} className="text-xs text-gray-400 flex items-start gap-2.5 leading-relaxed">
                        <span className="mt-[6px] h-1 w-1 rounded-full bg-emerald-400 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                    {exp.skillsUsed.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-white/[0.04] border border-white/10 text-gray-300 transition-colors duration-300 hover:border-indigo-400/40 hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
