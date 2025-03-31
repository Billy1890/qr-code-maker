/** @type {import('next').NextConfig} */
const nextConfig = {
  reactRestrictmode: true,
  experimental: {
    optimizePackageImports: ['@heroicons/react'],
  },
}

module.exports = nextConfig