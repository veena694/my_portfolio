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
  number: string;
  title: string;
  category: 'software' | 'frontend' | 'fullstack' | 'data' | 'ai';
  categoryLabel: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  uiStyle: 'hometown' | 'entreskill' | 'chefs' | 'agriguard' | 'golf' | 'jobportal' | 'weather';
}

export interface AnalyticsProject {
  id: string;
  number: string;
  title: string;
  subtitle: string;
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
  caseStudyUrl?: string;
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
}

export interface CertificationItem {
  id: string;
  number: string;
  title: string;
  issuer: string;
  date: string;
  url?: string;
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
    featuredProjects: ["golf-charity", "entreskill-hub", "job-portal"]
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
    number: "01",
    id: "software-engineering",
    title: "SOFTWARE ENGINEERING",
    description: "Designing structured codebases, object-oriented & functional architectures, and reliable API integrations with comprehensive testing and CI/CD pipelines.",
    technologies: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "REST APIs", "Git", "GitHub Actions", "Docker"],
    highlights: "Focus on clean code, modular components, and reliable production deployment."
  },
  {
    number: "02",
    id: "frontend-development",
    title: "FRONTEND DEVELOPMENT",
    description: "Building responsive, modern, accessible web experiences featuring complex state management, custom animation micro-interactions, and high performance.",
    technologies: ["React.js", "Next.js 14/15", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js / Canvas", "HTML5 / CSS3"],
    highlights: "Subtle micro-interactions, responsive fluid layouts, and top-tier Lighthouse audit scores."
  },
  {
    number: "03",
    id: "fullstack-development",
    title: "FULL STACK DEVELOPMENT",
    description: "Architecting web platforms end-to-end with secure JWT / OAuth authentication, database schemas, serverless functions, payment integration, and cloud hosting.",
    technologies: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Supabase", "Prisma", "Stripe API", "Vercel / Railway"],
    highlights: "Role-based access control, relational and document databases, and transaction processing."
  },
  {
    number: "04",
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
  { id: "express", symbol: "Ex", name: "Express.js", category: "Backend", level: "Advanced", description: "Routing, JWT Authentication, Error Handling", relatedProjects: ["Job Portal", "Precision AgriGuard"] },
  { id: "sql", symbol: "Sql", name: "SQL", category: "Databases", level: "Expert", description: "Window Functions, Multi-CTE queries, Aggregations", relatedProjects: ["Retail SQL Analytics", "Job Market Analysis"] },
  { id: "postgresql", symbol: "Pg", name: "PostgreSQL", category: "Databases", level: "Advanced", description: "Schema Design, Indexes, Foreign Keys, Query Optimization", relatedProjects: ["Job Portal", "Hometown Hub"] },
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
    id: "hometown-hub",
    number: "01",
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
    number: "02",
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
    number: "03",
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
    number: "04",
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
    number: "05",
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
    id: "job-portal",
    number: "06",
    title: "Scalable Full-Stack Job Portal",
    category: "software",
    categoryLabel: "SOFTWARE ENGINEERING",
    description: "Full-stack web application built at CodeAlpha with Angular frontend, Node.js REST APIs, PostgreSQL schema optimization, JWT role-based access control, resume uploads, and advanced multi-parameter search.",
    technologies: ["Angular", "Node.js", "Express.js", "PostgreSQL", "JWT", "Git / GitHub"],
    githubUrl: "https://github.com/veena694",
    liveUrl: "https://my-portfolio-eight-gilt-18.vercel.app/",
    featured: false,
    uiStyle: "jobportal"
  },
  {
    id: "weather-app",
    number: "07",
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
    number: "01",
    title: "AI-Powered Job Market & Skill Gap Analysis Dashboard",
    subtitle: "NLP skill extraction, salary benchmarks & cloud analytics demand quantification",
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
    caseStudyUrl: "https://veena-data-analyst-portfolio.lovable.app/projects/job-market"
  },
  {
    id: "retail-sql-analytics",
    number: "02",
    title: "Retail Business Analytics using Advanced SQL",
    subtitle: "Pure-SQL analytics layer over transactional schemas isolate margin leakage & customer cohorts",
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
    caseStudyUrl: "https://veena-data-analyst-portfolio.lovable.app/projects/retail-sql"
  },
  {
    id: "deloitte-simulation",
    number: "03",
    title: "Deloitte Australia Data Analytics Job Simulation",
    subtitle: "Forensic data review, spreadsheet financial modeling & executive Tableau story dashboard",
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
    caseStudyUrl: "https://veena-data-analyst-portfolio.lovable.app/projects/deloitte"
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
    technologies: ["React.js", "Next.js", "JavaScript", "Firebase", "REST APIs", "Tailwind CSS"]
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
    link: "https://drive.google.com/file/d/1RoiUPM51kHJQw-F8_3khVdWBNRrlASZB/view?usp=drivesdk"
  },
  {
    id: "exp-codealpha",
    period: "FEB 2025 – MAR 2025",
    role: "Full-Stack Development Intern",
    organization: "CodeAlpha",
    type: "experience",
    description: [
      "Engineered a scalable full-stack job portal covering frontend, backend, and database layers throughout the software development lifecycle.",
      "Implemented secure authentication, job listings, candidate application tracking, and employer management using Angular, Node.js, and PostgreSQL.",
      "Optimized PostgreSQL schemas and SQL queries to support efficient search, multi-parameter filtering, and role-based access control (JWT).",
      "Collaborated in an Agile Git/GitHub workflow, practicing CI/CD deployments and integration testing."
    ],
    technologies: ["Angular", "Node.js", "Express.js", "PostgreSQL", "JWT", "REST APIs", "Git"]
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
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Vercel", "REST APIs"]
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
  {
    id: "cert-google-analytics",
    number: "01",
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google / Coursera",
    date: "Nov 2025",
    url: "https://www.coursera.org/account/accomplishments/specialization/1BLYBEGQOKW8",
    skills: ["Data Cleaning", "R Programming", "Python", "SQL", "Data Visualization", "Data-Driven Decision Making"]
  },
  {
    id: "cert-sap-analytics",
    number: "02",
    title: "SAP Certified – Data Analyst – SAP Analytics Cloud",
    issuer: "SAP",
    date: "Apr 2026",
    url: "https://www.credly.com/badges/11000eb1-db51-43a0-bccb-20cd4e613898",
    skills: ["SAP Analytics Cloud", "Data Modeling", "Stories", "Enterprise Reporting", "Analytics"]
  },
  {
    id: "cert-deloitte",
    number: "03",
    title: "Deloitte Australia Data Analytics Job Simulation",
    issuer: "Forage",
    date: "Apr 2026",
    url: "https://theforage.com",
    skills: ["Forensic Data Analysis", "Excel", "Tableau", "Business Insights", "Executive Reporting"]
  },
  {
    id: "cert-project-mgmt",
    number: "04",
    title: "Project Management Specialization",
    issuer: "University of Colorado Boulder (Coursera)",
    date: "Apr 2026",
    skills: ["Project Lifecycle", "Agile", "Risk Assessment", "Stakeholder Communication"]
  },
  {
    id: "cert-google-ux",
    number: "05",
    title: "Google UX Design Professional Certificate",
    issuer: "Google / Coursera",
    date: "Nov 2025",
    skills: ["User Research", "Wireframing", "Figma Prototyping", "Usability Testing", "UI Accessibility"]
  },
  {
    id: "cert-infosys-genai",
    number: "06",
    title: "Principles of Generative AI Certification",
    issuer: "Infosys Springboard",
    date: "May 2025",
    skills: ["Generative AI", "LLMs", "Prompt Engineering", "AI Ethics"]
  },
  {
    id: "cert-infosys-frontend",
    number: "07",
    title: "Front End Web Developer Certification",
    issuer: "Infosys Springboard",
    date: "Apr 2025",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Web Architecture"]
  },
  {
    id: "cert-nptel-cloud",
    number: "08",
    title: "Cloud Computing Certification",
    issuer: "NPTEL",
    date: "Jul 2024",
    skills: ["Cloud Architecture", "AWS Concepts", "Virtualization", "Distributed Systems"]
  },
  {
    id: "cert-cipherschools-mern",
    number: "09",
    title: "Full-Stack MERN Development",
    issuer: "CipherSchools",
    date: "Jun 2024",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"]
  },
  {
    id: "cert-powerbi-30days",
    number: "10",
    title: "30 Days Power BI Micro Course",
    issuer: "SkillCourse",
    date: "2026",
    url: "https://edu.skillcourse.in/view-certificate/SC-2MTTACT976",
    skills: ["Power BI", "DAX", "Star Schema", "Row Level Security"]
  }
];

export const ACHIEVEMENTS = [
  { number: "01", title: "IEEE Published Researcher", detail: "Peer-reviewed publication on Vision Transformers & CNNs at IEEE 2026 Conference." },
  { number: "02", title: "Dual Technical Mastery", detail: "Proven competency across Software Engineering (React/Node) & Data Analytics (SQL/Power BI)." },
  { number: "03", title: "3 Production Internships", detail: "Completed hands-on tenures at Unified Mentor, YuvaIntern, CodeAlpha, & CipherSchools." },
  { number: "04", title: "Google & SAP Certified", detail: "Professional Credentials in Google Data Analytics and SAP Analytics Cloud." },
  { number: "05", title: "HackerRank Top SQL 50", detail: "Demonstrated advanced multi-table SQL query capabilities and database optimization." },
  { number: "06", title: "7+ Deployed Web Applications", detail: "Shipped end-to-end full-stack web platforms and interactive visual utilities." }
];
