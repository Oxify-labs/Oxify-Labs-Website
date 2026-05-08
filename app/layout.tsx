import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono, IBM_Plex_Sans } from 'next/font/google'
import { Courier_Prime } from 'next/font/google'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _courierPrime = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"] });
const _ibmPlexSans = IBM_Plex_Sans({ weight: ["300", "400", "500", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Oxify Labs — Design clearly. Build fast. Scale responsibly.',
  description: 'Oxify Labs is a technology studio building modern SaaS products, MVPs, and next-generation digital infrastructure. Execution-first. Always.',
  keywords: ['technology studio', 'SaaS development', 'MVP engineering', 'product engineering', 'systems design'],
  authors: [{ name: 'Oxify Labs' }],
  openGraph: {
    title: 'Oxify Labs — Design clearly. Build fast. Scale responsibly.',
    description: 'Oxify Labs is a technology studio building modern SaaS products, MVPs, and next-generation digital infrastructure. Execution-first. Always.',
    type: 'website',
    url: 'https://oxify.labs',
    siteName: 'Oxify Labs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oxify Labs — Design clearly. Build fast. Scale responsibly.',
    description: 'Oxify Labs is a technology studio building modern SaaS products, MVPs, and next-generation digital infrastructure.',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
