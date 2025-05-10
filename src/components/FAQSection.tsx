"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is Wiki Club SATI?",
    answer: "Wiki Club SATI is a student-led organization focused on knowledge sharing, collaboration, and technology innovation. We organize events, workshops, and projects to help students learn and grow together.",
  },
  {
    question: "Who can join Wiki Club?",
    answer: "Any student from SATI can join Wiki Club. We welcome students from all departments and years who are interested in technology, knowledge sharing, and community building.",
  },
  {
    question: "What kind of activities does Wiki Club organize?",
    answer: "We organize various activities including workshops, hackathons, tech talks, coding competitions, and collaborative projects. We also participate in open-source contributions and community events.",
  },
  {
    question: "How can I participate in Wiki Club events?",
    answer: "You can participate by registering for events through our website, joining our Discord community, or following our social media channels for updates on upcoming events and activities.",
  },
  {
    question: "Are there any membership fees?",
    answer: "No, Wiki Club is completely free to join. All our events and resources are available to members at no cost.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-dark dark:text-white mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-primary"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-dark dark:text-white">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  </motion.div>
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            Still have questions?{" "}
            <a
              href="mailto:contact@wikiclub.sati.ac.in"
              className="text-primary hover:text-primary/90 font-medium"
            >
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
} 