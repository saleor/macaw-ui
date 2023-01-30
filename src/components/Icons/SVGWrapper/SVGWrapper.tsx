import { ReactNode, forwardRef } from "react";
import { sprinkles, Sprinkles } from "~/theme";
import { classNames } from "~/utils";
import { svgWrapper, SVGWrapperVariants } from "./SVGWrapper.css";

export type SVGWrapperProps = SVGWrapperVariants & {
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
        className={classNames(
          svgWrapper({ size }),
          sprinkles({ color }),
          className
        )}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {children}
      </svg>
    );
  }
);

SVGWrapper.displayName = "SVGWrapper";
