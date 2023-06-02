import {
  InputHTMLAttributes,
  forwardRef,
  ComponentProps,
  useState,
  Ref,
  ReactNode,
} from "react";
import * as Portal from "@radix-ui/react-portal";
import { useOutsideClick } from "~/utils";
import { Box } from "../Box";
import {
  AutosizeInput,
  CalculationChange,
  InputContainer,
} from "./AutosizeInput";
import { DropdownContent } from "./Dropdown";
import {
  dropdownItem as dropdownItemStyles,
  autocompleteContainer as autocompleteContainerStyles,
} from "./Expression.css";

export const AutocompleteItem = forwardRef<
  HTMLElement,
  ComponentProps<typeof Box>
>(({ children, ...props }, ref) => {
  return (
    <Box className={dropdownItemStyles()} ref={ref} {...props}>
      {children}
    </Box>
  );
});

AutocompleteItem.displayName = "AutocompleteItem";

type OperandAutocompleteProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "color" | "width" | "height" | "size"
> & {
  onClickOutside?: () => void;
  children: ReactNode;
  open?: boolean;
  value?: string;
};

interface ContentPositon {
  x: number;
  y: number;
}

export const OperandAutocomplete = ({
  children,
  open,
  value,
  onClickOutside,
  ...props
}: OperandAutocompleteProps) => {
  const boxRef = useOutsideClick(onClickOutside);
  const [pos, setPos] = useState<ContentPositon>({ x: 0, y: 0 });

  const handleCalculationChange = ({ left, rect }: CalculationChange) => {
    setPos({
      x: rect.x + left,
      y: rect.y + rect.height + window.scrollY,
    });
  };

  return (
    <Box className={autocompleteContainerStyles}>
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
          <DropdownContent
            ref={boxRef as Ref<HTMLDivElement>}
            __transform={`translate(${pos.x}px, ${pos.y}px)`}
            absolute
          >
            {children}
          </DropdownContent>
        </Portal.Root>
      )}
    </Box>
  );
};

OperandAutocomplete.displayName = "Expression.OperandAutocomplete";
