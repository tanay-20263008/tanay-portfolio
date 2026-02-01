import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tanay Shinde | Medical Web Developer | Custom Practice Management Systems',
  description: '17-year-old Medical Systems Developer building custom practice management software for doctors. Save 2+ hours daily with automated clinic systems.',
  keywords: ['medical web developer', 'practice management system', 'clinic automation', 'doctor software', 'medical systems', 'Nashik web developer', 'custom medical software'],
  authors: [{ name: 'Tanay Shinde' }],
  creator: 'Tanay Shinde',
  publisher: 'Tanay Shinde',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://scaleemailer.com',
    title: 'Tanay Shinde | Medical Web Developer',
    description: 'Custom practice management systems for doctors. Built from scratch, no templates.',
    siteName: 'Tanay Shinde Portfolio',
    images: [
      {
        url: '/images/projects/og-image.png', // Add an OG image in public/ folder
        width: 1200,
        height: 630,
        alt: 'Tanay Shinde - Medical Web Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tanay Shinde | Medical Web Developer',
    description: 'Custom practice management systems for doctors. Built from scratch, no templates.',
    images: ['/images/projects/og-image.png'],
    creator: '@tanayshinde',
  },
  icons: {
    icon: [
      { url: '/images/projects/favicon.ico' },
      { url: '/images/projects/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/projects/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/images/projects/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/images/projects/favicon.ico'],
  },
  manifest: '/site.webmanifest', // Optional: Create a webmanifest file
  verification: {
    // Add these when you have them
    // google: 'your-google-verification-code',
    // yandex: 'yandex-verification-code',
    // yahoo: 'yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://scaleemailer.com',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Cache control for development */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        
        {/* Viewport for mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#111827" />
        
        {/* Structured Data for SEO (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Tanay Shinde",
              "url": "https://scaleemailer.com",
              "jobTitle": "Medical Web Developer",
              "description": "Custom practice management system developer for medical clinics",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nashik",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "knowsAbout": [
                "Web Development",
                "Medical Practice Management Systems",
                "Clinic Automation",
                "Database Design"
              ],
              "sameAs": [
                "https://wa.me/917219632603"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white min-h-screen`}>
        {children}
      </body>
    </html>
  )
}