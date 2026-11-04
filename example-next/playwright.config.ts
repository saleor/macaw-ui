import { defineConfig, devices } from "@playwright/test";

// next dev evaluates modules one at a time, which surfaces bugs (e.g. import cycles) the production build hides
const servers = {
  production: { command: "pnpm start", url: "http://localhost:3100" },
  dev: { command: "pnpm dev --port 3101", url: "http://localhost:3101" },
};

export default defineConfig({
  testDir: "tests",
  forbidOnly: !!process.env.CI,
  reporter: process.env.CI ? "github" : "list",
  projects: Object.entries(servers).map(([name, { url }]) => ({
    name,
    use: { ...devices["Desktop Chrome"], baseURL: url },
  })),
  webServer: Object.values(servers).map((server) => ({
    ...server,
    reuseExistingServer: !process.env.CI,
  })),
});
