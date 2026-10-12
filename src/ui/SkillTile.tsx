'use client';

import React from 'react';
import { SkillItem } from '@/lib/data';

interface SkillTileProps {
  skill: SkillItem;
  isSelected?: boolean;
  onSelect?: (skill: SkillItem) => void;
}

export const SkillTile: React.FC<SkillTileProps> = ({
  skill,
  isSelected = false,
  onSelect,
}) => {
  return (
    <div
      onClick={() => onSelect && onSelect(skill)}
      className={`group relative bg-surface border p-3 sm:p-4 cursor-pointer transition-all duration-200 flex flex-col justify-between aspect-square ${
        isSelected
          ? 'border-dark bg-dark text-surface shadow-lg'
          : 'border-borderSubtle hover:border-dark hover:bg-softBg/40'
      }`}
    >
      {/* Top Header: Symbol & Category Indicator */}
      <div className="flex items-start justify-between">
        <span
          className={`font-mono text-lg sm:text-xl font-bold tracking-tight ${
            isSelected ? 'text-surface' : 'text-dark group-hover:scale-105 transition-transform'
          }`}
        >
          {skill.symbol}
        </span>
        <span
          className={`font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 border ${
            isSelected
              ? 'bg-surface/20 border-surface/30 text-surface'
              : 'bg-bgPrimary border-borderSubtle text-mediumGray'
          }`}
        >
          {skill.category.substring(0, 3)}
        </span>
      </div>

      {/* Bottom: Skill Name & Proficiency */}
      <div className="mt-2">
        <div
          className={`text-xs font-semibold truncate ${
            isSelected ? 'text-surface' : 'text-dark'
          }`}
        >
          {skill.name}
        </div>
        <div
          className={`font-mono text-[10px] mt-0.5 ${
            isSelected ? 'text-surface/70' : 'text-mediumGray'
          }`}
        >
          {skill.level}
        </div>
      </div>
    </div>
  );
};
