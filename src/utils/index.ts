import { themes } from "~/theme/themes";
import { useTheme } from "../";
export * from "./css";

export const useRawThemeValues = () => {
  const { theme } = useTheme();

  return themes[theme];
};
