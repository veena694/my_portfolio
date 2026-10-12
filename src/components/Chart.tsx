'use client';

import React from 'react';

interface ChartProps {
  data: { label: string; percentage: number; color: string }[];
}

export const Chart: React.FC<ChartProps> = ({ data }) => {
  return (
    <div className="space-y-4 my-4">
      <div className="font-mono text-xs text-mediumGray uppercase tracking-wider flex justify-between">
        <span>CHANNEL MIX BREAKDOWN</span>
        <span>CONTRIBUTION %</span>
      </div>

      <div className="space-y-3">
        {data.map((item) => (
          <div key={item.label} className="space-y-1">
            <div className="flex justify-between font-mono text-xs text-dark">
              <span>{item.label}</span>
              <span className="font-bold">{item.percentage}%</span>
            </div>
            <div className="w-full h-3 bg-bgPrimary border border-borderSubtle overflow-hidden">
              <div
                className="h-full transition-all duration-500 bg-dark"
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
