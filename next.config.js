/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['your-domain.com'], // Add your image domain here
    unoptimized: process.env.NODE_ENV === 'development', // For local development
  },
}

module.exports = nextConfig