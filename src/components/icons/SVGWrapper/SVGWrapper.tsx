import { ReactNode, forwardRef } from "react";
import { svgWrapper, SCVWrapperVaraints } from "./SVGWrapper.css";

export type SVGWrapperProps = SCVWrapperVaraints & {
  className?: string;
  viewBox?: string;
  color?: string;
  children: ReactNode;
};

export const SVGWrapper = forwardRef<SVGSVGElement, SVGWrapperProps>(
  (
    { className, size, viewBox = "0 0 24 24", color = "black", children },
    ref
  ) => {
    return (
      <svg
        ref={ref}
        className={`${svgWrapper({ size })} ${className}`}
        viewBox={viewBox}
        style={{
          color,
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
