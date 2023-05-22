import { forwardRef, InputHTMLAttributes, ReactNode, FocusEvent } from "react";

import { Option, ChangeHandler, useSelectEvents } from "./useSelectEvents";
import { SelectWrapper } from "./SelectWrapper";
import { List, Text, Box, PropsWithBox } from "..";
import { helperTextRecipe, InputVariants } from "../BaseInput";
import { listStyle, listItemStyle, listWrapperRecipe } from "../BaseSelect";

export type SelectProps = PropsWithBox<
  Omit<
    InputHTMLAttributes<HTMLSelectElement>,
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
    options: Option[];
    onChange?: ChangeHandler;
    value: string | number;
  }
> &
  InputVariants;

const getBoxHeight = (size: SelectProps["size"]) => {
  switch (size) {
    case "small":
      return 7;
    case "medium":
      return 8;
    case "large":
      return 9;
  }
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
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
    },
    ref
  ) => {
    const {
      active,
      typed,
      isOpen,
      getToggleButtonProps,
      getLabelProps,
      getMenuProps,
      highlightedIndex,
      getItemProps,
      selectedItem,
      handlers,
    } = useSelectEvents(value, options, onChange);

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
          <Box
            height={getBoxHeight(size)}
            onBlur={(event: FocusEvent<HTMLSelectElement, Element>) => {
              handlers.onBlur();
              onBlur?.(event);
            }}
            onFocus={(event: FocusEvent<HTMLSelectElement, Element>) => {
              handlers.onFocus();
              onFocus?.(event);
            }}
            {...props}
            ref={ref}
          >
            <Text size={size} variant="body">
              {selectedItem?.label}
            </Text>
          </Box>
        </SelectWrapper>

        <Box
          position="relative"
          display={isOpen ? "block" : "none"}
          className={listWrapperRecipe({ size })}
        >
          <List as="ul" className={listStyle} {...getMenuProps()}>
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

        {helperText && (
          <Box marginTop={3} className={helperTextRecipe({ size })}>
            <Text
              variant="caption"
              size={size}
              color={error ? "textCriticalDefault" : "textNeutralSubdued"}
            >
              {helperText}
            </Text>
          </Box>
        )}
      </Box>
    );
  }
);

Select.displayName = "Select";
