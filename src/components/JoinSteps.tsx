"use client";

import { motion } from 'framer-motion';
import { UserPlus, BookOpen, Users, Trophy } from 'lucide-react';

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: <UserPlus className="w-8 h-8" />,
    title: "Create Account",
    description: "Sign up with your college email to get started",
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Complete Profile",
    description: "Tell us about your interests and skills",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Join Projects",
    description: "Participate in ongoing initiatives and events",
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Earn Recognition",
    description: "Get certificates and build your portfolio",
  },
];

export default function JoinSteps() {
  return (
    <section className="py-16 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-dark dark:text-white mb-12">
          How to Join Wiki Club
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 h-full">
                <div className="text-primary mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-dark dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200 dark:bg-gray-700" />
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Get Started Now
          </motion.button>
        </div>
      </div>
    </section>
  );
} 