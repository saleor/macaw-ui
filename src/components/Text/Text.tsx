import { text, TextVariants } from "./Text.css";
import { Box } from "../Box";

type TextProps = TextVariants & {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  color?: "neutralTextPrimary";
};

export const Text = ({
  children,
  as = "span",
  variant,
  size,
  fontWeight,
  color = "neutralTextPrimary",
}: TextProps) => {
  return (
    <Box as={as} className={text({ variant, size, fontWeight })} color={color}>
      {children}
    </Box>
  );
};
