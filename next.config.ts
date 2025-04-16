import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["acmebackend.vercel.app", "firebasestorage.googleapis.com"],
  }
};

export default nextConfig;
