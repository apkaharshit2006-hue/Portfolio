'use client';

import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export function LiveEchartsWidget() {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const myChart = echarts.init(chartRef.current, 'dark');

    const option = {
      backgroundColor: 'transparent',
      tooltip: { trigger: 'axis' },
      grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine: { lineStyle: { color: '#374151' } },
      },
      yAxis: {
        type: 'value',
        axisLine: { lineStyle: { color: '#374151' } },
        splitLine: { lineStyle: { color: '#1F2937' } },
      },
      series: [
        {
          name: 'GAN Stroke Inferences',
          type: 'line',
          smooth: true,
          data: [120, 182, 191, 234, 290, 330, 410],
          itemStyle: { color: '#6366F1' },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(99, 102, 241, 0.4)' },
              { offset: 1, color: 'rgba(99, 102, 241, 0.0)' },
            ]),
          },
        },
        {
          name: 'MySQL Queries Executed',
          type: 'line',
          smooth: true,
          data: [220, 282, 301, 354, 390, 430, 520],
          itemStyle: { color: '#10B981' },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(16, 185, 129, 0.4)' },
              { offset: 1, color: 'rgba(16, 185, 129, 0.0)' },
            ]),
          },
        },
      ],
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
    <div className="p-6 rounded-2xl glass-panel glass-panel-hover">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-semibold text-white">Live System Analytics Feed</h3>
          <p className="text-xs text-gray-400">Real-time telemetry from GAN & MySQL ETL Workflows</p>
        </div>
        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          LIVE METRICS
        </span>
      </div>
      <div ref={chartRef} className="w-full h-[260px]" />
    </div>
  );
}
