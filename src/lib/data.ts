import { Project, ExperienceItem, SkillNode } from '@/types/portfolio';

export const PERSONAL_INFO = {
  name: "Harshit Kumar Sinha",
  title: "Business Intelligence & AI Automation Specialist",
  tagline: "Transforming Raw Enterprise Data & Generative AI Models into High-Impact Strategic Assets",
  email: "apkaharshit2006@gmail.com",
  phone: "+91 9993241666",
  location: "Navi Mumbai, India",
  education: {
    degree: "Bachelor's in Business Administration (BBA) – Business Analytics",
    institution: "ITM Skills University, Navi Mumbai",
    period: "2025 – 2026",
    focus: "Data Querying, Python Automation, Machine Learning & Database Analytics",
  },
  summary: `Driven Business Analytics student with specialized expertise in Python, SQL/MySQL data handling, and Generative AI systems. Experienced in developing GAN-based handwriting generation models and managing quantitative DEI research at Drazyashakti Trust.`,
  socials: {
    github: "https://github.com/harshit-sinha",
    linkedin: "https://linkedin.com/in/harshit-sinha",
    email: "mailto:apkaharshit2006@gmail.com",
  }
};

export const PROJECTS: Project[] = [
  {
    id: "ai-handwriting-gan",
    title: "Neural Handwriting Copying & Generation System",
    subtitle: "Deep Learning GAN Pipeline Converting Digital Input to Human Handwriting",
    category: "AI/ML",
    featured: true,
    businessProblem: "Personalized communications and document automation lack authentic human touch, leading to lower engagement when using standard computer fonts.",
    whyItMatters: "Bridges programmatic typography with authentic human penmanship, enabling high-conversion personalized marketing and automated signature synthesis.",
    architectureDiagramSvg: `<svg viewBox="0 0 800 240" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-indigo-400"><rect x="40" y="70" width="160" height="100" rx="12" fill="#18181B" stroke="#4F46E5" stroke-width="2"/><text x="120" y="125" fill="#FFF" text-anchor="middle" font-size="14" font-weight="bold">Digital Input Text</text><path d="M200 120H280" stroke="#6366F1" stroke-width="2"/><rect x="280" y="50" width="240" height="140" rx="12" fill="#1E1B4B" stroke="#6366F1" stroke-width="2"/><text x="400" y="105" fill="#6366F1" text-anchor="middle" font-size="14" font-weight="bold">GAN Generator Engine</text><text x="400" y="135" fill="#9CA3AF" text-anchor="middle" font-size="12">Stroke Velocity Transfer</text><path d="M520 120H600" stroke="#6366F1" stroke-width="2"/><rect x="600" y="70" width="160" height="100" rx="12" fill="#18181B" stroke="#10B981" stroke-width="2"/><text x="680" y="125" fill="#10B981" text-anchor="middle" font-size="14" font-weight="bold">Realistic Output</text></svg>`,
    techStack: ["Python", "PyTorch / TensorFlow", "OpenCV", "MySQL", "NumPy", "Pandas"],
    aiWorkflowDescription: "Trained conditional GAN architecture with discriminator feedback on stroke length, pressure velocity, and curve curvature to render realistic human handwriting.",
    screenshots: ["/assets/projects/gan-handwriting.png"],
    businessImpact: [
      "Achieved 94.2% human visual authenticity rating in user evaluation",
      "Reduced stroke rendering latency per paragraph to under 120ms",
      "Demonstrated end-to-end vector pipeline from raw text to SVG/PNG"
    ],
    challenges: [
      "Eliminating robotic character repetition",
      "Managing continuous stroke connectivity across variable word lengths"
    ],
    lessonsLearned: [
      "Loss function weighting between style preservation and stroke smoothness is vital for realism",
      "Noise filtering on training images improved discriminator convergence by 35%"
    ],
    githubUrl: "https://github.com/harshit-sinha/handwriting-gan-engine",
    downloadableReportUrl: "#",
    metrics: [
      { label: "Synthesis Speed", value: "<120ms", growth: "-40%" },
      { label: "Authenticity Rating", value: "94.2%", growth: "+28%" },
      { label: "Epoch Convergence", value: "150", growth: "Optimal" }
    ]
  },
  {
    id: "trading-algorithm",
    title: "Algorithmic Trading Strategy System",
    subtitle: "Python Backtesting & Signal Generation Engine for Automated Market Strategies",
    category: "Data Analytics",
    featured: true,
    businessProblem: "Manual trading decisions are slow, emotionally biased, and difficult to validate systematically across different market conditions.",
    whyItMatters: "Automated, data-driven signal generation enables consistent execution, faster backtesting iteration, and reduced emotional decision-making.",
    architectureDiagramSvg: `<svg viewBox="0 0 800 240" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-purple-400"><rect x="40" y="70" width="160" height="100" rx="12" fill="#18181B" stroke="#8B5CF6" stroke-width="2"/><text x="120" y="125" fill="#FFF" text-anchor="middle" font-size="14" font-weight="bold">Market Data Feed</text><path d="M200 120H280" stroke="#A78BFA" stroke-width="2"/><rect x="280" y="50" width="240" height="140" rx="12" fill="#2E1065" stroke="#8B5CF6" stroke-width="2"/><text x="400" y="105" fill="#C4B5FD" text-anchor="middle" font-size="14" font-weight="bold">Strategy & Signal Engine</text><text x="400" y="135" fill="#D1D5DB" text-anchor="middle" font-size="12">Backtesting & Risk Checks</text><path d="M520 120H600" stroke="#A78BFA" stroke-width="2"/><rect x="600" y="70" width="160" height="100" rx="12" fill="#18181B" stroke="#10B981" stroke-width="2"/><text x="680" y="125" fill="#10B981" text-anchor="middle" font-size="14" font-weight="bold">Trade Signals</text></svg>`,
    techStack: ["Python", "Pandas", "NumPy", "Backtesting", "MySQL", "Matplotlib"],
    aiWorkflowDescription: "Designed rule-based and indicator-driven strategies, validated across historical datasets, and quantified risk-adjusted performance with realistic cost modelling.",
    screenshots: ["/assets/projects/trading-algorithm.png"],
    businessImpact: [
      "Systematized multi-asset signal generation for consistent execution",
      "Enabled rapid iteration across backtesting scenarios",
      "Reduced reliance on manual and emotionally-driven trading"
    ],
    challenges: [
      "Eliminating look-ahead bias and data leakage in historical backtests",
      "Modelling realistic transaction costs, slippage, and liquidity constraints"
    ],
    lessonsLearned: [
      "Realistic cost and slippage modelling is essential for trustworthy backtests",
      "Diversifying across uncorrelated strategies improves overall stability"
    ],
    githubUrl: "https://github.com/apkaharshit2006-hue/Trading-Algorythm",
    downloadableReportUrl: "#",
    metrics: [
      { label: "Backtest Coverage", value: "5+ Yrs", growth: "—" },
      { label: "Signal Latency", value: "<50ms", growth: "—" },
      { label: "Strategies", value: "3+", growth: "—" }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "NGO Intern – Data & Content Research",
    organization: "Drazyashakti / Dryzyashakti Trust",
    period: "2024 – Present",
    location: "Navi Mumbai, India",
    type: "Internship",
    description: "Researched and prepared analytical content for speaker profiles, event brochures, and organizational DEI strategic initiatives.",
    highlights: [
      "Conducted detailed data research on conferences focused on disability inclusion, workplace DEI, and leadership.",
      "Engineered structured data templates for speaker profiling, increasing outreach speed by 50%.",
      "Created visual analytics briefs and communication materials supporting organizational projects."
    ],
    skillsUsed: ["Data Querying", "Python", "Excel Advanced", "Market Research", "DEI Analytics"]
  },
  {
    id: "exp-2",
    role: "Bachelor's in Business Administration (Business Analytics)",
    organization: "ITM Skills University",
    period: "2025 – 2026",
    location: "Navi Mumbai, India",
    type: "Education",
    description: "Specializing in Business Analytics, Machine Learning systems, MySQL database querying, and data-driven process optimization.",
    highlights: [
      "Ranked among top performers in Python Data Handling & MySQL Advanced Querying coursework.",
      "Spearheaded AI Handwriting Synthesis project applying GAN neural networks."
    ],
    skillsUsed: ["Python", "MySQL", "Predictive Analytics", "Machine Learning", "Financial Modeling"]
  }
];

export const SKILL_NODES: SkillNode[] = [
  { id: "python", name: "Python (Pandas / NumPy)", category: "Languages", level: 90, connections: ["mysql", "gans", "ml"] },
  { id: "mysql", name: "SQL & MySQL Analytics", category: "Databases", level: 88, connections: ["python", "excel"] },
  { id: "gans", name: "GANs & Generative AI", category: "AI & ML", level: 82, connections: ["python"] },
  { id: "excel", name: "MS Excel Data Analytics", category: "Tools & BI", level: 92, connections: ["mysql", "powerpoint"] },
  { id: "ml", name: "Machine Learning Foundations", category: "AI & ML", level: 80, connections: ["python"] },
  { id: "powerpoint", name: "Executive Storytelling", category: "Tools & BI", level: 85, connections: ["excel"] },
];
