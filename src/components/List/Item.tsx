import { Sprinkles } from "~/theme";
import { Box } from "../Box";

type ListItemProps = Pick<Sprinkles, "paddingX" | "paddingY" | "gap"> & {
  children: React.ReactNode;
  disabled?: boolean;
  borderRadius?: 2 | 3;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLLIElement>) => void;
};

export const Item = ({
  children,
  paddingX = 4,
  paddingY = 4,
  gap = 5,
  disabled,
  borderRadius = 3,
  onClick,
  className,
}: ListItemProps) => (
  <Box
    as="li"
    display="flex"
    paddingY={paddingY}
    paddingX={paddingX}
    alignItems="center"
    gap={gap}
    cursor="pointer"
    disabled={disabled}
    borderRadius={borderRadius}
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
