import { ReactNode, forwardRef } from "react";

import { DataAttributes } from "~/components/types";
import { sprinkles, Sprinkles } from "~/theme";
import { classNames } from "~/utils";

import { svgWrapper, SVGWrapperVariants } from "./SVGWrapper.css";

export type SVGWrapperProps = SVGWrapperVariants &
  DataAttributes & {
    className?: string;
    viewBox?: string;
    children: ReactNode;
    color?: Sprinkles["color"];
  };

export const SVGWrapper = forwardRef<SVGSVGElement, SVGWrapperProps>(
  (
    { className, size, viewBox = "0 0 24 24", color, children, ...rest },
    ref
  ) => {
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
        {...rest}
      >
        {children}
      </svg>
    );
  }
);

SVGWrapper.displayName = "SVGWrapper";
