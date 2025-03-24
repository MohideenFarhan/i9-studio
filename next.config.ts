import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
      {
        protocol: "https",
        hostname: "tailwindcss.com",
      },
    ],
  },
  webpack: (config) => {
    config.devtool = "eval-source-map"; // 🔥 Fixes source map issue in development
    return config;
  },
};

export default nextConfig;
