import { forwardRef, InputHTMLAttributes, ReactNode } from "react";

import { MultiselectWrapper } from "./MultiselectWrapper";
import {
  ChangeHandler,
  Option,
  RenderEndAdornmentType,
  useMultiselectEvents,
} from "./useMultiselectEvents";
import { Box, List, PropsWithBox, Text } from "..";
import { helperTextRecipe, InputVariants } from "../BaseInput";
import { listItemStyle, listStyle, listWrapperRecipe } from "../BaseSelect";

import { multiselectInputRecipe } from "./Multiselect.css";

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
    renderEndAdornment?: RenderEndAdornmentType;
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
      renderEndAdornment,
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
      hasItemsToSelect,
    } = useMultiselectEvents(value, options, onChange, disabled);

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
          renderEndAdornment={renderEndAdornment}
          hasItemsToSelect={hasItemsToSelect}
        >
          {selectedItems.map((item, idx) => (
            <Box
              key={`selected-item-${item}-${idx}`}
              paddingX="s1.5"
              paddingY="s0.5"
              backgroundColor="surfaceNeutralSubdued"
              borderColor="neutralHighlight"
              borderWidth={1}
              borderStyle="solid"
              borderRadius={3}
              display="flex"
              gap="s1"
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
                  marginBottom="spx"
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
            width="s0"
            __flex={1}
            minWidth="s7"
            display={hasItemsToSelect ? "block" : "none"}
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
          display={isOpen && hasItemsToSelect ? "block" : "none"}
          className={listWrapperRecipe({ size })}
        >
          <List as="ul" className={listStyle} {...getMenuProps()}>
            {isOpen &&
              itemsToSelect?.map((item, index) => (
                <List.Item
                  key={`to-select-${id}-${item}-${index}`}
                  className={listItemStyle}
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
