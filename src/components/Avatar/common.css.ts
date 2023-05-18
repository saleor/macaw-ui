import { sprinkles } from "~/theme";

export const base = sprinkles({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderColor: "neutralHighlight",
});

export const sizeVariants = {
  small: sprinkles({ width: "s6", height: "s6" }),
  medium: sprinkles({ width: "s8", height: "s8" }),
  large: sprinkles({ width: "s9", height: "s9" }),
};
