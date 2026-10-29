'use client';

import { LiveEchartsWidget } from '@/components/analytics/live-echart-widget';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { CountUp } from '@/components/ui/count-up';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { Activity, Database, Server, Zap } from 'lucide-react';

const TELEMETRY = [
  { label: 'Avg Query Latency', value: '14.2ms', icon: Zap, status: 'Optimal', accent: 'text-indigo-300' },
  { label: 'Data Quality Index', value: '99.8%', icon: Database, status: 'Verified', accent: 'text-emerald-300' },
  { label: 'Active Pipeline', value: 'MySQL / ETL', icon: Server, status: 'Running', accent: 'text-purple-300' },
  { label: 'System Uptime', value: '99.99%', icon: Activity, status: 'Healthy', accent: 'text-cyan-300' },
];

export function LiveDashboardsSection() {
  return (
    <section id="dashboards" className="relative py-24 sm:py-28 px-6 hairline-top">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Interactive Telemetry"
          title={
            <>
              Live Business Intelligence &amp;{' '}
              <span className="text-gradient">Data Gallery</span>
            </>
          }
          description="Real-time analytics engine visualizing model inference trends and relational database processing speeds."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2">
            <LiveEchartsWidget />
          </div>

          <div className="space-y-4">
            {TELEMETRY.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <Reveal key={stat.label} index={idx} axis="x" offset={20} dim={0.22}>
                  <Card className="p-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-indigo-300 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] text-gray-500 truncate">{stat.label}</div>
                        <div className={`text-base sm:text-lg font-semibold font-mono tracking-tight ${stat.accent}`}>
                          <CountUp value={stat.value} duration={1200} />
                        </div>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-400/20 shrink-0">
                      <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse-soft" />
                      {stat.status}
                    </span>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
