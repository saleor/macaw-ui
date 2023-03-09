import {
  InputHTMLAttributes,
  forwardRef,
  ComponentProps,
  useState,
} from "react";
import * as Portal from "@radix-ui/react-portal";
import { classNames } from "~/utils";
import { AutosizeInput, InputContainer } from "./AutosizeInput";
import { Box } from "../Box";
import {
  dropdownContent as dropdownContentStyles,
  dropdownItem as dropdownItemStyles,
  autocompleteContainer,
  autocompleteContent,
} from "./Expression.css";

export const AutocompleteItem = forwardRef<
  HTMLElement,
  ComponentProps<typeof Box>
>(({ children, ...props }, ref) => {
  return (
    <Box className={dropdownItemStyles()} {...props} ref={ref}>
      {children}
    </Box>
  );
});

AutocompleteItem.displayName = "AutocompleteItem";

type OperandAutocompleteProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "color" | "width" | "height" | "size"
> & {
  children: React.ReactNode;
  open?: boolean;
  value?: string;
};

export const OperandAutocomplete = ({
  children,
  open,
  value,
  ...props
}: OperandAutocompleteProps) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleCalculationChange = ({
    left,
    rect,
  }: {
    left: number;
    rect: DOMRect;
  }) => {
    setPos({
      x: rect.x + left,
      y: rect.y + rect.height + window.scrollY,
    });
  };

  console.log({ open });
  return (
    <Box className={autocompleteContainer}>
      <InputContainer>
        <AutosizeInput
          type="text"
          value={value}
          onCalculationChange={handleCalculationChange}
          {...props}
        />
      </InputContainer>
      {open && (
        <Portal.Root asChild>
          <Box
            className={classNames(dropdownContentStyles, autocompleteContent)}
            top={0}
            left={0}
            __minWidth="128px"
            __transform={`translate(${pos.x}px, ${pos.y}px)`}
          >
            {children}
          </Box>
        </Portal.Root>
      )}
    </Box>
  );
};

OperandAutocomplete.displayName = "Expression.OperandAutocomplete";
