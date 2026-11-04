// @vitest-environment node
import { renderToString } from "react-dom/server";
import { vi } from "vitest";

import { ThemeProvider } from "./provider";
import { themes } from "./themes";

describe("ThemeProvider on the server", () => {
  it("renders the theme variables without warnings", () => {
    const consoleError = vi.spyOn(console, "error");
    const html = renderToString(
      <ThemeProvider defaultTheme="defaultDark">content</ThemeProvider>
    );

    expect(html).toContain(`:root{--mu-spacing-0:0px;`);
    expect(html).toContain(
      `--mu-colors-background-default1:${themes.defaultDark.colors.background.default1}`
    );
    expect(consoleError).not.toHaveBeenCalled();
  });
});
