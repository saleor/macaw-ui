import { Root as Portal } from "@radix-ui/react-portal";
import {
  ForwardedRef,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
  useRef,
} from "react";

import { Box, List, PropsWithBox, Text } from "..";
import { HelperText, InputVariants } from "../BaseInput";
import {
  Option,
  SingleChangeHandler,
  listItemStyle,
  listStyle,
  listWrapperRecipe,
} from "../BaseSelect";

import { SelectWrapper } from "./SelectWrapper";
import { useSelect } from "./useSelect";

export type SelectProps<O> = PropsWithBox<
  Omit<
    InputHTMLAttributes<HTMLElement>,
    | "color"
    | "width"
    | "height"
    | "size"
    | "type"
    | "children"
    | "onChange"
    | "value"
    | "nonce"
  > & {
    label?: ReactNode;
    error?: boolean;
    helperText?: ReactNode;
    options: O[];
    onChange?: SingleChangeHandler<O>;
    value: O | null;
    locale?: {
      loadingText?: string;
    };
  }
> &
  InputVariants;

const getBoxHeight = (size: "small" | "medium" | "large") => {
  switch (size) {
    case "small":
      return 4;
    case "medium":
      return 5;
    case "large":
      return 6;
  }
};

const SelectInner = <O extends Option>(
  {
    size = "medium",
    disabled = false,
    className,
    value,
    label,
    id,
    error = false,
    helperText,
    options,
    onChange,
    onFocus,
    onBlur,
    ...props
  }: SelectProps<O>,
  ref: ForwardedRef<HTMLElement>
) => {
  const {
    active,
    typed,
    isOpen,
    getItemProps,
    getLabelProps,
    getToggleButtonProps,
    selectedItem,
    getMenuProps,
    highlightedIndex,
    hasItemsToSelect,
  } = useSelect({
    value,
    options,
    onChange,
    onFocus,
    onBlur,
  });

  const containerRef = useRef<HTMLLabelElement>(null);

  return (
    <Box display="flex" flexDirection="column">
      <SelectWrapper
        id={id}
        typed={typed}
        active={active}
        disabled={disabled}
        size={size}
        label={label}
        error={error}
        className={className}
        getLabelProps={getLabelProps}
        getToggleButtonProps={getToggleButtonProps}
      >
        <Box height={getBoxHeight(size)} {...props} ref={ref}>
          <Text size={size} variant="body">
            {selectedItem?.label}
          </Text>
        </Box>
      </SelectWrapper>
      <Box ref={containerRef} />

      <Portal asChild container={containerRef.current}>
        <Box
          position="relative"
          display={isOpen && hasItemsToSelect ? "block" : "none"}
          className={listWrapperRecipe({ size })}
        >
          <List
            as="ul"
            className={listStyle}
            // suppress error because of rendering list in portal
            {...getMenuProps({}, { suppressRefError: true })}
          >
            {isOpen &&
              options?.map((item, index) => (
                <List.Item
                  key={`${id}-${item}-${index}`}
                  className={listItemStyle}
                  {...getItemProps({
                    item,
                    index,
                  })}
                  active={highlightedIndex === index}
                >
                  <Text size={size}>{item.label}</Text>
                </List.Item>
              ))}
          </List>
        </Box>
      </Portal>

      {helperText && (
        <HelperText size={size} error={error}>
          {helperText}
        </HelperText>
      )}
    </Box>
  );
};

export const Select = forwardRef(SelectInner) as <O extends Option>(
  props: SelectProps<O> & { ref?: React.ForwardedRef<HTMLElement> }
) => ReturnType<typeof SelectInner>;
