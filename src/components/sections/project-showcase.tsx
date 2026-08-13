'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PROJECTS } from '@/lib/data';
import { Project } from '@/types/portfolio';
import { ExternalLink, Github, Layers, ArrowUpRight, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

export function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6 relative bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="purple" className="mb-3">
            Featured Systems
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Case Studies & Engineering Breakthroughs
          </h2>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Every project demonstrates a complete lifecycle: business framing, data architecture, AI modeling, and validated impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col justify-between group cursor-pointer" onClick={() => setSelectedProject(project)}>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant={project.category === 'AI/ML' ? 'purple' : 'emerald'}>
                      {project.category}
                    </Badge>
                    <span className="text-xs font-mono text-gray-500 flex items-center gap-1 group-hover:text-indigo-400 transition-colors">
                      View Architecture <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-gray-400 mt-1 mb-4">{project.subtitle}</p>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 mb-6">
                    <div className="text-xs font-semibold text-gray-300 mb-1">Business Problem:</div>
                    <p className="text-xs text-gray-400 leading-relaxed">{project.businessProblem}</p>
                  </div>

                  {/* Architecture Diagram Thumbnail */}
                  <div
                    className="p-4 rounded-xl bg-zinc-950 border border-white/10 mb-6 overflow-hidden"
                    dangerouslySetInnerHTML={{ __html: project.architectureDiagramSvg }}
                  />

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-white/5 border border-white/10 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/5">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <div className="text-sm font-bold font-mono text-white">{m.value}</div>
                      <div className="text-[10px] text-gray-500">{m.label}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detailed Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-3xl bg-zinc-950 border border-white/10 rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative">
            <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
              <div>
                <Badge variant="emerald" className="mb-2">{selectedProject.category}</Badge>
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
              </div>
              <Button size="sm" variant="ghost" onClick={() => setSelectedProject(null)}>
                Close
              </Button>
            </div>

            <div className="space-y-6 text-xs text-gray-300 leading-relaxed">
              <div>
                <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Key Business Impact
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-400">
                  {selectedProject.businessImpact.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-purple-400" />
                  Technical Challenges Overcome
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-400">
                  {selectedProject.challenges.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  Key Lessons Learned
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-400">
                  {selectedProject.lessonsLearned.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
