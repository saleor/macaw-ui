import { Sprinkles } from "~/theme";
import { Box } from "../Box";

type ListItemProps = Pick<
  Sprinkles,
  "paddingX" | "paddingY" | "gap" | "borderRadius"
> & {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLLIElement>) => void;
};

export const Item = ({
  children,
  disabled,
  onClick,
  className,
  ...rest
}: ListItemProps) => (
  <Box
    {...rest}
    as="li"
    display="flex"
    alignItems="center"
    cursor="pointer"
    disabled={disabled}
    backgroundColor={{
      default: "default",
      active: "active",
      hover: "hover",
      focus: "focus",
    }}
    color={{
      disabled: "disabled",
    }}
    pointerEvents={{ default: "auto", disabled: "none" }}
    onClick={onClick}
    className={className}
  >
    {children}
  </Box>
);
