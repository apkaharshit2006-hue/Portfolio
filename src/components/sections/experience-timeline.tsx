'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EXPERIENCES } from '@/lib/data';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

export function ExperienceTimelineSection() {
  return (
    <section id="experience" className="py-24 px-6 relative bg-zinc-950/60">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="purple" className="mb-3">
            Career & Academic Trajectory
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Professional Experience & Education
          </h2>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Hands-on work in non-profit data research combined with rigorous Business Analytics academics.
          </p>
        </div>

        <div className="relative border-l border-white/10 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          {EXPERIENCES.map((exp, idx) => {
            const Icon = exp.type === 'Education' ? GraduationCap : Briefcase;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Node Icon */}
                <div className="absolute -left-[37px] sm:-left-[53px] top-1.5 w-8 h-8 rounded-full bg-black border border-indigo-500/50 flex items-center justify-center text-indigo-400 shadow-lg shadow-indigo-500/20">
                  <Icon className="w-4 h-4" />
                </div>

                <Card className="p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                      <div className="text-xs text-indigo-400 font-medium mt-0.5">{exp.organization}</div>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-mono text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                  <div className="space-y-1.5 mb-4">
                    {exp.highlights.map((h, i) => (
                      <div key={i} className="text-xs text-gray-400 flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">•</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
                    {exp.skillsUsed.map((s) => (
                      <span key={s} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-gray-300">
                        {s}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
