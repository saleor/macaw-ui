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
    display: ["none", "flex", "grid", "block"],
    flexDirection: ["row", "column"],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-between",
      "space-around",
      "space-evenly",
    ],
    gridTemplateColumns: ["repeat(2,1fr)", "repeat(3,1fr)"],
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
    width: ["100vw", "100%"],
    height: ["100vh", "100%"],
    minHeight: ["auto", "100%", "0px"],
    minWidth: ["auto", "100%", "0px"],
    borderRadius: vars.borderRadius,
    fontFamily: vars.fontFamily,
    fontSize: vars.fontSize,
    lineHeight: vars.lineHeight,
    textAlign: ["center"],
    borderLeftWidth: vars.space,
    borderRightWidth: vars.space,
    borderTopWidth: vars.space,
    borderBottomWidth: vars.space,
    borderLeftStyle: ["none", "solid"],
    borderRightStyle: ["none", "solid"],
    borderTopStyle: ["none", "solid"],
    borderBottomStyle: ["none", "solid"],
    fontWeight: vars.fontWeight,
    textTransform: ["uppercase"],
    letterSpacing: vars.letterSpacing,
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    placeItems: ["alignItems", "justifyContent"],
    typeSize: ["fontSize", "lineHeight", "fontWeight", "letterSpacing"],
    borderWidth: [
      "borderTopWidth",
      "borderBottomWidth",
      "borderLeftWidth",
      "borderRightWidth",
    ],
    borderXWidth: ["borderLeftWidth", "borderRightWidth"],
    borderYWidth: ["borderTopWidth", "borderBottomWidth"],
    borderStyle: [
      "borderTopStyle",
      "borderBottomStyle",
      "borderLeftStyle",
      "borderRightStyle",
    ],
    borderXStyle: ["borderLeftStyle", "borderRightStyle"],
    borderYStyle: ["borderTopStyle", "borderBottomStyle"],
  },
});

const stateProperties = defineProperties({
  conditions: {
    default: {},
    hover: { selector: "&:hover" },
    focus: { selector: "&:focus" },
    active: { selector: "&:active" },
    disabled: { selector: "&[disabled]" },
  },
  defaultCondition: "default",
  properties: {
    borderColor: vars.colors.border,
    color: vars.colors.foreground,
    backgroundColor: vars.colors.background,
    pointerEvents: ["none", "auto"],
    cursor: ["pointer", "not-allowed", "auto"],
  },
});

export const sprinkles = createSprinkles(responsiveProperties, stateProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
