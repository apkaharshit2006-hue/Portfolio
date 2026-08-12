import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { ProjectShowcase } from '@/components/sections/project-showcase';
import { LiveDashboardsSection } from '@/components/sections/live-dashboards';
import { SkillsGraphSection } from '@/components/sections/skills-graph';
import { ExperienceTimelineSection } from '@/components/sections/experience-timeline';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="space-y-0">
      <HeroSection />
      <AboutSection />
      <ProjectShowcase />
      <LiveDashboardsSection />
      <SkillsGraphSection />
      <ExperienceTimelineSection />
      <ContactSection />
    </div>
  );
}
