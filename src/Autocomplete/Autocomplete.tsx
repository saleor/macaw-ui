import CircularProgress from "@material-ui/core/CircularProgress";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper, { PopperPlacementType } from "@material-ui/core/Popper";
import TextField, { StandardTextFieldProps } from "@material-ui/core/TextField";
import clsx from "clsx";
import { useCombobox, UseComboboxGetItemPropsOptions } from "downshift";
import React from "react";

import { SyntheticChangeEvent } from "../../types/utils";
import { Choice } from "../Filter";
import { ChevronIcon } from "../icons";
import { isScrolledToBottom, useElementScroll } from "../tools";
import { mergeRefs } from "../utils/mergeRefs";
import useStyles from "./styles";

export interface AutocompleteProps extends StandardTextFieldProps {
  children: (data: {
    getItemProps: (opts: UseComboboxGetItemPropsOptions<Choice>) => any;
    highlightedIndex: number;
    inputValue: string;
  }) => React.ReactNode | React.ReactNodeArray;
  className?: string;
  styles?: React.CSSProperties;
  choices: Choice[];
  label?: string;
  loading?: boolean;
  popperPlacement?: PopperPlacementType;
  onChange?: (event: SyntheticChangeEvent) => void;
  onInputChange?: (value: string) => void;
  onScrollToBottom?: () => void;
}

export const Autocomplete: React.FC<AutocompleteProps> = ({
  choices,
  children,
  loading,
  name,
  InputProps,
  popperPlacement = "bottom-start",
  onChange,
  onInputChange,
  onScrollToBottom,
  ...rest
}) => {
  const classes = useStyles();
  const anchor = React.useRef<HTMLDivElement>();
  const input = React.useRef<HTMLInputElement>();

  const {
    closeMenu,
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    openMenu,
    inputValue,
    setInputValue,
  } = useCombobox({
    circularNavigation: false,
    defaultHighlightedIndex: 0,
    items: choices,
    onInputValueChange: ({ inputValue }) => {
      if (onInputChange) {
        onInputChange(inputValue ?? "");
      }
    },
    onSelectedItemChange: ({ selectedItem }) => {
      closeMenu();
      if (onChange) {
        onChange({
          target: {
            name: name ?? "",
            value: selectedItem?.value ?? "",
          },
        });
      }
    },
    itemToString: (choice) => choice?.label ?? "",
    onIsOpenChange: ({ selectedItem, inputValue, isOpen }) => {
      if (!isOpen && selectedItem && selectedItem?.label !== inputValue) {
        setInputValue(selectedItem!.label);
      }
    },
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

  const labelProps = getLabelProps();
  const { ref: comboboxDownshiftRef, ...comboboxProps } = getComboboxProps();
  const { ref: downshiftRef, ...inputProps } = getInputProps({
    onFocus: () => {
      if (!isOpen) {
        input.current?.select();
        openMenu();
      }
    },
  });
  const menuProps = getMenuProps({}, { suppressRefError: true });

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
        InputLabelProps={labelProps}
        ref={mergeRefs(comboboxDownshiftRef, anchor)}
        InputProps={{
          ...InputProps,
          ...inputProps,
          endAdornment: (
            <>
              {loading && (
                <div className={classes.loader}>
                  <CircularProgress size={24} />
                </div>
              )}
              <ChevronIcon
                {...getToggleButtonProps()}
                type="button"
                aria-label="toggle menu"
              />
            </>
          ),
        }}
        inputProps={{ ref: mergeRefs(downshiftRef, input) }}
      />
      <Popper
        className={clsx(classes.popper, menuProps.className)}
        open={isOpen}
        anchorEl={input.current}
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
