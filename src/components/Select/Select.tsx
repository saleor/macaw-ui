import { Root as Portal } from "@radix-ui/react-portal";
import {
  ForwardedRef,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
} from "react";

import { isString } from "~/utils";
import { useFloating } from "~/hooks/useFloating";
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

export type SelectProps<T, V> = PropsWithBox<
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
    options: T[];
    onChange?: SingleChangeHandler<V>;
    value: V | null;
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

const SelectInner = <T extends Option, V extends Option | string>(
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
  }: SelectProps<T, V>,
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
    value: isString(value)
      ? options.find((item) => item.value === value)
      : value,
    options,
    onChange,
    onFocus,
    onBlur,
  });

  const { refs, floatingStyles } = useFloating();

  return (
    <Box display="flex" flexDirection="column">
      <SelectWrapper
        ref={refs.setReference}
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
          <Text
            size={size}
            variant="body"
            color={error ? "textCriticalDefault" : "textNeutralDefault"}
          >
            {selectedItem?.label}
          </Text>
        </Box>
      </SelectWrapper>
      <Portal asChild ref={refs.setFloating} style={floatingStyles}>
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
                  key={`${id}-${item.value}-${index}`}
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

export const Select = forwardRef(SelectInner) as <
  T extends Option,
  V extends Option | string,
>(
  props: SelectProps<T, V> & { ref?: React.ForwardedRef<HTMLElement> }
) => ReturnType<typeof SelectInner>;
