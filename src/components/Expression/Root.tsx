import { ReactNode } from "react";
import { Box } from "../Box";
import { expression as expressionStyles } from "./Expression.css";

export interface ExpressionProps {
  children: ReactNode;
}

export const Root = ({ children }: ExpressionProps) => {
  return <Box className={expressionStyles}>{children}</Box>;
};
Root.displayName = "Expression";
