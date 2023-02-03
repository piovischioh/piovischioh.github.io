import { withContentlayer } from 'next-contentlayer';

const nextConfig = withContentlayer({
  reactStrictMode: true,
  images: {
    unoptimized: true, // https://nextjs.org/docs/messages/export-image-api
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
});

export default nextConfig;
