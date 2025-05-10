"use client";

import React from 'react';

const events = [
  {
    title: 'Web Development Workshop',
    date: 'March 25, 2024',
    description: 'Learn modern web development with Next.js and React.'
  },
  {
    title: 'AI/ML Workshop',
    date: 'April 5, 2024',
    description: 'Introduction to Machine Learning and AI concepts.'
  },
  {
    title: 'Open Source Sprint',
    date: 'May 10, 2024',
    description: 'Collaborate on open source projects.'
  }
];

export default function EventsCarousel() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Upcoming Events</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-2">{event.date}</p>
              <p className="text-gray-700">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 