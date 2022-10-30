/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.microcms-assets.io', 'og-image-yamakenji.vercel.app', 'yamakenji.com'],
  },
  experimental: {
    appDir: true,
  },
};
