import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin(), dts()],
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es", "cjs"],
    },
  },
});
