import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Static export (Netlify-friendly)
  output: "export",

  // ✅ Next/Image fix for static hosting
  images: {
    unoptimized: true,
  },

  // ✅ BUILD ke waqt ESLint errors ignore
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ✅ BUILD ke waqt TypeScript errors ignore
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
