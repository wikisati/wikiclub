"use client";

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-dark/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo placeholder */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary">
              Wiki Club
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-dark dark:text-white hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="/events" className="text-dark dark:text-white hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Events
              </Link>
              <Link href="/dashboard" className="text-dark dark:text-white hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Dashboard
              </Link>
            </div>
          </div>

          {/* Dark mode toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? (
              <SunIcon className="h-5 w-5 text-yellow-500" />
            ) : (
              <MoonIcon className="h-5 w-5 text-gray-700" />
            )}
          </button>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-dark dark:text-white hover:text-primary focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Add hamburger icon here */}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="text-dark dark:text-white hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
            Home
          </Link>
          <Link href="/events" className="text-dark dark:text-white hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
            Events
          </Link>
          <Link href="/dashboard" className="text-dark dark:text-white hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
            Dashboard
          </Link>
        </div>
      </div>
    </motion.nav>
  )
} 