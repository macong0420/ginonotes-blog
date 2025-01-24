const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com', 'raw.githubusercontent.com'],
  },
  experimental: {
    typedRoutes: true,
  },
}

module.exports = withContentlayer(nextConfig)