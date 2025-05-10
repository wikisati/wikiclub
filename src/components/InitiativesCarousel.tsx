"use client";

import React from 'react';

const initiatives = [
  {
    title: 'Open Source Contributions',
    description: 'Collaborate on open source projects and contribute to the community.'
  },
  {
    title: 'Tech Talks',
    description: 'Attend and organize talks on trending technologies.'
  },
  {
    title: 'Workshops',
    description: 'Participate in hands-on workshops to learn new skills.'
  }
];

export default function InitiativesCarousel() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Initiatives</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {initiatives.map((item, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg shadow p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 