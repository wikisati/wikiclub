"use client";

import { motion } from 'framer-motion';

interface ContributionData {
  date: string;
  count: number;
}

interface ContributionGraphProps {
  data: ContributionData[];
}

export default function ContributionGraph({ data }: ContributionGraphProps) {
  const maxCount = Math.max(...data.map(d => d.count));

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-dark dark:text-white mb-12">
          Community Contributions
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="h-64 flex items-end space-x-1">
            {data.map((item, index) => (
              <motion.div
                key={item.date}
                initial={{ height: 0 }}
                animate={{ height: `${(item.count / maxCount) * 100}%` }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex-1 bg-primary/20 hover:bg-primary/30 dark:bg-primary/30 dark:hover:bg-primary/40 transition-colors rounded-t"
                style={{ minHeight: '4px' }}
                aria-label={`${item.count} contributions on ${item.date}`}
              />
            ))}
          </div>
          <div className="mt-4 flex justify-between text-sm text-gray-600 dark:text-gray-300">
            <span>{data[0].date}</span>
            <span>{data[data.length - 1].date}</span>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            Join our community and start contributing today!
          </p>
        </div>
      </div>
    </section>
  );
} 