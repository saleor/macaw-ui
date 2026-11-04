import { expect, test } from "@playwright/test";
import { readFileSync } from "node:fs";

// Box is checked by text: it's the only component without a data-macaw-ui-component marker
const components = [
  "Accordion",
  "Avatar",
  "Button",
  "Checkbox",
  "Chip",
  "Combobox",
  "Divider",
  "Drawer",
  "Dropdown",
  "DropdownButton",
  "DynamicCombobox",
  "DynamicMultiselect",
  "Input",
  "List",
  "List.ItemGroup",
  "Modal",
  "Multiselect",
  "Paragraph",
  "Popover",
  "RadioGroup",
  "RangeInput",
  "SearchInput",
  "Select",
  "SelectNoOptions",
  "Skeleton",
  "Spinner",
  "Switch",
  "Text",
  "Textarea",
  "Toggle",
  "Tooltip",
];

test.describe("without JavaScript", () => {
  test.use({ javaScriptEnabled: false });

  test("every component is in the server-rendered HTML", async ({ page }) => {
    await page.goto("/");

    for (const name of components) {
      await expect(
        page
          .getByRole("region", { name, exact: true })
          .locator("[data-macaw-ui-component]")
          .first()
      ).toBeAttached();
    }

    // ThemeProvider renders the theme variables, so the server HTML is themed before hydration
    await expect(page.locator("body")).not.toHaveCSS(
      "background-color",
      "rgba(0, 0, 0, 0)"
    );
    // Global styles from style.css (fonts, reset) apply
    await expect(page.locator("html")).toHaveCSS("font-family", /Inter/);

    await expect(page.getByText("Box content")).toBeVisible();
    await expect(page.getByText("Accordion content")).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Open popover" })
    ).toBeVisible();
  });
});

test("hydrates without errors and responds to interaction", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });

  await page.goto("/");

  await page.getByRole("button", { name: "Open popover" }).click();
  await expect(page.getByText("Popover content")).toBeVisible();
  await page.keyboard.press("Escape");

  // NoOptions from a Server Component must still be recognized by Select, which compares element types
  await page.getByText("Empty select").click();
  await expect(page.getByText("No options")).toBeVisible();
  await page.keyboard.press("Escape");

  await page.getByRole("button", { name: "Open modal" }).click();
  await expect(page.getByText("Modal content")).toBeVisible();
  await page.getByRole("button", { name: "Close modal" }).click();
  await expect(page.getByText("Modal content")).toBeHidden();

  expect(errors).toEqual([]);
});

test("presentational components are Server Components", ({}, testInfo) => {
  test.skip(
    testInfo.project.name !== "production",
    "Reads the production build"
  );

  // Next lists every client boundary the page imports; server-rendered modules aren't in it
  const manifest = readFileSync(
    ".next/server/app/page_client-reference-manifest.js",
    "utf8"
  );
  const clientModules = [
    ...manifest.matchAll(/macaw-ui\/dist\/([^"#]+\.mjs)/g),
  ].map(([, path]) => path);

  expect(clientModules).toContain("components/Popover/index.mjs");
  expect(clientModules).not.toContain("components/Box/Box.mjs");
  expect(clientModules).not.toContain("components/Text/Text.mjs");
});

test("Server Component pages don't ship unused components", ({}, testInfo) => {
  test.skip(
    testInfo.project.name !== "production",
    "Reads the production build"
  );

  // Without "sideEffects" in macaw's package.json, Turbopack (Next's default, used by `pnpm build`) ships every
  // client component the package entry re-exports. Next's webpack build merges client code shared across routes
  // into one chunk, so this doesn't hold there.
  const html = readFileSync(".next/server/app/box.html", "utf8");
  const scripts = [...html.matchAll(/src="\/_next\/([^"]+\.js)"/g)].map(
    ([, file]) => readFileSync(`.next/${decodeURIComponent(file)}`, "utf8")
  );

  expect(scripts.length).toBeGreaterThan(0);
  expect(scripts.some((code) => code.includes("downshift"))).toBe(false);
});
