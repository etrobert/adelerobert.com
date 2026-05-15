import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
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
