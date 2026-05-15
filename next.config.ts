import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Use the following for development on LAN
    // unoptimized: true,
    formats: ['image/webp'],
    minimumCacheTTL: 3600,
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
