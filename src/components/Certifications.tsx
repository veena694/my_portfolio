'use client';

import React from 'react';
import { SectionHeading } from '@/ui/SectionHeading';
import { CERTIFICATIONS } from '@/lib/data';
import { Reveal } from '@/ui/Reveal';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 md:py-28 bg-bgPrimary border-b border-borderSubtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          number="06.1 CREDENTIALS"
          subtitle="VERIFIED CERTIFICATIONS INDEX"
          titlePrefix="Industry & academic"
          serifItalicWord="certifications."
        />

        {/* Minimal Editorial Index Table */}
        <div className="border border-borderSubtle bg-surface divide-y divide-borderSubtle shadow-xs">
          
          {/* Header Row */}
          <div className="hidden sm:grid grid-cols-12 p-4 font-mono text-xs text-mediumGray uppercase tracking-widest bg-bgPrimary border-b border-borderSubtle">
            <div className="col-span-1">NO.</div>
            <div className="col-span-5">CERTIFICATION NAME</div>
            <div className="col-span-3">ISSUER</div>
            <div className="col-span-2">DATE</div>
            <div className="col-span-1 text-right">LINK</div>
          </div>

          {/* Certification Rows */}
          {CERTIFICATIONS.map((cert, index) => (
            <Reveal key={cert.id} direction="none" delay={index * 0.05}>
              <div className="group relative p-4 sm:p-5 transition-all duration-300 cursor-pointer hover:bg-dark hover:text-surface flex flex-col sm:grid sm:grid-cols-12 gap-2 sm:gap-4 items-start sm:items-center">
                
                {/* Number */}
                <div className="sm:col-span-1 font-mono text-xs text-mediumGray group-hover:text-surface/70">
                  {cert.number}
                </div>

                {/* Title */}
                <div className="sm:col-span-5 font-semibold text-dark text-base group-hover:text-surface">
                  {cert.title}
                  <div className="sm:hidden font-mono text-xs text-mediumGray mt-0.5 group-hover:text-surface/70">
                    {cert.issuer} • {cert.date}
                  </div>
                </div>

                {/* Issuer */}
                <div className="hidden sm:block sm:col-span-3 font-mono text-xs text-darkGray group-hover:text-surface/90">
                  {cert.issuer}
                </div>

                {/* Date */}
                <div className="hidden sm:block sm:col-span-2 font-mono text-xs text-mediumGray group-hover:text-surface/70">
                  {cert.date}
                </div>

                {/* Link Icon */}
                <div className="sm:col-span-1 flex justify-end">
                  {cert.url ? (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-dark group-hover:text-surface underline underline-offset-2"
                    >
                      <span className="sm:hidden">Certificate</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  ) : (
                    <span className="font-mono text-[10px] text-lightGray group-hover:text-surface/50">
                      VERIFIED
                    </span>
                  )}
                </div>

              </div>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
};
