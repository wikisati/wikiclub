"use client";

import { useParams } from 'next/navigation';
import BaseLayout from '@/components/layouts/BaseLayout';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users } from 'lucide-react';

// This would typically come from an API or database
const events = [
  {
    id: 1,
    title: "Web Development Workshop",
    date: "March 25, 2024",
    location: "SATI Campus",
    attendees: 50,
    image: "https://placehold.co/600x400/349b64/ffffff?text=Web+Dev+Workshop",
    description: "Learn modern web development with Next.js and React.",
    details: "Join us for an intensive workshop on modern web development. We'll cover the fundamentals of Next.js and React, including server-side rendering, routing, and state management. This workshop is perfect for beginners and intermediate developers looking to enhance their skills.",
    agenda: [
      "Introduction to Next.js and React",
      "Setting up your development environment",
      "Building your first application",
      "Hands-on coding session",
      "Q&A and networking",
    ],
    requirements: [
      "Basic knowledge of JavaScript",
      "Laptop with Node.js installed",
      "Enthusiasm to learn",
    ],
  },
  {
    id: 2,
    title: "AI/ML Workshop",
    date: "April 5, 2024",
    location: "Online",
    attendees: 75,
    image: "https://placehold.co/600x400/349b64/ffffff?text=AI+ML+Workshop",
    description: "Introduction to Machine Learning and AI concepts.",
    details: "Explore the fascinating world of Artificial Intelligence and Machine Learning in this comprehensive workshop. We'll cover essential concepts, practical applications, and hands-on exercises to help you get started with AI/ML development.",
    agenda: [
      "Introduction to AI and ML",
      "Python for Machine Learning",
      "Data preprocessing and visualization",
      "Building your first ML model",
      "Real-world applications and case studies",
    ],
    requirements: [
      "Basic Python programming knowledge",
      "Laptop with Python and required libraries installed",
      "Curiosity about AI/ML",
    ],
  },
];

export default function EventPage() {
  const params = useParams();
  const eventId = parseInt(params.id as string);
  const event = events.find(e => e.id === eventId);

  if (!event) {
    return (
      <BaseLayout>
        <div className="min-h-screen bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Event Not Found
            </h1>
            <p className="text-gray-600">
              The event you're looking for doesn't exist or has been removed.
            </p>
          </div>
        </div>
      </BaseLayout>
    );
  }

  return (
    <BaseLayout>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-64 sm:h-96 mb-8 rounded-lg overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {event.title}
            </h1>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center text-gray-600">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Users className="w-5 h-5 mr-2" />
                <span>{event.attendees} attendees</span>
              </div>
            </div>

            <div className="prose max-w-none mb-8">
              <p className="text-lg text-gray-600">
                {event.details}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Agenda
                </h2>
                <ul className="space-y-2">
                  {event.agenda.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start text-gray-600"
                    >
                      <span className="text-primary mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Requirements
                </h2>
                <ul className="space-y-2">
                  {event.requirements.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start text-gray-600"
                    >
                      <span className="text-primary mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full md:w-auto px-8 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Register Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </BaseLayout>
  );
} 