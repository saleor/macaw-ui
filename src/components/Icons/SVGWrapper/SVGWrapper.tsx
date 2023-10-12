import { ReactNode, forwardRef } from "react";

import { Sprinkles, sprinkles } from "~/theme";
import { classNames } from "~/utils";

import { SVGWrapperVariants, svgWrapper } from "./SVGWrapper.css";

export type SVGWrapperProps = SVGWrapperVariants & {
  className?: string;
  viewBox?: string;
  children: ReactNode;
  color?: Sprinkles["color"];
  iconColor?: Sprinkles["iconColor"];
};

export const SVGWrapper = forwardRef<SVGSVGElement, SVGWrapperProps>(
  (
    {
      className,
      size,
      viewBox = "0 0 24 24",
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      color,
      iconColor,
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
          sprinkles({ color: iconColor }),
          className
        )}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-macaw-ui-component="Icon"
        {...rest}
      >
        {children}
      </svg>
    );
  }
);

SVGWrapper.displayName = "SVGWrapper";
