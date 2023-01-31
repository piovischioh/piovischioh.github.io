import { withContentlayer } from 'next-contentlayer';

const nextConfig = withContentlayer({
  reactStrictMode: true,
  images: {
    unoptimized: true, // https://nextjs.org/docs/messages/export-image-api
  },
});

export default nextConfig;
