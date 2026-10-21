export type Palette = { from: string; via: string; to: string; accent: string };

const forge: Palette = { from: '#04150c', via: '#0f7a3d', to: '#05100a', accent: '#1ed760' };
const lime: Palette = { from: '#121a06', via: '#4d7a1a', to: '#0a0d05', accent: '#b9f36a' };
const blue: Palette = { from: '#04101f', via: '#1b5aa0', to: '#05080d', accent: '#539df5' };
const violet: Palette = { from: '#100822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const silver: Palette = { from: '#161616', via: '#3a3a3a', to: '#0b0b0b', accent: '#b3b3b3' };
const amber: Palette = { from: '#1c1003', via: '#8a4a07', to: '#0a0806', accent: '#ffa42b' };

export const profile = {
  fullName: 'CODEFORGE Studio',
  displayName: 'CODEFORGE',
  firstName: 'CODEFORGE',
  seriesTag: 'SOFTWARE STUDIO',
  originalLabel: 'A CODEFORGE PRODUCTION',
  role: 'Software Development Studio',
  tagline: ['Web Applications', 'SaaS & MVP', 'AI & Automation'],
  intro:
    'An engineering-focused software studio building web applications, SaaS products and AI-powered workflows. We turn ideas into digital products.',
  location: 'Mapusa, Goa, India',
  email: 'hello@codeforge.example',
  projectEmail: 'projects@codeforge.example',
  links: {
    linkedin: 'https://linkedin.com/company/codeforge',
    github: 'https://github.com/codeforge',
  },
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'CODEFORGE Studio',
  },
  interests: ['Design Systems', 'Cloud & DevOps', 'Applied AI', 'Developer Experience'],
};

export const studioFacts = [
  { k: 'Studio', v: 'Software Development', s: 'Founded 2021' },
  { k: 'Founder', v: 'Aarav Mehta', s: 'Founder & Lead Engineer' },
  { k: 'Primary stack', v: 'TypeScript · MERN · PERN', s: 'React, Node.js, PostgreSQL' },
  { k: 'Based in', v: profile.location, s: 'Remote-first' },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  status?: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  liveUrl?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants' | 'grid';
  image?: string;
  imageAlt?: string;
};

export const projects: Project[] = [
  {
    id: 'aether-studio',
    title: 'Aether Studio',
    year: '2026',
    genre: 'Creative Agency Website',
    status: 'Case Study',
    logline:
      'A high-end, animated agency website featuring immersive transitions, interactive project galleries, responsive layouts and micro-interactions.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    build: [
      'Problem: agency sites often look templated and miss the motion and craft that make them feel premium.',
      'Solution: a fully animated marketing site with an immersive hero, interactive gallery and a reusable motion system.',
    ],
    features: ['Animated hero', 'Project filters', 'Service pages', 'Micro-interactions'],
    metrics: [
      { value: '60fps', label: 'animation target' },
      { value: '3', label: 'service pages' },
      { value: '100%', label: 'responsive' },
    ],
    palette: violet,
    motif: 'grid',
    image: '/assets/projects/aether-studio.webp',
    imageAlt: 'Aether Studio homepage with an animated hero and project gallery',
  },
  {
    id: 'bitecart',
    title: 'BiteCart',
    year: '2026',
    genre: 'Restaurant Ordering Platform',
    status: 'Case Study',
    logline:
      'An online ordering system where customers browse menus, customize meals, place orders and track order status while restaurant staff manage incoming orders.',
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    build: [
      'Problem: restaurants need a simple way to take orders online and manage them without extra tools.',
      'Solution: a customer ordering flow plus a staff dashboard covering menu, cart, checkout and order tracking.',
    ],
    features: ['Menu', 'Cart', 'Checkout', 'Admin panel'],
    metrics: [
      { value: '4', label: 'core flows' },
      { value: '1', label: 'admin panel' },
      { value: '<3m', label: 'checkout path' },
    ],
    palette: amber,
    motif: 'flow',
    image: '/assets/projects/bitecart.webp',
    imageAlt: 'BiteCart online ordering menu and cart interface',
  },
  {
    id: 'pulseapi',
    title: 'PulseAPI',
    year: '2026',
    genre: 'API Monitoring Platform',
    status: 'Case Study',
    logline:
      'A backend-focused service that monitors endpoints, records uptime and latency, tracks errors and provides status reports through a clean dashboard.',
    stack: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis'],
    build: [
      'Problem: teams need visibility into endpoint uptime, latency and errors before users notice downtime.',
      'Solution: scheduled health checks with background jobs, caching and a dashboard that records history and incident logs.',
    ],
    features: ['Endpoint checks', 'Uptime history', 'Incident logs'],
    metrics: [
      { value: '30s', label: 'check interval' },
      { value: '99.9%', label: 'tracked uptime' },
      { value: 'p95', label: 'latency metric' },
    ],
    palette: blue,
    motif: 'grid',
    image: '/assets/projects/pulseapi.webp',
    imageAlt: 'PulseAPI monitoring dashboard with uptime and latency charts',
  },
  {
    id: 'knowstack-ai',
    title: 'KnowStack AI',
    year: '2026',
    genre: 'AI Knowledge Base',
    status: 'Case Study',
    logline:
      'A document assistant that lets users upload PDFs, ask questions about their content and receive answers grounded in relevant document passages.',
    stack: ['React', 'Python/FastAPI', 'PostgreSQL with pgvector', 'LLM API'],
    build: [
      'Problem: teams have valuable knowledge locked inside documents that are hard to search or question.',
      'Solution: a RAG pipeline that ingests PDFs, embeds passages and answers questions with source citations.',
    ],
    features: ['Document uploads', 'Source citations', 'Chat history'],
    metrics: [
      { value: 'PDF', label: 'ingestion' },
      { value: '0', label: 'unsourced answers' },
      { value: 'pgvector', label: 'semantic search' },
    ],
    palette: forge,
    motif: 'shield',
    image: '/assets/projects/knowstack-ai.webp',
    imageAlt: 'KnowStack AI document assistant answering a question with source citations',
  },
  {
    id: 'leadpilot',
    title: 'LeadPilot',
    year: '2026',
    genre: 'Lead Automation',
    status: 'Case Study',
    logline:
      'An automated lead pipeline that captures website inquiries, uses AI to classify and summarize leads, stores them in a CRM or spreadsheet and sends follow-up notifications.',
    stack: ['n8n', 'OpenAI API', 'Google Sheets', 'Gmail', 'Webhooks'],
    build: [
      'Problem: inbound leads arrive across channels and go cold before anyone follows up.',
      'Solution: an n8n pipeline that captures, scores and stores leads, then triggers automated follow-ups.',
    ],
    features: ['Lead scoring', 'Email alerts', 'Follow-up sequences'],
    metrics: [
      { value: '100%', label: 'leads auto-classified' },
      { value: '4', label: 'follow-up steps' },
      { value: '0', label: 'manual data entry' },
    ],
    palette: lime,
    motif: 'flow',
    image: '/assets/projects/leadpilot.webp',
    imageAlt: 'LeadPilot automated lead pipeline and follow-up workflow',
  },
  {
    id: 'syncbridge',
    title: 'SyncBridge',
    year: '2026',
    genre: 'Integration Platform',
    status: 'Case Study',
    logline:
      'A lightweight integration hub that connects forms, CRMs, email services and internal applications, with webhook event tracking and retry handling.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'TypeScript'],
    build: [
      'Problem: internal tools and SaaS apps hold data that never stays in sync without manual work.',
      'Solution: an integration hub with OAuth, webhook event tracking, retries and a dashboard for connected services.',
    ],
    features: ['Integration settings', 'Event logs', 'Sync status'],
    metrics: [
      { value: '4', label: 'connected services' },
      { value: '3x', label: 'retry attempts' },
      { value: '1', label: 'event log view' },
    ],
    palette: silver,
    motif: 'tenants',
    image: '/assets/projects/syncbridge.webp',
    imageAlt: 'SyncBridge integration hub with connected services and event logs',
  },
];

export type Service = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: Service[] = [
  { label: 'Build', title: 'Custom Web Development', detail: 'Websites, web apps, dashboards & portals · MERN, PERN, Supabase', palette: forge },
  { label: 'Automate', title: 'AI & Workflow Automation', detail: 'AI-assisted workflows, API connections & chatbots · LLM APIs, Node.js', palette: blue },
  { label: 'Launch', title: 'SaaS & MVP Development', detail: 'Auth, dashboards & subscription-ready architecture · MERN, PERN', palette: lime },
  { label: 'Engineer', title: 'Backend & API Engineering', detail: 'APIs, business logic, integrations & services · Node.js, Express, PostgreSQL', palette: violet },
  { label: 'Publish', title: 'WordPress Development', detail: 'Business sites, landing pages & CMS-driven content · WordPress, PHP', palette: silver },
  { label: 'Integrate', title: 'Backend-as-a-Service', detail: 'Auth, storage, databases & real-time features · Supabase, Firebase', palette: blue },
  { label: 'Connect', title: 'API & Third-Party Integrations', detail: 'Payments, email, CRMs & external APIs · REST, webhooks', palette: amber },
  { label: 'Streamline', title: 'Business Automation', detail: 'Lead management, reporting, notifications & operations', palette: lime },
  { label: 'Refresh', title: 'Website Modernization', detail: 'Performance, accessibility, responsiveness & maintainability', palette: silver },
  { label: 'Support', title: 'Maintenance & Support', detail: 'Bug fixes, dependency updates, monitoring & improvements', palette: forge },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'The core',
    skills: [
      { name: 'TypeScript', mono: 'TS', note: 'Primary' },
      { name: 'JavaScript', mono: 'JS' },
      { name: 'SQL', mono: 'SQ' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces & the web platform',
    skills: [
      { name: 'React', mono: 'Re' },
      { name: 'Tailwind CSS', mono: 'Tw' },
      { name: 'Vite', mono: 'Vi' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'APIs & services',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'Express', mono: 'Ex' },
    ],
  },
  {
    id: 'db',
    title: 'DB',
    subtitle: 'Databases & managed backends',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MongoDB', mono: 'Mo' },
      { name: 'MySQL', mono: 'My' },
      { name: 'Supabase', mono: 'Sb' },
      { name: 'Firebase', mono: 'Fb' },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Automation',
    subtitle: 'Applied intelligence',
    skills: [
      { name: 'LLM APIs', mono: 'Ai' },
      { name: 'Webhooks', mono: 'Wh' },
      { name: 'Workflow Automation', mono: 'Wf' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Deployment',
    subtitle: 'Shipping & versioning',
    skills: [
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'Vercel', mono: 'Vc' },
      { name: 'Netlify', mono: 'Nt' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  TypeScript: ['Aether Studio', 'PulseAPI', 'SyncBridge'],
  React: ['Aether Studio', 'BiteCart', 'KnowStack AI'],
  'Node.js': ['BiteCart', 'PulseAPI', 'SyncBridge'],
  Express: ['BiteCart', 'SyncBridge'],
  PostgreSQL: ['BiteCart', 'PulseAPI', 'SyncBridge'],
  'LLM APIs': ['KnowStack AI'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'Discover',
    period: 'Week 0',
    synopsis: 'We map the problem, the users and the constraints before writing any code.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Scoping',
        description: 'Goals, users, success metrics and scope are defined in a short discovery sprint.',
        tags: ['Discovery', 'Goals', 'Scope'],
        runtime: 'Kick-off',
        palette: silver,
      },
    ],
  },
  {
    number: 2,
    title: 'Design',
    period: 'Week 1–2',
    synopsis: 'Product and interface design - flows, screens and a design system.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Product Design',
        description: 'Flows, wireframes and a component design system ready for build.',
        tags: ['UX', 'UI', 'Design System'],
        runtime: 'Design',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'Architecture',
        description: 'Data model, API design and deployment architecture.',
        tags: ['Architecture', 'API', 'Data'],
        runtime: 'Design',
        palette: blue,
      },
    ],
  },
  {
    number: 3,
    title: 'Build',
    period: 'Week 2–6',
    synopsis: 'Shipping the product in weekly increments across the full stack.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Frontend',
        description: 'React interfaces, responsive layouts and a shared component library.',
        tags: ['React', 'Tailwind CSS', 'Vite'],
        runtime: 'Build',
        palette: forge,
      },
      {
        code: 'S03 E02',
        title: 'Backend',
        description: 'APIs, business logic, integrations and database design.',
        tags: ['Node.js', 'Express', 'PostgreSQL'],
        runtime: 'Build',
        palette: blue,
      },
      {
        code: 'S03 E03',
        title: 'AI & Automation',
        description: 'LLM-powered features and workflow automation where they add real value.',
        tags: ['LLM APIs', 'Automation'],
        runtime: 'Build',
        palette: amber,
      },
    ],
  },
  {
    number: 4,
    title: 'Launch',
    period: 'Week 6–7',
    synopsis: 'Deploying, hardening and handing over a production-ready product.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'Deploy',
        description: 'CI, Docker, cloud deployment and monitoring on Vercel / Netlify.',
        tags: ['Docker', 'Vercel', 'Netlify'],
        runtime: 'Launch',
        palette: lime,
      },
      {
        code: 'S04 E02',
        title: 'Handover',
        description: 'Documentation, walkthroughs and a clean, maintainable codebase.',
        tags: ['Docs', 'Handover'],
        runtime: 'Launch',
        palette: silver,
      },
    ],
  },
  {
    number: 5,
    title: 'Support',
    period: 'Ongoing',
    synopsis: 'Keeping products fast, secure and up to date after launch.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'Maintenance',
        description: 'Bug fixes, dependency updates, monitoring and continuous improvements.',
        tags: ['Support', 'Monitoring'],
        runtime: 'Ongoing',
        palette: forge,
      },
    ],
  },
];

export type ProfileId = 'founder' | 'startup' | 'enterprise' | 'developer';
export type SectionId =
  | 'about'
  | 'journey'
  | 'originals'
  | 'picks'
  | 'skills'
  | 'team'
  | 'testimonials'
  | 'engagements'
  | 'contact';

const FIXED_ORDER: SectionId[] = [
  'originals',
  'picks',
  'about',
  'journey',
  'engagements',
  'skills',
  'team',
  'testimonials',
  'contact',
];

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'founder',
    name: 'Startup Founder',
    blurb: 'What you build, and how to work with us',
    color: '#1ed760',
    order: FIXED_ORDER,
  },
  {
    id: 'startup',
    name: 'Product Team',
    blurb: 'Services, case studies & stack',
    color: '#b9f36a',
    order: FIXED_ORDER,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    blurb: 'Process, team & proof',
    color: '#539df5',
    order: FIXED_ORDER,
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Case studies, stack & code',
    color: '#b98bff',
    order: FIXED_ORDER,
  },
];

export const sectionMeta: Record<
  SectionId,
  { number: number; nav: string; card: string; meta: string; palette: Palette }
> = {
  originals: { number: 2, nav: 'Work', card: 'Case Studies', meta: `${projects.length} Case Studies · 2026`, palette: blue },
  picks: { number: 3, nav: 'Services', card: 'What We Build', meta: `${topPicks.length} services`, palette: lime },
  about: { number: 4, nav: 'Studio', card: 'The Studio', meta: 'Who we are', palette: forge },
  journey: { number: 5, nav: 'Process', card: 'How We Work', meta: `${seasons.length} phases`, palette: silver },
  engagements: { number: 6, nav: 'Engage', card: 'How We Work Together', meta: '4 models', palette: lime },
  skills: { number: 7, nav: 'Stack', card: 'Engineering Universe', meta: `${skillCategories.length} categories`, palette: blue },
  team: { number: 8, nav: 'Team', card: 'The Team', meta: '4 members', palette: forge },
  testimonials: { number: 9, nav: 'Clients', card: 'Client Words', meta: '8 reviews', palette: violet },
  contact: { number: 10, nav: 'Contact', card: 'Start a Project', meta: "Let's build", palette: forge },
};

export type TeamMember = { id: string; name: string; role: string; bio: string; glyph: string };

export const team: TeamMember[] = [
  { id: 'aarav', name: 'Aarav Mehta', role: 'Founder & Lead Engineer', bio: 'Full-stack architecture, delivery and product engineering.', glyph: 'AM' },
  { id: 'priya', name: 'Priya Nair', role: 'Full-Stack Engineer', bio: 'React interfaces and Node.js APIs across MERN & PERN.', glyph: 'PN' },
  { id: 'rohan', name: 'Rohan Verma', role: 'AI / ML Engineer', bio: 'LLM integrations and workflow automation.', glyph: 'RV' },
  { id: 'ananya', name: 'Ananya Iyer', role: 'Product Designer', bio: 'Product design, UX flows and design systems.', glyph: 'AI' },
];

export type Testimonial = { id: string; quote: string; author: string; role: string; org: string };

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote: 'They mapped our workflow, shipped a working MVP and made our document review process dramatically faster.',
    author: 'Rohan Kapoor',
    role: 'Product Lead',
    org: 'Zenlytics',
  },
  {
    id: 't2',
    quote: 'Our dashboard finally makes sense. Complex operational data is now easy to read at a glance.',
    author: 'Neha Sharma',
    role: 'Operations Manager',
    org: 'Bharat Cloud',
  },
  {
    id: 't3',
    quote: 'They gave us a clear architecture for our multi-tenant product and built it exactly as promised.',
    author: 'Karan Mehta',
    role: 'Founder',
    org: 'Taranga Labs',
  },
  {
    id: 't4',
    quote: 'A senior engineering team that communicates well and delivers on schedule. Rare and valuable.',
    author: 'Priyanka Shah',
    role: 'CTO',
    org: 'Nirvaan Health',
  },
  {
    id: 't5',
    quote: 'The automation sprint removed hours of manual work from our team every single week.',
    author: 'Arjun Reddy',
    role: 'Head of Product',
    org: 'Tarang Retail',
  },
  {
    id: 't6',
    quote: 'Clean code, thoughtful design and a genuinely smooth handover. We kept building on their foundation.',
    author: 'Meera Krishnan',
    role: 'Engineering Manager',
    org: 'Neelkanth Systems',
  },
  {
    id: 't7',
    quote: 'From first call to launch they felt like part of our team. The product shipped ahead of plan.',
    author: 'Vikram Singh',
    role: 'CEO',
    org: 'Prerna Labs',
  },
  {
    id: 't8',
    quote: 'Reliable, fast and detail-oriented. Our platform has been rock solid since the rebuild.',
    author: 'Divya Menon',
    role: 'COO',
    org: 'Sahaj Systems',
  },
];

export type Engagement = {
  id: string;
  title: string;
  summary: string;
  idealFor: string;
  deliverables: string[];
  icon: string;
  image: string;
  badge: string;
};

const STOCK = 'https://images.unsplash.com/';
const STOCK_Q = '?auto=format&fit=crop&w=1200&h=900&q=80';

export const engagements: Engagement[] = [
  {
    id: 'mvp',
    title: 'MVP Development',
    summary: 'A scoped build to validate a new idea and get a working product in front of real users fast.',
    idealFor: 'Founders validating a new idea or launching a first version.',
    deliverables: ['Discovery & scope', 'Core feature build', 'Admin dashboard', 'Launch & handover'],
    icon: '◆',
    image: STOCK + 'photo-1555066931-4365d14bab8c' + STOCK_Q,
    badge: 'MVP',
  },
  {
    id: 'custom',
    title: 'Custom Product Development',
    summary: 'End-to-end design and engineering of a web application or SaaS platform.',
    idealFor: 'Teams building a complete product or internal platform.',
    deliverables: ['Product design', 'Full-stack build', 'Auth & integrations', 'Deployment'],
    icon: '▣',
    image: STOCK + 'photo-1522071820081-009f0129c71c' + STOCK_Q,
    badge: 'Product',
  },
  {
    id: 'automation',
    title: 'Automation Sprints',
    summary: 'A focused sprint to identify and automate one defined business workflow with AI or APIs.',
    idealFor: 'Teams spending too much time on repetitive manual work.',
    deliverables: ['Workflow audit', 'Automation build', 'API integrations', 'Monitoring'],
    icon: '⚙',
    image: STOCK + 'photo-1518770660439-4636190af475' + STOCK_Q,
    badge: 'Automation',
  },
  {
    id: 'maintenance',
    title: 'Ongoing Development & Maintenance',
    summary: 'Continuous engineering support to keep a product fast, secure and improving over time.',
    idealFor: 'Products already live that need steady iteration and support.',
    deliverables: ['Bug fixes & updates', 'Performance work', 'New features', 'Monitoring & support'],
    icon: '↻',
    image: STOCK + 'photo-1461749280684-dccba630e2f6' + STOCK_Q,
    badge: 'Ongoing',
  },
];

export const contactConfig = {
  availability: 'Accepting new project inquiries',
  endpoint: '',
  success: "Thanks - your message is on its way. We'll get back to you shortly.",
  subjects: ['New project', 'MVP / SaaS build', 'AI & automation', 'Support & maintenance', 'Other'],
};
