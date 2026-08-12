export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI/ML' | 'Business Intelligence' | 'Data Analytics' | 'Automation';
  featured: boolean;
  businessProblem: string;
  whyItMatters: string;
  architectureDiagramSvg: string;
  techStack: string[];
  aiWorkflowDescription: string;
  screenshots: string[];
  interactiveDemoUrl?: string;
  businessImpact: string[];
  challenges: string[];
  lessonsLearned: string[];
  githubUrl: string;
  downloadableReportUrl?: string;
  metrics: { label: string; value: string; growth?: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: 'Internship' | 'Project' | 'Education';
  description: string;
  highlights: string[];
  skillsUsed: string[];
}

export interface SkillNode {
  id: string;
  name: string;
  category: 'Languages' | 'Databases' | 'AI & ML' | 'Tools & BI';
  level: number;
  connections: string[];
}
