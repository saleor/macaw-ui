import { sprinkles } from "~/theme";

export const base = sprinkles({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderColor: "neutralHighlight",
});

export const sizeVariants = {
  small: sprinkles({ width: 9, height: 9 }),
  medium: sprinkles({ width: 11, height: 11 }),
  large: sprinkles({ width: 12, height: 12 }),
};
