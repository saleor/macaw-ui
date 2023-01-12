import { ReactNode } from "react";
import { SVGWrapper, SVGWrapperProps } from "./SVGWrapper";

export const createSVGWrapper = (node: ReactNode) => {
  const Wrapper = (props: Omit<SVGWrapperProps, "children">) => (
    <SVGWrapper {...props}>{node}</SVGWrapper>
  );

  return Wrapper;
};
