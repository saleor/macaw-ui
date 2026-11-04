import { fireEvent, render, screen } from "@testing-library/react";

import { useTheme } from "./context";
import { ThemeProvider } from "./provider";
import { themes } from "./themes";

const background = (theme: keyof typeof themes) =>
  `--mu-colors-background-default1:${themes[theme].colors.background.default1}`;

describe("ThemeProvider", () => {
  it("updates the rendered variables when the theme changes", () => {
    const SwitchTheme = () => {
      const { setTheme } = useTheme();

      return <button onClick={() => setTheme("defaultDark")}>dark</button>;
    };
    const { container } = render(
      <ThemeProvider>
        <SwitchTheme />
      </ThemeProvider>
    );
    const style = () =>
      container.querySelector("style[data-macaw-ui-theme]")?.textContent;

    expect(style()).toContain(background("defaultLight"));

    fireEvent.click(screen.getByText("dark"));

    expect(style()).toContain(background("defaultDark"));
    expect(style()).not.toContain(background("defaultLight"));
  });
});
