import { forwardRef, ReactNode } from "react";

import { Sprinkles } from "~/theme";
import { Box } from "../Box";

type ListItemProps = Pick<
  Sprinkles,
  "paddingX" | "paddingY" | "gap" | "borderRadius" | "justifyContent"
> & {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLLIElement>) => void;
  active?: boolean;
};

export const Item = forwardRef<HTMLLIElement, ListItemProps>(
  ({ children, disabled, onClick, className, active, ...rest }, ref) => {
    return (
      <Box
        {...rest}
        as="li"
        display="flex"
        alignItems="center"
        cursor="pointer"
        disabled={disabled}
        backgroundColor={{
          default: active
            ? "interactiveNeutralHighlightFocused"
            : "interactiveNeutralHighlightDefault",
          active: "interactiveNeutralHighlightPressing",
          hover: "interactiveNeutralHighlightHovering",
          focus: "interactiveNeutralHighlightFocused",
        }}
        pointerEvents={{ default: "auto", disabled: "none" }}
        onClick={onClick}
        className={className}
        ref={ref}
      >
        {children}
      </Box>
    );
  }
);

Item.displayName = "List.Item";
