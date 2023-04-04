import { ReactNode } from "react";
import { contentTitle } from "./Tooltip.css";

interface ContentHeadingProps {
  children: ReactNode;
}

export const ContentHeading = ({ children }: ContentHeadingProps) => {
  return <span className={contentTitle}>{children}</span>;
};
