'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';
import { ProjectScreenshot, ProjectGallery } from '@/components/projects/project-gallery';
import { PROJECTS } from '@/lib/data';
import { Project } from '@/types/portfolio';
import {
  Github,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  X,
  Layers,
  MonitorSmartphone,
} from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1] as const;

const MODAL_SECTIONS = [
  {
    key: 'businessImpact' as const,
    title: 'Key Business Impact',
    icon: CheckCircle2,
    accent: 'text-emerald-300',
    tile: 'bg-emerald-500/10 border-emerald-400/20',
  },
  {
    key: 'challenges' as const,
    title: 'Technical Challenges Overcome',
    icon: AlertCircle,
    accent: 'text-purple-300',
    tile: 'bg-purple-500/10 border-purple-400/20',
  },
  {
    key: 'lessonsLearned' as const,
    title: 'Key Lessons Learned',
    icon: Sparkles,
    accent: 'text-indigo-300',
    tile: 'bg-indigo-500/10 border-indigo-400/20',
  },
];

export function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!selectedProject) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedProject(null);
    };
    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="relative py-24 sm:py-28 px-6 hairline-top">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Featured Systems"
          badgeVariant="purple"
          title={
            <>
              Case Studies &amp;{' '}
              <span className="text-gradient">Engineering Breakthroughs</span>
            </>
          }
          description="Every project demonstrates a complete lifecycle: business framing, data architecture, AI modeling, and validated impact."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {PROJECTS.map((project, idx) => (
            <Reveal key={project.id} index={idx} dim={0.22} offset={24} className="h-full">
              <Card
                className="group h-full flex flex-col justify-between cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <Badge variant={project.category === 'AI/ML' ? 'purple' : 'emerald'} dot>
                      {project.category}
                    </Badge>
                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(event) => event.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-[11px] font-mono text-gray-500 hover:text-white transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>GitHub</span>
                        </a>
                      )}
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-gray-500 group-hover:text-indigo-300 transition-all duration-300 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0 max-sm:opacity-100 max-sm:translate-y-0">
                        Case Study
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-white leading-snug group-hover:text-indigo-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[11px] font-mono text-gray-500 mt-2 mb-5 leading-relaxed">
                    {project.subtitle}
                  </p>

                  <div className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-4 mb-5">
                    <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-indigo-300/80 mb-2">
                      Business Problem
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">{project.businessProblem}</p>
                  </div>

                  {/* Interface capture — falls back to the architecture diagram when none exists */}
                  {project.screenshots?.length ? (
                    <ProjectScreenshot
                      src={project.screenshots[0]}
                      alt={`${project.title} interface capture`}
                      className="mb-5"
                      imageClassName="group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="relative rounded-xl bg-black/40 border border-white/[0.07] mb-5 overflow-hidden">
                      <div
                        aria-hidden
                        className="absolute inset-0 grid-backdrop opacity-40 [mask-image:radial-gradient(ellipse_at_center,#000,transparent_85%)]"
                      />
                      <div
                        className="relative p-4 [&_svg]:w-full [&_svg]:h-auto"
                        dangerouslySetInnerHTML={{ __html: project.architectureDiagramSvg }}
                      />
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-white/[0.04] border border-white/10 text-gray-400 transition-colors duration-300 hover:border-indigo-400/40 hover:text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-px rounded-xl overflow-hidden bg-white/[0.06]">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="bg-black/30 px-2 py-3 text-center backdrop-blur-xl">
                      <div className="text-sm font-semibold font-mono text-white tracking-tight">
                        {metric.value}
                      </div>
                      <div className="text-[10px] text-gray-500 mt-1">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={selectedProject.title}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.35, ease: EASE }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0A0A0F]/95 backdrop-blur-2xl shadow-[0_40px_120px_-40px_rgba(79,70,229,0.7)]"
            >
              {/* Header */}
              <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-white/[0.08] bg-[#0A0A0F]/90 backdrop-blur-xl px-6 py-5">
                <div>
                  <Badge variant="emerald" dot className="mb-3">
                    {selectedProject.category}
                  </Badge>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight leading-snug">
                    {selectedProject.title}
                  </h3>
                  <p className="text-[11px] font-mono text-gray-500 mt-2">
                    {selectedProject.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close case study"
                  className="shrink-0 w-8 h-8 rounded-lg border border-white/10 bg-white/[0.04] text-gray-400 hover:text-white hover:bg-white/[0.08] transition-colors flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="px-6 py-6 space-y-6">
                {/* Interface captures */}
                {selectedProject.screenshots?.length ? (
                  <div>
                    <div className="flex items-center gap-2.5 mb-3">
                      <span className="w-7 h-7 rounded-lg border bg-white/[0.04] border-white/10 text-gray-400 flex items-center justify-center">
                        <MonitorSmartphone className="w-3.5 h-3.5" />
                      </span>
                      <h4 className="text-sm font-semibold text-white tracking-tight">
                        Interface Captures
                      </h4>
                    </div>
                    <ProjectGallery
                      screenshots={selectedProject.screenshots}
                      title={selectedProject.title}
                    />
                  </div>
                ) : null}

                {/* Architecture */}
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="w-7 h-7 rounded-lg border bg-indigo-500/10 border-indigo-400/20 text-indigo-300 flex items-center justify-center">
                      <Layers className="w-3.5 h-3.5" />
                    </span>
                    <h4 className="text-sm font-semibold text-white tracking-tight">
                      System Architecture
                    </h4>
                  </div>
                  <div className="relative rounded-xl bg-black/40 border border-white/[0.07] overflow-hidden">
                    <div
                      aria-hidden
                      className="absolute inset-0 grid-backdrop opacity-40 [mask-image:radial-gradient(ellipse_at_center,#000,transparent_85%)]"
                    />
                    <div
                      className="relative p-5 [&_svg]:w-full [&_svg]:h-auto"
                      dangerouslySetInnerHTML={{ __html: selectedProject.architectureDiagramSvg }}
                    />
                  </div>
                </div>

                <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
                  <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-indigo-300/80 mb-2">
                    Why It Matters
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {selectedProject.whyItMatters}
                  </p>
                </div>

                {MODAL_SECTIONS.map((section) => {
                  const Icon = section.icon;
                  const items = selectedProject[section.key];
                  return (
                    <div key={section.key}>
                      <div className="flex items-center gap-2.5 mb-3">
                        <span
                          className={`w-7 h-7 rounded-lg border flex items-center justify-center ${section.tile} ${section.accent}`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </span>
                        <h4 className="text-sm font-semibold text-white tracking-tight">
                          {section.title}
                        </h4>
                      </div>
                      <ul className="space-y-2 pl-1">
                        {items.map((item) => (
                          <li
                            key={item}
                            className="text-xs text-gray-400 flex items-start gap-2.5 leading-relaxed"
                          >
                            <span className="mt-[6px] h-1 w-1 rounded-full bg-gray-600 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}

                <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-white/[0.08]">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-xs text-white hover:bg-white/[0.1] transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub Repository</span>
                    </a>
                  )}
                  <Button size="sm" variant="ghost" onClick={() => setSelectedProject(null)}>
                    Close
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
