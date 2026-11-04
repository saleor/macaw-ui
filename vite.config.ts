import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import type { Plugin } from "vite";
import dts from "vite-plugin-dts";
import { defineConfig } from "vitest/config";

import { resolve } from "path";

// Rollup drops "use client" from sources and minification moves banners, so put it back at the top of each
// built module whose source starts with it. Server Components then import those modules as client references
// and render the others (Box, Text, ...) on the server.
const useClient = (): Plugin => {
  const clientModules = new Set<string>();
  const directive = /^["']use client["'];?/;

  return {
    name: "use-client",
    transform: {
      order: "pre",
      handler(code, id) {
        if (!directive.test(code)) return;

        clientModules.add(id);

        // Blank it out (same length, so no sourcemap needed) to skip Rollup's warning about dropping it
        return {
          code: code.replace(directive, (match) => " ".repeat(match.length)),
          map: null,
        };
      },
    },
    generateBundle(_, bundle) {
      for (const file of Object.values(bundle)) {
        if (
          file.type !== "chunk" ||
          !clientModules.has(file.facadeModuleId ?? "")
        )
          continue;

        file.code = `"use client";\n${file.code}`;

        // Shift mappings down one line to account for the added line
        const map = bundle[`${file.fileName}.map`];

        if (map?.type === "asset") {
          const json = JSON.parse(map.source.toString());

          json.mappings = `;${json.mappings}`;
          map.source = JSON.stringify(json);
        }
      }
    },
  };
};

// Own modules are side-effect free, except CSS: .css.ts files that only call globalStyle/globalFontFace export
// nothing. Without this, barrel imports (`from "~/components"`) leave `import "./X.mjs"` for every re-exported
// module, tying all components into import cycles. Set from a hook, not treeshake.moduleSideEffects: Vite applies
// package.json "sideEffects" (written for consumers of dist) to src too, and that overrides the treeshake option.
const srcSideEffects = (): Plugin => ({
  name: "src-side-effects",
  transform(_, id) {
    if (id.startsWith(resolve(__dirname, "src")))
      return { moduleSideEffects: /\.css\b/.test(id) };
  },
});

export default defineConfig({
  plugins: [
    dts(),
    react(),
    vanillaExtractPlugin(),
    useClient(),
    srcSideEffects(),
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
      // npm drops node_modules folders from the tarball, so bundled dependencies go to vendor/
      fileName: (format, name) =>
        `${name.replace(/^.*node_modules\//, "vendor/")}.${format === "es" ? "mjs" : "js"}`,
    },
    rollupOptions: {
      // Subpaths too: bundling react/jsx-runtime pins React internals and breaks other React majors
      external: [/^react(-dom)?(\/.*)?$/],
      // One file per module, so each can carry its own "use client"
      output: { preserveModules: true, preserveModulesRoot: "src" },
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
