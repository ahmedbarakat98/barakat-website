import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },     // ما يخليش الـ build يوقف بسبب ESLint
  typescript: { ignoreBuildErrors: true }
};

export default nextConfig;
