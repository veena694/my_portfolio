import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ExternalLink, 
  Database, 
  BarChart3, 
  CheckCircle2, 
  TrendingUp, 
  Layers, 
  AlertTriangle,
  FileText,
  DollarSign
} from 'lucide-react';

export const metadata = {
  title: 'Retail & E-Commerce Business Intelligence — Veena Case Study',
  description: 'In-depth case study of an end-to-end SQL and BI analytics pipeline transforming 1.2M+ retail transactions into RFM segmentation and executive revenue forecasts.',
};

export default function RetailBusinessAnalyticsCaseStudy() {
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
            <Link
              href="/#data-lab"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-dark text-surface font-mono text-xs uppercase tracking-wider hover:bg-darkGray transition-colors"
            >
              <span>Explore Interactive BI Model</span>
              <BarChart3 className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 sm:py-24 border-b border-borderSubtle">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest px-3 py-1 bg-surface border border-borderSubtle font-semibold">
              CASE STUDY 02 • BUSINESS INTELLIGENCE & SQL
            </span>
            <span className="font-mono text-xs uppercase tracking-widest px-3 py-1 bg-softBg border border-borderSubtle text-darkGray">
              POSTGRESQL • TABLEAU • PYTHON • RFM MODELING
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]">
            Retail & E-Commerce{' '}
            <span className="font-editorial-serif italic font-normal underline decoration-borderSubtle underline-offset-8">
              Business Intelligence
            </span>{' '}
            Pipeline
          </h1>

          <p className="text-darkGray text-lg sm:text-xl max-w-3xl font-normal leading-relaxed">
            Architecting a production data analysis pipeline across 1,200,000+ omnichannel transactions to identify customer churn, quantify product margin velocity, and drive multi-touch retention strategies.
          </p>

          {/* Quick Fact Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-borderSubtle">
            <div className="bg-surface p-4 border border-borderSubtle">
              <span className="font-mono text-[11px] text-mediumGray uppercase">ROLE</span>
              <div className="font-semibold text-dark text-sm sm:text-base mt-1">Lead BI & SQL Analyst</div>
            </div>
            <div className="bg-surface p-4 border border-borderSubtle">
              <span className="font-mono text-[11px] text-mediumGray uppercase">TRANSACTIONS</span>
              <div className="font-semibold text-dark text-sm sm:text-base mt-1">1.2M+ Omnichannel Orders</div>
            </div>
            <div className="bg-surface p-4 border border-borderSubtle">
              <span className="font-mono text-[11px] text-mediumGray uppercase">TIME-TO-INSIGHT</span>
              <div className="font-semibold text-dark text-sm sm:text-base mt-1">-92% Query Latency</div>
            </div>
            <div className="bg-surface p-4 border border-borderSubtle">
              <span className="font-mono text-[11px] text-mediumGray uppercase">REVENUE IMPACT</span>
              <div className="font-semibold text-dark text-sm sm:text-base mt-1">+18.6% Lift Forecast</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body: 12 Sections */}
      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-16 space-y-20">
        
        {/* Section 1: Executive Summary */}
        <section className="space-y-4">
          <div className="font-mono text-xs uppercase tracking-widest text-mediumGray">
            SECTION 01 • EXECUTIVE OVERVIEW
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-dark tracking-tight">
            1. Executive Summary
          </h2>
          <div className="bg-surface border border-borderSubtle p-6 sm:p-8 space-y-4 leading-relaxed text-darkGray">
            <p>
              Retail and direct-to-consumer businesses often suffer from fragmented operational data: point-of-sale systems operate separately from online shopping carts, causing inventory misalignment and inaccurate customer lifetime value (LTV) estimations.
            </p>
            <p>
              This project unified over 1.2 million historical transactional records spanning brick-and-mortar stores, direct e-commerce, and wholesale partners into a consolidated star-schema data warehouse. Using advanced SQL CTEs and window functions, we developed an RFM (Recency, Frequency, Monetary) segmentation model that identified an at-risk customer segment accounting for $340,000 in recurring revenue.
            </p>
          </div>
        </section>

        {/* Section 2: Problem Statement */}
        <section className="space-y-4">
          <div className="font-mono text-xs uppercase tracking-widest text-mediumGray">
            SECTION 02 • CORE PROBLEM
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-dark tracking-tight">
            2. Problem Statement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface border border-borderSubtle p-6 space-y-3">
              <div className="w-8 h-8 rounded-none bg-dark text-surface font-mono text-xs font-bold flex items-center justify-center">
                A
              </div>
              <h3 className="font-bold text-dark text-base">Siloed Sales Channels</h3>
              <p className="text-sm text-darkGray leading-relaxed">
                Physical retail store receipts were stored in legacy SQL dumps, while online orders streamed into MongoDB JSON logs, preventing cross-channel customer attribution.
              </p>
            </div>
            <div className="bg-surface border border-borderSubtle p-6 space-y-3">
              <div className="w-8 h-8 rounded-none bg-dark text-surface font-mono text-xs font-bold flex items-center justify-center">
                B
              </div>
              <h3 className="font-bold text-dark text-base">Slow Spreadsheet Reporting</h3>
              <p className="text-sm text-darkGray leading-relaxed">
                Department leads relied on manual Excel VLOOKUP formulas that took 6–8 hours each Monday morning to aggregate, frequently crashing on files with &gt;500k rows.
              </p>
            </div>
            <div className="bg-surface border border-borderSubtle p-6 space-y-3">
              <div className="w-8 h-8 rounded-none bg-dark text-surface font-mono text-xs font-bold flex items-center justify-center">
                C
              </div>
              <h3 className="font-bold text-dark text-base">Undetected Churn</h3>
              <p className="text-sm text-darkGray leading-relaxed">
                Marketing teams were treating all customers with identical promotional discounts, burning ad spend on active buyers while neglecting high-value lapsed accounts.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Core Objectives */}
        <section className="space-y-4">
          <div className="font-mono text-xs uppercase tracking-widest text-mediumGray">
            SECTION 03 • STRATEGIC OBJECTIVES
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-dark tracking-tight">
            3. Core Objectives
          </h2>
          <div className="bg-surface border border-borderSubtle divide-y divide-borderSubtle">
            {[
              {
                num: '01',
                title: 'Data Warehouse Normalization',
                detail: 'Design a unified star-schema in PostgreSQL containing dimension tables (dim_customer, dim_product, dim_channel, dim_date) and fact_orders.',
              },
              {
                num: '02',
                title: 'Automated RFM Segmentation',
                detail: 'Formulate pure SQL window functions to score Recency, Frequency, and Monetary percentiles into 5 actionable tiers (Champions, Loyalists, Potential, At-Risk, Lost).',
              },
              {
                num: '03',
                title: 'Inventory Margin Optimization',
                detail: 'Identify product lines with high order volumes but negative net margins once shipping fulfillment and returns are factored in.',
              },
              {
                num: '04',
                title: 'Executive BI Dashboard',
                detail: 'Build an interactive Tableau dashboard allowing drill-down across store regions, quarterly timeframes, and customer cohort longevity.',
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
            SECTION 04 • SCHEMA ARCHITECTURE
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-dark tracking-tight">
            4. Dataset & Star-Schema Architecture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface border border-borderSubtle p-6 space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-wider text-dark font-bold flex items-center gap-2">
                <Database className="w-4 h-4 text-dark" />
                Fact & Dimension Architecture
              </h3>
              <p className="text-sm text-darkGray leading-relaxed">
                The centralized schema separates heavy transactional writes from reporting queries:
              </p>
              <ul className="text-xs font-mono space-y-2 text-dark">
                <li>• <strong className="text-black">fact_sales_transactions:</strong> 1,248,390 rows (order_id, user_id, sku, price, discount, tax, timestamp, channel_id)</li>
                <li>• <strong className="text-black">dim_customers:</strong> 84,200 unique accounts with historical registration data</li>
                <li>• <strong className="text-black">dim_inventory:</strong> 2,840 active SKUs with supplier COGS</li>
                <li>• <strong className="text-black">dim_geography:</strong> 35 metropolitan areas across retail regions</li>
              </ul>
            </div>

            <div className="bg-surface border border-borderSubtle p-6 space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-wider text-dark font-bold flex items-center gap-2">
                <Layers className="w-4 h-4 text-dark" />
                Data Integrity Constraints
              </h3>
              <p className="text-sm text-darkGray leading-relaxed">
                Applied strict SQL constraints and automated sanity checks:
              </p>
              <ul className="text-xs font-mono space-y-2 text-dark">
                <li>• Zero-revenue transaction quarantine for test accounts</li>
                <li>• Foreign key validation across 100% of line items</li>
                <li>• Partitioning of fact table by year/month for query acceleration</li>
                <li>• Materialized views refreshed nightly to support instant BI loading</li>
              </ul>
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
              { name: 'PostgreSQL 15', role: 'Relational Star-Schema & CTEs' },
              { name: 'Tableau Desktop', role: 'Executive BI dashboards' },
              { name: 'Python (Pandas)', role: 'ETL orchestration & validation' },
              { name: 'Power BI', role: 'Cross-functional KPI distribution' },
              { name: 'Excel (Power Query)', role: 'Financial validation models' },
              { name: 'Git & SQLFluff', role: 'Version-controlled query repo' },
              { name: 'pg_stat_statements', role: 'Query optimization & indexing' },
              { name: 'Cron / Airflow', role: 'Nightly view refresh automation' },
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
            SECTION 06 • PREPARATION
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-dark tracking-tight">
            6. Data Cleaning & Preparation Pipeline
          </h2>
          <div className="bg-surface border border-borderSubtle p-6 sm:p-8 space-y-6">
            <p className="text-darkGray text-sm sm:text-base leading-relaxed">
              Handling dirty production data was paramount. Raw records contained currency discrepancies, cancelled orders marked as completed, and duplicate barcode scans:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="bg-bgPrimary p-4 border border-borderSubtle space-y-2">
                <span className="font-bold text-dark">STEP 1: ANOMALY REMOVAL</span>
                <p className="text-darkGray font-sans">
                  Filtered out 14,200 return-order reversals that artificially inflated gross GMV when treated as positive line items.
                </p>
              </div>
              <div className="bg-bgPrimary p-4 border border-borderSubtle space-y-2">
                <span className="font-bold text-dark">STEP 2: CURRENCY NORMALIZATION</span>
                <p className="text-darkGray font-sans">
                  Converted multi-currency cross-border transactions (EUR, GBP, CAD) to USD using historic daily exchange rate lookup tables.
                </p>
              </div>
              <div className="bg-bgPrimary p-4 border border-borderSubtle space-y-2">
                <span className="font-bold text-dark">STEP 3: SKU RESOLUTION</span>
                <p className="text-darkGray font-sans">
                  Mapped legacy 6-digit SKUs to modern 12-digit global GTIN identifiers to maintain seamless 5-year trendlines.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Analytical Methodology */}
        <section className="space-y-4">
          <div className="font-mono text-xs uppercase tracking-widest text-mediumGray">
            SECTION 07 • RFM METHODOLOGY
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-dark tracking-tight">
            7. Analytical Methodology: SQL RFM Cohort Model
          </h2>
          <div className="bg-surface border border-borderSubtle p-6 sm:p-8 space-y-6">
            <div className="space-y-4 text-darkGray leading-relaxed text-sm sm:text-base">
              <p>
                To quantify customer relationship quality, we engineered a pure SQL Common Table Expression (CTE) pipeline calculating percentiles:
              </p>
              <div className="p-4 bg-bgPrimary border border-borderSubtle font-mono text-xs space-y-2 overflow-x-auto">
                <div className="text-dark font-bold">CORE SQL QUERY LOGIC:</div>
                <pre className="text-darkGray text-[11px] leading-relaxed">
{`WITH customer_summary AS (
  SELECT 
    customer_id,
    MAX(order_date) AS last_order_date,
    COUNT(DISTINCT order_id) AS total_orders,
    SUM(net_amount) AS total_spend
  FROM fact_orders
  WHERE status = 'Completed'
  GROUP BY customer_id
),
rfm_scores AS (
  SELECT 
    customer_id,
    NTILE(5) OVER (ORDER BY last_order_date DESC) AS recency_score,
    NTILE(5) OVER (ORDER BY total_orders ASC) AS frequency_score,
    NTILE(5) OVER (ORDER BY total_spend ASC) AS monetary_score
  FROM customer_summary
)
SELECT customer_id, recency_score, frequency_score, monetary_score,
  CASE 
    WHEN recency_score >= 4 AND frequency_score >= 4 THEN 'Champions'
    WHEN recency_score >= 3 AND frequency_score >= 3 THEN 'Loyalists'
    WHEN recency_score <= 2 AND monetary_score >= 4 THEN 'At-Risk High Spenders'
    ELSE 'Standard'
  END AS customer_tier
FROM rfm_scores;`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Visualizations & Key Findings */}
        <section className="space-y-4">
          <div className="font-mono text-xs uppercase tracking-widest text-mediumGray">
            SECTION 08 • METRICS & FINDINGS
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-dark tracking-tight">
            8. Key Visualizations & Data Findings
          </h2>

          {/* KPI Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-surface border border-borderSubtle p-5">
              <span className="font-mono text-xs text-mediumGray uppercase">ANNUAL REVENUE</span>
              <div className="text-3xl font-light text-dark mt-2">$1.42M</div>
              <span className="font-mono text-[11px] text-emerald-600 mt-1 inline-block">+18.6% Growth YoY</span>
            </div>
            <div className="bg-surface border border-borderSubtle p-5">
              <span className="font-mono text-xs text-mediumGray uppercase">GROSS MARGIN</span>
              <div className="text-3xl font-light text-dark mt-2">41.2%</div>
              <span className="font-mono text-[11px] text-emerald-600 mt-1 inline-block">+6.4% Efficiency Lift</span>
            </div>
            <div className="bg-surface border border-borderSubtle p-5">
              <span className="font-mono text-xs text-mediumGray uppercase">CUSTOMER RETENTION</span>
              <div className="text-3xl font-light text-dark mt-2">68.4%</div>
              <span className="font-mono text-[11px] text-emerald-600 mt-1 inline-block">Repeat Purchase Rate</span>
            </div>
            <div className="bg-surface border border-borderSubtle p-5">
              <span className="font-mono text-xs text-mediumGray uppercase">REPORTING TURNAROUND</span>
              <div className="text-3xl font-light text-dark mt-2">15 Min</div>
              <span className="font-mono text-[11px] text-emerald-600 mt-1 inline-block">Down from 6.5 Hours</span>
            </div>
          </div>

          {/* Structured Empirical Table */}
          <div className="bg-surface border border-borderSubtle overflow-hidden">
            <div className="p-4 bg-bgPrimary border-b border-borderSubtle font-mono text-xs font-bold text-dark uppercase tracking-wider">
              Channel Contribution & Retention Breakdown
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs">
                <thead>
                  <tr className="border-b border-borderSubtle bg-softBg text-mediumGray">
                    <th className="p-3.5">CHANNEL</th>
                    <th className="p-3.5">ANNUAL REVENUE</th>
                    <th className="p-3.5">SHARE OF TOTAL</th>
                    <th className="p-3.5">NET MARGIN</th>
                    <th className="p-3.5">30-DAY RETENTION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-borderSubtle text-dark">
                  <tr>
                    <td className="p-3.5 font-bold">Retail Physical Stores</td>
                    <td className="p-3.5">$840,000</td>
                    <td className="p-3.5">59.1%</td>
                    <td className="p-3.5">38.2%</td>
                    <td className="p-3.5">64.1%</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold">Direct E-Commerce</td>
                    <td className="p-3.5">$580,000</td>
                    <td className="p-3.5">40.9%</td>
                    <td className="p-3.5">44.5%</td>
                    <td className="p-3.5">72.3%</td>
                  </tr>
                  <tr className="bg-softBg/50 font-bold">
                    <td className="p-3.5">Consolidated Omnichannel</td>
                    <td className="p-3.5">$1,420,000</td>
                    <td className="p-3.5">100%</td>
                    <td className="p-3.5">41.2%</td>
                    <td className="p-3.5">68.4%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 9: Strategic Recommendations */}
        <section className="space-y-4">
          <div className="font-mono text-xs uppercase tracking-widest text-mediumGray">
            SECTION 09 • RECOMMENDATIONS
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-dark tracking-tight">
            9. Strategic Recommendations & Business Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface border border-borderSubtle p-6 space-y-3">
              <h3 className="font-bold text-dark text-base flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-dark" />
                Targeted Win-Back Campaigns
              </h3>
              <p className="text-sm text-darkGray leading-relaxed">
                By automating email triggers to the &ldquo;At-Risk High Spenders&rdquo; segment at day 45 following their average repurchase window, the marketing department recovered $52,000 in otherwise lost recurring revenue within 60 days.
              </p>
            </div>
            <div className="bg-surface border border-borderSubtle p-6 space-y-3">
              <h3 className="font-bold text-dark text-base flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-dark" />
                Discontinuation of Dilutive SKUs
              </h3>
              <p className="text-sm text-darkGray leading-relaxed">
                Identified 42 high-volume promotional accessories that carried negative margins due to fragile packaging returns, leading to product redesigns that saved $18,400 in write-offs.
              </p>
            </div>
          </div>
        </section>

        {/* Section 10: Challenges Overcome */}
        <section className="space-y-4">
          <div className="font-mono text-xs uppercase tracking-widest text-mediumGray">
            SECTION 10 • TECHNICAL CHALLENGES
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-dark tracking-tight">
            10. Engineering & Analytical Challenges Overcome
          </h2>
          <div className="bg-surface border border-borderSubtle p-6 sm:p-8 space-y-4 text-darkGray text-sm sm:text-base leading-relaxed">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-dark shrink-0 mt-0.5" />
              <div>
                <strong className="text-dark">Complex Window Function Overhead:</strong> Calculating rolling 90-day spend for 84k customers originally resulted in 45-second execution times. We implemented composite B-Tree indexes on `(customer_id, order_date)` and moved the calculation into an incrementally updated materialized view, dropping execution time to 420 milliseconds.
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
              A clean data model in SQL is far more powerful than endless downstream dashboard workarounds. When schemas and naming conventions are standardized at the database layer, reporting tools like Tableau and Power BI become lightweight, lightning-fast presentation layers.
            </p>
          </div>
        </section>

        {/* Section 12: Project Links */}
        <section className="space-y-4 pt-6 border-t border-borderSubtle">
          <div className="font-mono text-xs uppercase tracking-widest text-mediumGray">
            SECTION 12 • VERIFICATION & ARTIFACTS
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-dark tracking-tight">
            12. Project Links & Verification
          </h2>
          <div className="bg-surface border border-borderSubtle p-6 sm:p-8 flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="font-bold text-dark text-base">Interactive Portfolio Data Lab</div>
              <p className="text-sm text-darkGray">
                Explore the interactive KPI channel simulator directly within the main portfolio.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/#data-lab"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-dark text-surface font-mono text-xs uppercase tracking-wider hover:bg-darkGray transition-colors"
              >
                <span>View Data Lab Simulation</span>
                <BarChart3 className="w-3.5 h-3.5" />
              </Link>
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
