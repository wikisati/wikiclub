"use client";

import React from 'react';

const steps = [
  {
    title: 'Sign Up',
    description: 'Fill out the registration form to join Wiki Club SATI.'
  },
  {
    title: 'Participate',
    description: 'Join our events, workshops, and contribute to projects.'
  },
  {
    title: 'Collaborate',
    description: 'Work with fellow members and grow your skills.'
  }
];

export default function JoinSteps() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">How to Join</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg shadow p-6 text-center">
              <div className="text-4xl font-bold text-primary-500 mb-4">{idx + 1}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 