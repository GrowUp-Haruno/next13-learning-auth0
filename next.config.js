/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['s.gravatar.com'],
  },
};

module.exports = nextConfig;
