/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // ensures local images render smoothly without external image optimization host dependencies
  },
};

export default nextConfig;
