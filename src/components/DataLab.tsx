'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/ui/SectionHeading';
import { ANALYTICS_PROJECTS } from '@/lib/data';
import { Chart } from './Chart';
import { Reveal } from '@/ui/Reveal';
import { Database, Filter, ExternalLink, LineChart, Code2, ArrowRight } from 'lucide-react';
import { Button } from '@/ui/Button';

export const DataLab: React.FC = () => {
  const [selectedChannel, setSelectedChannel] = useState<'All' | 'Retail' | 'Ecommerce'>('All');
  const [activeTab, setActiveTab] = useState<string>(ANALYTICS_PROJECTS[0].id);

  const currentAnalytics = ANALYTICS_PROJECTS.find((a) => a.id === activeTab) || ANALYTICS_PROJECTS[0];

  const toolsStrip = [
    "EXCEL", "SQL", "PYTHON", "PANDAS", "TABLEAU", "POWER BI", "DATA VISUALIZATION", "STATISTICS"
  ];

  // Dynamic KPI dataset depending on filter
  const getKpis = () => {
    switch (selectedChannel) {
      case 'Retail':
        return [
          { label: 'Revenue', value: '$840K', change: '+12.4%' },
          { label: 'Margin', value: '38.2%', change: '+4.1%' },
          { label: 'Retention', value: '64.1%', change: '+2.8%' },
          { label: 'Forecast Q4', value: '$920K', change: '+8.6%' },
        ];
      case 'Ecommerce':
        return [
          { label: 'Revenue', value: '$580K', change: '+28.9%' },
          { label: 'Margin', value: '44.5%', change: '+9.8%' },
          { label: 'Retention', value: '72.3%', change: '+6.4%' },
          { label: 'Forecast Q4', value: '$710K', change: '+18.2%' },
        ];
      case 'All':
      default:
        return [
          { label: 'Revenue', value: '$1.42M', change: '+18.6%' },
          { label: 'Margin', value: '41.2%', change: '+6.4%' },
          { label: 'Retention', value: '68.4%', change: '+4.2%' },
          { label: 'Forecast Q4', value: '$1.63M', change: '+13.5%' },
        ];
    }
  };

  const channelData = [
    { label: 'Retail Stores', percentage: 38, color: '#0D0D0D' },
    { label: 'E-commerce Direct', percentage: 31, color: '#333333' },
    { label: 'Wholesale B2B', percentage: 19, color: '#6F6F6F' },
    { label: 'Partner Channels', percentage: 12, color: '#A8A8A8' },
  ];

  return (
    <section id="data-lab" className="py-20 md:py-28 bg-bgPrimary border-b border-borderSubtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          subtitle="ANALYTICAL RIGOR & BUSINESS INTELLIGENCE"
          titlePrefix="I don't just build with data. I explore"
          serifItalicWord="it."
        />

        {/* Horizontal Tooling Strip */}
        <div className="mb-12 border-y border-borderSubtle py-4 bg-surface overflow-x-auto">
          <div className="flex items-center gap-6 font-mono text-xs text-dark whitespace-nowrap px-4 justify-between">
            <span className="font-bold text-mediumGray uppercase tracking-widest">
              ANALYTICS TOOLSET:
            </span>
            {toolsStrip.map((tool) => (
              <span key={tool} className="flex items-center gap-2 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-dark" />
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Analytics Workflow & Case Study Inspector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          
          {/* Left: Case Study Selector Tabs & Workflow Steps */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap gap-2 border-b border-borderSubtle pb-4">
              {ANALYTICS_PROJECTS.map((proj) => {
                const isActive = activeTab === proj.id;
                return (
                  <button
                    key={proj.id}
                    onClick={() => setActiveTab(proj.id)}
                    className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-200 border cursor-pointer ${
                      isActive
                        ? 'bg-dark text-surface border-dark font-medium'
                        : 'bg-surface text-darkGray border-borderSubtle hover:bg-softBg'
                    }`}
                  >
                    {proj.tabLabel || proj.title}
                  </button>
                );
              })}
            </div>

            {/* Workflow Card */}
            <div className="bg-surface border border-borderSubtle p-6 sm:p-8 space-y-6 shadow-xs">
              <div className="border-b border-borderSubtle pb-4">
                <span className="font-mono text-xs uppercase text-mediumGray">
                  ANALYTICS CASE STUDY • {currentAnalytics.tabLabel}
                </span>
                <h3 className="text-xl sm:text-2xl font-light text-dark tracking-tight mt-1">
                  {currentAnalytics.title}
                </h3>
                <p className="text-darkGray text-xs sm:text-sm font-mono mt-1">
                  {currentAnalytics.subtitle}
                </p>
              </div>

              {/* 6 Step Analytics Workflow Pipeline */}
              <div className="space-y-4">
                <div className="font-mono text-xs font-bold text-dark uppercase tracking-widest border-b border-borderSubtle pb-2">
                  THE 6-STEP DATA WORKFLOW:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="bg-bgPrimary p-3 border border-borderSubtle">
                    <span className="text-mediumGray font-bold">1. QUESTION</span>
                    <p className="text-dark font-sans mt-1">{currentAnalytics.workflow.question}</p>
                  </div>
                  <div className="bg-bgPrimary p-3 border border-borderSubtle">
                    <span className="text-mediumGray font-bold">2. DATA</span>
                    <p className="text-dark font-sans mt-1">{currentAnalytics.workflow.data}</p>
                  </div>
                  <div className="bg-bgPrimary p-3 border border-borderSubtle">
                    <span className="text-mediumGray font-bold">3. CLEANING</span>
                    <p className="text-dark font-sans mt-1">{currentAnalytics.workflow.cleaning}</p>
                  </div>
                  <div className="bg-bgPrimary p-3 border border-borderSubtle">
                    <span className="text-mediumGray font-bold">4. ANALYSIS</span>
                    <p className="text-dark font-sans mt-1">{currentAnalytics.workflow.analysis}</p>
                  </div>
                  <div className="bg-bgPrimary p-3 border border-borderSubtle">
                    <span className="text-mediumGray font-bold">5. VISUALIZATION</span>
                    <p className="text-dark font-sans mt-1">{currentAnalytics.workflow.visualization}</p>
                  </div>
                  <div className="bg-bgPrimary p-3 border border-borderSubtle">
                    <span className="text-mediumGray font-bold">6. INSIGHT</span>
                    <p className="text-dark font-sans font-semibold mt-1">{currentAnalytics.workflow.insight}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-3 border-t border-borderSubtle">
                {currentAnalytics.liveUrl && (
                  <Button
                    href={currentAnalytics.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="sm"
                    icon={<ExternalLink className="w-3.5 h-3.5" />}
                  >
                    View Live Dashboard
                  </Button>
                )}
                {currentAnalytics.caseStudyUrl && (
                  <Button
                    href={currentAnalytics.caseStudyUrl}
                    variant="secondary"
                    size="sm"
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    Read Case Study
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Right: Live Interactive Analytics Dashboard Widget */}
          <div className="lg:col-span-5 bg-surface border border-borderSubtle p-6 space-y-6 shadow-xs">
            <div className="flex items-center justify-between border-b border-borderSubtle pb-4">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-dark">
                <LineChart className="w-4 h-4" />
                <span>INTERACTIVE BI DASHBOARD</span>
              </div>
              <div className="flex gap-1">
                {(['All', 'Retail', 'Ecommerce'] as const).map((ch) => (
                  <button
                    key={ch}
                    onClick={() => setSelectedChannel(ch)}
                    className={`px-2 py-0.5 font-mono text-[10px] uppercase border ${
                      selectedChannel === ch
                        ? 'bg-dark text-surface border-dark'
                        : 'bg-bgPrimary text-darkGray border-borderSubtle'
                    }`}
                  >
                    {ch}
                  </button>
                ))}
              </div>
            </div>

            {/* KPI Cards Grid */}
            <div className="grid grid-cols-2 gap-3">
              {getKpis().map((kpi) => (
                <div key={kpi.label} className="bg-bgPrimary p-3 border border-borderSubtle">
                  <div className="font-mono text-[10px] text-mediumGray uppercase">{kpi.label}</div>
                  <div className="text-xl font-bold text-dark mt-0.5">{kpi.value}</div>
                  <div className="font-mono text-[10px] text-emerald-700 font-semibold">{kpi.change} vs prior</div>
                </div>
              ))}
            </div>

            {/* Channel Mix Chart */}
            <Chart data={channelData} />

            {/* SQL Query Snippet */}
            <div className="space-y-2 border-t border-borderSubtle pt-4">
              <div className="flex items-center justify-between font-mono text-[11px] text-mediumGray">
                <span className="flex items-center gap-1">
                  <Code2 className="w-3.5 h-3.5" /> REVENUE & MARGIN SQL QUERY
                </span>
                <span>POSTGRESQL</span>
              </div>
              <div className="bg-dark text-surface p-3 font-mono text-[11px] overflow-x-auto rounded-none">
                <code className="text-emerald-400">WITH</code> margin <code className="text-emerald-400">AS</code> (<br />
                &nbsp;&nbsp;<code className="text-emerald-400">SELECT</code> category,<br />
                &nbsp;&nbsp;<code className="text-emerald-400">SUM</code>(profit)/<code className="text-emerald-400">SUM</code>(sales) <code className="text-emerald-400">AS</code> m<br />
                &nbsp;&nbsp;<code className="text-emerald-400">FROM</code> fact_orders <code className="text-emerald-400">GROUP BY</code> 1<br />
                )<br />
                <code className="text-emerald-400">SELECT</code> * <code className="text-emerald-400">FROM</code> margin <code className="text-emerald-400">WHERE</code> m &lt; 0.12;
              </div>
            </div>
          </div>

        </div>

        {/* Analytics + Engineering Connection Graphic */}
        <Reveal direction="up" delay={0.2}>
          <div className="bg-surface border border-borderSubtle p-8 text-center space-y-4">
            <div className="font-mono text-xs text-mediumGray uppercase tracking-widest">
              THE UNIFIED SYNERGY
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-sm sm:text-base font-semibold text-dark">
              <span>DATA</span>
              <ArrowRight className="w-4 h-4 text-mediumGray" />
              <span>INSIGHT</span>
              <ArrowRight className="w-4 h-4 text-mediumGray" />
              <span>DECISION</span>
              <ArrowRight className="w-4 h-4 text-mediumGray" />
              <span>PRODUCT</span>
            </div>
            <p className="text-darkGray text-xs sm:text-sm max-w-xl mx-auto font-normal">
              Combining software engineering with data analytics ensures that software isn't just built cleanly — it's built to answer real questions and deliver measurable impact.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
