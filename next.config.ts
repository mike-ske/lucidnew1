import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/drgk8rmny/image/upload/**",
      },
    ],
  },
};

export default nextConfig;
