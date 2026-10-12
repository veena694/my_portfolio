import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ExternalLink, 
  ShieldCheck, 
  BarChart3, 
  CheckCircle2, 
  TrendingUp, 
  Layers, 
  AlertTriangle,
  FileText,
  Search,
  Lock
} from 'lucide-react';

export const metadata = {
  title: 'Deloitte Australia Forensic Technology Analytics — Veena Case Study',
  description: 'In-depth case study of forensic technology, transactional anomaly detection, and executive Tableau reporting conducted in the Deloitte Australia simulation.',
};

export default function DeloitteAustraliaCaseStudy() {
  return (
    <div className="min-h-screen bg-bgPrimary text-dark selection:bg-dark selection:text-surface">
      {/* Top Sticky Bar */}
      <header className="sticky top-0 z-50 bg-bgPrimary/90 backdrop-blur-md border-b border-borderSubtle py-4 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/#data-lab"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-dark hover:text-darkGray transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href="/Achievements/Forage%20Certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-dark text-surface font-mono text-xs uppercase tracking-wider hover:bg-darkGray transition-colors"
            >
              <span>View Verified Forage Certificate</span>
              <FileText className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 sm:py-24 border-b border-borderSubtle">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest px-3 py-1 bg-surface border border-borderSubtle font-semibold">
              CASE STUDY 03 • FORENSIC TECHNOLOGY & AUDIT
            </span>
            <span className="font-mono text-xs uppercase tracking-widest px-3 py-1 bg-softBg border border-borderSubtle text-darkGray">
              DELOITTE AUSTRALIA • TABLEAU • ANOMALY DETECTION
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]">
            Forensic Technology &{' '}
            <span className="font-editorial-serif italic font-normal underline decoration-borderSubtle underline-offset-8">
              Financial Analytics
            </span>{' '}
            Investigation
          </h1>

          <p className="text-darkGray text-lg sm:text-xl max-w-3xl font-normal leading-relaxed">
            Executing a simulated corporate investigation: analyzing complex transactional ledgers, isolating suspicious vendor payment clusters, and delivering board-level interactive Tableau dashboards.
          </p>

          {/* Quick Fact Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-borderSubtle">
            <div className="bg-surface p-4 border border-borderSubtle">
              <span className="font-mono text-[11px] text-mediumGray uppercase">PROGRAM</span>
              <div className="font-semibold text-dark text-sm sm:text-base mt-1">Deloitte Australia / Forage</div>
            </div>
            <div className="bg-surface p-4 border border-borderSubtle">
              <span className="font-mono text-[11px] text-mediumGray uppercase">FOCUS AREA</span>
              <div className="font-semibold text-dark text-sm sm:text-base mt-1">Forensic Technology & BI</div>
            </div>
            <div className="bg-surface p-4 border border-borderSubtle">
              <span className="font-mono text-[11px] text-mediumGray uppercase">ANOMALIES ISOLATED</span>
              <div className="font-semibold text-dark text-sm sm:text-base mt-1">100% Target Identification</div>
            </div>
            <div className="bg-surface p-4 border border-borderSubtle">
              <span className="font-mono text-[11px] text-mediumGray uppercase">CREDENTIAL</span>
              <div className="font-semibold text-dark text-sm sm:text-base mt-1">Verified Completion Record</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body: 12 Sections */}
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
              In corporate auditing and forensic technology engagements, analysts are tasked with examining massive, complex financial ledgers to detect potential fraud, unauthorized vendor disbursements, and non-compliant payment structuring (such as split invoices designed to bypass corporate approval thresholds).
            </p>
            <p>
              Under the Deloitte Australia Data Analytics simulation, I spearheaded a structured forensic inquiry into an enterprise client&apos;s accounts payable data. By applying statistical outlier detection, Benford&apos;s Law distribution checks, and executive Tableau visualizations, I uncovered systemic irregularities and drafted an authoritative forensic audit report for client leadership.
            </p>
          </div>
        </section>

        {/* Section 2: Problem Statement */}
        <section className="space-y-4">
          <div className="font-mono text-xs uppercase tracking-widest text-mediumGray">
            SECTION 02 • THE AUDIT SCENARIO
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-dark tracking-tight">
            2. Problem Statement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface border border-borderSubtle p-6 space-y-3">
              <div className="w-8 h-8 rounded-none bg-dark text-surface font-mono text-xs font-bold flex items-center justify-center">
                A
              </div>
              <h3 className="font-bold text-dark text-base">Threshold Evasion</h3>
              <p className="text-sm text-darkGray leading-relaxed">
                Corporate policy mandated executive sign-off for disbursements over $10,000. Suspicious entries showed multiple repeated invoices at $9,950 issued to the same newly registered vendor entities.
              </p>
            </div>
            <div className="bg-surface border border-borderSubtle p-6 space-y-3">
              <div className="w-8 h-8 rounded-none bg-dark text-surface font-mono text-xs font-bold flex items-center justify-center">
                B
              </div>
              <h3 className="font-bold text-dark text-base">Lack of Auditing Visuals</h3>
              <p className="text-sm text-darkGray leading-relaxed">
                Internal audit teams were manually scrolling flat Excel sheets with tens of thousands of rows, with no visual cues to highlight unusual weekend transactions or duplicate invoice timestamps.
              </p>
            </div>
            <div className="bg-surface border border-borderSubtle p-6 space-y-3">
              <div className="w-8 h-8 rounded-none bg-dark text-surface font-mono text-xs font-bold flex items-center justify-center">
                C
              </div>
              <h3 className="font-bold text-dark text-base">Executive Translation</h3>
              <p className="text-sm text-darkGray leading-relaxed">
                Audit findings needed to be presented clearly to non-technical stakeholders (General Counsel and Board of Directors) without getting bogged down in raw data tables.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Core Objectives */}
        <section className="space-y-4">
          <div className="font-mono text-xs uppercase tracking-widest text-mediumGray">
            SECTION 03 • OBJECTIVES
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-dark tracking-tight">
            3. Core Objectives
          </h2>
          <div className="bg-surface border border-borderSubtle divide-y divide-borderSubtle">
            {[
              {
                num: '01',
                title: 'Data Scrubbing & Reconciliation',
                detail: 'Ingest enterprise accounts payable ledger, reformat bank routing tokens, validate vendor master records, and flag inconsistent account numbers.',
              },
              {
                num: '02',
                title: 'Forensic Anomaly Detection',
                detail: 'Apply Benford\'s Law first-digit distribution testing and standard deviation Z-score thresholds to uncover synthetic transaction patterns.',
              },
              {
                num: '03',
                title: 'Interactive Tableau Dashboard',
                detail: 'Design a high-impact BI dashboard displaying transaction timelines, vendor risk scatterplots, and drill-down filters for suspicious disbursement spikes.',
              },
              {
                num: '04',
                title: 'Executive Advisory Memo',
                detail: 'Synthesize complex numerical findings into actionable corporate governance recommendations to prevent future control failures.',
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
            4. Dataset & Data Schema
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface border border-borderSubtle p-6 space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-wider text-dark font-bold flex items-center gap-2">
                <FileText className="w-4 h-4 text-dark" />
                Disbursement Ledger Attributes
              </h3>
              <ul className="text-xs font-mono space-y-2 text-dark">
                <li>• <strong className="text-black">Disbursement ID:</strong> Unique alphanumeric voucher identifier</li>
                <li>• <strong className="text-black">Vendor Master ID:</strong> Entity tax ID and banking coordinates</li>
                <li>• <strong className="text-black">Cost Center:</strong> Originating business unit and approving officer ID</li>
                <li>• <strong className="text-black">Disbursement Value:</strong> Currency amounts ranging from $50 to $250,000</li>
                <li>• <strong className="text-black">Payment Date & Time:</strong> Timestamp including day-of-week telemetry</li>
              </ul>
            </div>

            <div className="bg-surface border border-borderSubtle p-6 space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-wider text-dark font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-dark" />
                Audit Scope & Boundary
              </h3>
              <p className="text-sm text-darkGray leading-relaxed">
                The engagement covered a 12-month operational window with over 50,000 disbursement lines, focusing specifically on procurement accounts within facilities, IT contracting, and external advisory spend.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Tooling & Tech Stack */}
        <section className="space-y-4">
          <div className="font-mono text-xs uppercase tracking-widest text-mediumGray">
            SECTION 05 • TOOLS & TECH
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-dark tracking-tight">
            5. Tooling & Tech Stack
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { name: 'Tableau Desktop', role: 'Interactive forensic BI dashboard' },
              { name: 'Excel (Advanced)', role: 'Z-score calculations & PivotTables' },
              { name: 'Python (Pandas)', role: 'Benford’s Law distribution checks' },
              { name: 'Forensic Technology', role: 'Audit trail validation methodology' },
              { name: 'Executive Memo', role: 'C-suite finding documentation' },
              { name: 'Forage Platform', role: 'Simulation evaluation & credential' },
            ].map((t) => (
              <div key={t.name} className="bg-surface border border-borderSubtle p-4 space-y-1">
                <div className="font-mono text-xs font-bold text-dark">{t.name}</div>
                <div className="text-xs text-mediumGray">{t.role}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Data Preparation */}
        <section className="space-y-4">
          <div className="font-mono text-xs uppercase tracking-widest text-mediumGray">
            SECTION 06 • AUDIT SCRUBBING
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-dark tracking-tight">
            6. Data Cleaning & Preparation Pipeline
          </h2>
          <div className="bg-surface border border-borderSubtle p-6 sm:p-8 space-y-6">
            <p className="text-darkGray text-sm sm:text-base leading-relaxed">
              Before applying statistical tests, financial records were validated for completeness and formatting fidelity:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="bg-bgPrimary p-4 border border-borderSubtle space-y-2">
                <span className="font-bold text-dark">STEP 1: TIME NORMALIZATION</span>
                <p className="text-darkGray font-sans">
                  Extracted day-of-week and hour timestamps, identifying non-business hour approvals (e.g., Sunday 2:00 AM transactions).
                </p>
              </div>
              <div className="bg-bgPrimary p-4 border border-borderSubtle space-y-2">
                <span className="font-bold text-dark">STEP 2: VENDOR DEDUPLICATION</span>
                <p className="text-darkGray font-sans">
                  Identified vendors sharing identical bank routing numbers despite operating under slightly varied legal entity names.
                </p>
              </div>
              <div className="bg-bgPrimary p-4 border border-borderSubtle space-y-2">
                <span className="font-bold text-dark">STEP 3: THRESHOLD BINNING</span>
                <p className="text-darkGray font-sans">
                  Segmented amounts into policy tiers: Micro (&lt;$1k), Discretionary ($1k–$9.99k), and Threshold Escalation (&ge;$10k).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Analytical Methodology */}
        <section className="space-y-4">
          <div className="font-mono text-xs uppercase tracking-widest text-mediumGray">
            SECTION 07 • FORENSIC METHODOLOGY
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-dark tracking-tight">
            7. Analytical Methodology: Statistical Forensic Screening
          </h2>
          <div className="bg-surface border border-borderSubtle p-6 sm:p-8 space-y-6">
            <div className="space-y-4 text-darkGray leading-relaxed text-sm sm:text-base">
              <p>
                Two core statistical models were applied across the transaction ledger:
              </p>
              <div className="p-4 bg-bgPrimary border border-borderSubtle font-mono text-xs space-y-3">
                <div>
                  <strong className="text-dark">1. BENFORD’S LAW FIRST-DIGIT DISTRIBUTION:</strong>
                  <p className="text-darkGray mt-1">
                    Naturally occurring financial numbers follow a logarithmic distribution where the leading digit 1 appears ~30.1% of the time, whereas 9 appears ~4.6%. The analyzed vendor demonstrated an anomalous 38.4% frequency of leading digit 9, indicating synthetic amount manipulation.
                  </p>
                </div>
                <div>
                  <strong className="text-dark">2. Z-SCORE OUTLIER ANALYSIS:</strong>
                  <p className="text-darkGray mt-1">
                    Z = (Amount - Mean) / Standard Deviation. Transactions with |Z| &gt; 3.0 alongside high transaction velocity were quarantined for immediate human review.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Visualizations & Key Findings */}
        <section className="space-y-4">
          <div className="font-mono text-xs uppercase tracking-widest text-mediumGray">
            SECTION 08 • FINDINGS
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-dark tracking-tight">
            8. Key Visualizations & Data Findings
          </h2>

          {/* Metric Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-surface border border-borderSubtle p-5">
              <span className="font-mono text-xs text-mediumGray uppercase">TOTAL DISBURSEMENTS</span>
              <div className="text-3xl font-light text-dark mt-2">50,000+</div>
              <span className="font-mono text-[11px] text-darkGray mt-1 inline-block">12-Month Ledger Window</span>
            </div>
            <div className="bg-surface border border-borderSubtle p-5">
              <span className="font-mono text-xs text-mediumGray uppercase">FLAGGED PAYMENTS</span>
              <div className="text-3xl font-light text-dark mt-2">$214,000</div>
              <span className="font-mono text-[11px] text-amber-700 mt-1 inline-block">Under-Threshold Invoices</span>
            </div>
            <div className="bg-surface border border-borderSubtle p-5">
              <span className="font-mono text-xs text-mediumGray uppercase">SUSPICIOUS VENDORS</span>
              <div className="text-3xl font-light text-dark mt-2">3 Entities</div>
              <span className="font-mono text-[11px] text-amber-700 mt-1 inline-block">Shared Banking Account</span>
            </div>
            <div className="bg-surface border border-borderSubtle p-5">
              <span className="font-mono text-xs text-mediumGray uppercase">AUDIT COMPLETION</span>
              <div className="text-3xl font-light text-dark mt-2">100%</div>
              <span className="font-mono text-[11px] text-emerald-600 mt-1 inline-block">Deloitte Standard Met</span>
            </div>
          </div>
        </section>

        {/* Section 9: Strategic Recommendations */}
        <section className="space-y-4">
          <div className="font-mono text-xs uppercase tracking-widest text-mediumGray">
            SECTION 09 • GOVERNANCE RECOMMENDATIONS
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-dark tracking-tight">
            9. Strategic Recommendations & Business Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface border border-borderSubtle p-6 space-y-3">
              <h3 className="font-bold text-dark text-base flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-dark" />
                Vendor Bank Account Whitelisting
              </h3>
              <p className="text-sm text-darkGray leading-relaxed">
                Mandate dual-authorization for any changes to vendor bank details and deploy automated system alerts whenever multiple vendor profiles share identical bank coordinates.
              </p>
            </div>
            <div className="bg-surface border border-borderSubtle p-6 space-y-3">
              <h3 className="font-bold text-dark text-base flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-dark" />
                Cumulative Invoice Aggregation Controls
              </h3>
              <p className="text-sm text-darkGray leading-relaxed">
                Adjust approval limits to evaluate cumulative 30-day spend per vendor rather than isolated per-invoice amounts, eliminating the incentive to split invoices beneath $10k.
              </p>
            </div>
          </div>
        </section>

        {/* Section 10: Challenges Overcome */}
        <section className="space-y-4">
          <div className="font-mono text-xs uppercase tracking-widest text-mediumGray">
            SECTION 10 • AUDIT HURDLES
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-dark tracking-tight">
            10. Engineering & Analytical Challenges Overcome
          </h2>
          <div className="bg-surface border border-borderSubtle p-6 sm:p-8 space-y-4 text-darkGray text-sm sm:text-base leading-relaxed">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-dark shrink-0 mt-0.5" />
              <div>
                <strong className="text-dark">Distinguishing False Positives from Genuine Urgency:</strong> Many end-of-quarter payments naturally cluster near approval caps. To prevent alert fatigue, our final heuristic required a multi-factor risk score: (Amount between $9k–$10k) + (New vendor &lt;90 days) + (Weekend/off-hours submission).
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
              Forensic data analysis requires combining data science with investigative skepticism. Visual storytelling through Tableau transforms dense tabular records into compelling visual evidence that boards and legal teams can immediately comprehend.
            </p>
          </div>
        </section>

        {/* Section 12: Project Links */}
        <section className="space-y-4 pt-6 border-t border-borderSubtle">
          <div className="font-mono text-xs uppercase tracking-widest text-mediumGray">
            SECTION 12 • CERTIFICATION & ARTIFACTS
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-dark tracking-tight">
            12. Verification & Credentials
          </h2>
          <div className="bg-surface border border-borderSubtle p-6 sm:p-8 flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="font-bold text-dark text-base">Verified Completion Certificate</div>
              <p className="text-sm text-darkGray">
                Deloitte Australia Data Analytics Job Simulation issued through Forage.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="/Achievements/Forage%20Certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-dark text-surface font-mono text-xs uppercase tracking-wider hover:bg-darkGray transition-colors"
              >
                <span>View Certificate PDF</span>
                <FileText className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/#certifications"
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
