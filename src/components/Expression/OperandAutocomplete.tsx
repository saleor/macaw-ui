import {
  InputHTMLAttributes,
  forwardRef,
  ComponentProps,
  useState,
  useEffect,
  useRef,
  Ref,
  ReactNode,
} from "react";
import * as Portal from "@radix-ui/react-portal";
import {
  AutosizeInput,
  CalculationChange,
  InputContainer,
} from "./AutosizeInput";
import { DropdownContent } from "./Dropdown";
import { Box } from "../Box";
import {
  dropdownItem as dropdownItemStyles,
  autocompleteContainer as autocompleteContainerStyles,
} from "./Expression.css";

const useOutsideClick = (onClickOutside?: () => void) => {
  const boxRef = useRef<HTMLElement>();

  useEffect(() => {
    if (!onClickOutside) return;

    const handleClick = (event: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
        onClickOutside();
      }
    };
    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, [boxRef, onClickOutside]);

  return boxRef;
};

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
