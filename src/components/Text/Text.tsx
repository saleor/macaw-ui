import { Sprinkles } from "~/theme";
import { classNames } from "~/utils";

import { text, TextVariants } from "./Text.css";
import { Box } from "../Box";

type TextProps = TextVariants & {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  color?: Sprinkles["color"];
  className?: string;
};

export const Text = ({
  children,
  as = "span",
  variant,
  size,
  fontWeight,
  color = "inherit",
  className,
}: TextProps) => {
  return (
    <Box
      as={as}
      className={classNames(text({ variant, size, fontWeight }), className)}
      color={color}
    >
      {children}
    </Box>
  );
};
