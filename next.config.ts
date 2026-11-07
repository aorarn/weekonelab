import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      // Global stylesheets (globals.css)
      "*.css": {
        condition: { not: { path: /\.module\.css$/ } },
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
      // Component CSS Modules (e.g. Button/Button.module.css): keep them as
      // modules so class names stay scoped and are exported to the TSX.
      "*.module.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.module.css",
      },
    },
  },
};

export default nextConfig;
