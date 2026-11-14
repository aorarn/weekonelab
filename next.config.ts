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
      // Loaders run right to left: Tailwind compiles @apply first, then
      // css-module-globals keeps marker classes like `group/tabs` unhashed.
      "*.module.css": {
        loaders: ["./loaders/css-module-globals.cjs", "@tailwindcss/turbopack"],
        as: "*.module.css",
      },
    },
  },
};

export default nextConfig;
