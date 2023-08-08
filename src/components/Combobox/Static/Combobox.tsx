import { Root as Portal } from "@radix-ui/react-portal";
import {
  ForwardedRef,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
  useRef,
} from "react";

import { Box, List, PropsWithBox, Text } from "~/components";
import { HelperText, InputVariants, inputRecipe } from "~/components/BaseInput";
import {
  Option,
  SingleChangeHandler,
  listItemStyle,
  listStyle,
  listWrapperRecipe,
} from "~/components/BaseSelect";
import { classNames, isString } from "~/utils";

import { ComboboxWrapper } from "../Common";
import { useStaticCombobox } from "./useStaticCombobox";

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
    helperText?: ReactNode;
    options: T[];
    onChange?: SingleChangeHandler<V>;
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
  } = useStaticCombobox({
    selectedItem: isString(value)
      ? options.find((option) => option.value === value)
      : value,
    options,
    onChange,
    onFocus,
    onBlur,
  });

  const containerRef = useRef<HTMLLabelElement>(null);

  return (
    <Box display="flex" flexDirection="column">
      <ComboboxWrapper
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
      </ComboboxWrapper>
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
              itemsToSelect?.map((item, index) => (
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

export const Combobox = forwardRef(ComboboxInner) as <
  T extends Option,
  V extends Option | string,
>(
  props: ComboboxProps<T, V> & { ref?: React.ForwardedRef<HTMLInputElement> }
) => ReturnType<typeof ComboboxInner>;
