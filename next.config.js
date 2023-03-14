/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["i.dummyjson.com", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
