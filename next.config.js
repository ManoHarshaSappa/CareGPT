/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Type checking is done in CI/CD
    ignoreBuildErrors: process.env.NODE_ENV === 'production',
  },
  eslint: {
    // ESLint checking is done in CI/CD
    ignoreDuringBuilds: process.env.NODE_ENV === 'production',
  },
  images: {
    domains: [],
  },
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
}

module.exports = nextConfig