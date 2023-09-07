import { Root as Portal } from "@radix-ui/react-portal";
import {
  ForwardedRef,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
} from "react";

import { Box, List, PropsWithBox, Text } from "~/components";
import { HelperText, InputVariants, inputRecipe } from "~/components/BaseInput";
import {
  Option,
  SingleChangeHandler,
  getListTextSize,
  listItemStyle,
  listStyle,
  listWrapperRecipe,
} from "~/components/BaseSelect";
import { classNames, isString } from "~/utils";

import { useFloating } from "~/hooks/useFloating";
import { ComboboxWrapper } from "../Common";
import { useCombobox } from "../Common/useCombobox";

export type ComboboxProps<T, V> = PropsWithBox<
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
  > & {
    label?: ReactNode;
    error?: boolean;
    startAdornment?: (inputValue: V | null) => ReactNode;
    endAdornment?: (inputValue: V | null) => ReactNode;
    helperText?: ReactNode;
    options: T[];
    onChange?: SingleChangeHandler<V | null>;
    value: V | null;
  }
> &
  InputVariants;

const ComboboxInner = <T extends Option, V extends Option | string>(
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
    onFocus,
    onBlur,
    startAdornment,
    endAdornment,
    ...props
  }: ComboboxProps<T, V>,
  ref: ForwardedRef<HTMLInputElement>
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
    itemsToSelect,
    hasItemsToSelect,
  } = useCombobox({
    selectedItem: isString(value)
      ? options.find((option) => option.value === value)
      : value,
    options,
    onChange,
    onFocus,
    onBlur,
  });

  const { refs, floatingStyles } = useFloating();

  return (
    <Box display="flex" flexDirection="column">
      <ComboboxWrapper
        id={id}
        ref={refs.setReference}
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
        <Box display="flex" alignItems="center">
          {startAdornment && typed && <Box>{startAdornment(value)}</Box>}

          <Box
            id={id}
            as="input"
            type="text"
            className={classNames(inputRecipe({ size, error }))}
            disabled={disabled}
            {...props}
            {...getInputProps({
              id,
              ref,
            })}
          />

          {endAdornment && typed && <Box>{endAdornment(value)}</Box>}
        </Box>
      </ComboboxWrapper>

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
              itemsToSelect?.map((item, index) => (
                <List.Item
                  data-test-id="select-option"
                  key={`${id}-${item.value}-${index}`}
                  className={listItemStyle}
                  {...getItemProps({
                    item,
                    index,
                  })}
                  active={highlightedIndex === index}
                >
                  {item?.startAdornment}
                  <Text size={getListTextSize(size)}>{item.label}</Text>
                  {item?.endAdornment}
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

export const Combobox = forwardRef(ComboboxInner) as <
  T extends Option,
  V extends Option | string,
>(
  props: ComboboxProps<T, V> & { ref?: React.ForwardedRef<HTMLInputElement> }
) => ReturnType<typeof ComboboxInner>;
