import { Root as Portal } from "@radix-ui/react-portal";
import {
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
} from "react";

import { Box, List, PropsWithBox, Text } from "~/components";
import { HelperText, InputVariants } from "~/components/BaseInput";
import {
  getListTextSize,
  hasNoOptions,
  listItemStyle,
  listStyle,
  listWrapperRecipe,
  MultiChangeHandler,
  NoOptions,
  Option,
} from "~/components/BaseSelect";

import { useFloating } from "~/hooks/useFloating";
import {
  multiselectInputRecipe,
  MultiselectWrapper,
  RenderEndAdornmentType,
  useMultiselect,
} from "../Common";

export type MultiselectProps<T, V> = PropsWithBox<
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
    onChange?: MultiChangeHandler<V>;
    value: V[];
    renderEndAdornment?: RenderEndAdornmentType;
    children?: ReactNode;
    locale?: {
      inputText?: string;
    };
  }
> &
  InputVariants;

const MultiselectInner = <T extends Option, V extends Option | string>(
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
    onFocus,
    onBlur,
    children,
    locale = {
      inputText: "Add item",
    },
    ...props
  }: MultiselectProps<T, V>,
  ref: ForwardedRef<HTMLInputElement>
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
    showInput,
  } = useMultiselect({
    selectedValues: value,
    showEmptyState: hasNoOptions(children),
    options,
    onChange,
    onFocus,
    onBlur,
  });

  const { refs, floatingStyles } = useFloating();

  return (
    <Box display="flex" flexDirection="column">
      <MultiselectWrapper
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
        renderEndAdornment={renderEndAdornment}
        hasItemsToSelect={hasItemsToSelect}
      >
        {selectedItems.map((item, idx) => (
          <Box
            key={`selected-option-${item.value}-${idx}`}
            data-test-id={`selected-option-${item.value}-${idx}`}
            paddingX={1.5}
            paddingY="px"
            backgroundColor="default1"
            borderColor="default1"
            borderWidth={1}
            borderStyle="solid"
            borderRadius={3}
            display="flex"
            gap={1}
            alignItems="center"
            {...getSelectedItemProps({
              selectedItem: item,
              index: idx,
            })}
          >
            <Text variant="caption" size="small">
              {item.label}
            </Text>
            {!disabled && (
              <Text
                cursor="pointer"
                variant="caption"
                size="small"
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
          placeholder={locale.inputText}
          disabled={disabled}
          width={0}
          __flex={1}
          minWidth={7}
          visibility={showInput ? "visible" : "hidden"}
          {...getInputProps({
            id,
            ref,
            value: inputValue,
          })}
          {...props}
        />
      </MultiselectWrapper>

      <Portal asChild ref={refs.setFloating} style={floatingStyles}>
        <Box
          position="relative"
          display={isOpen ? "block" : "none"}
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
                  key={`to-select-${id}-${item.value}-${index}`}
                  className={listItemStyle}
                  active={highlightedIndex === index}
                  {...getItemProps({
                    item,
                    index,
                  })}
                >
                  <Text size={getListTextSize(size)}>{item.label}</Text>
                </List.Item>
              ))}

            {isOpen && !hasItemsToSelect && children}
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

export const MultiselectRoot = forwardRef(MultiselectInner) as <
  T extends Option,
  V extends Option | string,
>(
  props: MultiselectProps<T, V> & { ref?: React.ForwardedRef<HTMLInputElement> }
) => ReturnType<typeof MultiselectInner>;

export const Multiselect = Object.assign(MultiselectRoot, {
  NoOptions,
});
