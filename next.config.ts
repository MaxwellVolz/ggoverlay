import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export', // Static site export for ggoverlay.com
  transpilePackages: ['three'],
  // No basePath or assetPrefix needed - deploying to root domain
};

export default nextConfig;
