import ButtonBase from "@material-ui/core/ButtonBase";
import { CheckboxProps as MuiCheckboxProps } from "@material-ui/core/Checkbox";
import { Theme } from "@material-ui/core/styles";
import makeStyles from "@material-ui/styles/makeStyles";
import classNames from "classnames";
import React from "react";

import { stopPropagation } from "../utils/events";

export type CheckboxProps = Omit<
  MuiCheckboxProps,
  | "checkedIcon"
  | "color"
  | "icon"
  | "indeterminateIcon"
  | "classes"
  | "onChange"
> & {
  onChange?: (event: React.ChangeEvent<any>) => void;
};

const useStyles = makeStyles((theme: Theme) => ({
  box: {
    "&$checked": {
      "&:before": {
        background: theme.palette.primary.main
      },
      borderColor: theme.palette.primary.main
    },
    "&$disabled": {
      borderColor: theme.palette.grey[200]
    },
    "&$indeterminate": {
      "&:before": {
        background: theme.palette.primary.main,
        height: 2,
        top: 5
      },
      borderColor: theme.palette.primary.main
    },
    "&:before": {
      background: "rgba(0, 0, 0, 0)",
      content: '""',
      height: 8,
      left: 2,
      position: "absolute",
      top: 2,
      transition: theme.transitions.duration.short + "ms",
      width: 8
    },
    WebkitAppearance: "none",
    border: `1px solid ${theme.palette.grey[500]}`,
    boxSizing: "border-box",
    cursor: "pointer",
    height: 14,
    outline: "0",
    position: "relative",
    userSelect: "none",
    width: 14
  },
  checked: {},
  disabled: {},
  indeterminate: {},
  root: {
    alignItems: "center",
    borderRadius: "100% !important",
    cursor: "pointer",
    display: "flex",
    height: 48,
    justifyContent: "center",
    width: 48
  }
}));
const Checkbox: React.FC<CheckboxProps> = props => {
  const {
    checked,
    className,
    disabled,
    indeterminate,
    onChange,
    onClick,
    value,
    name,
    ...rest
  } = props;
  const classes = useStyles(props);
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <ButtonBase
      {...rest}
      centerRipple
      className={classNames(classes.root, className)}
      disabled={disabled}
      onClick={stopPropagation(() => inputRef.current.click())}
    >
      <input
        className={classNames(classes.box, {
          [classes.checked]: checked,
          [classes.disabled]: disabled,
          [classes.indeterminate]: indeterminate
        })}
        disabled={disabled}
        type="checkbox"
        name={name}
        value={checked !== undefined && checked.toString()}
        ref={inputRef}
        onChange={onChange}
      />
    </ButtonBase>
  );
};
Checkbox.displayName = "Checkbox";
export default Checkbox;
