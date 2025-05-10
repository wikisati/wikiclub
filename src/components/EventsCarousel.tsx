"use client";

import React from 'react';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  attendees: number;
  image: string;
  description: string;
}

interface EventsCarouselProps {
  events: Event[];
}

export default function EventsCarousel({ events }: EventsCarouselProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Upcoming Events</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow overflow-hidden">
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-2">{event.date}</p>
                <p className="text-gray-600 mb-2">{event.location}</p>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <p className="text-sm text-gray-500">{event.attendees} attendees</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 