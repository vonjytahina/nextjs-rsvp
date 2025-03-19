/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '/rsvp-nextjs',
  assetPrefix: '/rsvp-nextjs/',
};

export default nextConfig;
