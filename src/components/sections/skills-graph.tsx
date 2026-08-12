'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SKILL_NODES } from '@/lib/data';

export function SkillsGraphSection() {
  return (
    <section id="skills" className="py-24 px-6 relative bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="emerald" className="mb-3">
            Technical Stack & Capabilities
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skill Architecture & Proficiency Matrix
          </h2>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Quantified evaluation across core languages, relational databases, neural AI frameworks, and executive presentation tools.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_NODES.map((skill, idx) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              viewport={{ once: true }}
            >
              <Card className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-white">{skill.name}</span>
                  <span className="text-xs font-mono text-indigo-400 font-bold">{skill.level}%</span>
                </div>

                <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden mb-3">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-emerald-400 transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-gray-500">
                  <span>Category: {skill.category}</span>
                  <span>Validated</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
