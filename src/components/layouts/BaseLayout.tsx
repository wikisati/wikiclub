"use client";

import { ReactNode } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

interface BaseLayoutProps {
  children: ReactNode
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
} 