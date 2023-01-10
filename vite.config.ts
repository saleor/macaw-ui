import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";

import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es", "cjs"],
    },
  },
});
