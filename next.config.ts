import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // disables built-in image optimization
  },
};

export default nextConfig;
