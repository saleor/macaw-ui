import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [dts(), react(), vanillaExtractPlugin()],
  resolve: {
    alias: {
      "~": resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      entry: "src/index.tsx",
      formats: ["es", "cjs"],
    },
  },
});
