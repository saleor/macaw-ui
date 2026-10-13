import { expect, test } from "@playwright/test";

test("macaw-ui renders and responds to interaction", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });

  await page.goto("/");

  // EXPECTED_REACT proves CI really runs against the React major under test
  await expect(
    page.getByText(`React ${process.env.EXPECTED_REACT ?? ""}`)
  ).toBeVisible();

  await page.getByRole("button", { name: "Clicked 0 times" }).click();
  await expect(
    page.getByRole("button", { name: "Clicked 1 times" })
  ).toBeVisible();

  await page.getByRole("textbox").fill("Macaw");
  await expect(page.getByText("Hello, Macaw")).toBeVisible();

  await page.getByRole("button", { name: "Open popover" }).click();
  await expect(page.getByText("Popover content")).toBeVisible();

  expect(errors).toEqual([]);
});
