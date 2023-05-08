import { forwardRef, InputHTMLAttributes, ReactNode } from "react";

import {
  Option,
  ChangeHandler,
  useMultiselectEvents,
} from "./useMultiselectEvents";
import { MultiselectWrapper } from "./MultiselectWrapper";
import { List, Text, Box, PropsWithBox } from "..";
import { helperTextRecipe, InputVariants } from "../BaseInput";
import {
  list,
  listItem,
  listWrapperRecipe,
  multiselectInputRecipe,
} from "./Multiselect.css";

export type MultiselectProps = PropsWithBox<
  Omit<
    InputHTMLAttributes<HTMLInputElement>,
    | "color"
    | "width"
    | "height"
    | "size"
    | "type"
    | "children"
    | "onChange"
    | "value"
    | "nonce"
    | "type"
  > & {
    label?: ReactNode;
    error?: boolean;
    helperText?: ReactNode;
    options: Option[];
    onChange?: ChangeHandler;
    value?: string[];
    endAdornment?: ReactNode;
  }
> &
  InputVariants;

export const Multiselect = forwardRef<HTMLInputElement, MultiselectProps>(
  (
    {
      size,
      disabled = false,
      className,
      label,
      id,
      error = false,
      helperText,
      options,
      onChange,
      endAdornment,
      value = [],
      ...props
    },
    ref
  ) => {
    const {
      active,
      typed,
      isOpen,
      getLabelProps,
      getMenuProps,
      getInputProps,
      highlightedIndex,
      getItemProps,
      itemsToSelect,
      selectedItems,
      getSelectedItemProps,
      inputValue,
      removeSelectedItem,
      getToggleButtonProps,
    } = useMultiselectEvents(value, options, onChange);

    return (
      <Box display="flex" flexDirection="column" gap={3}>
        <MultiselectWrapper
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
          endAdornment={endAdornment}
        >
          {selectedItems.map((item, idx) => (
            <Box
              key={`selected-item-${item}-${idx}`}
              paddingX={4}
              paddingY={2}
              backgroundColor="surfaceNeutralSubdued"
              borderColor="neutralHighlight"
              borderWidth={1}
              borderStyle="solid"
              borderRadius={3}
              display="flex"
              gap={3}
              alignItems="center"
              {...getSelectedItemProps({
                selectedItem: item,
                index: idx,
              })}
            >
              <Text
                variant="caption"
                size={size === "small" ? "small" : "medium"}
              >
                {item.label}
              </Text>
              {!disabled && (
                <Text
                  cursor="pointer"
                  variant="caption"
                  size="small"
                  marginBottom={1}
                  onClick={(event) => {
                    event.stopPropagation();
                    event.preventDefault();
                    removeSelectedItem(item);
                  }}
                >
                  &#10005;
                </Text>
              )}
            </Box>
          ))}

          <Box
            id={id}
            as="input"
            className={multiselectInputRecipe({ size, error })}
            placeholder="Add item"
            disabled={disabled}
            __width={0}
            __minWidth={30}
            __flex={1}
            {...getInputProps({
              id,
              ref,
              value: inputValue,
            })}
            {...props}
          />
        </MultiselectWrapper>

        <Box
          position="relative"
          display={isOpen && itemsToSelect.length > 0 ? "block" : "none"}
          className={listWrapperRecipe({ size })}
        >
          <List as="ul" className={list} {...getMenuProps()}>
            {isOpen &&
              itemsToSelect?.map((item, index) => (
                <List.Item
                  key={`to-select-${id}-${item}-${index}`}
                  className={listItem}
                  active={highlightedIndex === index}
                  {...getItemProps({
                    item,
                    index,
                  })}
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

Multiselect.displayName = "Multiselect";
