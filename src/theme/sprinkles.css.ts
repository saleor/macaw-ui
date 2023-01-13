import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { vars } from "./contract.css";

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  properties: {
    display: ["none", "flex"],
    flexDirection: ["row", "column"],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    justifyContent: ["stretch", "flex-start", "center", "flex-end"],
    flexWrap: ["nowrap", "wrap"],
    gap: vars.space,
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    marginTop: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,
    width: ["100vw"],
    height: ["100vh"],
    borderRadius: vars.borderRadius,
    fontFamily: vars.fontFamily,
    fontSize: vars.fontSize,
    lineHeight: vars.lineHeight,
    textAlign: ["center"],
    borderWidth: vars.space,
    borderStyle: ["solid"],
    fontWeight: vars.fontWeight,
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    placeItems: ["alignItems", "justifyContent"],
    typeSize: ["fontSize", "lineHeight"],
  },
});

const colorsProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
  },
  defaultCondition: "lightMode",
  properties: {
    borderColor: vars.colors.border,
    color: vars.colors.foreground,
    backgroundColor: vars.colors.background,
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  colorsProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
