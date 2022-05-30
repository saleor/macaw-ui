import ButtonBase, { ButtonBaseTypeMap } from "@material-ui/core/ButtonBase";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import clsx from "clsx";
import React from "react";

import { useTheme } from "../theme";
import useStyles from "./styles";

type BaseButtonProps<M = unknown> = M extends Object
  ? ButtonBaseTypeMap<M & { component: React.ElementType }>["props"]
  : ButtonBaseTypeMap<{ href?: string }>["props"];

export interface PaginationActionsProps<BProps = unknown> {
  className?: string;
  disabled?: boolean;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  nextIconButtonProps?: BaseButtonProps<BProps>;
  prevIconButtonProps?: BaseButtonProps<BProps>;
  onNextPage?: () => void;
  onPreviousPage?: () => void;
}

export const PaginationActions = <BProps,>({
  className,
  disabled,
  hasNextPage,
  hasPreviousPage,
  nextIconButtonProps,
  prevIconButtonProps,
  onNextPage = () => {},
  onPreviousPage = () => {},
  ...other
}: PaginationActionsProps<BProps>) => {
  const classes = useStyles();

  const { direction, themeType } = useTheme();

  const isDark = themeType === "dark";
  const previousDisabled = !hasPreviousPage || disabled;
  const nextDisabled = !hasNextPage || disabled;

  return (
    <div className={clsx(classes.actions, className)} {...other}>
      <ButtonBase
        className={clsx(classes.actionsButton, {
          [classes.dark]: isDark,
          [classes.actionsButtonDisabled]: previousDisabled,
        })}
        disableRipple
        onClick={onPreviousPage}
        disabled={previousDisabled}
        data-test="button-pagination-back"
        aria-label="previous page"
        {...prevIconButtonProps}
      >
        {direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
      </ButtonBase>

      <ButtonBase
        className={clsx(classes.actionsButton, {
          [classes.dark]: isDark,
          [classes.actionsButtonDisabled]: nextDisabled,
        })}
        disableRipple
        onClick={onNextPage}
        disabled={nextDisabled}
        data-test="button-pagination-next"
        aria-label="next page"
        {...nextIconButtonProps}
      >
        {direction === "rtl" ? <ChevronLeft /> : <ChevronRight />}
      </ButtonBase>
    </div>
  );
};

PaginationActions.displayName = "PaginationActions";
