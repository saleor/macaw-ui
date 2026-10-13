import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import dts from "vite-plugin-dts";
import { defineConfig } from "vitest/config";

import { resolve } from "path";

export default defineConfig({
  plugins: [
    dts(),
    react(),
    vanillaExtractPlugin(),
    ...(process.env.VISUALIZER ? [visualizer()] : []),
  ],
  resolve: {
    alias: {
      "~": resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "src", "index.tsx"),
      },
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      // Subpaths too: bundling react/jsx-runtime pins React internals and breaks other React majors
      external: [/^react(-dom)?(\/.*)?$/],
    },
    sourcemap: true,
  },
  test: {
    globals: true,
    include: ["src/**/*.test.{ts,tsx}"],
    watch: false,
    environment: "jsdom",
    setupFiles: "./setupTest.ts",
  },
});
