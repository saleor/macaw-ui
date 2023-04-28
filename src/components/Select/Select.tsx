import { forwardRef, InputHTMLAttributes, ReactNode } from "react";

import { classNames } from "~/utils";

import { Option, ChangeHandler, useSelectEvents } from "./useSelectEvents";
import { SelectWrapper } from "./SelectWrapper";
import { List, Text, Box, PropsWithBox } from "..";
import { helperTextRecipe, inputRecipe, InputVariants } from "../BaseInput";
import { list, listItem, listWrapperRecipe } from "./Select.css";

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
    type?: "text" | "number";
    helperText?: ReactNode;
    options: Option[];
    onChange?: ChangeHandler;
    value: string | number;
  }
> &
  InputVariants;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      size,
      disabled = false,
      className,
      value,
      label,
      id,
      type,
      error = false,
      helperText,
      options,
      onChange,
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
      onFocus,
      onBlur,
      selectedItem,
    } = useSelectEvents(value, options, onChange);

    return (
      <Box display="flex" flexDirection="column" gap={3}>
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
          {selectedItem ? (
            <Text size="large" variant="body" onFocus={onFocus} onBlur={onBlur}>
              {selectedItem.label}
            </Text>
          ) : (
            <Box height={9} />
          )}
        </SelectWrapper>

        <Box
          position="relative"
          display={isOpen ? "block" : "none"}
          className={listWrapperRecipe({ size })}
        >
          <List as="ul" className={list} {...getMenuProps()}>
            {isOpen &&
              options?.map((item, index) => (
                <List.Item
                  key={`${id}-${item}-${index}`}
                  className={listItem}
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
          <Box className={helperTextRecipe({ size })}>
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
