"use client";

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface YouTubePreviewProps {
  videoId: string;
  title: string;
  description: string;
}

export default function YouTubePreview({ videoId, title, description }: YouTubePreviewProps) {
  return (
    <section className="py-16 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-dark dark:text-white mb-12">
          Latest from Wiki Club
        </h2>

        <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>

        <div className="mt-6 text-center">
          <h3 className="text-xl font-semibold text-dark dark:text-white mb-2">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="mt-8 text-center">
          <motion.a
            href="https://youtube.com/@wikiclubsati"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            <Play className="w-5 h-5 mr-2" />
            Subscribe to Our Channel
          </motion.a>
        </div>
      </div>
    </section>
  );
} 