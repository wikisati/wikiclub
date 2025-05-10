import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Wiki Club SATI",
  description: "Official website of Wiki Club SATI - Empowering knowledge sharing and collaboration",
  keywords: ["Wiki Club", "SATI", "Knowledge Sharing", "Student Club"],
  authors: [{ name: "Wiki Club SATI" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-white dark:bg-dark text-dark dark:text-white">
        {children}
      </body>
    </html>
  );
}
