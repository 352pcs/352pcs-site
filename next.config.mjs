/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // This is the magic line for Plan B
  images: {
    unoptimized: true,   // Required because GitHub doesn't have an image server
  },
};

export default nextConfig;