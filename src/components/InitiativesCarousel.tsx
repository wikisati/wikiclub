"use client";

import React from 'react';

interface Initiative {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface InitiativesCarouselProps {
  initiatives: Initiative[];
}

export default function InitiativesCarousel({ initiatives }: InitiativesCarouselProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Initiatives</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {initiatives.map((item) => (
            <div key={item.id} className="bg-gray-50 rounded-lg shadow p-6 text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 