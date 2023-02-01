import { ReactNode, forwardRef } from "react";
import { sprinkles, Sprinkles } from "~/theme";
import { classNames } from "~/utils";
import { svgWrapper, SVGWrapperVariants } from "./SVGWrapper.css";

export type SVGWrapperProps = SVGWrapperVariants & {
  className?: string;
  viewBox?: string;
  children: ReactNode;
  color?: Sprinkles["color"];
  [key: `data-${string}`]: string;
};

export const SVGWrapper = forwardRef<SVGSVGElement, SVGWrapperProps>(
  (
    {
      className,
      size,
      viewBox = "0 0 24 24",
      color = "iconNeutralDefault",
      children,
      ...rest
    },
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
