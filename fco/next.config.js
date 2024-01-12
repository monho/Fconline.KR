// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    serverComponents: false,
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://open.api.nexon.com/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
