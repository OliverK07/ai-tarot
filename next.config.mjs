/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/ai-tarot',
  assetPrefix: '/ai-tarot',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
