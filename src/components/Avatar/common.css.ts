import { sprinkles } from "~/theme";

export const base = sprinkles({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderColor: "neutralHighlight",
});

export const sizeVariants = {
  small: sprinkles({ width: 8, height: 8 }),
  medium: sprinkles({ width: 10, height: 10 }),
  large: sprinkles({ width: 11, height: 11 }),
};
