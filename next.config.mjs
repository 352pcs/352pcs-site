/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/352pcs-site',
  assetPrefix: '/352pcs-site', // This fixes the CSS and Images
  images: {
    unoptimized: true,
  },
};

export default nextConfig;