'use client';

import React, { useState } from 'react';
import { ProjectItem } from '@/lib/data';
import { ExternalLink, Github, Sparkles, Layers, Terminal, Database, Code2 } from 'lucide-react';
import { Button } from '@/ui/Button';

interface ProjectPanelProps {
  project: ProjectItem;
}

export const ProjectPanel: React.FC<ProjectPanelProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Render unique illustrative UI layout for each project style
  const renderIllustrativeUI = () => {
    switch (project.uiStyle) {
      case 'hometown':
        return (
          <div className="w-full h-full bg-slate-900 text-slate-100 p-4 font-mono text-xs flex flex-col justify-between rounded-none">
            <div className="flex items-center justify-between border-b border-slate-700 pb-2">
              <span className="flex items-center gap-2 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                3D MAP SCENE • LEAFLET + R3F
              </span>
              <span className="text-slate-400">HERITAGE MAP</span>
            </div>
            <div className="my-auto space-y-2 py-4">
              <div className="bg-slate-800 p-3 border border-slate-700 rounded-none">
                <div className="text-emerald-400 text-xs font-bold">Landmark: Heritage Plaza</div>
                <div className="text-slate-300 text-[11px]">3D Model Rendered • 60 FPS</div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[10px]">
                <div className="bg-slate-800/80 p-2 border border-slate-700">Supabase Realtime Chat</div>
                <div className="bg-slate-800/80 p-2 border border-slate-700">OpenStreetMap Coordinates</div>
              </div>
            </div>
            <div className="text-[10px] text-slate-400 flex justify-between border-t border-slate-700 pt-2">
              <span>LAT: 28.6139° N</span>
              <span>LON: 77.2090° E</span>
            </div>
          </div>
        );

      case 'entreskill':
        return (
          <div className="w-full h-full bg-stone-900 text-stone-100 p-4 font-mono text-xs flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-stone-700 pb-2">
              <span className="text-amber-400 font-bold">ENTRESKILL HUB</span>
              <span className="text-stone-400 text-[10px]">TURBOREPO MONOREPO</span>
            </div>
            <div className="space-y-2 py-4">
              <div className="flex justify-between items-center bg-stone-800 p-2 border border-stone-700">
                <span>Auth Module (JWT + Prisma)</span>
                <span className="text-emerald-400">Active</span>
              </div>
              <div className="flex justify-between items-center bg-stone-800 p-2 border border-stone-700">
                <span>Startup Resource Curriculum</span>
                <span className="text-amber-400">Deployed</span>
              </div>
            </div>
            <div className="text-[10px] text-stone-400 border-t border-stone-700 pt-2 flex justify-between">
              <span>UNIFIED MENTOR FELLOWSHIP</span>
              <span>NEXT.JS 14</span>
            </div>
          </div>
        );

      case 'chefs':
        return (
          <div className="w-full h-full bg-amber-950/90 text-amber-100 p-4 font-mono text-xs flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-amber-800 pb-2">
              <span className="text-amber-300 font-bold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> CHEF'S AI STUDIO
              </span>
              <span className="text-amber-400 text-[10px]">CLAUDE VISION AI</span>
            </div>
            <div className="space-y-2 py-3">
              <div className="bg-amber-900/60 p-2.5 border border-amber-700 text-[11px]">
                <span className="text-amber-300 font-semibold">Voice Cooking Mode:</span> Enabled
                <br />
                <span className="text-amber-200">"Next step: Simmer for 5 mins"</span>
              </div>
              <div className="bg-amber-900/40 p-2 border border-amber-800 text-[10px] flex justify-between">
                <span>Ingredient Vision Scan</span>
                <span className="text-emerald-300">100% Match</span>
              </div>
            </div>
            <div className="text-[10px] text-amber-400 border-t border-amber-800 pt-2">
              BROWSER WEB SPEECH API INTEGRATED
            </div>
          </div>
        );

      case 'agriguard':
        return (
          <div className="w-full h-full bg-emerald-950 text-emerald-100 p-4 font-mono text-xs flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-emerald-800 pb-2">
              <span className="text-emerald-400 font-bold">PRECISION AGRIGUARD</span>
              <span className="text-emerald-300 text-[10px]">IOT TELEMETRY</span>
            </div>
            <div className="grid grid-cols-2 gap-2 py-3">
              <div className="bg-emerald-900/60 p-2 border border-emerald-700">
                <div className="text-[10px] text-emerald-300">Moisture Sensor</div>
                <div className="text-base font-bold text-emerald-100">68%</div>
              </div>
              <div className="bg-emerald-900/60 p-2 border border-emerald-700">
                <div className="text-[10px] text-emerald-300">Predicted Water</div>
                <div className="text-base font-bold text-emerald-100">1.2 L/m²</div>
              </div>
            </div>
            <div className="text-[10px] text-emerald-400 border-t border-emerald-800 pt-2 flex justify-between">
              <span>MONGODB SCHEMA</span>
              <span>EXPRESS REST API</span>
            </div>
          </div>
        );

      case 'golf':
        return (
          <div className="w-full h-full bg-zinc-900 text-zinc-100 p-4 font-mono text-xs flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-zinc-700 pb-2">
              <span className="text-zinc-200 font-bold">GOLF CHARITY PLATFORM</span>
              <span className="text-emerald-400 text-[10px]">STRIPE BILLING</span>
            </div>
            <div className="space-y-2 py-3">
              <div className="bg-zinc-800 p-2.5 border border-zinc-700 flex justify-between items-center text-[11px]">
                <span>Recurring Subscriptions</span>
                <span className="text-emerald-400">Automated</span>
              </div>
              <div className="bg-zinc-800 p-2 border border-zinc-700 text-[10px] flex justify-between">
                <span>Supabase PostgreSQL DB</span>
                <span>Row Level Security</span>
              </div>
            </div>
            <div className="text-[10px] text-zinc-400 border-t border-zinc-700 pt-2">
              ROLE BASED USER PORTALS
            </div>
          </div>
        );

      case 'jobportal':
        return (
          <div className="w-full h-full bg-slate-900 text-slate-100 p-4 font-mono text-xs flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-slate-700 pb-2">
              <span className="text-blue-400 font-bold">JOB PORTAL (CODEALPHA)</span>
              <span className="text-slate-400 text-[10px]">ANGULAR + POSTGRESQL</span>
            </div>
            <div className="space-y-2 py-3 text-[11px]">
              <div className="bg-slate-800 p-2 border border-slate-700 flex justify-between">
                <span>JWT Auth & Access Control</span>
                <span className="text-emerald-400">Secured</span>
              </div>
              <div className="bg-slate-800 p-2 border border-slate-700 flex justify-between">
                <span>Resume Upload Pipeline</span>
                <span className="text-blue-300">Active</span>
              </div>
            </div>
            <div className="text-[10px] text-slate-400 border-t border-slate-700 pt-2">
              OPTIMIZED SQL SEARCH QUERIES
            </div>
          </div>
        );

      case 'weather':
      default:
        return (
          <div className="w-full h-full bg-indigo-950 text-indigo-100 p-4 font-mono text-xs flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-indigo-800 pb-2">
              <span className="text-indigo-300 font-bold">3D WEATHER APP</span>
              <span className="text-indigo-400 text-[10px]">THREE.JS + R3F</span>
            </div>
            <div className="space-y-2 py-3">
              <div className="bg-indigo-900/60 p-2.5 border border-indigo-700 flex justify-between">
                <span>Voice City Search</span>
                <span className="text-emerald-400">Active</span>
              </div>
              <div className="bg-indigo-900/60 p-2 border border-indigo-800 text-[10px] flex justify-between">
                <span>Open-Meteo Geocoding</span>
                <span>Realtime API</span>
              </div>
            </div>
            <div className="text-[10px] text-indigo-300 border-t border-indigo-800 pt-2">
              WEBGL PARTICLE EFFECTS SHADER
            </div>
          </div>
        );
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`bg-surface border transition-all duration-300 p-6 sm:p-8 md:p-10 mb-8 shadow-xs ${
        isHovered ? 'border-dark shadow-xl bg-softBg/20' : 'border-borderSubtle'
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Editorial Content */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div>
            {/* Top Category Badge & Project Number */}
            <div className="flex items-center justify-between border-b border-borderSubtle pb-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold px-2 py-0.5 bg-dark text-surface">
                  {project.number}
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-mediumGray">
                  {project.categoryLabel}
                </span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-light text-dark tracking-tight leading-tight">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-darkGray text-sm sm:text-base font-normal leading-relaxed mt-3">
              {project.description}
            </p>
          </div>

          {/* Tech Badges & Action Buttons */}
          <div className="space-y-5 pt-4 border-t border-borderSubtle">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-bgPrimary border border-borderSubtle font-mono text-xs text-dark font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <Button
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="sm"
                  icon={<ExternalLink className="w-3.5 h-3.5" />}
                >
                  Live Demo
                </Button>
              )}

              {project.githubUrl && (
                <Button
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="sm"
                  icon={<Github className="w-3.5 h-3.5" />}
                >
                  GitHub Repository
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Right Side: Illustrative Product UI Canvas */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-bgPrimary border border-borderSubtle p-4 min-h-[260px] relative overflow-hidden group/canvas">
          
          {/* Label Header */}
          <div className="flex items-center justify-between font-mono text-[10px] text-mediumGray uppercase tracking-widest border-b border-borderSubtle pb-2 mb-3">
            <span>ILLUSTRATIVE UI</span>
            <span className="px-1.5 py-0.5 bg-surface border border-borderSubtle">
              INTERACTIVE PREVIEW
            </span>
          </div>

          {/* Canvas Rendering Box */}
          <div className="w-full h-full min-h-[200px] border border-borderSubtle shadow-inner">
            {renderIllustrativeUI()}
          </div>

        </div>

      </div>
    </div>
  );
};
