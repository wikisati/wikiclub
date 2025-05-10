"use client";

import React from 'react';

interface ContributionData {
  date: string;
  count: number;
}

interface ContributionGraphProps {
  data: ContributionData[];
}

export default function ContributionGraph({ data }: ContributionGraphProps) {
  // Find the maximum count for scaling
  const maxCount = Math.max(...data.map(item => item.count));

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Contribution Graph</h2>
        <div className="bg-gray-100 rounded-lg p-8">
          <div className="grid grid-cols-7 gap-2">
            {data.map((item, index) => {
              const intensity = Math.floor((item.count / maxCount) * 100);
              return (
                <div
                  key={index}
                  className="aspect-square rounded-sm"
                  style={{
                    backgroundColor: `rgba(52, 155, 100, ${intensity / 100})`,
                  }}
                  title={`${item.date}: ${item.count} contributions`}
                />
              );
            })}
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <span className="inline-block w-3 h-3 bg-primary-500 rounded-sm mr-1"></span>
            Contributions
          </div>
        </div>
      </div>
    </section>
  );
} 