/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This is the magic line
  images: { unoptimized: true } 
};
export default nextConfig;