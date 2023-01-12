import { ReactNode, forwardRef } from "react";

export interface SVGWrapperProps {
  className?: string;
  width?: number;
  height?: number;
  viewBox?: string;
  color?: string;
}

export const createSVGWrapper = (node: ReactNode) => {
  const SVGWrapper = forwardRef<SVGSVGElement, SVGWrapperProps>(
    (
      {
        className,
        width = 24,
        height = 24,
        viewBox = "0 0 24 24",
        color = "black",
      },
      ref
    ) => {
      return (
        <svg
          ref={ref}
          width={width}
          height={height}
          className={className}
          viewBox={viewBox}
          style={{
            color,
          }}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {node}
        </svg>
      );
    }
  );

  SVGWrapper.displayName = "SVGWrapper";

  return SVGWrapper;
};
