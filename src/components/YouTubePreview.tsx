"use client";

import React from 'react';

interface YouTubePreviewProps {
  videoId: string;
  title: string;
  description: string;
}

export default function YouTubePreview({ videoId, title, description }: YouTubePreviewProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Latest from Wiki Club</h2>
        <div className="aspect-w-16 aspect-h-9 mb-6">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-64 md:h-96 rounded-lg border-none"
          />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href="https://www.youtube.com/@wikiclubsati"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 rounded bg-primary-500 text-white font-semibold hover:bg-primary-600 transition"
        >
          Subscribe
        </a>
      </div>
    </section>
  );
} 