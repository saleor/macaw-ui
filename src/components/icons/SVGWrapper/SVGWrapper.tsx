import { ReactNode, forwardRef } from "react";
import { Sprinkles, vars } from "~/theme";
import { svgWrapper, SCVWrapperVaraints } from "./SVGWrapper.css";

export type SVGWrapperProps = SCVWrapperVaraints & {
  className?: string;
  viewBox?: string;
  children: ReactNode;
  color?: Sprinkles["color"];
};

export const SVGWrapper = forwardRef<SVGSVGElement, SVGWrapperProps>(
  ({ className, size, viewBox = "0 0 24 24", color, children }, ref) => {
    return (
      <svg
        ref={ref}
        className={[svgWrapper({ size }), className].join(" ")}
        viewBox={viewBox}
        style={{
          color: color
            ? vars.colors.foreground[color as keyof Sprinkles["color"]]
            : "currentColor",
        }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {children}
      </svg>
    );
  }
);

SVGWrapper.displayName = "SVGWrapper";
