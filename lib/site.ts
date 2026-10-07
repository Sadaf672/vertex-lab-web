export const CONTACT = {
  whatsapp: "https://wa.me/923390014978",
  whatsappLabel: "+92 339 0014978",
  email: "mailto:vertexlabs.pk@gmail.com",
  emailLabel: "vertexlabs.pk@gmail.com",
  instagram: "https://www.instagram.com/vertexlabs.pk",
  instagramLabel: "@vertexlabs.pk",
  facebook:
    "https://www.facebook.com/people/Vertex-Labs/61594573345613/",
  facebookLabel: "Vertex Labs",
  linkedin: "https://www.linkedin.com/company/vertex-labs-pk",
  linkedinLabel: "Vertex Labs",
} as const;

export const BRAND = {
  name: "Vertex Labs",
  tagline: "BUILD • AUTOMATE • SCALE",
  copyright: "© 2026 VERTEX LABS. ALL RIGHTS RESERVED.",
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Methodology", href: "#methodology" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
] as const;

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=2400&q=80",
  webDev:
    "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=1400&q=80",
  design:
    "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1400&q=80",
  ai: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80",
  caseThroughput:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
  caseSpeed:
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=80",
  caseAutomation:
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80",
  softwareDev:
    "https://images.unsplash.com/photo-1518933165971-611dbc9c412d?auto=format&fit=crop&w=1400&q=80",
  chatbot:
    "https://images.unsplash.com/photo-1678995637406-1ca9bdf03817?auto=format&fit=crop&w=1400&q=80",
  aiAgent:
    "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?auto=format&fit=crop&w=1400&q=80",
} as const;

export type Stat = {
  value?: number;
  display?: string;
  decimals?: number;
  suffix?: string;
  label: string;
};

export const STATS: Stat[] = [
  { value: 99.8, decimals: 1, suffix: "%", label: "System Reliability" },
  { value: 3.4, decimals: 1, suffix: "x", label: "Performance Boost" },
  { value: 100, decimals: 0, suffix: "+", label: "Systems Engineered" },
  { display: "24/7", label: "AI Automation" },
];

export type Service = {
  title: string;
  description: string;
  tags: string[];
  icon: "globe" | "palette" | "code" | "bot" | "brain" | "cpu";
  image: string;
  imageAlt: string;
};

export const SERVICES: Service[] = [
  {
    title: "Web Development",
    description:
      "Bespoke, conversion-focused websites and web apps engineered on Next.js with edge delivery, immersive motion, and pixel-perfect craft.",
    tags: ["Next.js", "TypeScript", "Edge"],
    icon: "globe",
    image: IMAGES.webDev,
    imageAlt:
      "Modern luxury software engineer coding workspace, sleek and dark",
  },
  {
    title: "Graphic Design",
    description:
      "High-end brand identity systems, typography, and campaign assets that make ambitious companies impossible to ignore.",
    tags: ["Branding", "Typography", "Identity"],
    icon: "palette",
    image: IMAGES.design,
    imageAlt:
      "Minimalist high-end brand agency design studio with typography tools",
  },
  {
    title: "AI & Automation",
    description:
      "Intelligent pipelines, workflow automation, and self-optimising systems that remove friction from every layer of your operation.",
    tags: ["Workflows", "LLMs", "Ops"],
    icon: "cpu",
    image: IMAGES.ai,
    imageAlt:
      "Artificial intelligence futuristic glowing network, dark and luxurious",
  },
  {
    title: "Software Development",
    description:
      "Production-grade platforms, dashboards, and internal tools built with rigorous architecture and clean, maintainable code.",
    tags: ["Platforms", "APIs", "SaaS"],
    icon: "code",
    image: IMAGES.softwareDev,
    imageAlt: "Dark close-up of colourful source code on a developer screen",
  },
  {
    title: "AI Chatbots",
    description:
      "Trained, brand-aware conversational agents that qualify leads and support customers around the clock, in any language.",
    tags: ["Support", "Sales", "24/7"],
    icon: "bot",
    image: IMAGES.chatbot,
    imageAlt: "Glowing green AI chip with a bot icon on a dark circuit board",
  },
  {
    title: "AI Agents",
    description:
      "Autonomous agents that research, decide, and execute multi-step work inside your stack — your always-on digital workforce.",
    tags: ["Autonomy", "RAG", "Tools"],
    icon: "brain",
    image: IMAGES.aiAgent,
    imageAlt: "Abstract wireframe brain network sphere representing AI agents",
  },
];

export type Project = {
  title: string;
  client: string;
  description: string;
  tags: string[];
  metricValue: string;
  metricLabel: string;
  image: string;
  imageAlt: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Helix Command Center",
    client: "Logistics Platform",
    description:
      "A real-time operations dashboard unifying fleet telemetry, predictive routing, and live throughput analytics into a single dark-mode control surface.",
    tags: ["Next.js", "Realtime", "Data Viz"],
    metricValue: "+340%",
    metricLabel: "Throughput",
    image: IMAGES.caseThroughput,
    imageAlt: "Sleek dark corporate dashboard analytics UI mockup",
  },
  {
    title: "Aurora Commerce Engine",
    client: "Luxury Retail Brand",
    description:
      "Headless commerce rebuild with edge caching, granular design system, and sub-second navigation across every device and region.",
    tags: ["Next.js", "Edge", "Commerce"],
    metricValue: "1.2s",
    metricLabel: "Load Speed",
    image: IMAGES.caseSpeed,
    imageAlt: "Premium dark laptop glowing with product interface",
  },
  {
    title: "Nova Ops Agents",
    client: "Fintech Operations",
    description:
      "A fleet of AI agents handling back-office reconciliation, document parsing, and triage workflows previously owned by manual teams.",
    tags: ["Python", "OpenAI", "Agents"],
    metricValue: "92%",
    metricLabel: "Manual Work Reduced",
    image: IMAGES.caseAutomation,
    imageAlt: "Dark data center infrastructure powering AI automation",
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const PROCESS: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We audit your goals, users, and constraints to define the sharpest possible brief.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Interface systems, brand direction, and prototypes crafted to premium standards.",
  },
  {
    number: "03",
    title: "Engineer",
    description:
      "Typed, tested, and performance-obsessed builds shipped in tight iterations.",
  },
  {
    number: "04",
    title: "Automate",
    description:
      "AI agents and workflows wired into your stack to remove repetitive human work.",
  },
  {
    number: "05",
    title: "Scale",
    description:
      "Monitoring, optimisation, and growth loops that keep systems fast under load.",
  },
];

export type StackItem = {
  name: string;
  category: string;
  icon: "layers" | "code" | "wind" | "terminal" | "brain" | "cloud";
};

export const STACK: StackItem[] = [
  { name: "Next.js", category: "Framework", icon: "layers" },
  { name: "TypeScript", category: "Language", icon: "code" },
  { name: "Tailwind CSS", category: "Styling", icon: "wind" },
  { name: "Python", category: "Backend", icon: "terminal" },
  { name: "OpenAI", category: "Intelligence", icon: "brain" },
  { name: "Cloud Infrastructure", category: "Deployment", icon: "cloud" },
];
