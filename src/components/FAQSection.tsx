"use client";

import React, { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'What is Wiki Club SATI?',
    answer: 'Wiki Club SATI is a student-driven club focused on knowledge sharing, collaboration, and innovation at SATI.'
  },
  {
    question: 'How can I join Wiki Club?',
    answer: 'You can join by filling out the registration form on our Join page.'
  },
  {
    question: 'What activities does the club organize?',
    answer: 'We organize workshops, events, and collaborative projects in technology and knowledge domains.'
  },
  {
    question: 'Is Wiki Club open to all departments?',
    answer: 'Yes, students from all departments are welcome to join.'
  },
  {
    question: 'How can I contribute to club projects?',
    answer: 'You can participate in ongoing projects or propose new ideas through our platform.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg bg-white">
              <button
                className="w-full text-left px-6 py-4 font-semibold text-gray-900 focus:outline-none"
                onClick={() => toggleFAQ(idx)}
              >
                {faq.question}
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-4 text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="mailto:contact@wikiclub.sati.ac.in" className="text-primary-600 hover:underline">Still have questions? Contact us</a>
        </div>
      </div>
    </section>
  );
} 