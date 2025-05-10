"use client";

import Link from 'next/link'
import { Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-dark dark:text-white mb-4">Wiki Club SATI</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Empowering knowledge sharing and collaboration among students through technology and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-6 w-6 text-gray-600 dark:text-gray-300 hover:text-primary" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-gray-600 dark:text-gray-300 hover:text-primary" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-gray-600 dark:text-gray-300 hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-dark dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/events" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/join" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-dark dark:text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-300">
                Email: contact@wikiclub.sati.ac.in
              </li>
              <li className="text-gray-600 dark:text-gray-300">
                Location: SATI, Vidisha
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Wiki Club SATI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 