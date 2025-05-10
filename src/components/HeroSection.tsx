"use client";

import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6 text-primary-600">Welcome to Wiki Club SATI</h1>
        <p className="text-lg text-gray-700 mb-8">
          Empowering knowledge sharing and collaboration among students through technology and innovation.
        </p>
        <a
          href="/join"
          className="inline-block px-8 py-3 rounded-md bg-primary-500 text-white font-semibold hover:bg-primary-600 transition"
        >
          Join Now
        </a>
      </div>
    </section>
  );
} 