import "./reset.css";
import "./fonts.css";
import "./defaultLight.css";

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <main id="macaw-ui-root">{children}</main>;
};
