import CircularProgress from "@material-ui/core/CircularProgress";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper, { PopperPlacementType } from "@material-ui/core/Popper";
import TextField, { StandardTextFieldProps } from "@material-ui/core/TextField";
import clsx from "clsx";
import { UseComboboxGetItemPropsOptions } from "downshift";
import React from "react";

import { SyntheticChangeEvent } from "../../types/utils";
import { ChipRemovable } from "../Chip";
import { Choice } from "../Filter";
import { IconButton } from "../IconButton";
import { PlusIcon } from "../icons";
import {
  isScrolledToBottom,
  useElementScroll,
} from "../tools/useElementScroll";
import { mergeRefs } from "../utils/mergeRefs";
import useStyles from "./styles";
import useMultipleValueAutocomplete from "./useMultipleValueAutocomplete";

export interface MultipleValueAutocompleteProps
  extends Omit<StandardTextFieldProps, "onChange"> {
  children: (data: {
    getItemProps: (opts: UseComboboxGetItemPropsOptions<Choice>) => any;
    highlightedIndex: number;
    inputValue: string;
    choices: Choice[];
  }) => React.ReactNode | React.ReactNodeArray;
  className?: string;
  enableReinitialize?: boolean;
  styles?: React.CSSProperties;
  choices: Choice[];
  label?: string;
  loading?: boolean;
  popperPlacement?: PopperPlacementType;
  initialValue?: Choice[];
  onChange?: (event: SyntheticChangeEvent<string[]>) => void;
  onInputChange?: (value: string) => void;
  onScrollToBottom?: () => void;
}

export const MultipleValueAutocomplete: React.FC<
  MultipleValueAutocompleteProps
> = ({
  choices,
  children,
  enableReinitialize,
  name,
  InputProps,
  initialValue = [],
  loading,
  popperPlacement = "bottom-start",
  onChange,
  onInputChange,
  onScrollToBottom,
  ...rest
}) => {
  const classes = useStyles();
  const {
    anchor,
    comboboxProps,
    filteredChoices,
    getItemProps,
    getSelectedItemProps,
    getToggleButtonProps,
    highlightedIndex,
    inputProps,
    inputRef,
    inputValue,
    inputWidth,
    isOpen,
    labelProps,
    menuProps,
    ref,
    removeSelectedItem,
    selectedItems,
  } = useMultipleValueAutocomplete({
    choices,
    enableReinitialize,
    initialValue,
    name,
    onChange,
    onInputChange,
  });
  const { anchor: dropdownRef, position, setAnchor } = useElementScroll();

  React.useEffect(() => {
    if (
      isOpen &&
      onScrollToBottom &&
      dropdownRef &&
      isScrolledToBottom(dropdownRef, position!, 5)
    ) {
      onScrollToBottom();
    }
  }, [position?.y, dropdownRef]);

  return (
    <>
      <TextField
        {...rest}
        {...comboboxProps}
        name={name}
        InputLabelProps={{
          shrink: isOpen || selectedItems.length || inputValue.length,
          ...labelProps,
        }}
        ref={ref}
        InputProps={{
          ...InputProps,
          ...inputProps,
          classes: {
            ...(InputProps?.classes ?? {}),
            root: clsx(classes.inputContainer, InputProps?.classes?.root, {
              [classes.inputContainerWithChips]: selectedItems.length > 0,
            }),
            input: clsx(classes.input, InputProps?.classes?.input),
          },
          startAdornment: selectedItems.map((item, index) => (
            <ChipRemovable
              key={`selected-item-${index}`}
              {...getSelectedItemProps({ selectedItem: item, index })}
              onRemove={() => removeSelectedItem(item)}
            >
              {item.label}
            </ChipRemovable>
          )),
          endAdornment: (
            <>
              {loading && (
                <div className={classes.loader}>
                  <CircularProgress size={24} />
                </div>
              )}
              <IconButton
                {...getToggleButtonProps()}
                aria-label="toggle menu"
                className={classes.icon}
                hoverOutline={false}
                type="button"
                variant="secondary"
              >
                <PlusIcon />
              </IconButton>
            </>
          ),
        }}
        inputProps={{ ref: inputRef, style: { width: inputWidth } }}
      />
      <Popper
        className={clsx(classes.popper, menuProps.className)}
        open={isOpen}
        anchorEl={anchor.current}
        transition
        placement={popperPlacement}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "left top" : "left bottom",
            }}
          >
            <Paper
              className={classes.dropdown}
              elevation={8}
              style={{ width: anchor.current?.clientWidth }}
              {...menuProps}
              ref={mergeRefs(setAnchor, menuProps.ref)}
            >
              {children({
                choices: filteredChoices,
                highlightedIndex,
                getItemProps,
                inputValue,
              })}
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};
