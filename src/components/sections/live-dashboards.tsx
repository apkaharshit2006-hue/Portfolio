'use client';

import { LiveEchartsWidget } from '@/components/analytics/live-echart-widget';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Activity, Database, Server, Zap } from 'lucide-react';

export function LiveDashboardsSection() {
  const telemetryStats = [
    { label: 'Avg Query Latency', value: '14.2ms', icon: Zap, status: 'Optimal' },
    { label: 'Data Quality Index', value: '99.8%', icon: Database, status: 'Verified' },
    { label: 'Active Pipeline', value: 'MySQL / ETL', icon: Server, status: 'Running' },
    { label: 'System Uptime', value: '99.99%', icon: Activity, status: 'Healthy' },
  ];

  return (
    <section id="dashboards" className="py-24 px-6 relative bg-zinc-950/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="default" className="mb-3">
            Interactive Telemetry
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Live Business Intelligence & Data Gallery
          </h2>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Real-time analytics engine visualizing model inference trends and relational database processing speeds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <LiveEchartsWidget />
          </div>

          <div className="space-y-4">
            {telemetryStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.label} className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                      <div className="text-lg font-bold font-mono text-white">{stat.value}</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {stat.status}
                  </span>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
