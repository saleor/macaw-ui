import { ReactNode } from "react";
import { SVGWrapper, SVGWrapperProps } from "./SVGWrapper";

export const createSVGWrapper = (node: ReactNode, viewBox?: string) => {
  const Wrapper = (props: Omit<SVGWrapperProps, "children">) => (
    <SVGWrapper viewBox={viewBox} {...props}>
      {node}
    </SVGWrapper>
  );

  Wrapper.displayName = "withSVGWrapper";

  return Wrapper;
};
