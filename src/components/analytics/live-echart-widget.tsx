'use client';

import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { TrendingUp } from 'lucide-react';

const SERIES = [
  {
    name: 'GAN Stroke Inferences',
    color: '#6366F1',
    area: 'rgba(99, 102, 241, 0.35)',
    data: [120, 182, 191, 234, 290, 330, 410],
  },
  {
    name: 'MySQL Queries Executed',
    color: '#10B981',
    area: 'rgba(16, 185, 129, 0.3)',
    data: [220, 282, 301, 354, 390, 430, 520],
  },
];

export function LiveEchartsWidget() {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const myChart = echarts.init(chartRef.current, undefined, { renderer: 'canvas' });

    // Canvas cannot resolve CSS variables, so read the loaded font family off <html>.
    const monoFamily =
      getComputedStyle(document.documentElement).getPropertyValue('--font-mono').trim() ||
      'monospace';

    const option: echarts.EChartsOption = {
      backgroundColor: 'transparent',
      color: SERIES.map((s) => s.color),
      animationDuration: 1400,
      animationEasing: 'cubicOut',
      textStyle: { fontFamily: `"${monoFamily}", monospace` },
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(9, 9, 12, 0.94)',
        borderColor: 'rgba(255, 255, 255, 0.12)',
        borderWidth: 1,
        padding: [10, 14],
        textStyle: { color: '#E5E7EB', fontSize: 11 },
        axisPointer: {
          type: 'line',
          lineStyle: { color: 'rgba(129, 140, 248, 0.5)', width: 1, type: 'dashed' },
        },
      },
      grid: { left: 6, right: 12, bottom: 6, top: 16, containLabel: true },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine: { lineStyle: { color: 'rgba(255,255,255,0.08)' } },
        axisTick: { show: false },
        axisLabel: { color: '#6B7280', fontSize: 11, margin: 12 },
      },
      yAxis: {
        type: 'value',
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { color: '#6B7280', fontSize: 11 },
        splitLine: { lineStyle: { color: 'rgba(255,255,255,0.05)' } },
      },
      series: SERIES.map((s) => ({
        name: s.name,
        type: 'line' as const,
        smooth: true,
        showSymbol: false,
        symbol: 'circle',
        symbolSize: 7,
        data: s.data,
        lineStyle: { width: 2, color: s.color, shadowBlur: 14, shadowColor: s.color },
        itemStyle: { color: s.color, borderColor: '#050507', borderWidth: 2 },
        emphasis: { focus: 'series' as const, scale: 1.6 },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: s.area },
            { offset: 1, color: 'rgba(0,0,0,0)' },
          ]),
        },
      })),
    };

    myChart.setOption(option);

    const handleResize = () => myChart.resize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      myChart.dispose();
    };
  }, []);

  return (
    <div className="relative h-full rounded-2xl glass-panel p-6">
      <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
        <div>
          <h3 className="text-base font-semibold text-white tracking-tight">
            Live System Analytics Feed
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            Real-time telemetry from GAN &amp; MySQL ETL workflows
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-400/20">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-soft" />
          LIVE METRICS
        </span>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-5 mb-3">
        {SERIES.map((s) => (
          <div key={s.name} className="flex items-center gap-2">
            <span
              className="h-1.5 w-4 rounded-full"
              style={{ backgroundColor: s.color, boxShadow: `0 0 10px ${s.color}` }}
            />
            <span className="text-[11px] font-mono text-gray-400">{s.name}</span>
          </div>
        ))}
        <span className="ml-auto hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-300">
          <TrendingUp className="w-3.5 h-3.5" />
          +18.4% WoW
        </span>
      </div>

      <div ref={chartRef} className="w-full h-[280px]" />
    </div>
  );
}
