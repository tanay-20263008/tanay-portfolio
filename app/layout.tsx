import './globals.css'  // Make sure this path is correct
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tanay Shinde - Medical Systems',
  description: '17-year-old Medical Systems Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Add this to force CSS reload */}
        <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
      </head>
      <body className={`${inter.className} bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  )
}