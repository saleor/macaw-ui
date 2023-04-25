import { forwardRef, InputHTMLAttributes, ReactNode } from "react";

import { classNames } from "~/utils";

import {
  Option,
  ChangeHandler,
  useMultiselectEvents,
} from "./useMultiselectEvents";
import { MultiselectWrapper } from "./MultiselectWrapper";
import { List, Text, Box, PropsWithBox } from "..";
import { helperTextRecipe, inputRecipe, InputVariants } from "../BaseInput";
import { list, listItem, listWrapperRecipe } from "./Multiselect.css";

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
    value?: string;
  }
> &
  InputVariants;

export const Multiselect = forwardRef<HTMLInputElement, MultiselectProps>(
  (
    {
      size,
      disabled = false,
      className,
      value,
      label,
      id,
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
      getInputProps,
      highlightedIndex,
      getItemProps,
      items,
      selectedItems,
      getDropdownProps,
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
        >
          {selectedItems.map((item, idx) => (
            <Box as="span" key={`${item}-${idx}`}>
              {item.label}
            </Box>
          ))}
          <Box
            id={id}
            as="input"
            className={classNames(inputRecipe({ size, error }))}
            disabled={disabled}
            placeholder="+ Add item"
            {...getInputProps(
              getDropdownProps({ preventKeyAction: isOpen, id, ref })
            )}
          />
        </MultiselectWrapper>

        <Box
          position="relative"
          display={isOpen ? "block" : "none"}
          className={listWrapperRecipe({ size })}
        >
          <List as="ul" className={list} {...getMenuProps()}>
            {isOpen &&
              items?.map((item, index) => (
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

Multiselect.displayName = "Multiselect";
