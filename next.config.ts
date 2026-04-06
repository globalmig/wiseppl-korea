import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.imweb.me",
      },
      {
        protocol: "https",
        hostname: "img.imweb.me",
      },
      {
        protocol: "https",
        hostname: "www.tlabal.co.kr",
      },
    ],
  },
};

export default nextConfig;
