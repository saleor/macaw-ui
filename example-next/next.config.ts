import type { NextConfig } from "next";

const config: NextConfig = {
  // Standalone app inside the library repo; stop Next from picking the repo root lockfile
  turbopack: { root: import.meta.dirname },
};

export default config;
