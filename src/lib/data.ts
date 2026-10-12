export interface Profile {
  name: string;
  lastName: string;
  tagline: string;
  headline: string;
  bio: string[];
  location: string;
  degree: string;
  university: string;
  cgpa: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
}

export interface RoleMode {
  id: 'software' | 'frontend' | 'fullstack' | 'data';
  title: string;
  subtitle: string;
  description: string;
  featuredSkills: string[];
  featuredProjects: string[];
}

export interface SkillItem {
  id: string;
  symbol: string;
  name: string;
  category: 'Programming' | 'Frontend' | 'Backend' | 'Databases' | 'Data' | 'Tools' | 'Concepts';
  level: string;
  description: string;
  relatedProjects: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'software' | 'frontend' | 'fullstack' | 'data' | 'ai';
  categoryLabel: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  featured: boolean;
  uiStyle: 'hometown' | 'entreskill' | 'chefs' | 'agriguard' | 'golf' | 'jobmarket' | 'weather';
}

export interface AnalyticsProject {
  id: string;
  title: string;
  subtitle: string;
  tabLabel: string;
  workflow: {
    question: string;
    data: string;
    cleaning: string;
    analysis: string;
    visualization: string;
    insight: string;
  };
  metrics: { label: string; value: string }[];
  technologies: string[];
  liveUrl?: string;
  caseStudyUrl: string;
}

export interface ExperienceProof {
  label: string;
  url: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  type: 'experience' | 'education';
  description: string[];
  technologies: string[];
  link?: string;
  proofDocuments?: ExperienceProof[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  url?: string;
  pdfUrl: string;
  category: 'data' | 'ai' | 'fullstack' | 'frontend' | 'management';
  categoryLabel: string;
  skills: string[];
}

export interface ResearchItem {
  title: string;
  conference: string;
  year: string;
  doiLink: string;
  description: string;
  architectures: string[];
}

export const PROFILE: Profile = {
  name: "VEENA",
  lastName: "SARDANA",
  tagline: "SOFTWARE ENGINEER • FRONTEND • FULL STACK • DATA ANALYTICS",
  headline: "I BUILD DIGITAL EXPERIENCES & DATA-DRIVEN SOLUTIONS.",
  bio: [
    "I’m Veena — a Software Engineer specializing in modern frontend engineering, full-stack web applications, and data analytics.",
    "My engineering approach bridges system design and data storytelling. I build performance-focused user interfaces with React and Next.js, architect scalable backend services with Node.js and PostgreSQL/MongoDB, and extract actionable business insights through SQL and Python analytics.",
    "Currently completing my B.Tech in Computer Science & Engineering, with experience shipped across production internships, open-source projects, and published IEEE machine learning research."
  ],
  location: "Haryana, India",
  degree: "B.Tech Computer Science & Engineering",
  university: "Lovely Professional University",
  cgpa: "7.5 CGPA",
  email: "veenasardana1@gmail.com",
  phone: "+91 8053745320",
  github: "https://github.com/veena694",
  linkedin: "https://www.linkedin.com/in/veena-sardana",
  resumeUrl: "/resume/Veena_Resume.pdf"
};

export const ROLE_MODES: RoleMode[] = [
  {
    id: "software",
    title: "SOFTWARE ENGINEER",
    subtitle: "End-to-End System Thinking & Robust Architecture",
    description: "Focusing on clean code practices, modular design patterns, API integrations, and robust application lifecycle management from specification to deployment.",
    featuredSkills: ["JavaScript", "TypeScript", "Python", "Node.js", "PostgreSQL", "REST APIs", "Git"],
    featuredProjects: ["hometown-hub", "entreskill-hub", "chefs-ai-studio"]
  },
  {
    id: "frontend",
    title: "FRONTEND ENGINEER",
    subtitle: "Immersive Interactions & Component Architecture",
    description: "Crafting fluid, accessible, and high-performance visual interfaces using React, Next.js, Tailwind CSS, Framer Motion, and WebGL/Canvas graphics.",
    featuredSkills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js", "Web APIs"],
    featuredProjects: ["chefs-ai-studio", "weather-app", "hometown-hub"]
  },
  {
    id: "fullstack",
    title: "FULL STACK DEVELOPER",
    subtitle: "Scalable Web Products & Database Systems",
    description: "Connecting intuitive user interfaces with secure RESTful backends, authentication systems, cloud storage, and optimized database queries.",
    featuredSkills: ["React", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Supabase", "Prisma", "Stripe API"],
    featuredProjects: ["golf-charity", "entreskill-hub", "job-market-analysis"]
  },
  {
    id: "data",
    title: "DATA ANALYST",
    subtitle: "Data Pipelines, SQL Modeling & Business Intelligence",
    description: "Transforming raw operational data into interactive dashboards, statistical insights, and decision-ready executive reports.",
    featuredSkills: ["SQL", "PostgreSQL", "Python", "Pandas", "Power BI", "Tableau", "Excel / Power Query", "EDA"],
    featuredProjects: ["job-market-analysis", "retail-sql-analytics", "deloitte-simulation"]
  }
];

export const CAPABILITIES = [
  {
    id: "software-engineering",
    title: "SOFTWARE ENGINEERING",
    description: "Designing structured codebases, object-oriented & functional architectures, and reliable API integrations with comprehensive testing and CI/CD pipelines.",
    technologies: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "REST APIs", "Git", "GitHub Actions", "Docker"],
    highlights: "Focus on clean code, modular components, and reliable production deployment."
  },
  {
    id: "frontend-development",
    title: "FRONTEND DEVELOPMENT",
    description: "Building responsive, modern, accessible web experiences featuring complex state management, custom animation micro-interactions, and high performance.",
    technologies: ["React.js", "Next.js 14/15", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js / Canvas", "HTML5 / CSS3"],
    highlights: "Subtle micro-interactions, responsive fluid layouts, and top-tier Lighthouse audit scores."
  },
  {
    id: "fullstack-development",
    title: "FULL STACK DEVELOPMENT",
    description: "Architecting web platforms end-to-end with secure JWT / OAuth authentication, database schemas, serverless functions, payment integration, and cloud hosting.",
    technologies: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Supabase", "Prisma", "Stripe API", "Vercel / Railway"],
    highlights: "Role-based access control, relational and document databases, and transaction processing."
  },
  {
    id: "data-analytics",
    title: "DATA ANALYTICS & BI",
    description: "Extracting actionable insights through multi-CTE SQL queries, cohort retention analysis, data cleaning pipelines, interactive dashboards, and NLP text mining.",
    technologies: ["SQL (PostgreSQL, MySQL)", "Python (Pandas, NumPy)", "Power BI / DAX", "Tableau", "Excel (Power Query)", "Streamlit", "EDA"],
    highlights: "Turning raw transactional tables into interactive KPI trees and strategic business clarity."
  }
];

export const SKILLS: SkillItem[] = [
  { id: "react", symbol: "Re", name: "React.js", category: "Frontend", level: "Expert", description: "Hooks, Context API, Redux Toolkit, Component Architecture", relatedProjects: ["Chef's AI Studio", "Weather App"] },
  { id: "nextjs", symbol: "Nx", name: "Next.js", category: "Frontend", level: "Advanced", description: "App Router, SSR, Server Components, API Routes", relatedProjects: ["Hometown Hub", "EntreSkill Hub"] },
  { id: "typescript", symbol: "Ts", name: "TypeScript", category: "Programming", level: "Advanced", description: "Strong typing, Generics, Interfaces, Strict Mode", relatedProjects: ["Hometown Hub", "Golf Charity Platform"] },
  { id: "javascript", symbol: "Js", name: "JavaScript", category: "Programming", level: "Expert", description: "ES6+, Async/Await, DOM, Event Loop, Closure", relatedProjects: ["All Projects"] },
  { id: "python", symbol: "Py", name: "Python", category: "Programming", level: "Advanced", description: "Pandas, NumPy, Deep Learning benchmarking, NLP", relatedProjects: ["AI Job Market Analysis", "IEEE Research Paper"] },
  { id: "tailwind", symbol: "Tw", name: "Tailwind CSS", category: "Frontend", level: "Expert", description: "Custom design systems, responsive grids, dark mode", relatedProjects: ["Hometown Hub", "Weather App"] },
  { id: "nodejs", symbol: "Node", name: "Node.js", category: "Backend", level: "Advanced", description: "REST APIs, Event Driven Architecture, Middleware", relatedProjects: ["EntreSkill Hub", "Golf Charity Platform"] },
  { id: "express", symbol: "Ex", name: "Express.js", category: "Backend", level: "Advanced", description: "Routing, JWT Authentication, Error Handling", relatedProjects: ["Precision AgriGuard", "Golf Charity Platform"] },
  { id: "sql", symbol: "Sql", name: "SQL", category: "Databases", level: "Expert", description: "Window Functions, Multi-CTE queries, Aggregations", relatedProjects: ["Retail SQL Analytics", "Job Market Analysis"] },
  { id: "postgresql", symbol: "Pg", name: "PostgreSQL", category: "Databases", level: "Advanced", description: "Schema Design, Indexes, Foreign Keys, Query Optimization", relatedProjects: ["Hometown Hub", "Retail SQL Analytics"] },
  { id: "mongodb", symbol: "Db", name: "MongoDB", category: "Databases", level: "Advanced", description: "Mongoose, Aggregation Pipelines, Document Modeling", relatedProjects: ["Precision AgriGuard", "MERN Stack Apps"] },
  { id: "supabase", symbol: "Sb", name: "Supabase", category: "Backend", level: "Advanced", description: "Row Level Security, Realtime, Auth, Storage", relatedProjects: ["Golf Charity Platform", "Hometown Hub"] },
  { id: "prisma", symbol: "Pr", name: "Prisma ORM", category: "Backend", level: "Intermediate", description: "Migrations, Type-safe DB queries, Schema Modeling", relatedProjects: ["EntreSkill Hub", "Hometown Hub"] },
  { id: "powerbi", symbol: "Pbi", name: "Power BI", category: "Data", level: "Advanced", description: "DAX Measures, Star Schema, Dynamic KPI Cards, RLS", relatedProjects: ["Retail BI Dashboard"] },
  { id: "tableau", symbol: "Tb", name: "Tableau", category: "Data", level: "Advanced", description: "Story Points, Parameter Controls, Interactive Visuals", relatedProjects: ["Deloitte Job Simulation"] },
  { id: "excel", symbol: "Xl", name: "Excel", category: "Data", level: "Advanced", description: "Power Query, Pivot Tables, Scenario Modeling", relatedProjects: ["Deloitte Job Simulation"] },
  { id: "docker", symbol: "Dk", name: "Docker", category: "Tools", level: "Intermediate", description: "Containerization, Dockerfile, Docker Compose", relatedProjects: ["Cloud DevOps Workflows"] },
  { id: "git", symbol: "Git", name: "Git & GitHub", category: "Tools", level: "Advanced", description: "Version Control, Branching, Pull Requests, Actions", relatedProjects: ["All Projects"] },
  { id: "framer", symbol: "Fm", name: "Framer Motion", category: "Frontend", level: "Advanced", description: "Layout Animations, Gestures, Scroll Triggers", relatedProjects: ["Chef's AI Studio", "Weather App"] },
  { id: "threejs", symbol: "3D", name: "Three.js", category: "Frontend", level: "Intermediate", description: "WebGL Scene, Lighting, Particle Shaders, R3F", relatedProjects: ["Weather App", "Hometown Hub"] }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "job-market-analysis",
    title: "AI-Powered Job Market & Skill Gap Analysis Dashboard",
    category: "data",
    categoryLabel: "DATA ANALYTICS & AI",
    description: "An analytics case study exploring job-market demand, technical skill requirements, salary benchmarks, and emerging technology trends to identify skill gaps and career opportunities.",
    technologies: ["Python", "SQL", "Pandas", "NLP", "Streamlit", "Data Visualization"],
    githubUrl: "https://github.com/veena694",
    liveUrl: "https://job-skill-gap-analysis.streamlit.app/",
    caseStudyUrl: "/case-studies/job-market-skill-gap",
    featured: true,
    uiStyle: "jobmarket"
  },
  {
    id: "hometown-hub",
    title: "Hometown Hub",
    category: "fullstack",
    categoryLabel: "FULL STACK / 3D GRAPHICS",
    description: "A 3D-enabled, location-aware community platform connecting users with hometown heritage, landmarks, oral histories, traditions, and local communities using Three.js/React Three Fiber and OpenStreetMap 3D visualizations.",
    technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "PostgreSQL", "Supabase", "Prisma", "Three.js", "React Three Fiber", "Leaflet"],
    githubUrl: "https://github.com/veena694",
    liveUrl: "https://my-portfolio-eight-gilt-18.vercel.app/",
    featured: true,
    uiStyle: "hometown"
  },
  {
    id: "entreskill-hub",
    title: "EntreSkill Hub Full Stack Platform",
    category: "fullstack",
    categoryLabel: "ENTERPRISE PLATFORM",
    description: "Enterprise learn-to-startup ecosystem built during fellowship at Unified Mentor, centered around reusable component architectures, authentication flows, backend database modules, and Turborepo monorepo systems.",
    technologies: ["Next.js", "Prisma", "Turborepo", "TypeScript", "Tailwind CSS", "Node.js", "Auth Systems"],
    githubUrl: "https://github.com/veena694/EntreSkill-Hub",
    liveUrl: "https://my-portfolio-eight-gilt-18.vercel.app/",
    featured: true,
    uiStyle: "entreskill"
  },
  {
    id: "chefs-ai-studio",
    title: "Chef's AI Studio",
    category: "ai",
    categoryLabel: "AI & VISION PLATFORM",
    description: "A hands-free culinary AI platform that analyzes fridge ingredients with Claude Vision AI to generate personalized recipes in real time, featuring hands-free voice cooking mode powered by browser Web APIs.",
    technologies: ["React.js", "JavaScript", "Framer Motion", "Claude Vision AI", "Web Speech API", "CSS Modules"],
    githubUrl: "https://github.com/veena694/Chef-s-AI-Studio",
    liveUrl: "https://chefs-ai-studio.vercel.app/",
    featured: true,
    uiStyle: "chefs"
  },
  {
    id: "precision-agriguard",
    title: "Precision AgriGuard",
    category: "software",
    categoryLabel: "AI & IOT PLATFORM",
    description: "An AI and IoT-powered smart agriculture platform focused on intelligent water management, predictive irrigation systems, and crop health analytics using real-time sensor telemetry and machine learning.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "IoT Sensors", "Machine Learning"],
    githubUrl: "https://github.com/veena694/precision-agroguard-main",
    liveUrl: "https://precision-agroguard.vercel.app/",
    featured: true,
    uiStyle: "agriguard"
  },
  {
    id: "golf-charity",
    title: "Golf Charity Subscription Platform",
    category: "fullstack",
    categoryLabel: "FINTECH & REWARDS",
    description: "A subscription-driven service dashboard featuring automated Stripe billing, customized role-based user portals, charity rewards calculation engine, automated invoicing, and Supabase cloud PostgreSQL.",
    technologies: ["React", "Node.js", "TypeScript", "Express", "Supabase", "Stripe API"],
    githubUrl: "https://github.com/veena694/Golf-Charity-Subscription-Platform",
    liveUrl: "https://golfcharitysubscriptionplatform-chi.vercel.app/",
    featured: true,
    uiStyle: "golf"
  },
  {
    id: "weather-app",
    title: "3D Weather Web Application",
    category: "frontend",
    categoryLabel: "FRONTEND & WEBGL",
    description: "An immersive 3D meteorological platform utilizing Three.js and React Three Fiber with Open-Meteo geocoding APIs, Web Speech voice input, and ambient weather particle effects.",
    technologies: ["React.js", "Vite", "Tailwind CSS", "Three.js", "Framer Motion", "Web Speech API"],
    githubUrl: "https://github.com/veena694/weather-app",
    liveUrl: "https://weather-app-alpha-pearl-51.vercel.app/",
    featured: false,
    uiStyle: "weather"
  }
];

export const ANALYTICS_PROJECTS: AnalyticsProject[] = [
  {
    id: "job-market-analysis",
    title: "AI-Powered Job Market & Skill Gap Analysis Dashboard",
    subtitle: "NLP skill extraction, salary benchmarks & cloud analytics demand quantification",
    tabLabel: "Job Market & Skills",
    workflow: {
      question: "What specific technical skills drive the highest salary premiums and skill gaps in modern tech job postings?",
      data: "Ingested thousands of structured tech job descriptions across software engineering, cloud, and data roles.",
      cleaning: "De-duplicated job entries, applied regex-based string normalization, missing value handling, and NLP keyword extraction.",
      analysis: "Quantified skill co-occurrence frequencies, mapped experience tiers to salary brackets, and computed demand ratios.",
      visualization: "Built interactive Streamlit dashboard with real-time skill distribution charts and salary range sliders.",
      insight: "Cloud analytics and modern TypeScript/React skill combinations command a 23% salary uplift over legacy tech stacks."
    },
    metrics: [
      { label: "Posting Volume Explained", value: "62%" },
      { label: "Advertised Salary Uplift", value: "+23%" },
      { label: "Cloud Analytics Demand Multiplier", value: "3.1×" }
    ],
    technologies: ["Python", "SQL", "Pandas", "NLP", "Streamlit", "Data Visualization"],
    liveUrl: "https://job-skill-gap-analysis.streamlit.app/",
    caseStudyUrl: "/case-studies/job-market-skill-gap"
  },
  {
    id: "retail-sql-analytics",
    title: "Retail Business Analytics using Advanced SQL",
    subtitle: "Pure-SQL analytics layer over transactional schemas isolate margin leakage & customer cohorts",
    tabLabel: "Retail SQL Analytics",
    workflow: {
      question: "Why is net profit slipping despite steady order volume growth across retail distribution channels?",
      data: "Multi-table relational order model containing transactional line items, returns, customer profiles, and channel metadata.",
      cleaning: "Validated foreign key constraints, handled cancelled transactions, and standardized timestamp intervals.",
      analysis: "Wrote multi-CTE SQL queries utilizing window functions (SUM OVER, DENSE_RANK) to isolate discount leakage.",
      visualization: "Structured tabular RFM customer segmentations and margin waterfall query output models.",
      insight: "Uncovered 6.4% discount leakage in specific product categories and identified that top 20% of customers drive 48% of profit."
    },
    metrics: [
      { label: "Profit from Top Customers", value: "48%" },
      { label: "Discount Leakage Identified", value: "6.4%" },
      { label: "Dead Stock Flagged", value: "11%" }
    ],
    technologies: ["PostgreSQL", "MySQL", "Window Functions", "Multi-CTE Logic", "Cohort Analysis"],
    caseStudyUrl: "/case-studies/retail-business-analytics"
  },
  {
    id: "deloitte-simulation",
    title: "Deloitte Australia Data Analytics Job Simulation",
    subtitle: "Forensic data review, spreadsheet financial modeling & executive Tableau story dashboard",
    tabLabel: "Deloitte Simulation",
    workflow: {
      question: "How can executive leadership streamline reporting across 14 fragmented operational data surfaces?",
      data: "Client data extracts covering operational metrics, customer transaction logs, and financial statement line items.",
      cleaning: "Audited data discrepancies using Excel Power Query, resolved data type mismatches, and built standardized data dictionaries.",
      analysis: "Ran anomaly detection models to highlight root cause operational bottlenecks.",
      visualization: "Designed an executive Tableau story dashboard mapping operational drivers directly to P&L levers.",
      insight: "Consolidated 14 disparate reports into 1 unified decision dashboard, revealing 1 single-line anomaly root cause."
    },
    metrics: [
      { label: "Reporting Surfaces Consolidated", value: "14 → 1" },
      { label: "Root Cause Anomaly Source", value: "1 Line" },
      { label: "Actionable Insights Delivered", value: "Ranked" }
    ],
    technologies: ["Excel", "Power Query", "Tableau", "Forensic Data Analysis", "Executive Reporting"],
    caseStudyUrl: "/case-studies/deloitte-australia"
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-um",
    period: "MAY 2026 – AUG 2026",
    role: "Frontend Development Fellow",
    organization: "Unified Mentor",
    type: "experience",
    description: [
      "Completed intensive fellowship focused on responsive web development using HTML, CSS, JavaScript, React, and Firebase.",
      "Engineered Hometown Hub, a location-aware community platform with interactive 3D landmark exploration.",
      "Designed EntreSkill Hub, a skill-to-startup platform providing aspiring founders with structured resources, tools, and learning pathways.",
      "Integrated REST APIs and Firebase services for dynamic data management, cloud database operations, and real-time app features."
    ],
    technologies: ["React.js", "Next.js", "JavaScript", "Firebase", "REST APIs", "Tailwind CSS"],
    proofDocuments: [
      {
        label: "Internship Certificate",
        url: "/Experiences/Unified%20Mentor%20Certificate.pdf"
      }
    ]
  },
  {
    id: "exp-yuvaintern",
    period: "JUL 2026 – SEP 2026",
    role: "SQL Data Analyst Intern",
    organization: "YuvaIntern",
    type: "experience",
    description: [
      "Built multi-CTE analytical queries over a retail transactional data model.",
      "Designed RFM segmentation and cohort retention logic in pure SQL to track user repeat behavior.",
      "Documented a certified KPI dictionary for standardized cross-department reporting.",
      "Replaced manual spreadsheet reporting with an optimized SQL query layer that reduced turnaround time by 92%."
    ],
    technologies: ["SQL", "PostgreSQL", "Cohort Analysis", "RFM Segmentation", "Data Modeling"],
    link: "/Experiences/Virtual%20R%20Data%20Analyst%20Intern.pdf",
    proofDocuments: [
      {
        label: "Experience Certificate",
        url: "/Experiences/Virtual%20R%20Data%20Analyst%20Intern.pdf"
      }
    ]
  },
  {
    id: "exp-codealpha",
    period: "FEB 2025 – MAR 2025",
    role: "Full-Stack Development Intern",
    organization: "CodeAlpha",
    type: "experience",
    description: [
      "Engineered scalable web applications covering frontend, backend, and database layers throughout the software development lifecycle.",
      "Implemented secure authentication, candidate application tracking, and candidate management using Angular, Node.js, and PostgreSQL.",
      "Optimized PostgreSQL schemas and SQL queries to support efficient search, multi-parameter filtering, and role-based access control (JWT).",
      "Collaborated in an Agile Git/GitHub workflow, practicing CI/CD deployments and integration testing."
    ],
    technologies: ["Angular", "Node.js", "Express.js", "PostgreSQL", "JWT", "REST APIs", "Git"],
    proofDocuments: [
      {
        label: "Internship Certificate",
        url: "/Experiences/Code%20Alpha%20Certificate.pdf"
      },
      {
        label: "Letter of Recommendation",
        url: "/Experiences/Code%20Alpha%20Letter%20of%20Recommendation.pdf"
      }
    ]
  },
  {
    id: "exp-cipherschools",
    period: "JUN 2024 – JUL 2024",
    role: "Full-Stack MERN Developer Intern",
    organization: "CipherSchools",
    type: "experience",
    description: [
      "Delivered 3 full-stack MERN applications with CRUD operations, JWT authentication, and responsive React interfaces deployed to Vercel.",
      "Developed scalable REST APIs using Node.js and Express.js with role-based access control (JWT & bcrypt).",
      "Crafted reusable React components with Hooks and Context API for modular state management and clean component hierarchy."
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Vercel", "REST APIs"],
    proofDocuments: [
      {
        label: "Project Certificate",
        url: "/Experiences/CipherSchool%20Project%20Certificate.pdf"
      },
      {
        label: "Training Certificate",
        url: "/Experiences/CipherSchools%20training.pdf"
      }
    ]
  },
  {
    id: "edu-lpu",
    period: "AUG 2022 – JUN 2026",
    role: "Bachelor of Technology — Computer Science & Engineering",
    organization: "Lovely Professional University",
    type: "education",
    description: [
      "Graduating with a strong foundation in Data Structures, Algorithms, Software Engineering, Object Oriented Programming, and Database Systems.",
      "CGPA: 7.5 / 10",
      "Active participant in technical projects, machine learning research, and cloud/full-stack hackathons."
    ],
    technologies: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks", "Software Engineering"]
  }
];

export const RESEARCH: ResearchItem = {
  title: "A Comparative Evaluation of Vision Transformer and CNN Models for Diagnosing Solanaceae Leaf Diseases",
  conference: "IEEE — 6th International Conference on Parallel, Distributed and Grid Computing (ICPCSN 2026)",
  year: "2026",
  doiLink: "https://ieeexplore.ieee.org/document/11543989",
  description: "Benchmarked 4 deep learning architectures (Vision Transformer, ResNet, VGG, EfficientNet) for multi-class leaf-disease diagnosis across Solanaceae crops, designing and executing an end-to-end pipeline covering preprocessing, model configuration, performance evaluation, and statistical accuracy metrics.",
  architectures: ["Vision Transformer (ViT)", "ResNet", "VGG", "EfficientNet"]
};

export const CERTIFICATIONS: CertificationItem[] = [
  // --- Category: Data Analytics & BI ---
  {
    id: "cert-google-analytics",
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google / Coursera",
    date: "Jul 2026",
    category: "data",
    categoryLabel: "Data Analytics & BI",
    url: "https://coursera.org/verify/professional-cert/1BLYBEGQOKW8",
    pdfUrl: "/Achievements/Google%20Data%20Analytics.pdf",
    skills: ["SQL", "Tableau", "Python", "Data Cleaning", "Data Analytics", "Spreadsheets"]
  },
  {
    id: "cert-sap-analytics",
    title: "SAP Certified – Data Analyst – SAP Analytics Cloud",
    issuer: "SAP",
    date: "Apr 2026",
    category: "data",
    categoryLabel: "Data Analytics & BI",
    url: "https://www.credly.com/badges/11000eb1-db51-43a0-bccb-20cd4e613898",
    pdfUrl: "/Achievements/SAPCertification_12216918%20(1).pdf",
    skills: ["SAP Analytics Cloud", "Data Modeling", "Stories", "Enterprise Reporting", "Analytics"]
  },
  {
    id: "cert-deloitte",
    title: "Deloitte Australia Data Analytics Job Simulation",
    issuer: "Deloitte / Forage",
    date: "Jun 2026",
    category: "data",
    categoryLabel: "Data Analytics & BI",
    url: "https://theforage.com",
    pdfUrl: "/Achievements/Forage%20Certificate.pdf",
    skills: ["Data Analysis", "Forensic Technology", "Tableau", "Executive Reporting"]
  },
  {
    id: "cert-chatgpt-data-analysis",
    title: "ChatGPT Advanced Data Analysis",
    issuer: "Vanderbilt University / Coursera",
    date: "Apr 2024",
    category: "data",
    categoryLabel: "Data Analytics & BI",
    url: "https://coursera.org/verify/P9YFQZQBDDEF",
    pdfUrl: "/Achievements/ChatGPT%20Advanced%20Data%20Analysis.pdf",
    skills: ["AI-Driven Analytics", "Python Automation", "Statistical EDA", "LLM Scripting"]
  },

  // --- Category: AI & Machine Learning ---
  {
    id: "cert-infosys-genai",
    title: "Principles of Generative AI Certification",
    issuer: "Infosys Springboard",
    date: "May 2025",
    category: "ai",
    categoryLabel: "AI & Machine Learning",
    url: "https://verify.onwingspan.com",
    pdfUrl: "/Achievements/Principles%20of%20Generative%20AI%20Certification.pdf",
    skills: ["Generative AI", "LLMs", "Prompt Engineering", "AI Ethics"]
  },
  {
    id: "cert-genai-everyone",
    title: "GenAI for Everyone",
    issuer: "Fractal Analytics / Coursera",
    date: "Jan 2024",
    category: "ai",
    categoryLabel: "AI & Machine Learning",
    url: "https://coursera.org/verify/HW344YWRM6W8",
    pdfUrl: "/Achievements/GenAI%20for%20Everyone.pdf",
    skills: ["Generative AI", "Enterprise AI Applications", "Analytics Strategy"]
  },
  {
    id: "cert-ibm-prompt",
    title: "Generative AI: Prompt Engineering Basics",
    issuer: "IBM / Coursera",
    date: "Oct 2025",
    category: "ai",
    categoryLabel: "AI & Machine Learning",
    url: "https://coursera.org/verify/95Z8D2NV1UBT",
    pdfUrl: "/Achievements/Generative%20AI%20%20Prompt%20Engineering%20Basics.pdf",
    skills: ["Prompt Engineering", "LLM Fine-Tuning", "Context Engineering", "Few-Shot Prompting"]
  },
  {
    id: "cert-chatgpt-nlp",
    title: "ChatGPT Playground for Beginners: Intro to NLP",
    issuer: "Coursera Project Network",
    date: "Apr 2024",
    category: "ai",
    categoryLabel: "AI & Machine Learning",
    url: "https://coursera.org/verify/CZQB7LB5CN6P",
    pdfUrl: "/Achievements/ChatGPT%20Playground%20for%20Beginners%20Intro%20to%20NLP.pdf",
    skills: ["Natural Language Processing", "NLP Pipelines", "Text Mining", "Prompt Tuning"]
  },
  {
    id: "cert-chatgpt-excel",
    title: "ChatGPT for Beginners: Save time with Microsoft Excel",
    issuer: "Coursera Project Network",
    date: "Apr 2024",
    category: "ai",
    categoryLabel: "AI & Machine Learning",
    url: "https://coursera.org/verify/GKBX6Z4HD857",
    pdfUrl: "/Achievements/ChatGPT%20for%20Beginners%20%20Save%20time%20with%20Microsoft.pdf",
    skills: ["Excel Automation", "AI Workflows", "Formulas & Macros", "Productivity"]
  },

  // --- Category: Full Stack & Cloud Architecture ---
  {
    id: "cert-node-niit",
    title: "Server side JavaScript with Node.js",
    issuer: "NIIT / Coursera",
    date: "May 2024",
    category: "fullstack",
    categoryLabel: "Full Stack & Cloud",
    url: "https://coursera.org/verify/FH5HY6Y43U5P",
    pdfUrl: "/Achievements/Server%20side%20JavaScript%20with%20Nodejs.pdf",
    skills: ["Node.js", "Express.js", "REST APIs", "Async Architecture", "Middleware"]
  },
  {
    id: "cert-php-michigan",
    title: "Building Web Applications in PHP",
    issuer: "University of Michigan / Coursera",
    date: "Nov 2024",
    category: "fullstack",
    categoryLabel: "Full Stack & Cloud",
    url: "https://coursera.org/verify/UHTSN3QADHVH",
    pdfUrl: "/Achievements/Building%20Web%20Applications%20in%20PHP.pdf",
    skills: ["PHP", "MySQL", "Web Applications", "Relational Databases", "Backend Scripting"]
  },
  {
    id: "cert-cloud-nptel",
    title: "Cloud Computing (12-Week Course)",
    issuer: "NPTEL / Swayam (IIT Kharagpur)",
    date: "Jul - Oct 2024",
    category: "fullstack",
    categoryLabel: "Full Stack & Cloud",
    pdfUrl: "/Achievements/Cloud%20Computing%20(1).pdf",
    skills: ["Cloud Architecture", "AWS", "Virtualization", "Distributed Systems"]
  },
  {
    id: "cert-algo-cuboulder",
    title: "Approximation Algorithms and Linear Programming",
    issuer: "University of Colorado Boulder / Coursera",
    date: "May 2024",
    category: "fullstack",
    categoryLabel: "Full Stack & Cloud",
    url: "https://coursera.org/verify/ZE8B9XVYZCPH",
    pdfUrl: "/Achievements/Approximation%20Algorithms%20and%20Linear.pdf",
    skills: ["Algorithms", "Linear Programming", "Optimization", "Computational Complexity"]
  },
  {
    id: "cert-cipherschools-project",
    title: "Full Stack Development Using MERN Project Certificate",
    issuer: "CipherSchools",
    date: "Jun - Jul 2024",
    category: "fullstack",
    categoryLabel: "Full Stack & Cloud",
    pdfUrl: "/Achievements/CipherSchool%20Project%20Certificate.pdf",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "MERN Stack"]
  },
  {
    id: "cert-cipherschools-training",
    title: "Industrial Training in Full-Stack MERN Stack",
    issuer: "CipherSchools / LPU",
    date: "Jul 2024",
    category: "fullstack",
    categoryLabel: "Full Stack & Cloud",
    pdfUrl: "/Achievements/CipherSchools%20training.pdf",
    skills: ["Full-Stack Architecture", "REST APIs", "MERN", "Production Workflows"]
  },

  // --- Category: Frontend Engineering & UX Design ---
  {
    id: "cert-google-ux",
    title: "Google UX Design Professional Certificate",
    issuer: "Google / Coursera",
    date: "Oct 2026",
    category: "frontend",
    categoryLabel: "Frontend & UX Design",
    url: "https://coursera.org/verify/professional-cert/HYI95MRFVX9S",
    pdfUrl: "/Achievements/Google%20Ux%20Design.pdf",
    skills: ["Figma", "Wireframing", "UX Research", "UI Prototyping", "Design Systems"]
  },
  {
    id: "cert-infosys-frontend",
    title: "Front End Web Developer Certification",
    issuer: "Infosys Springboard",
    date: "Apr 2025",
    category: "frontend",
    categoryLabel: "Frontend & UX Design",
    url: "https://verify.onwingspan.com",
    pdfUrl: "/Achievements/Front%20End%20Web%20Developer%20Certification.pdf",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Web Architecture"]
  },
  {
    id: "cert-jhu-web",
    title: "HTML, CSS, and Javascript for Web Developers",
    issuer: "Johns Hopkins University / Coursera",
    date: "Apr 2024",
    category: "frontend",
    categoryLabel: "Frontend & UX Design",
    url: "https://coursera.org/verify/V62JN45SJX3Q",
    pdfUrl: "/Achievements/HTML%2C%20CSS%2C%20and%20Javascript%20for%20Web%20Developers.pdf",
    skills: ["HTML5", "CSS3", "JavaScript ES6", "Web APIs", "Frontend Development"]
  },

  // --- Category: Professional & Management ---
  {
    id: "cert-project-mgmt",
    title: "Project Management Specialization",
    issuer: "University of Colorado Boulder / Coursera",
    date: "Jun 2026",
    category: "management",
    categoryLabel: "Leadership & Management",
    url: "https://coursera.org/verify/specialization/QZREVA33VFWC",
    pdfUrl: "/Achievements/Project%20Managmen.pdf",
    skills: ["Agile Project Management", "Project Planning & Execution", "Risk Assessment", "Scrum"]
  },
  {
    id: "cert-business-comm",
    title: "Basics of Business Communication",
    issuer: "Infosys Springboard",
    date: "Apr 2025",
    category: "management",
    categoryLabel: "Leadership & Management",
    url: "https://verify.onwingspan.com",
    pdfUrl: "/Achievements/Basics%20of%20Business%20Communication.pdf",
    skills: ["Executive Communication", "Technical Writing", "Stakeholder Alignment"]
  },
  {
    id: "cert-goal-setting",
    title: "Saving Time by Setting Goals",
    issuer: "Infosys Springboard",
    date: "Apr 2025",
    category: "management",
    categoryLabel: "Leadership & Management",
    url: "https://verify.onwingspan.com",
    pdfUrl: "/Achievements/Saving%20Time%20by%20Setting%20Goals.pdf",
    skills: ["Time Architecture", "Sprint Planning", "Productivity Strategy"]
  }
];

export const ACHIEVEMENTS = [
  { title: "IEEE Published Researcher", detail: "Peer-reviewed publication on Vision Transformers & CNNs at IEEE 2026 Conference." },
  { title: "Dual Technical Mastery", detail: "Proven competency across Software Engineering (React/Node) & Data Analytics (SQL/Power BI)." },
  { title: "3 Production Internships", detail: "Completed hands-on tenures at Unified Mentor, YuvaIntern, CodeAlpha, & CipherSchools." },
  { title: "Google & SAP Certified", detail: "Professional Credentials in Google Data Analytics and SAP Analytics Cloud." },
  { title: "HackerRank Top SQL 50", detail: "Demonstrated advanced multi-table SQL query capabilities and database optimization." },
  { title: "7+ Deployed Web Applications", detail: "Shipped end-to-end full-stack web platforms and interactive visual utilities." }
];
