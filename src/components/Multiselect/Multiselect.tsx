import { forwardRef, InputHTMLAttributes, ReactNode, useRef } from "react";
import * as Portal from "@radix-ui/react-portal";

import {
  Option,
  ChangeHandler,
  useMultiselectEvents,
  RenderEndAdornmentType,
} from "./useMultiselectEvents";
import { MultiselectWrapper } from "./MultiselectWrapper";
import { listItemStyle, listStyle, listWrapperRecipe } from "../BaseSelect";
import { List, Text, Box, PropsWithBox } from "..";
import { helperTextRecipe, InputVariants } from "../BaseInput";

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

    const containerRef = useRef<HTMLDivElement>(null);

    return (
      <Box
        display="flex"
        flexDirection="column"
        gap={3}
        height="100%"
        ref={containerRef}
      >
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
            width={0}
            __flex={1}
            minWidth={10}
            display={hasItemsToSelect ? "block" : "none"}
            {...getInputProps({
              id,
              ref,
              value: inputValue,
            })}
            {...props}
          />
        </MultiselectWrapper>

        <Portal.Root asChild>
          <Box
            position="absolute"
            __top={(containerRef.current?.offsetTop ?? 0) + 63}
            __left={containerRef.current?.offsetLeft ?? 0}
            __width={containerRef.current?.clientWidth ?? 0}
            __height={(containerRef.current?.clientHeight ?? 0) - 63}
            overflowX="hidden"
            overflowY="auto"
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
        </Portal.Root>

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
