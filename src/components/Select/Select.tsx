import { Root as Portal } from "@radix-ui/react-portal";
import {
  ForwardedRef,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
  useMemo,
} from "react";

import { useFloating } from "~/hooks/useFloating";
import { isString } from "~/utils";
import {
  Box,
  List,
  PropsWithBox,
  Text,
  TextProps,
  convertSizeToScale,
} from "..";
import { HelperText, InputVariants } from "../BaseInput";
import {
  NoOptions,
  Option,
  SingleChangeHandler,
  getListTextSize,
  hasNoOptions,
  listItemStyle,
  listStyle,
  listWrapperRecipe,
} from "../BaseSelect";
import { getListDisplayMode } from "../BaseSelect/helpers";

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
    startAdornment?: (inputValue: V | null) => ReactNode;
    endAdornment?: (inputValue: V | null) => ReactNode;
    children?: ReactNode;
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
    startAdornment,
    endAdornment,
    children,
    ...props
  }: SelectProps<T, V>,
  ref: ForwardedRef<HTMLElement>
) => {
  const isValuePassedAsString = isString(value);
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
    value: isValuePassedAsString
      ? options.find((item) => item.value === value)
      : value,
    isValuePassedAsString,
    options,
    onChange,
    onFocus,
    onBlur,
  });

  const { refs, floatingStyles } = useFloating();

  const labelColor = useMemo((): TextProps["color"] => {
    if (error) {
      return "critical1";
    }

    if (disabled) {
      return "defaultDisabled";
    }

    return "default1";
  }, [disabled, error]);

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
        <Box
          height={getBoxHeight(size)}
          {...props}
          ref={ref}
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
          display="flex"
        >
          {startAdornment && typed && <Box>{startAdornment(value)}</Box>}
          <Text
            size={convertSizeToScale(size)}
            color={labelColor}
            title={selectedItem?.label}
          >
            {selectedItem?.label}
          </Text>
          {endAdornment && typed && <Box>{endAdornment(value)}</Box>}
        </Box>
      </SelectWrapper>
      <Portal asChild ref={refs.setFloating} style={floatingStyles}>
        <Box
          position="relative"
          display={getListDisplayMode({
            isOpen: isOpen,
            disabled,
            hasItemsToSelect,
            showEmptyState: hasNoOptions(children),
          })}
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

const SelectRoot = forwardRef(SelectInner) as <
  T extends Option,
  V extends Option | string,
>(
  props: SelectProps<T, V> & { ref?: React.ForwardedRef<HTMLElement> }
) => ReturnType<typeof SelectInner>;

export const Select = Object.assign(SelectRoot, {
  NoOptions,
});
