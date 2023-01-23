import { ReactNode } from "react";

import { Sprinkles } from "~/theme";
import { classNames } from "~/utils";

import { Box } from "../Box";

import { text, TextVariants } from "./Text.css";

type TextProps = TextVariants & {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  color?: Sprinkles["color"];
  className?: string;
  textTransform?: Sprinkles["textTransform"];
};

export const Text = ({
  children,
  as = "span",
  variant,
  size,
  color = "textNeutralDefault",
  textTransform,
  className,
}: TextProps) => {
  return (
    <Box
      as={as}
      className={classNames(text({ variant, size }), className)}
      color={color}
      textTransform={textTransform}
    >
      {children}
    </Box>
  );
};
