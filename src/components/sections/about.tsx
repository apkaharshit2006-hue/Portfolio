'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PERSONAL_INFO } from '@/lib/data';
import { Database, Cpu, BarChart3, GraduationCap } from 'lucide-react';

export function AboutSection() {
  const pillars = [
    {
      icon: Database,
      title: "SQL & Relational Warehousing",
      description: "Crafting optimized MySQL queries, complex joins, subqueries, and aggregated datasets for fast executive reporting.",
      badge: "MySQL / SQL",
    },
    {
      icon: Cpu,
      title: "AI Systems & Generative GANs",
      description: "Building deep learning conditional GAN models that translate digital text vectors into realistic human handwriting.",
      badge: "Deep Learning",
    },
    {
      icon: BarChart3,
      title: "Quantitative Research & DEI BI",
      description: "Analyzing large-scale qualitative and quantitative data at Drazyashakti Trust for workplace disability inclusion.",
      badge: "Analytics",
    },
    {
      icon: GraduationCap,
      title: "BBA Business Analytics",
      description: "Enrolled at ITM Skills University, combining business decision frameworks with hands-on technical execution.",
      badge: "ITM University",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 relative bg-zinc-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="emerald" className="mb-3">
            Core Philosophy
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Data Engineering Meets Business Strategy
          </h2>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            I don't just process numbers — I construct clear analytical narratives that allow leaders to act with speed and high precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <Badge variant="outline">{p.badge}</Badge>
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2">{p.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">{p.description}</p>
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
