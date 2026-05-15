import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Use the following for development on LAN
    // unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.etiennerobert.com',
        pathname: '/adele/**',
      },
    ],
  },
};

export default nextConfig;
