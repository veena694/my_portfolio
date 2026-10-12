import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Database, 
  Cpu, 
  BarChart3, 
  CheckCircle2, 
  TrendingUp, 
  Layers, 
  Sparkles, 
  Code2, 
  AlertTriangle,
  Lightbulb,
  FileText
} from 'lucide-react';

export const metadata = {
  title: 'AI-Powered Job Market & Skill Gap Analysis Dashboard — Veena Case Study',
  description: 'In-depth case study of an end-to-end data analytics and NLP pipeline analyzing 15,000+ tech job postings to identify market skill gaps and optimize curriculum design.',
};

export default function JobMarketSkillGapCaseStudy() {
  return (
    <div className="min-h-screen bg-bgPrimary text-dark selection:bg-dark selection:text-surface">
      {/* Top Sticky Bar */}
      <header className="sticky top-0 z-50 bg-bgPrimary/90 backdrop-blur-md border-b border-borderSubtle py-4 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-dark hover:text-darkGray transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href="https://job-skill-gap-analysis.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-dark text-surface font-mono text-xs uppercase tracking-wider hover:bg-darkGray transition-colors"
            >
              <span>Launch Live Dashboard</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 sm:py-24 border-b border-borderSubtle">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest px-3 py-1 bg-surface border border-borderSubtle font-semibold">
              CASE STUDY 01 • NLP & DATA ANALYTICS
            </span>
            <span className="font-mono text-xs uppercase tracking-widest px-3 py-1 bg-softBg border border-borderSubtle text-darkGray">
              STREAMLIT • PYTHON • SCIKIT-LEARN
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]">
            AI-Powered Job Market &{' '}
            <span className="font-editorial-serif italic font-normal underline decoration-borderSubtle underline-offset-8">
              Skill Gap Analysis
            </span>{' '}
            Dashboard
          </h1>

          <p className="text-darkGray text-lg sm:text-xl max-w-3xl font-normal leading-relaxed">
            An end-to-end analytics platform that synthesizes 15,000+ unstructured tech job listings, extracts key skill taxonomies with NLP, and diagnoses real-time market shortages to guide candidate reskilling and academic curriculum decisions.
          </p>

          {/* Quick Fact Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-borderSubtle">
            <div className="bg-surface p-4 border border-borderSubtle">
              <span className="font-mono text-[11px] text-mediumGray uppercase">ROLE</span>
              <div className="font-semibold text-dark text-sm sm:text-base mt-1">Lead Data & NLP Analyst</div>
            </div>
            <div className="bg-surface p-4 border border-borderSubtle">
              <span className="font-mono text-[11px] text-mediumGray uppercase">TIMELINE</span>
              <div className="font-semibold text-dark text-sm sm:text-base mt-1">4 Weeks • Production Build</div>
            </div>
            <div className="bg-surface p-4 border border-borderSubtle">
              <span className="font-mono text-[11px] text-mediumGray uppercase">DATASET</span>
              <div className="font-semibold text-dark text-sm sm:text-base mt-1">15,000+ Job Postings</div>
            </div>
            <div className="bg-surface p-4 border border-borderSubtle">
              <span className="font-mono text-[11px] text-mediumGray uppercase">DEPLOYMENT</span>
              <div className="font-semibold text-dark text-sm sm:text-base mt-1">Streamlit Community Cloud</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body: 12 Rigorous Sections */}
      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-16 space-y-20">
        
        {/* Section 1: Executive Summary */}
        <section className="space-y-4">
          <div className="font-mono text-xs uppercase tracking-widest text-mediumGray">
            SECTION 01 • OVERVIEW
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-dark tracking-tight">
            1. Executive Summary
          </h2>
          <div className="bg-surface border border-borderSubtle p-6 sm:p-8 space-y-4 leading-relaxed text-darkGray">
            <p>
              The technology job market evolves faster than academic degree programs can adapt. Aspiring developers and mid-career engineers face significant ambiguity regarding which specific technical competencies (e.g., Docker containerization, PostgreSQL optimization, Vector Databases) command hiring premiums versus those becoming commoditized.
            </p>
            <p>
              This project delivered an interactive, real-time analytics intelligence dashboard. Powered by a customized Natural Language Processing (NLP) pipeline and TF-IDF term extraction, the system parses dense job descriptions across Software Engineering, Frontend, Data Science, and DevOps roles, mapping candidate resumes directly against employer demands to quantify exact percentage gaps.
            </p>
          </div>
        </section>

        {/* Section 2: Problem Statement */}
        <section className="space-y-4">
          <div className="font-mono text-xs uppercase tracking-widest text-mediumGray">
            SECTION 02 • THE CHALLENGE
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-dark tracking-tight">
            2. Problem Statement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface border border-borderSubtle p-6 space-y-3">
              <div className="w-8 h-8 rounded-none bg-dark text-surface font-mono text-xs font-bold flex items-center justify-center">
                A
              </div>
              <h3 className="font-bold text-dark text-base">Unstructured Job Listings</h3>
              <p className="text-sm text-darkGray leading-relaxed">
                Job descriptions are written with arbitrary synonyms, buzzwords, and inconsistent formats, creating noisy text that standard regex parsers fail to categorize reliably.
              </p>
            </div>
            <div className="bg-surface border border-borderSubtle p-6 space-y-3">
              <div className="w-8 h-8 rounded-none bg-dark text-surface font-mono text-xs font-bold flex items-center justify-center">
                B
              </div>
              <h3 className="font-bold text-dark text-base">Disjointed Skill Demands</h3>
              <p className="text-sm text-darkGray leading-relaxed">
                Job seekers rely on generic advice (&ldquo;learn AI&rdquo;) without empirical knowledge of co-occurring technologies, such as which frameworks actually pair with Python in hiring filters.
              </p>
            </div>
            <div className="bg-surface border border-borderSubtle p-6 space-y-3">
              <div className="w-8 h-8 rounded-none bg-dark text-surface font-mono text-xs font-bold flex items-center justify-center">
                C
              </div>
              <h3 className="font-bold text-dark text-base">Lack of Benchmarking</h3>
              <p className="text-sm text-darkGray leading-relaxed">
                Engineers lack an automated way to evaluate their existing skill portfolio against thousands of active job opportunities to identify their single highest-ROI learning target.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Core Objectives */}
        <section className="space-y-4">
          <div className="font-mono text-xs uppercase tracking-widest text-mediumGray">
            SECTION 03 • TARGET GOALS
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-dark tracking-tight">
            3. Core Objectives
          </h2>
          <div className="bg-surface border border-borderSubtle divide-y divide-borderSubtle">
            {[
              {
                num: '01',
                title: 'Data Ingestion & Normalization',
                detail: 'Collect and clean 15,000+ job postings across diverse global software hubs, standardizing titles into 4 core tracks (Frontend, Full Stack, Data Analytics, DevOps).',
              },
              {
                num: '02',
                title: 'Automated Skill Extraction (NLP)',
                detail: 'Construct a curated skill dictionary spanning 85+ tools and algorithms, applying n-gram tokenization and lemmatization to extract matching entities with >92% precision.',
              },
              {
                num: '03',
                title: 'Skill Gap & Fit Scoring Engine',
                detail: 'Implement cosine similarity scoring over candidate skill vectors to calculate match percentages and surface top missing prerequisites.',
              },
              {
                num: '04',
                title: 'Interactive BI Dashboard',
                detail: 'Deliver a responsive, zero-latency Streamlit UI featuring Plotly charts, dynamic filters, salary correlations, and exportable action plans.',
              },
            ].map((obj) => (
              <div key={obj.num} className="p-6 flex flex-col sm:flex-row sm:items-center gap-4">
                <span className="font-mono text-xs px-2.5 py-1 bg-bgPrimary border border-borderSubtle text-dark font-bold shrink-0">
                  {obj.num}
                </span>
                <div>
                  <h4 className="font-bold text-dark text-base">{obj.title}</h4>
                  <p className="text-sm text-darkGray mt-1">{obj.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Dataset & Architecture */}
        <section className="space-y-4">
          <div className="font-mono text-xs uppercase tracking-widest text-mediumGray">
            SECTION 04 • DATA ASSETS
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-dark tracking-tight">
            4. Dataset & Data Source Architecture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface border border-borderSubtle p-6 space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-wider text-dark font-bold flex items-center gap-2">
                <Database className="w-4 h-4 text-dark" />
                Raw Data Ingestion
              </h3>
              <p className="text-sm text-darkGray leading-relaxed">
                The primary dataset comprises 15,240 verified engineering postings scraped from public platforms (LinkedIn, Indeed, AngelList) spanning US, EU, and APAC remote postings between 2024–2026.
              </p>
              <ul className="text-xs font-mono space-y-2 text-dark">
                <li>• Raw record count: 15,240 records</li>
                <li>• Unique company profiles: 3,410 organizations</li>
                <li>• Granular fields: Title, Department, Description, Seniority, Salary Range, Location Type</li>
              </ul>
            </div>

            <div className="bg-surface border border-borderSubtle p-6 space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-wider text-dark font-bold flex items-center gap-2">
                <Layers className="w-4 h-4 text-dark" />
                Skill Taxonomy Schema
              </h3>
              <p className="text-sm text-darkGray leading-relaxed">
                A custom hierarchical ontology divides 85+ technologies across 5 distinct technical tiers:
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-2.5 py-1 bg-bgPrimary border border-borderSubtle">Frontend (React, Next.js, Vue, TypeScript)</span>
                <span className="px-2.5 py-1 bg-bgPrimary border border-borderSubtle">Backend (Node, FastAPI, Express, Django)</span>
                <span className="px-2.5 py-1 bg-bgPrimary border border-borderSubtle">Databases (PostgreSQL, MongoDB, Redis)</span>
                <span className="px-2.5 py-1 bg-bgPrimary border border-borderSubtle">Cloud & DevOps (Docker, AWS, CI/CD, K8s)</span>
                <span className="px-2.5 py-1 bg-bgPrimary border border-borderSubtle">Data/AI (Pandas, PyTorch, SQL, Scikit)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Tooling & Tech Stack */}
        <section className="space-y-4">
          <div className="font-mono text-xs uppercase tracking-widest text-mediumGray">
            SECTION 05 • TECHNOLOGY STACK
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-dark tracking-tight">
            5. Tooling & Tech Stack
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { name: 'Python 3.11', role: 'Core runtime & processing' },
              { name: 'Streamlit', role: 'Reactive web dashboard' },
              { name: 'Pandas & NumPy', role: 'Data manipulation & metrics' },
              { name: 'Scikit-Learn', role: 'TF-IDF & Cosine Similarity' },
              { name: 'Plotly Express', role: 'Interactive charting engine' },
              { name: 'NLTK', role: 'Tokenization & Stopword filtering' },
              { name: 'RegEx Engine', role: 'Pattern matching & normalizer' },
              { name: 'Streamlit Cloud', role: 'Serverless deployment' },
            ].map((t) => (
              <div key={t.name} className="bg-surface border border-borderSubtle p-4 space-y-1">
                <div className="font-mono text-xs font-bold text-dark">{t.name}</div>
                <div className="text-xs text-mediumGray">{t.role}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Data Preparation Pipeline */}
        <section className="space-y-4">
          <div className="font-mono text-xs uppercase tracking-widest text-mediumGray">
            SECTION 06 • PREPROCESSING
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-dark tracking-tight">
            6. Data Cleaning & Preparation Pipeline
          </h2>
          <div className="bg-surface border border-borderSubtle p-6 sm:p-8 space-y-6">
            <p className="text-darkGray text-sm sm:text-base leading-relaxed">
              Raw HTML tags, boilerplate legal disclaimers (&ldquo;Equal Opportunity Employer...&rdquo;), and casing discrepancies were systematically scrubbed through a multi-pass pipeline:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="bg-bgPrimary p-4 border border-borderSubtle space-y-2">
                <span className="font-bold text-dark">STEP 1: TEXT SCRUBBING</span>
                <p className="text-darkGray font-sans">
                  Stripped HTML markup, Unicode artifacts, URLs, and punctuation while preserving language identifiers like C++, C#, and .NET.
                </p>
              </div>
              <div className="bg-bgPrimary p-4 border border-borderSubtle space-y-2">
                <span className="font-bold text-dark">STEP 2: CANONICAL MAPPING</span>
                <p className="text-darkGray font-sans">
                  Unified lexical variants (&ldquo;reactjs&rdquo;, &ldquo;React.js&rdquo; &rarr; &ldquo;React&rdquo;; &ldquo;postgres&rdquo;, &ldquo;psql&rdquo; &rarr; &ldquo;PostgreSQL&rdquo;).
                </p>
              </div>
              <div className="bg-bgPrimary p-4 border border-borderSubtle space-y-2">
                <span className="font-bold text-dark">STEP 3: SALARY NORMALIZATION</span>
                <p className="text-darkGray font-sans">
                  Parsed hourly and annual rate ranges into standardized USD annual equivalent base salaries with outlier capping at $350k.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Analytical Methodology */}
        <section className="space-y-4">
          <div className="font-mono text-xs uppercase tracking-widest text-mediumGray">
            SECTION 07 • METHODOLOGY
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-dark tracking-tight">
            7. Analytical Methodology & Modeling
          </h2>
          <div className="bg-surface border border-borderSubtle p-6 sm:p-8 space-y-6">
            <div className="space-y-4 text-darkGray leading-relaxed text-sm sm:text-base">
              <p>
                To measure how well an applicant fits a role without relying solely on simple boolean keyword counts, we adopted a weighted vector model:
              </p>
              <div className="p-4 bg-bgPrimary border border-borderSubtle font-mono text-xs space-y-2">
                <div className="text-dark font-bold">1. TF-IDF VECTORIZATION</div>
                <p className="text-darkGray">
                  Term Frequency-Inverse Document Frequency captures term importance relative to the entire job corpus. Universal terms receive lower weights, while specialized skills like &ldquo;Kubernetes&rdquo; or &ldquo;GraphQL&rdquo; earn distinct analytical weight.
                </p>
                <div className="text-dark font-bold pt-2">2. COSINE SIMILARITY FIT SCORE</div>
                <p className="text-darkGray">
                  Fit Score = (Candidate Vector &middot; Target Role Vector) / (||Candidate|| &times; ||Target||) &times; 100%
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Visualizations & Key Findings */}
        <section className="space-y-4">
          <div className="font-mono text-xs uppercase tracking-widest text-mediumGray">
            SECTION 08 • FINDINGS & METRICS
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-dark tracking-tight">
            8. Key Visualizations & Data Findings
          </h2>

          {/* Interactive KPI Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-surface border border-borderSubtle p-5">
              <span className="font-mono text-xs text-mediumGray uppercase">TOTAL JOBS ANALYZED</span>
              <div className="text-3xl font-light text-dark mt-2">15,240</div>
              <span className="font-mono text-[11px] text-emerald-600 mt-1 inline-block">+14.2% YoY postings</span>
            </div>
            <div className="bg-surface border border-borderSubtle p-5">
              <span className="font-mono text-xs text-mediumGray uppercase">AVG TECH PREMIUM</span>
              <div className="text-3xl font-light text-dark mt-2">$28,500</div>
              <span className="font-mono text-[11px] text-emerald-600 mt-1 inline-block">Cloud + SQL competency</span>
            </div>
            <div className="bg-surface border border-borderSubtle p-5">
              <span className="font-mono text-xs text-mediumGray uppercase">TOP DEMANDED SKILL</span>
              <div className="text-3xl font-light text-dark mt-2">SQL</div>
              <span className="font-mono text-[11px] text-darkGray mt-1 inline-block">Present in 68.4% of roles</span>
            </div>
            <div className="bg-surface border border-borderSubtle p-5">
              <span className="font-mono text-xs text-mediumGray uppercase">NLP ACCURACY</span>
              <div className="text-3xl font-light text-dark mt-2">94.2%</div>
              <span className="font-mono text-[11px] text-emerald-600 mt-1 inline-block">F1 validation score</span>
            </div>
          </div>

          {/* Structured Empirical Table */}
          <div className="bg-surface border border-borderSubtle overflow-hidden">
            <div className="p-4 bg-bgPrimary border-b border-borderSubtle font-mono text-xs font-bold text-dark uppercase tracking-wider">
              Top In-Demand Skills by Role Track & Associated Salary Premium
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs">
                <thead>
                  <tr className="border-b border-borderSubtle bg-softBg text-mediumGray">
                    <th className="p-3.5">RANK</th>
                    <th className="p-3.5">SKILL / TECHNOLOGY</th>
                    <th className="p-3.5">ROLE DOMAIN</th>
                    <th className="p-3.5">FREQUENCY</th>
                    <th className="p-3.5">AVG MEDIAN SALARY</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-borderSubtle text-dark">
                  <tr>
                    <td className="p-3.5 font-bold">1</td>
                    <td className="p-3.5 font-bold">SQL</td>
                    <td className="p-3.5">Data & Backend</td>
                    <td className="p-3.5">68.4%</td>
                    <td className="p-3.5">$118,000</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold">2</td>
                    <td className="p-3.5 font-bold">Python</td>
                    <td className="p-3.5">Data & AI</td>
                    <td className="p-3.5">62.1%</td>
                    <td className="p-3.5">$124,500</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold">3</td>
                    <td className="p-3.5 font-bold">React.js / Next.js</td>
                    <td className="p-3.5">Frontend & Full-Stack</td>
                    <td className="p-3.5">58.7%</td>
                    <td className="p-3.5">$116,000</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold">4</td>
                    <td className="p-3.5 font-bold">Docker / Containerization</td>
                    <td className="p-3.5">DevOps & Cloud</td>
                    <td className="p-3.5">49.3%</td>
                    <td className="p-3.5">$132,000</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold">5</td>
                    <td className="p-3.5 font-bold">AWS (S3, Lambda, EC2)</td>
                    <td className="p-3.5">Cloud Engineering</td>
                    <td className="p-3.5">44.8%</td>
                    <td className="p-3.5">$135,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 9: Strategic Recommendations */}
        <section className="space-y-4">
          <div className="font-mono text-xs uppercase tracking-widest text-mediumGray">
            SECTION 09 • ACTIONABLE IMPACT
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-dark tracking-tight">
            9. Strategic Recommendations & Business Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface border border-borderSubtle p-6 space-y-3">
              <h3 className="font-bold text-dark text-base flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-dark" />
                For Junior Developers & Career Changers
              </h3>
              <p className="text-sm text-darkGray leading-relaxed">
                Frontend engineers who add Docker and PostgreSQL to their portfolio increase qualified listing matches by 43%, effectively doubling their potential inbound response rates.
              </p>
            </div>
            <div className="bg-surface border border-borderSubtle p-6 space-y-3">
              <h3 className="font-bold text-dark text-base flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-dark" />
                For Bootcamps & Technical Curriculums
              </h3>
              <p className="text-sm text-darkGray leading-relaxed">
                Replace isolated syntax drills with integration-focused projects combining API development with cloud deployment and structured SQL database querying.
              </p>
            </div>
          </div>
        </section>

        {/* Section 10: Challenges Overcome */}
        <section className="space-y-4">
          <div className="font-mono text-xs uppercase tracking-widest text-mediumGray">
            SECTION 10 • TECHNICAL HURDLES
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-dark tracking-tight">
            10. Engineering & Analytical Challenges Overcome
          </h2>
          <div className="bg-surface border border-borderSubtle p-6 sm:p-8 space-y-4 text-darkGray text-sm sm:text-base leading-relaxed">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-dark shrink-0 mt-0.5" />
              <div>
                <strong className="text-dark">Polysemy and Synonym Collisions:</strong> The term &ldquo;Go&rdquo; could refer to the Go programming language or a generic English verb. We implemented boundary lookaheads and co-occurrence checks (requiring &ldquo;Golang&rdquo; or programming context) to eliminate false-positive spikes.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-dark shrink-0 mt-0.5" />
              <div>
                <strong className="text-dark">Streamlit Cloud Memory Constraints:</strong> Initial dataframes consumed 1.2 GB in RAM. By downcasting integer types, pre-computing TF-IDF sparse matrices, and leveraging `@st.cache_data`, memory footprint dropped to 140 MB, ensuring sub-second response times.
              </div>
            </div>
          </div>
        </section>

        {/* Section 11: Key Learnings */}
        <section className="space-y-4">
          <div className="font-mono text-xs uppercase tracking-widest text-mediumGray">
            SECTION 11 • TAKEAWAYS
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-dark tracking-tight">
            11. Key Learnings & Takeaways
          </h2>
          <div className="bg-surface border border-borderSubtle p-6 sm:p-8 space-y-3 text-darkGray text-sm sm:text-base leading-relaxed">
            <p>
              Data pipelines are only as strong as their domain taxonomy. Investing significant upfront effort into building a robust synonym dictionary yielded substantially more meaningful insights than applying complex neural architectures over uncurated strings.
            </p>
            <p>
              Additionally, user empathy dictates the UI: candidate users preferred clear, binary &ldquo;learn this next&rdquo; recommendations over raw cosine similarity percentages.
            </p>
          </div>
        </section>

        {/* Section 12: Project Artifact Links */}
        <section className="space-y-4 pt-6 border-t border-borderSubtle">
          <div className="font-mono text-xs uppercase tracking-widest text-mediumGray">
            SECTION 12 • ARTIFACTS & REPOSITORY
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-dark tracking-tight">
            12. Project Links & Verification
          </h2>
          <div className="bg-surface border border-borderSubtle p-6 sm:p-8 flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="font-bold text-dark text-base">Explore the Live System</div>
              <p className="text-sm text-darkGray">
                Interact with the deployed application or review the complete Python analytical pipeline.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://job-skill-gap-analysis.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-dark text-surface font-mono text-xs uppercase tracking-wider hover:bg-darkGray transition-colors"
              >
                <span>Launch Streamlit App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-bgPrimary border border-borderSubtle text-dark font-mono text-xs uppercase tracking-wider hover:bg-softBg transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Portfolio</span>
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-borderSubtle py-8 text-center font-mono text-xs text-mediumGray">
        Veena Portfolio • Case Study Documentation • {new Date().getFullYear()}
      </footer>
    </div>
  );
}
